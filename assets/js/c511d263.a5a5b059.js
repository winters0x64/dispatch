"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4934],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),y=p(n),d=r,g=y["".concat(c,".").concat(d)]||y[d]||u[d]||s;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const s={},i="Case Types",o={unversionedId:"administration/settings/case/case-type",id:"administration/settings/case/case-type",title:"Case Types",description:"Dispatch allows you to categorize your cases by defining case types and to map them to various Dispatch resources (e.g. templates, oncall services, and incident types).",source:"@site/docs/administration/settings/case/case-type.mdx",sourceDirName:"administration/settings/case",slug:"/administration/settings/case/case-type",permalink:"/dispatch/docs/administration/settings/case/case-type",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/settings/case/case-type.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Case Severity",permalink:"/dispatch/docs/administration/settings/case/case-severity"},next:{title:"Signal",permalink:"/dispatch/docs/administration/settings/signal/"}},c={},p=[],l={toc:p},y="wrapper";function u(e){let{components:t,...s}=e;return(0,r.yg)(y,(0,a.A)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"case-types"},"Case Types"),(0,r.yg)("p",null,"Dispatch allows you to categorize your cases by defining case types and to map them to various Dispatch resources (e.g. templates, oncall services, and incident types)."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("p",null,(0,r.yg)("img",{src:n(8752).A,width:"772",height:"1554"}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Name:")," The name of the case type presented to the user."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Description:")," The description of the case type presented to the user."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Visibility:")," Allows you to specify how visible a case of this type will be. Note: this option is currently not being leveraged."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Case Template:")," Allows you to create a new or map an existing case document template to the case type."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Oncall Service:")," Allows you to map an existing oncall service that will be used to determining the owner of the case."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Incident Type:")," The type of incident that will be created and linked to the case if a case of this type is moved to the Escalated status."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Exclude From Metrics:")," Enable this setting to exclude all cases of this type from metrics (e.g., test cases)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default Case Type:")," If the creator of a case does not provide a case type, a default case type is used. Enable this setting to make this case type the default."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Enabled:")," Whether the case type is enabled or not."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Plugin Metadata:")," Allows you to define and pass metadata key-value pairs to plugins. For example, create issues in different Jira projects based on the case type."))}u.isMDXComponent=!0},8752:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/admin-ui-case-types-9925b17e12e7b08c04f9b4e836ba8ca4.png"}}]);