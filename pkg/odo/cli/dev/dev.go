package dev

import (
	"fmt"
	"io"
	"os"
	"path/filepath"

	dfutil "github.com/devfile/library/pkg/util"
	"github.com/redhat-developer/odo/pkg/devfile/adapters/kubernetes"
	"github.com/redhat-developer/odo/pkg/envinfo"
	"github.com/redhat-developer/odo/pkg/odo/cli/component"
	"github.com/redhat-developer/odo/pkg/odo/cmdline"
	"github.com/redhat-developer/odo/pkg/odo/genericclioptions"
	"github.com/redhat-developer/odo/pkg/odo/genericclioptions/clientset"
	odoutil "github.com/redhat-developer/odo/pkg/odo/util"
	"github.com/spf13/cobra"
	"k8s.io/kubectl/pkg/util/templates"
)

// RecommendedCommandName is the recommended command name
const RecommendedCommandName = "dev"

type DevOptions struct {
	// Context
	*genericclioptions.Context

	// Clients
	clientset *clientset.Clientset

	// Variables
	ignorePaths []string
	out         io.Writer
}

func NewDevOptions() *DevOptions {
	return &DevOptions{
		out: os.Stdout,
	}
}

var devExample = templates.Examples(`
	# Deploy component to the development cluster
	%[1]s
`)

func (o *DevOptions) SetClientset(clientset *clientset.Clientset) {
	o.clientset = clientset
}

func (o *DevOptions) Complete(cmdline cmdline.Cmdline, args []string) error {
	var err error

	o.Context, err = genericclioptions.New(genericclioptions.NewCreateParameters(cmdline).NeedDevfile(""))
	if err != nil {
		return fmt.Errorf("unable to create context: %v", err)
	}
	fmt.Fprintf(o.out, "Using %s from the current directory.\n", o.Context.GetDevfilePath())

	envFileInfo, err := envinfo.NewEnvSpecificInfo("")
	if err != nil {
		return fmt.Errorf("unable to retrieve configuration information: %v", err)
	}

	if !envFileInfo.Exists() {
		// if env.yaml doesn't exist, get component name from the devfile.yaml
		var cmpName string
		cmpName, err = component.GatherName(o.EnvSpecificInfo.GetDevfileObj(), o.GetDevfilePath())
		if err != nil {
			return fmt.Errorf("unable to retrieve component name: %w", err)
		}
		// create env.yaml file with component, project/namespace and application info
		// TODO - store only namespace into env.yaml, we don't want to track component or application name via env.yaml
		err = envFileInfo.SetComponentSettings(envinfo.ComponentSettings{Name: cmpName, Project: o.GetProject(), AppName: "app"})
		if err != nil {
			return fmt.Errorf("failed to write new env.yaml file: %w", err)
		}
	} else if envFileInfo.GetComponentSettings().Project != o.GetProject() {
		// set namespace if the evn.yaml exists; that's the only piece we care about in env.yaml
		err = envFileInfo.SetConfiguration("project", o.GetProject())
		if err != nil {
			return fmt.Errorf("failed to update project in env.yaml file: %w", err)
		}
	}

	// 3 steps to evaluate the paths to be ignored when "watching" the pwd/cwd for changes
	// 1. create an empty string slice to which paths like .gitignore, .odo/odo-file-index.json, etc. will be added
	var ignores []string
	err = genericclioptions.ApplyIgnore(&ignores, "")
	if err != nil {
		return err
	}
	// 2. get absolute path of pwd/cwd
	sourcePath, err := dfutil.GetAbsPath("")
	if err != nil {
		return fmt.Errorf("unable to get source path: %w", err)
	}
	// 3. combine 1 & 2 to have absolute paths of all files to be ignored
	o.ignorePaths = dfutil.GetAbsGlobExps(sourcePath, ignores)

	return nil
}

func (o *DevOptions) Validate() error {
	var err error
	return err
}

func (o *DevOptions) Run() error {
	var err error
	var platformContext = kubernetes.KubernetesContext{
		Namespace: o.Context.GetProject(),
	}
	var path = filepath.Dir(o.Context.EnvSpecificInfo.GetDevfilePath())

	fmt.Fprintf(o.out, "Starting your application on cluster in developer mode\n")
	err = o.clientset.DevClient.Start(o.Context.EnvSpecificInfo.GetDevfileObj(), platformContext, o.ignorePaths, path, os.Stdout)
	return err
}

// NewCmdDev implements the odo dev command
func NewCmdDev(name, fullName string) *cobra.Command {
	o := NewDevOptions()
	devCmd := &cobra.Command{
		Use:     name,
		Short:   "Deploy component to development cluster",
		Long:    "Deploy the component to a development cluster. odo dev is a long running command that will automatically sync your source to the cluster",
		Example: fmt.Sprintf(devExample, fullName),
		Args:    cobra.MaximumNArgs(0),
		Run: func(cmd *cobra.Command, args []string) {
			genericclioptions.GenericRun(o, cmd, args)
		},
	}

	clientset.Add(devCmd, clientset.DEV)
	// Add a defined annotation in order to appear in the help menu
	devCmd.Annotations["command"] = "utility"
	devCmd.SetUsageTemplate(odoutil.CmdUsageTemplate)

	return devCmd
}