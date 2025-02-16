"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9366],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>w});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,w=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(w,a(a({ref:t},p),{},{components:n})):r.createElement(w,a({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const i={},a="Workflows",s={unversionedId:"administration/settings/incident/workflow",id:"administration/settings/incident/workflow",title:"Workflows",description:"Workflows allow you to extend Dispatch, invoking your response automation. Dispatch does not currently include the ability to author workflows directly. Instead, the workflow functionality allows for existing workflows to be invoked from Dispatch. We rely on external workflow orchestration tools to execute those workflows, with Dispatch keeping track of resulting artifacts and workflow status.",source:"@site/docs/administration/settings/incident/workflow.mdx",sourceDirName:"administration/settings/incident",slug:"/administration/settings/incident/workflow",permalink:"/dispatch/docs/administration/settings/incident/workflow",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/settings/incident/workflow.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Notification",permalink:"/dispatch/docs/administration/settings/incident/notification"},next:{title:"Case",permalink:"/dispatch/docs/administration/settings/case/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"workflows"},"Workflows"),(0,o.yg)("p",null,"Workflows allow you to extend Dispatch, invoking your response automation. Dispatch does not currently include the ability to author workflows directly. Instead, the workflow functionality allows for existing workflows to be invoked from Dispatch. We rely on external workflow orchestration tools to execute those workflows, with Dispatch keeping track of resulting artifacts and workflow status."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("p",null,(0,o.yg)("img",{src:n(8328).A,width:"492",height:"768"}))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Name:")," The name you wish to present to the user."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Description:")," The description presented to the user when the workflow is viewed."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Resource Id:")," The ",(0,o.yg)("em",{parentName:"p"},"external")," resource id used by Dispatch to associate the workflow with an external system."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Plugin:")," The plugin to use to resolve and execute this workflow. NOTE: This plugin must be enabled and installed before being associated with a workflow."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Enabled:"),' By default, users can\'t invoke workflows. Activate the "Enabled" setting to allow the use of the workflow.'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Workflow Parameters:")," Allows for custom parameters (strings only) to be presented to and set by the user. These are passed to the underlying workflow."))}d.isMDXComponent=!0},8328:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/admin-ui-incident-workflows-c4f309d9c885feebd2261ba79ac76d1e.png"}}]);