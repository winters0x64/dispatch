"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1367],{5680:(t,e,i)=>{i.d(e,{xA:()=>l,yg:()=>m});var n=i(6540);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var c=n.createContext({}),d=function(t){var e=n.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},l=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=d(i),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return i?n.createElement(m,o(o({ref:e},l),{},{components:i})):n.createElement(m,o({ref:e},l))}));function m(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,o=new Array(r);o[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},552:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(8168),a=(i(6540),i(5680));const r={},o="Individual",s={unversionedId:"administration/settings/contact/individual",id:"administration/settings/contact/individual",title:"Individual",description:"In Dispatch, Individuals are either internal or external people identifiers. Typically, an organization will maintain a robust internal directory for user identities. Dispatch does not expect to replace those data stores. Instead, it keeps a lightweight notion of identities to associate with incidents for filtering and metrics.",source:"@site/docs/administration/settings/contact/individual.mdx",sourceDirName:"administration/settings/contact",slug:"/administration/settings/contact/individual",permalink:"/dispatch/docs/administration/settings/contact/individual",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/settings/contact/individual.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Contact",permalink:"/dispatch/docs/administration/settings/contact/"},next:{title:"Service",permalink:"/dispatch/docs/administration/settings/contact/service"}},c={},d=[{value:"Engagement",id:"engagement",level:4}],l={toc:d},p="wrapper";function u(t){let{components:e,...r}=t;return(0,a.yg)(p,(0,n.A)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"individual"},"Individual"),(0,a.yg)("p",null,"In Dispatch, Individuals are either internal or external people identifiers. Typically, an organization will maintain a robust internal directory for user identities. Dispatch does not expect to replace those data stores. Instead, it keeps a lightweight notion of identities to associate with incidents for filtering and metrics."),(0,a.yg)("p",null,"It's common for incident response teams to maintain a list of contacts and run books to specify whom to contact when an incident occurs. Dispatch handles this for incident response teams by pulling the right individuals directly into an incident. By assigning terms, incident types, or incident priorities to individuals, Dispatch can instantly add them to the incident ","(","if internal",")"," or suggest reaching out to them ","(","if external",")","."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("p",null,(0,a.yg)("img",{src:i(4764).A,width:"483",height:"688"}))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Name:")," Name of the individual."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Email:")," Email address associated with the individual."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Company:")," Company associated with the individual."),(0,a.yg)("h4",{id:"engagement"},"Engagement"),(0,a.yg)("p",null,"In addition to fields about the individual, Dispatch allows you to associate the individual with other Dispatch primitives. For instance, if you would like to involve an individual for all incidents of a given priority, associate that priority with the individual."))}u.isMDXComponent=!0},4764:(t,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/admin-ui-contacts-individuals-6bd9aec0bc4b001c3a5c291787175703.png"}}]);