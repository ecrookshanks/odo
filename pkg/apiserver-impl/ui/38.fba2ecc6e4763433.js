"use strict";(self.webpackChunkdevfile_builder=self.webpackChunkdevfile_builder||[]).push([[38],{9038:(Jt,ct,W)=>{W.d(ct,{a:()=>ft,b:()=>Xt,c:()=>C,d:()=>zt,e:()=>Nt,f:()=>Gt,g:()=>et,h:()=>Vt,i:()=>P,j:()=>Kt,k:()=>st,l:()=>k,m:()=>it,p:()=>jt,s:()=>At,u:()=>w});var v=W(5861),f=W(9037),S=W(8586),Q=W(9627);const ht={extension:(e,r,t)=>{f.l.trace("Making markers for ",t),e.append("defs").append("marker").attr("id",t+"_"+r+"-extensionStart").attr("class","marker extension "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id",t+"_"+r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(e,r,t)=>{e.append("defs").append("marker").attr("id",t+"_"+r+"-compositionStart").attr("class","marker composition "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",t+"_"+r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(e,r,t)=>{e.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(e,r,t)=>{e.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(e,r,t)=>{e.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),e.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopEnd").attr("class","marker lollipop "+r).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(e,r,t)=>{e.append("marker").attr("id",t+"_"+r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",t+"_"+r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(e,r,t)=>{e.append("marker").attr("id",t+"_"+r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",t+"_"+r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(e,r,t)=>{e.append("marker").attr("id",t+"_"+r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),e.append("marker").attr("id",t+"_"+r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(e,r,t)=>{e.append("defs").append("marker").attr("id",t+"_"+r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},ft=(e,r,t,n)=>{r.forEach(l=>{ht[l](e,t,n)})},C=(e,r,t,n)=>{let l=e||"";if("object"==typeof l&&(l=l[0]),(0,f.m)((0,f.c)().flowchart.htmlLabels))return l=l.replace(/\\n|\n/g,"<br />"),f.l.debug("vertexText"+l),function yt(e){const r=(0,S.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),t=r.append("xhtml:div");return t.html('<span class="'+(e.isNode?"nodeLabel":"edgeLabel")+'" '+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+e.label+"</span>"),function pt(e,r){r&&e.attr("style",r)}(t,e.labelStyle),t.style("display","inline-block"),t.style("white-space","nowrap"),t.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}({isNode:n,label:(0,f.M)(l).replace(/fa[blrs]?:fa-[\w-]+/g,s=>`<i class='${s.replace(":"," ")}'></i>`),labelStyle:r.replace("fill:","color:")});{const i=document.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("style",r.replace("color:","fill:"));let a=[];a="string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[];for(const s of a){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),c.setAttribute("class",t?"title-row":"row"),c.textContent=s.trim(),i.appendChild(c)}return i}},k=function(){var e=(0,v.Z)(function*(r,t,n,l){let i;const a=t.useHtmlLabels||(0,f.m)((0,f.c)().flowchart.htmlLabels);i=n||"node default";const s=r.insert("g").attr("class",i).attr("id",t.domId||t.id),c=s.insert("g").attr("class","label").attr("style",t.labelStyle);let h;h=void 0===t.labelText?"":"string"==typeof t.labelText?t.labelText:t.labelText[0];const o=c.node();let p;p="markdown"===t.labelType?(0,Q.a)(c,(0,f.d)((0,f.M)(h),(0,f.c)()),{useHtmlLabels:a,width:t.width||(0,f.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):o.appendChild(C((0,f.d)((0,f.M)(h),(0,f.c)()),t.labelStyle,!1,l));let y=p.getBBox();const x=t.padding/2;if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const u=p.children[0],m=(0,S.Ys)(p),d=u.getElementsByTagName("img");if(d){const T=""===h.replace(/<img[^>]*>/g,"").trim();yield Promise.all([...d].map(g=>new Promise(B=>{function E(){if(g.style.display="flex",g.style.flexDirection="column",T){const D=(0,f.c)().fontSize?(0,f.c)().fontSize:window.getComputedStyle(document.body).fontSize,z=5,G=parseInt(D,10)*z+"px";g.style.minWidth=G,g.style.maxWidth=G}else g.style.width="100%";B(g)}setTimeout(()=>{g.complete&&E()}),g.addEventListener("error",E),g.addEventListener("load",E)})))}y=u.getBoundingClientRect(),m.attr("width",y.width),m.attr("height",y.height)}return c.attr("transform",a?"translate("+-y.width/2+", "+-y.height/2+")":"translate(0, "+-y.height/2+")"),t.centerLabel&&c.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:s,bbox:y,halfPadding:x,label:c}});return function(t,n,l,i){return e.apply(this,arguments)}}(),w=(e,r)=>{const t=r.node().getBBox();e.width=t.width,e.height=t.height};function R(e,r,t,n){return e.insert("polygon",":first-child").attr("points",n.map(function(l){return l.x+","+l.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-r/2+","+t/2+")")}function V(e,r,t,n){var l=e.x,i=e.y,a=l-n.x,s=i-n.y,c=Math.sqrt(r*r*s*s+t*t*a*a),h=Math.abs(r*t*a/c);n.x<l&&(h=-h);var o=Math.abs(r*t*s/c);return n.y<i&&(o=-o),{x:l+h,y:i+o}}function dt(e,r,t,n){var l,i,a,s,c,h,o,p,y,x,u,m,d;if(x=(l=r.y-e.y)*n.x+(a=e.x-r.x)*n.y+(c=r.x*e.y-e.x*r.y),!(0!==(y=l*t.x+a*t.y+c)&&0!==x&&J(y,x)||(i=n.y-t.y,s=t.x-n.x,h=n.x*t.y-t.x*n.y,o=i*e.x+s*e.y+h,p=i*r.x+s*r.y+h,0!==o&&0!==p&&J(o,p)||(u=l*s-i*a,0===u))))return m=Math.abs(u/2),{x:(d=a*h-s*c)<0?(d-m)/u:(d+m)/u,y:(d=i*c-l*h)<0?(d-m)/u:(d+m)/u}}function J(e,r){return e*r>0}const P=(e,r)=>{var c,h,t=e.x,n=e.y,l=r.x-t,i=r.y-n,a=e.width/2,s=e.height/2;return Math.abs(i)*a>Math.abs(l)*s?(i<0&&(s=-s),c=0===i?0:s*l/i,h=s):(l<0&&(a=-a),c=a,h=0===l?0:a*i/l),{x:t+c,y:n+h}},b={node:function ut(e,r){return e.intersect(r)},circle:function xt(e,r,t){return V(e,r,r,t)},ellipse:V,polygon:function gt(e,r,t){var n=e.x,l=e.y,i=[],a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof r.forEach?r.forEach(function(u){a=Math.min(a,u.x),s=Math.min(s,u.y)}):(a=Math.min(a,r.x),s=Math.min(s,r.y));for(var c=n-e.width/2-a,h=l-e.height/2-s,o=0;o<r.length;o++){var p=r[o],y=r[o<r.length-1?o+1:0],x=dt(e,t,{x:c+p.x,y:h+p.y},{x:c+y.x,y:h+y.y});x&&i.push(x)}return i.length?(i.length>1&&i.sort(function(u,m){var d=u.x-t.x,T=u.y-t.y,g=Math.sqrt(d*d+T*T),B=m.x-t.x,E=m.y-t.y,D=Math.sqrt(B*B+E*E);return g<D?-1:g===D?0:1}),i[0]):e},rect:P},bt=function(){var e=(0,v.Z)(function*(r,t){t.useHtmlLabels||(0,f.c)().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:l,bbox:i,halfPadding:a}=yield k(r,t,"node "+t.classes,!0);f.l.info("Classes = ",t.classes);const s=l.insert("rect",":first-child");return s.attr("rx",t.rx).attr("ry",t.ry).attr("x",-i.width/2-a).attr("y",-i.height/2-a).attr("width",i.width+t.padding).attr("height",i.height+t.padding),w(t,s),t.intersect=function(c){return b.rect(t,c)},l});return function(t,n){return e.apply(this,arguments)}}(),q=e=>e?" "+e:"",$=(e,r)=>`${r||"node default"}${q(e.classes)} ${q(e.class)}`,tt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),s=l.width+t.padding+(l.height+t.padding),c=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];f.l.info("Question main (Circle)");const h=R(n,s,s,c);return h.attr("style",t.style),w(t,h),t.intersect=function(o){return f.l.warn("Intersect called"),b.polygon(t,c,o)},n});return function(t,n){return e.apply(this,arguments)}}(),kt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),a=l.height+t.padding,s=a/4,c=l.width+2*s+t.padding,h=[{x:s,y:0},{x:c-s,y:0},{x:c,y:-a/2},{x:c-s,y:-a},{x:s,y:-a},{x:0,y:-a/2}],o=R(n,c,a,h);return o.attr("style",t.style),w(t,o),t.intersect=function(p){return b.polygon(t,h,p)},n});return function(t,n){return e.apply(this,arguments)}}(),_t=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,void 0,!0),a=l.height+2*t.padding,c=l.width+a/2*2+t.padding,h=((e,r,t)=>{const n=(e=>{const r=new Set;for(const t of e)switch(t){case"x":r.add("right"),r.add("left");break;case"y":r.add("up"),r.add("down");break;default:r.add(t)}return r})(e),i=r.height+2*t.padding,a=i/2,s=r.width+2*a+t.padding,c=t.padding/2;return n.has("right")&&n.has("left")&&n.has("up")&&n.has("down")?[{x:0,y:0},{x:a,y:0},{x:s/2,y:2*c},{x:s-a,y:0},{x:s,y:0},{x:s,y:-i/3},{x:s+2*c,y:-i/2},{x:s,y:-2*i/3},{x:s,y:-i},{x:s-a,y:-i},{x:s/2,y:-i-2*c},{x:a,y:-i},{x:0,y:-i},{x:0,y:-2*i/3},{x:-2*c,y:-i/2},{x:0,y:-i/3}]:n.has("right")&&n.has("left")&&n.has("up")?[{x:a,y:0},{x:s-a,y:0},{x:s,y:-i/2},{x:s-a,y:-i},{x:a,y:-i},{x:0,y:-i/2}]:n.has("right")&&n.has("left")&&n.has("down")?[{x:0,y:0},{x:a,y:-i},{x:s-a,y:-i},{x:s,y:0}]:n.has("right")&&n.has("up")&&n.has("down")?[{x:0,y:0},{x:s,y:-a},{x:s,y:-i+a},{x:0,y:-i}]:n.has("left")&&n.has("up")&&n.has("down")?[{x:s,y:0},{x:0,y:-a},{x:0,y:-i+a},{x:s,y:-i}]:n.has("right")&&n.has("left")?[{x:a,y:0},{x:a,y:-c},{x:s-a,y:-c},{x:s-a,y:0},{x:s,y:-i/2},{x:s-a,y:-i},{x:s-a,y:-i+c},{x:a,y:-i+c},{x:a,y:-i},{x:0,y:-i/2}]:n.has("up")&&n.has("down")?[{x:s/2,y:0},{x:0,y:-c},{x:a,y:-c},{x:a,y:-i+c},{x:0,y:-i+c},{x:s/2,y:-i},{x:s,y:-i+c},{x:s-a,y:-i+c},{x:s-a,y:-c},{x:s,y:-c}]:n.has("right")&&n.has("up")?[{x:0,y:0},{x:s,y:-a},{x:0,y:-i}]:n.has("right")&&n.has("down")?[{x:0,y:0},{x:s,y:0},{x:0,y:-i}]:n.has("left")&&n.has("up")?[{x:s,y:0},{x:0,y:-a},{x:s,y:-i}]:n.has("left")&&n.has("down")?[{x:s,y:0},{x:0,y:0},{x:s,y:-i}]:n.has("right")?[{x:a,y:-c},{x:a,y:-c},{x:s-a,y:-c},{x:s-a,y:0},{x:s,y:-i/2},{x:s-a,y:-i},{x:s-a,y:-i+c},{x:a,y:-i+c},{x:a,y:-i+c}]:n.has("left")?[{x:a,y:0},{x:a,y:-c},{x:s-a,y:-c},{x:s-a,y:-i+c},{x:a,y:-i+c},{x:a,y:-i},{x:0,y:-i/2}]:n.has("up")?[{x:a,y:-c},{x:a,y:-i+c},{x:0,y:-i+c},{x:s/2,y:-i},{x:s,y:-i+c},{x:s-a,y:-i+c},{x:s-a,y:-c}]:n.has("down")?[{x:s/2,y:0},{x:0,y:-c},{x:a,y:-c},{x:a,y:-i+c},{x:s-a,y:-i+c},{x:s-a,y:-c},{x:s,y:-c}]:[{x:0,y:0}]})(t.directions,l,t),o=R(n,c,a,h);return o.attr("style",t.style),w(t,o),t.intersect=function(p){return b.polygon(t,h,p)},n});return function(t,n){return e.apply(this,arguments)}}(),Lt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:-a/2,y:0},{x:i,y:0},{x:i,y:-a},{x:-a/2,y:-a},{x:0,y:-a/2}];return R(n,i,a,s).attr("style",t.style),t.width=i+a,t.height=a,t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),St=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:-2*a/6,y:0},{x:i-a/6,y:0},{x:i+2*a/6,y:-a},{x:a/6,y:-a}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),Mt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:2*a/6,y:0},{x:i+a/6,y:0},{x:i-2*a/6,y:-a},{x:-a/6,y:-a}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),Tt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:-2*a/6,y:0},{x:i+2*a/6,y:0},{x:i-a/6,y:-a},{x:a/6,y:-a}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),Et=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:a/6,y:0},{x:i-a/6,y:0},{x:i+2*a/6,y:-a},{x:-2*a/6,y:-a}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),Bt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:0,y:0},{x:i+a/2,y:0},{x:i,y:-a/2},{x:i+a/2,y:-a},{x:0,y:-a}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),Ct=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=i/2,s=a/(2.5+i/50),c=l.height+s+t.padding,h="M 0,"+s+" a "+a+","+s+" 0,0,0 "+i+" 0 a "+a+","+s+" 0,0,0 "+-i+" 0 l 0,"+c+" a "+a+","+s+" 0,0,0 "+i+" 0 l 0,"+-c,o=n.attr("label-offset-y",s).insert("path",":first-child").attr("style",t.style).attr("d",h).attr("transform","translate("+-i/2+","+-(c/2+s)+")");return w(t,o),t.intersect=function(p){const y=b.rect(t,p),x=y.x-t.x;if(0!=a&&(Math.abs(x)<t.width/2||Math.abs(x)==t.width/2&&Math.abs(y.y-t.y)>t.height/2-s)){let u=s*s*(1-x*x/(a*a));0!=u&&(u=Math.sqrt(u)),u=s-u,p.y-t.y>0&&(u=-u),y.y+=u}return y},n});return function(t,n){return e.apply(this,arguments)}}(),$t=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l,halfPadding:i}=yield k(r,t,"node "+t.classes+" "+t.class,!0),a=n.insert("rect",":first-child"),s=t.positioned?t.width:l.width+t.padding,c=t.positioned?t.height:l.height+t.padding,h=t.positioned?-s/2:-l.width/2-i,o=t.positioned?-c/2:-l.height/2-i;if(a.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",h).attr("y",o).attr("width",s).attr("height",c),t.props){const p=new Set(Object.keys(t.props));t.props.borders&&(K(a,t.props.borders,s,c),p.delete("borders")),p.forEach(y=>{f.l.warn(`Unknown node property ${y}`)})}return w(t,a),t.intersect=function(p){return b.rect(t,p)},n});return function(t,n){return e.apply(this,arguments)}}(),Yt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l,halfPadding:i}=yield k(r,t,"node "+t.classes,!0),a=n.insert("rect",":first-child"),s=t.positioned?t.width:l.width+t.padding,c=t.positioned?t.height:l.height+t.padding,h=t.positioned?-s/2:-l.width/2-i,o=t.positioned?-c/2:-l.height/2-i;if(a.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",h).attr("y",o).attr("width",s).attr("height",c),t.props){const p=new Set(Object.keys(t.props));t.props.borders&&(K(a,t.props.borders,s,c),p.delete("borders")),p.forEach(y=>{f.l.warn(`Unknown node property ${y}`)})}return w(t,a),t.intersect=function(p){return b.rect(t,p)},n});return function(t,n){return e.apply(this,arguments)}}(),Rt=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n}=yield k(r,t,"label",!0);f.l.trace("Classes = ",t.class);const l=n.insert("rect",":first-child");if(l.attr("width",0).attr("height",0),n.attr("class","label edgeLabel"),t.props){const s=new Set(Object.keys(t.props));t.props.borders&&(K(l,t.props.borders,0,0),s.delete("borders")),s.forEach(c=>{f.l.warn(`Unknown node property ${c}`)})}return w(t,l),t.intersect=function(s){return b.rect(t,s)},n});return function(t,n){return e.apply(this,arguments)}}();function K(e,r,t,n){const l=[],i=s=>{l.push(s,0)},a=s=>{l.push(0,s)};r.includes("t")?(f.l.debug("add top border"),i(t)):a(t),r.includes("r")?(f.l.debug("add right border"),i(n)):a(n),r.includes("b")?(f.l.debug("add bottom border"),i(t)):a(t),r.includes("l")?(f.l.debug("add left border"),i(n)):a(n),e.attr("stroke-dasharray",l.join(" "))}const It=function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.height+t.padding,a=l.width+i/4+t.padding,s=n.insert("rect",":first-child").attr("style",t.style).attr("rx",i/2).attr("ry",i/2).attr("x",-a/2).attr("y",-i/2).attr("width",a).attr("height",i);return w(t,s),t.intersect=function(c){return b.rect(t,c)},n});return function(t,n){return e.apply(this,arguments)}}(),rt=(e,r,t)=>{const n=e.insert("g").attr("class","node default").attr("id",r.domId||r.id);let l=70,i=10;"LR"===t&&(l=10,i=70);const a=n.append("rect").attr("x",-1*l/2).attr("y",-1*i/2).attr("width",l).attr("height",i).attr("class","fork-join");return w(r,a),r.height=r.height+r.padding/2,r.width=r.width+r.padding/2,r.intersect=function(s){return b.rect(r,s)},n},at={rhombus:tt,composite:Yt,question:tt,rect:$t,labelRect:Rt,rectWithTitle:(e,r)=>{let t;t=r.classes?"node "+r.classes:"node default";const n=e.insert("g").attr("class",t).attr("id",r.domId||r.id),l=n.insert("rect",":first-child"),i=n.insert("line"),a=n.insert("g").attr("class","label"),s=r.labelText.flat?r.labelText.flat():r.labelText;let c="";c="object"==typeof s?s[0]:s,f.l.info("Label text abc79",c,s,"object"==typeof s);const h=a.node().appendChild(C(c,r.labelStyle,!0,!0));let o={width:0,height:0};if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const m=h.children[0],d=(0,S.Ys)(h);o=m.getBoundingClientRect(),d.attr("width",o.width),d.attr("height",o.height)}f.l.info("Text 2",s);const p=s.slice(1,s.length);let y=h.getBBox();const x=a.node().appendChild(C(p.join?p.join("<br/>"):p,r.labelStyle,!0,!0));if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const m=x.children[0],d=(0,S.Ys)(x);o=m.getBoundingClientRect(),d.attr("width",o.width),d.attr("height",o.height)}const u=r.padding/2;return(0,S.Ys)(x).attr("transform","translate( "+(o.width>y.width?0:(y.width-o.width)/2)+", "+(y.height+u+5)+")"),(0,S.Ys)(h).attr("transform","translate( "+(o.width<y.width?0:-(y.width-o.width)/2)+", 0)"),o=a.node().getBBox(),a.attr("transform","translate("+-o.width/2+", "+(-o.height/2-u+3)+")"),l.attr("class","outer title-state").attr("x",-o.width/2-u).attr("y",-o.height/2-u).attr("width",o.width+r.padding).attr("height",o.height+r.padding),i.attr("class","divider").attr("x1",-o.width/2-u).attr("x2",o.width/2+u).attr("y1",-o.height/2-u+y.height+u).attr("y2",-o.height/2-u+y.height+u),w(r,l),r.intersect=function(m){return b.rect(r,m)},n},choice:(e,r)=>{const t=e.insert("g").attr("class","node default").attr("id",r.domId||r.id);return t.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(a){return a.x+","+a.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),r.width=28,r.height=28,r.intersect=function(a){return b.circle(r,14,a)},t},circle:function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l,halfPadding:i}=yield k(r,t,$(t,void 0),!0),a=n.insert("circle",":first-child");return a.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+i).attr("width",l.width+t.padding).attr("height",l.height+t.padding),f.l.info("Circle main"),w(t,a),t.intersect=function(s){return f.l.info("Circle intersect",t,l.width/2+i,s),b.circle(t,l.width/2+i,s)},n});return function(t,n){return e.apply(this,arguments)}}(),doublecircle:function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l,halfPadding:i}=yield k(r,t,$(t,void 0),!0),s=n.insert("g",":first-child"),c=s.insert("circle"),h=s.insert("circle");return s.attr("class",t.class),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+i+5).attr("width",l.width+t.padding+10).attr("height",l.height+t.padding+10),h.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+i).attr("width",l.width+t.padding).attr("height",l.height+t.padding),f.l.info("DoubleCircle main"),w(t,c),t.intersect=function(o){return f.l.info("DoubleCircle intersect",t,l.width/2+i+5,o),b.circle(t,l.width/2+i+5,o)},n});return function(t,n){return e.apply(this,arguments)}}(),stadium:It,hexagon:kt,block_arrow:_t,rect_left_inv_arrow:Lt,lean_right:St,lean_left:Mt,trapezoid:Tt,inv_trapezoid:Et,rect_right_inv_arrow:Bt,cylinder:Ct,start:(e,r)=>{const t=e.insert("g").attr("class","node default").attr("id",r.domId||r.id),n=t.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(r,n),r.intersect=function(l){return b.circle(r,7,l)},t},end:(e,r)=>{const t=e.insert("g").attr("class","node default").attr("id",r.domId||r.id),n=t.insert("circle",":first-child"),l=t.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),n.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(r,l),r.intersect=function(i){return b.circle(r,7,i)},t},note:bt,subroutine:function(){var e=(0,v.Z)(function*(r,t){const{shapeSvg:n,bbox:l}=yield k(r,t,$(t,void 0),!0),i=l.width+t.padding,a=l.height+t.padding,s=[{x:0,y:0},{x:i,y:0},{x:i,y:-a},{x:0,y:-a},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-a},{x:-8,y:-a},{x:-8,y:0}],c=R(n,i,a,s);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,s,h)},n});return function(t,n){return e.apply(this,arguments)}}(),fork:rt,join:rt,class_box:(e,r)=>{const t=r.padding/2;let i;i=r.classes?"node "+r.classes:"node default";const a=e.insert("g").attr("class",i).attr("id",r.domId||r.id),s=a.insert("rect",":first-child"),c=a.insert("line"),h=a.insert("line");let o=0,p=4;const y=a.insert("g").attr("class","label");let x=0;const u=r.classData.annotations&&r.classData.annotations[0],m=r.classData.annotations[0]?"\xab"+r.classData.annotations[0]+"\xbb":"",d=y.node().appendChild(C(m,r.labelStyle,!0,!0));let T=d.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const _=d.children[0],L=(0,S.Ys)(d);T=_.getBoundingClientRect(),L.attr("width",T.width),L.attr("height",T.height)}r.classData.annotations[0]&&(p+=T.height+4,o+=T.width);let g=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&((0,f.c)().flowchart.htmlLabels?g+="&lt;"+r.classData.type+"&gt;":g+="<"+r.classData.type+">");const B=y.node().appendChild(C(g,r.labelStyle,!0,!0));(0,S.Ys)(B).attr("class","classTitle");let E=B.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const _=B.children[0],L=(0,S.Ys)(B);E=_.getBoundingClientRect(),L.attr("width",E.width),L.attr("height",E.height)}p+=E.height+4,E.width>o&&(o=E.width);const D=[];r.classData.members.forEach(_=>{const L=_.getDisplayDetails();let Z=L.displayText;(0,f.c)().flowchart.htmlLabels&&(Z=Z.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const O=y.node().appendChild(C(Z,L.cssStyle?L.cssStyle:r.labelStyle,!0,!0));let Y=O.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const F=O.children[0],N=(0,S.Ys)(O);Y=F.getBoundingClientRect(),N.attr("width",Y.width),N.attr("height",Y.height)}Y.width>o&&(o=Y.width),p+=Y.height+4,D.push(O)}),p+=8;const z=[];if(r.classData.methods.forEach(_=>{const L=_.getDisplayDetails();let Z=L.displayText;(0,f.c)().flowchart.htmlLabels&&(Z=Z.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const O=y.node().appendChild(C(Z,L.cssStyle?L.cssStyle:r.labelStyle,!0,!0));let Y=O.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const F=O.children[0],N=(0,S.Ys)(O);Y=F.getBoundingClientRect(),N.attr("width",Y.width),N.attr("height",Y.height)}Y.width>o&&(o=Y.width),p+=Y.height+4,z.push(O)}),p+=8,u){let _=(o-T.width)/2;(0,S.Ys)(d).attr("transform","translate( "+(-1*o/2+_)+", "+-1*p/2+")"),x=T.height+4}let G=(o-E.width)/2;return(0,S.Ys)(B).attr("transform","translate( "+(-1*o/2+G)+", "+(-1*p/2+x)+")"),x+=E.height+4,c.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+x).attr("y2",-p/2-t+8+x),x+=8,D.forEach(_=>{(0,S.Ys)(_).attr("transform","translate( "+-o/2+", "+(-1*p/2+x+4)+")");const L=_?.getBBox();x+=(L?.height??0)+4}),x+=8,h.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+x).attr("y2",-p/2-t+8+x),x+=8,z.forEach(_=>{(0,S.Ys)(_).attr("transform","translate( "+-o/2+", "+(-1*p/2+x)+")");const L=_?.getBBox();x+=(L?.height??0)+4}),s.attr("style",r.style).attr("class","outer title-state").attr("x",-o/2-t).attr("y",-p/2-t).attr("width",o+r.padding).attr("height",p+r.padding),w(r,s),r.intersect=function(_){return b.rect(r,_)},a}};let H={};const Nt=function(){var e=(0,v.Z)(function*(r,t,n){let l,i;if(t.link){let a;"sandbox"===(0,f.c)().securityLevel?a="_top":t.linkTarget&&(a=t.linkTarget||"_blank"),l=r.insert("svg:a").attr("xlink:href",t.link).attr("target",a),i=yield at[t.shape](l,t,n)}else i=yield at[t.shape](r,t,n),l=i;return t.tooltip&&i.attr("title",t.tooltip),t.class&&i.attr("class","node default "+t.class),l.attr("data-node","true"),l.attr("data-id",t.id),H[t.id]=l,t.haveCallback&&H[t.id].attr("class",H[t.id].attr("class")+" clickable"),l});return function(t,n,l){return e.apply(this,arguments)}}(),At=(e,r)=>{H[r.id]=e},Xt=()=>{H={}},jt=e=>{const r=H[e.id];f.l.trace("Transforming node",e.diff,e,"translate("+(e.x-e.width/2-5)+", "+e.width/2+")");const n=e.diff||0;return r.attr("transform",e.clusterNode?"translate("+(e.x+n-e.width/2)+", "+(e.y-e.height/2-8)+")":"translate("+e.x+", "+e.y+")"),n},et=({flowchart:e})=>{var r,t;const n=(null==(r=e?.subGraphTitleMargin)?void 0:r.top)??0,l=(null==(t=e?.subGraphTitleMargin)?void 0:t.bottom)??0;return{subGraphTitleTopMargin:n,subGraphTitleBottomMargin:l,subGraphTitleTotalMargin:n+l}},I={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function A(e,r){if(void 0===e||void 0===r)return{angle:0,deltaX:0,deltaY:0};e=X(e),r=X(r);const[t,n]=[e.x,e.y],[l,i]=[r.x,r.y],a=l-t,s=i-n;return{angle:Math.atan(s/a),deltaX:a,deltaY:s}}const X=e=>Array.isArray(e)?{x:e[0],y:e[1]}:e,st=e=>({x:function(r,t,n){let l=0;if(0===t&&Object.hasOwn(I,e.arrowTypeStart)){const{angle:i,deltaX:a}=A(n[0],n[1]);l=I[e.arrowTypeStart]*Math.cos(i)*(a>=0?1:-1)}else if(t===n.length-1&&Object.hasOwn(I,e.arrowTypeEnd)){const{angle:i,deltaX:a}=A(n[n.length-1],n[n.length-2]);l=I[e.arrowTypeEnd]*Math.cos(i)*(a>=0?1:-1)}return X(r).x+l},y:function(r,t,n){let l=0;if(0===t&&Object.hasOwn(I,e.arrowTypeStart)){const{angle:i,deltaY:a}=A(n[0],n[1]);l=I[e.arrowTypeStart]*Math.abs(Math.sin(i))*(a>=0?1:-1)}else if(t===n.length-1&&Object.hasOwn(I,e.arrowTypeEnd)){const{angle:i,deltaY:a}=A(n[n.length-1],n[n.length-2]);l=I[e.arrowTypeEnd]*Math.abs(Math.sin(i))*(a>=0?1:-1)}return X(r).y+l}}),it=(e,r,t,n,l)=>{r.arrowTypeStart&&nt(e,"start",r.arrowTypeStart,t,n,l),r.arrowTypeEnd&&nt(e,"end",r.arrowTypeEnd,t,n,l)},Ut={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},nt=(e,r,t,n,l,i)=>{const a=Ut[t];a?e.attr(`marker-${r}`,`url(${n}#${l}_${i}-${a}${"start"===r?"Start":"End"})`):f.l.warn(`Unknown arrow type: ${t}`)};let j={},M={};const zt=()=>{j={},M={}},Gt=(e,r)=>{const t=(0,f.m)((0,f.c)().flowchart.htmlLabels),n="markdown"===r.labelType?(0,Q.a)(e,r.label,{style:r.labelStyle,useHtmlLabels:t,addSvgBackground:!0}):C(r.label,r.labelStyle),l=e.insert("g").attr("class","edgeLabel"),i=l.insert("g").attr("class","label");i.node().appendChild(n);let s,a=n.getBBox();if(t){const c=n.children[0],h=(0,S.Ys)(n);a=c.getBoundingClientRect(),h.attr("width",a.width),h.attr("height",a.height)}if(i.attr("transform","translate("+-a.width/2+", "+-a.height/2+")"),j[r.id]=l,r.width=a.width,r.height=a.height,r.startLabelLeft){const c=C(r.startLabelLeft,r.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");s=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startLeft=h,U(s,r.startLabelLeft)}if(r.startLabelRight){const c=C(r.startLabelRight,r.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");s=h.node().appendChild(c),o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startRight=h,U(s,r.startLabelRight)}if(r.endLabelLeft){const c=C(r.endLabelLeft,r.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");s=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endLeft=h,U(s,r.endLabelLeft)}if(r.endLabelRight){const c=C(r.endLabelRight,r.labelStyle),h=e.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");s=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endRight=h,U(s,r.endLabelRight)}return n};function U(e,r){(0,f.c)().flowchart.htmlLabels&&e&&(e.style.width=9*r.length+"px",e.style.height="12px")}const Kt=(e,r)=>{f.l.debug("Moving label abc88 ",e.id,e.label,j[e.id],r);let t=r.updatedPath?r.updatedPath:r.originalPath;const n=(0,f.c)(),{subGraphTitleTotalMargin:l}=et(n);if(e.label){const i=j[e.id];let a=e.x,s=e.y;if(t){const c=f.u.calcLabelPosition(t);f.l.debug("Moving label "+e.label+" from (",a,",",s,") to (",c.x,",",c.y,") abc88"),r.updatedPath&&(a=c.x,s=c.y)}i.attr("transform",`translate(${a}, ${s+l/2})`)}if(e.startLabelLeft){const i=M[e.id].startLeft;let a=e.x,s=e.y;if(t){const c=f.u.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_left",t);a=c.x,s=c.y}i.attr("transform",`translate(${a}, ${s})`)}if(e.startLabelRight){const i=M[e.id].startRight;let a=e.x,s=e.y;if(t){const c=f.u.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_right",t);a=c.x,s=c.y}i.attr("transform",`translate(${a}, ${s})`)}if(e.endLabelLeft){const i=M[e.id].endLeft;let a=e.x,s=e.y;if(t){const c=f.u.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_left",t);a=c.x,s=c.y}i.attr("transform",`translate(${a}, ${s})`)}if(e.endLabelRight){const i=M[e.id].endRight;let a=e.x,s=e.y;if(t){const c=f.u.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_right",t);a=c.x,s=c.y}i.attr("transform",`translate(${a}, ${s})`)}},lt=(e,r)=>{f.l.debug("abc88 cutPathAtIntersect",e,r);let t=[],n=e[0],l=!1;return e.forEach(i=>{if(((e,r)=>{const n=e.y,l=Math.abs(r.x-e.x),i=Math.abs(r.y-n);return l>=e.width/2||i>=e.height/2})(r,i)||l)n=i,l||t.push(i);else{const a=((e,r,t)=>{f.l.debug(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(r)}\n  insidePoint : ${JSON.stringify(t)}\n  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);const n=e.x,l=e.y,i=Math.abs(n-t.x),a=e.width/2;let s=t.x<r.x?a-i:a+i;const c=e.height/2,h=Math.abs(r.y-t.y),o=Math.abs(r.x-t.x);if(Math.abs(l-r.y)*a>Math.abs(n-r.x)*c){let p=t.y<r.y?r.y-c-l:l-c-r.y;s=o*p/h;const y={x:t.x<r.x?t.x+s:t.x-o+s,y:t.y<r.y?t.y+h-p:t.y-h+p};return 0===s&&(y.x=r.x,y.y=r.y),0===o&&(y.x=r.x),0===h&&(y.y=r.y),f.l.debug(`abc89 topp/bott calc, Q ${h}, q ${p}, R ${o}, r ${s}`,y),y}{s=t.x<r.x?r.x-a-n:n-a-r.x;let p=h*s/o,y=t.x<r.x?t.x+o-s:t.x-o+s,x=t.y<r.y?t.y+p:t.y-p;return f.l.debug(`sides calc abc89, Q ${h}, q ${p}, R ${o}, r ${s}`,{_x:y,_y:x}),0===s&&(y=r.x,x=r.y),0===o&&(y=r.x),0===h&&(x=r.y),{x:y,y:x}}})(r,n,i);let s=!1;t.forEach(c=>{s=s||c.x===a.x&&c.y===a.y}),t.some(c=>c.x===a.x&&c.y===a.y)||t.push(a),l=!0}}),t},Vt=function(e,r,t,n,l,i,a){let s=t.points;f.l.debug("abc88 InsertEdge: edge=",t,"e=",r);let c=!1;const h=i.node(r.v);var o=i.node(r.w);o?.intersect&&h?.intersect&&(s=s.slice(1,t.points.length-1),s.unshift(h.intersect(s[0])),s.push(o.intersect(s[s.length-1]))),t.toCluster&&(f.l.debug("to cluster abc88",n[t.toCluster]),s=lt(t.points,n[t.toCluster].node),c=!0),t.fromCluster&&(f.l.debug("from cluster abc88",n[t.fromCluster]),s=lt(s.reverse(),n[t.fromCluster].node).reverse(),c=!0);const p=s.filter(E=>!Number.isNaN(E.y));let y=S.$0Z;t.curve&&("graph"===l||"flowchart"===l)&&(y=t.curve);const{x,y:u}=st(t),m=(0,S.jvg)().x(x).y(u).curve(y);let d;switch(t.thickness){case"normal":d="edge-thickness-normal";break;case"thick":case"invisible":d="edge-thickness-thick";break;default:d=""}switch(t.pattern){case"solid":d+=" edge-pattern-solid";break;case"dotted":d+=" edge-pattern-dotted";break;case"dashed":d+=" edge-pattern-dashed"}const T=e.append("path").attr("d",m(p)).attr("id",t.id).attr("class"," "+d+(t.classes?" "+t.classes:"")).attr("style",t.style);let g="";((0,f.c)().flowchart.arrowMarkerAbsolute||(0,f.c)().state.arrowMarkerAbsolute)&&(g=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,g=g.replace(/\(/g,"\\("),g=g.replace(/\)/g,"\\)")),it(T,t,g,a,l);let B={};return c&&(B.updatedPath=s),B.originalPath=t.points,B}}}]);