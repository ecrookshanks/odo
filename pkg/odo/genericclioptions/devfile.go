package genericclioptions

import (
	"fmt"

	"github.com/devfile/library/v2/pkg/devfile/parser"
	dfutil "github.com/devfile/library/v2/pkg/util"
	"github.com/spf13/cobra"

	"github.com/redhat-developer/odo/pkg/component"
	"github.com/redhat-developer/odo/pkg/devfile"
	"github.com/redhat-developer/odo/pkg/devfile/location"
	"github.com/redhat-developer/odo/pkg/devfile/validate"
	"github.com/redhat-developer/odo/pkg/testingutil/filesystem"
	odoutil "github.com/redhat-developer/odo/pkg/util"
)

// MarkDevfileNotNeeded annotates the provided command such that it does not require a valid Devfile
// to be present in the current directory.
// A corollary to this is that commands annotated as such will not have any Devfile parsed in their root context,
// even if there is a local "devfile.yaml" in the current directory.
func MarkDevfileNotNeeded(cmd *cobra.Command) {
	if cmd.Annotations == nil {
		cmd.Annotations = map[string]string{}
	}
	cmd.Annotations["devfile-not-needed"] = "true"
}

func getDevfileInfo(cmd *cobra.Command, fsys filesystem.Filesystem, workingDir string, variables map[string]string, imageRegistry string) (
	devfilePath string,
	devfileObj *parser.DevfileObj,
	componentName string,
	err error,
) {
	devfilePath = location.DevfileLocation(fsys, workingDir)
	isDevfile := odoutil.CheckPathExists(fsys, devfilePath)
	requiresValidDevfile := cmd.Annotations["devfile-not-needed"] != "true"
	if requiresValidDevfile && isDevfile {
		devfilePath, err = dfutil.GetAbsPath(devfilePath)
		if err != nil {
			return "", nil, "", err
		}
		// Parse devfile and validate
		var devObj parser.DevfileObj
		devObj, err = devfile.ParseAndValidateFromFileWithVariables(devfilePath, variables, imageRegistry, true)
		if err != nil {
			return "", nil, "", fmt.Errorf("failed to parse the devfile %s: %w", devfilePath, err)
		}
		devfileObj = &devObj
		err = validate.ValidateDevfileData(devfileObj.Data)
		if err != nil {
			return "", nil, "", err
		}

		componentName, err = component.GatherName(workingDir, devfileObj)
		if err != nil {
			return "", nil, "", err
		}
	}

	return devfilePath, devfileObj, componentName, nil
}
