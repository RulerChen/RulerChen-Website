"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[677],{9584:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=s(5893),r=s(1151);const l={title:"[Docker] Docker Volumes",sidebar_position:"40",description:"Docker Volumes",keywords:["Docker","Volumes"]},c=void 0,i={id:"Docker/Volumn",title:"[Docker] Docker Volumes",description:"Docker Volumes",source:"@site/docs/Docker/Volumn.mdx",sourceDirName:"Docker",slug:"/Docker/Volumn",permalink:"/RulerChen-Website/docs/Docker/Volumn",draft:!1,unlisted:!1,editUrl:"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/Docker/Volumn.mdx",tags:[],version:"current",lastUpdatedAt:1705106816,formattedLastUpdatedAt:"2024\u5e741\u670813\u65e5",sidebarPosition:40,frontMatter:{title:"[Docker] Docker Volumes",sidebar_position:40,description:"Docker Volumes",keywords:["Docker","Volumes"]},sidebar:"tutorialSidebar",previous:{title:"[Docker] Docker Container",permalink:"/RulerChen-Website/docs/Docker/Container"},next:{title:"[Docker] Docker Network",permalink:"/RulerChen-Website/docs/Docker/Network"}},t={},d=[{value:"\u751a\u9ebc\u662f Docker Volumes",id:"\u751a\u9ebc\u662f-docker-volumes",level:2},{value:"Docker Volumes \u57fa\u672c\u64cd\u4f5c",id:"docker-volumes-\u57fa\u672c\u64cd\u4f5c",level:2},{value:"Bind Mounts",id:"bind-mounts",level:2},{value:"\u591a\u500b\u4e3b\u6a5f\u9593\u5171\u4eab Volume",id:"\u591a\u500b\u4e3b\u6a5f\u9593\u5171\u4eab-volume",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u751a\u9ebc\u662f-docker-volumes",children:"\u751a\u9ebc\u662f Docker Volumes"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u9810\u8a2d\u7684\u60c5\u6cc1\u4e0b\uff0c\u5bb9\u5668\u4e2d\u7684\u6a94\u6848\u6703\u88ab\u4fdd\u5b58\u5728\u5bb9\u5668\u7684\u53ef\u5beb\u5c64\u4e2d\u3002\u7576\u5bb9\u5668\u88ab\u522a\u9664\u6642\uff0c\u9019\u4e9b\u6a94\u6848\u4e5f\u6703\u88ab\u522a\u9664\uff0c\n\u4e14\u56e0\u70ba\u8b80\u5beb\u5c64\u662f\u8207\u5bb9\u5668\u7d81\u5b9a\u7684\uff0c\u6240\u4ee5\u5bb9\u5668\u4e2d\u7684\u6a94\u6848\u4e5f\u7121\u6cd5\u88ab\u5176\u4ed6\u5bb9\u5668\u5b58\u53d6\u3002"}),"\n",(0,o.jsx)(n.p,{children:"Docker \u63d0\u4f9b\u4e86\u5169\u7a2e\u65b9\u5f0f\u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5206\u5225\u662f Data Volumes \u8207 Bind Mounts\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"docker-volumes-\u57fa\u672c\u64cd\u4f5c",children:"Docker Volumes \u57fa\u672c\u64cd\u4f5c"}),"\n",(0,o.jsx)(n.p,{children:"\u5728 windows \u4e0a\uff0c\u6211\u5011\u7121\u6cd5\u76f4\u63a5\u8a2a\u554f\u5230 docker volume \u7684\u4f4d\u7f6e\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u62c9\u53d6 MYSQL Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker pull mysql\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5efa\u7acb\u5bb9\u5668"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker container run -d --name mysql --env MYSQL_ROOT_PASSWORD=<password> -v <volumes_name>:/var/lib/mysql mysql\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6aa2\u67e5 Volume \u8a73\u7d30\u8cc7\u8a0a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker volume inspect mysql-data\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u522a\u9664 Volume"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker volume rm mysql-data\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"bind-mounts",children:"Bind Mounts"}),"\n",(0,o.jsx)(n.p,{children:"Bind Mounts \u662f\u5c07\u672c\u5730\u7aef\u7684\u76ee\u9304\u639b\u8f09\u5230\u5bb9\u5668\u4e2d\uff0c\u9019\u6a23\u5bb9\u5668\u4e2d\u7684\u6a94\u6848\u5c31\u53ef\u4ee5\u88ab\u672c\u5730\u7aef\u7684\u76ee\u9304\u5b58\u53d6\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5efa\u7acb\u5bb9\u5668: \u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"${PWD}"})," \u4f86\u53d6\u5f97\u76ee\u524d\u7684\u8def\u5f91"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker container run -d --name mysql --env MYSQL_ROOT_PASSWORD=<password> -v <local_path>:/var/lib/mysql mysql\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u591a\u500b\u4e3b\u6a5f\u9593\u5171\u4eab-volume",children:"\u591a\u500b\u4e3b\u6a5f\u9593\u5171\u4eab Volume"}),"\n",(0,o.jsx)(n.p,{children:"\u5047\u5982\u6211\u5011\u6709\u591a\u53f0 Linux \u7684\u4e3b\u6a5f\u60f3\u8981\u5171\u4eab Volume\uff0c\u4e14\u9019\u4e09\u53f0\u4e3b\u6a5f\u4e92\u76f8\u90fd\u53ef\u4ee5\u4f7f\u7528 SSH \u9023\u7dda\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 SSHFS \u4f86\u9054\u6210\u9019\u500b\u76ee\u7684\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u50cf AWS S3 \u4e4b\u985e\u7684\u96f2\u7aef\u5132\u5b58\u670d\u52d9\u4e5f\u6709\u63d0\u4f9b driver \u4f86\u5e6b\u52a9\u6211\u5011\u9054\u6210\u9019\u500b\u76ee\u7684\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://dockertips.readthedocs.io/en/latest/docker-volume/multi-host-share.html",children:"\u53c3\u8003\u9023\u7d50"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var o=s(7294);const r={},l=o.createContext(r);function c(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);