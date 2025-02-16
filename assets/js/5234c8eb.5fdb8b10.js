"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8759],{5680:(t,e,r)=>{r.d(e,{xA:()=>c,yg:()=>f});var n=r(6540);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const i={},o="Transport",s={unversionedId:"administration/settings/data/transport",id:"administration/settings/data/transport",title:"Transport",description:"Allows the user define their own transport layers for their data sources.",source:"@site/docs/administration/settings/data/transport.mdx",sourceDirName:"administration/settings/data",slug:"/administration/settings/data/transport",permalink:"/dispatch/docs/administration/settings/data/transport",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/settings/data/transport.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Status",permalink:"/dispatch/docs/administration/settings/data/status"},next:{title:"Type",permalink:"/dispatch/docs/administration/settings/data/type"}},p={},l=[],c={toc:l},u="wrapper";function d(t){let{components:e,...r}=t;return(0,a.yg)(u,(0,n.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"transport"},"Transport"),(0,a.yg)("p",null,"Allows the user define their own transport layers for their data sources."),(0,a.yg)("p",null,"Example source transports:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"REST API"),(0,a.yg)("li",{parentName:"ul"},"Syslog"),(0,a.yg)("li",{parentName:"ul"},"Hive"),(0,a.yg)("li",{parentName:"ul"},"S3"),(0,a.yg)("li",{parentName:"ul"},"Kafka"),(0,a.yg)("li",{parentName:"ul"},"Kinesis")))}d.isMDXComponent=!0}}]);