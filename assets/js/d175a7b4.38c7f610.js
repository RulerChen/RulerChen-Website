"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8194],{5943:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(5893),s=n(1151);const r={title:"Introduction to Distributed Databases",sidebar_position:"21",description:"CMU15-445/645 Introduction to Distributed Databases",keywords:["CMU15-445/645","Introduction to Distributed Databases","CMU15-445/645 \u7b46\u8a18"]},d=void 0,a={id:"CMU15-445/c21",title:"Introduction to Distributed Databases",description:"CMU15-445/645 Introduction to Distributed Databases",source:"@site/docs/CMU15-445/c21.mdx",sourceDirName:"CMU15-445",slug:"/CMU15-445/c21",permalink:"/RulerChen-Website/docs/CMU15-445/c21",draft:!1,unlisted:!1,editUrl:"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/CMU15-445/c21.mdx",tags:[],version:"current",lastUpdatedAt:1726452487e3,sidebarPosition:21,frontMatter:{title:"Introduction to Distributed Databases",sidebar_position:21,description:"CMU15-445/645 Introduction to Distributed Databases",keywords:["CMU15-445/645","Introduction to Distributed Databases","CMU15-445/645 \u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"Database Recovery",permalink:"/RulerChen-Website/docs/CMU15-445/c20"},next:{title:"Distributed OLTP Database Systems",permalink:"/RulerChen-Website/docs/CMU15-445/c22"}},o={},c=[{value:"System Architecture",id:"system-architecture",level:2},{value:"Shared Memory",id:"shared-memory",level:3},{value:"Shared Disk",id:"shared-disk",level:3},{value:"Shared Nothing",id:"shared-nothing",level:3},{value:"Design Issues",id:"design-issues",level:2},{value:"Homogeneous VS Heterogeneous",id:"homogeneous-vs-heterogeneous",level:3},{value:"Partitioning Schemes",id:"partitioning-schemes",level:2},{value:"Naive Table Partitioning",id:"naive-table-partitioning",level:3},{value:"Vertical Partitioning",id:"vertical-partitioning",level:3},{value:"Horizontal Partitioning",id:"horizontal-partitioning",level:3},{value:"Distributed Concurrency Control",id:"distributed-concurrency-control",level:2},{value:"Centralized Coordinator",id:"centralized-coordinator",level:3},{value:"Transaction Processing Monitor (TP Monitor)",id:"transaction-processing-monitor-tp-monitor",level:4},{value:"Middleware",id:"middleware",level:4},{value:"Decentralized Coordinator",id:"decentralized-coordinator",level:3},{value:"Federated Database",id:"federated-database",level:3},{value:"Distributed Concurrency Control",id:"distributed-concurrency-control-1",level:3},{value:"References",id:"references",level:2}];function l(e){const i={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Head:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("title",{children:"CMU 15-445/645 Introduction to Distributed Databases"})}),"\n",(0,t.jsx)(i.p,{children:"Distributed DBMS \u662f\u4e00\u7a2e\u5c07\u55ae\u4e00\u908f\u8f2f\u8cc7\u6599\u5eab\u5206\u6563\u5230\u591a\u500b\u7269\u7406\u8cc7\u6e90\u4e0a\u7684\u7cfb\u7d71\uff0c\u8ddf Parallel DBMS \u7684\u5dee\u7570\u5728\u65bc\u5206\u6563\u5f0f\u7684\u7bc0\u9ede\u76f8\u5c0d\u8ddd\u96e2\u8f03\u9060\uff0c\u4e14\u53ef\u80fd\u8981\u901a\u904e\u516c\u5171\u7db2\u8def\u9032\u884c\u901a\u4fe1\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u5011\u5df2\u7d93\u5b78\u904e\u4e86\u8a31\u591a\u5728 single node \u74b0\u5883\u4e0b\u7684\u8cc7\u6599\u5eab\u6280\u8853\uff0c\u5982 :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Optimization & Planning"}),"\n",(0,t.jsx)(i.li,{children:"Concurrency Control"}),"\n",(0,t.jsx)(i.li,{children:"Recovery"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u800c\u9019\u4e9b\u6280\u8853\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\u90fd\u6703\u6709\u4e0d\u540c\u7684\u6311\u6230\uff0c\u4e5f\u662f\u6211\u5011\u8981\u8a0e\u8ad6\u7684\u4e3b\u984c\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"system-architecture",children:"System Architecture"}),"\n",(0,t.jsx)(i.p,{children:"DBMS \u7684 system architecture \u5b9a\u7fa9\u4e86 CPU \u53ef\u4ee5\u76f4\u63a5\u8a2a\u554f\u90a3\u4e9b\u5171\u4eab\u8cc7\u6e90\uff0c\u5176\u4e2d single node \u7684\u67b6\u69cb\u5c31\u662f shared everything\uff0c\u800c\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\uff0c\u6211\u5011\u4e3b\u8981\u8a0e\u8ad6\u7684\u662f\u53e6\u5916\u4e09\u7a2e\u67b6\u69cb :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Shared Memory"}),"\n",(0,t.jsx)(i.li,{children:"Shared Disk"}),"\n",(0,t.jsx)(i.li,{children:"Shared Nothing"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"System Architecture",src:n(7117).Z+"",width:"929",height:"331"})}),"\n",(0,t.jsx)(i.h3,{id:"shared-memory",children:"Shared Memory"}),"\n",(0,t.jsx)(i.p,{children:"\u4e0d\u540c\u7684 CPU \u53ef\u4ee5\u8a2a\u554f\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u9019\u7a2e\u67b6\u69cb\u5e7e\u4e4e\u6c92\u6709\u4eba\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"shared-disk",children:"Shared Disk"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u9019\u7a2e\u67b6\u69cb\u4e0b\uff0c\u4e0d\u540c\u7684 CPU \u53ef\u4ee5\u900f\u904e\u7db2\u8def\u8a2a\u554f\u540c\u4e00\u584a\u908f\u8f2f\u786c\u789f\uff0c\u4f46\u5404\u81ea\u6709\u5404\u81ea\u7684\u8a18\u61b6\u9ad4\u3002"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\u512a\u9ede","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u5c07\u904b\u7b97\u5c64\u8ddf\u5b58\u5132\u5c64\u5206\u958b\uff0c\u65b9\u4fbf\u7368\u7acb\u64f4\u5bb9"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\u7f3a\u9ede","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"CPU \u4e4b\u9593\u9700\u8981\u66f4\u591a\u901a\u8a0a\u4f86\u4e86\u89e3\u5f7c\u6b64\u7684\u72c0\u614b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u4f7f\u7528\u9019\u7a2e\u67b6\u69cb\u7684\u7cfb\u7d71\u5982\u4e0b\u5716\u6240\u793a :"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Shared Disk",src:n(6940).Z+"",width:"937",height:"194"})}),"\n",(0,t.jsx)(i.h3,{id:"shared-nothing",children:"Shared Nothing"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u9019\u7a2e\u74b0\u5883\u4e0b\uff0c\u6bcf\u500b\u7bc0\u9ede\u90fd\u6709\u81ea\u5df1\u7684 CPU\u3001Memory\u3001Disk\uff0c\u7bc0\u9ede\u4e4b\u9593\u6703\u900f\u904e\u7db2\u8def\u4f86\u901a\u4fe1\u3002"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\u512a\u9ede","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u53ef\u4ee5\u63d0\u4f9b\u5f88\u597d\u7684\u6548\u80fd"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\u7f3a\u9ede","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u8f03\u96e3\u78ba\u4fdd\u4e00\u81f4\u6027"}),"\n",(0,t.jsx)(i.li,{children:"\u8f03\u96e3\u9032\u884c\u64f4\u5bb9\uff0c\u5728\u65b0\u589e\u7bc0\u9ede\u6642\uff0c\u9700\u8981\u91cd\u65b0\u5206\u914d\u8cc7\u6599\u5230\u65b0\u7bc0\u9ede\u4e0a\uff0c\u9019\u6703\u9700\u8981\u9032\u884c\u7269\u7406\u79fb\u52d5\uff0c\u4e14\u540c\u6642\u9084\u8981\u4fdd\u8b49\u8cc7\u6599\u7684\u4e00\u81f4\u6027\u548c\u53ef\u7528\u6027\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u4f7f\u7528\u9019\u7a2e\u67b6\u69cb\u7684\u7cfb\u7d71\u5982\u4e0b\u5716\u6240\u793a :"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Shared Nothing",src:n(973).Z+"",width:"943",height:"186"})}),"\n",(0,t.jsx)(i.h2,{id:"design-issues",children:"Design Issues"}),"\n",(0,t.jsx)(i.p,{children:"\u63a5\u4e0b\u4f86\u6211\u5011\u6703\u8a0e\u8ad6\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\u53ef\u80fd\u9047\u5230\u7684\u554f\u984c :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u61c9\u7528\u7a0b\u5f0f\u5982\u4f55\u7372\u53d6\u8cc7\u6599"}),"\n",(0,t.jsx)(i.li,{children:"\u5982\u4f55\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\u9032\u884c\u67e5\u8a62"}),"\n",(0,t.jsx)(i.li,{children:"\u5982\u4f55\u4fdd\u8b49\u6b63\u78ba\u6027"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u5c0d\u65bc distributed DBMS \u7684\u4f7f\u7528\u8005\u4f86\u8aaa\uff0c\u4ed6\u5011\u4e0d\u9700\u8981\u77e5\u9053\u8cc7\u6599\u662f\u5982\u4f55\u5206\u6563\u7684\uff0c\u53ea\u9700\u8981\u77e5\u9053\u5982\u4f55\u8a2a\u554f\u8cc7\u6599\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"homogeneous-vs-heterogeneous",children:"Homogeneous VS Heterogeneous"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\uff0c\u6211\u5011\u9700\u8981\u5148\u6c7a\u5b9a\u7bc0\u9ede\u8207\u7bc0\u9ede\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u53ef\u4ee5\u5206\u70ba\u5169\u7a2e :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Homogeneous (\u540c\u8cea\u7bc0\u9ede) : \u6bcf\u500b\u7bc0\u9ede\u5728\u53e2\u96c6\u4e2d\u80fd\u5920\u57f7\u884c\u76f8\u540c\u7684\u4efb\u52d9\uff0c\u5728\u64f4\u5bb9\u4ee5\u53ca\u6545\u969c\u6062\u5fa9\u6bd4\u8f03\u7c21\u55ae"}),"\n",(0,t.jsx)(i.li,{children:"Heterogeneous (\u7570\u8cea\u7bc0\u9ede): \u7bc0\u9ede\u88ab\u5206\u914d\u7279\u5b9a\u7684\u4efb\u52d9\uff0c\u56e0\u6b64\u4e0d\u540c\u7bc0\u9ede\u4e4b\u9593\u9700\u8981\u9032\u884c\u901a\u4fe1\u624d\u80fd\u5b8c\u6210\u4efb\u52d9\uff0c\u53ef\u4ee5\u5728\u4e00\u500b\u7269\u7406\u7bc0\u9ede\u4e0a\u57f7\u884c\u591a\u500b\u865b\u64ec\u7bc0\u9ede"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Homogeneous VS Heterogeneous",src:n(7861).Z+"",width:"1768",height:"860"})}),"\n",(0,t.jsx)(i.p,{children:"\u4ee5 MongoDB \u70ba\u4f8b\uff0c\u5b83\u7684\u96c6\u7fa4\u6709\u4e09\u7a2e\u7bc0\u9ede\uff0c\u5206\u5225\u662f Router\u3001Config Server\u3001Shard\u3002\n\u4f7f\u7528\u8005\u6703\u767c\u9001\u8acb\u6c42\u7d66 Router\uff0cRouter \u6703\u6839\u64da Config Server \u7684\u8a2d\u5b9a\u4f86\u5c07\u8acb\u6c42\u8f49\u767c\u7d66 Shard\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"partitioning-schemes",children:"Partitioning Schemes"}),"\n",(0,t.jsx)(i.p,{children:"Partitioning Schemes \u662f\u4e00\u7a2e\u628a\u8cc7\u6599\u5eab\u5206\u6563\u5230\u591a\u500b\u7bc0\u9ede\u4e0a\u7684\u65b9\u6cd5\uff0c\u4e5f\u5e38\u88ab\u7a31\u4f5c sharding\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"naive-table-partitioning",children:"Naive Table Partitioning"}),"\n",(0,t.jsx)(i.p,{children:"\u5047\u8a2d\u4e00\u500b\u7bc0\u9ede\u6709\u8db3\u5920\u7684\u5bb9\u91cf\uff0c\u6211\u5011\u53ef\u4ee5\u8b93\u4e00\u500b\u7bc0\u9ede\u5132\u5b58\u4e00\u5f35\u8868\uff0c\u7f3a\u9ede\u662f\u53ef\u80fd\u5c0e\u81f4\u8cc7\u6599\u4e0d\u5747\u52fb\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"vertical-partitioning",children:"Vertical Partitioning"}),"\n",(0,t.jsx)(i.p,{children:"\u5c07\u8868\u683c\u7684\u5c6c\u6027\u62c6\u5206\u6210\u4e0d\u540c\u7684\u5206\u5340\u3002\u6bcf\u500b\u5206\u5340\u9084\u5fc5\u9808\u5b58\u5132\u5143\u7d44\u4fe1\u606f\uff0c\u4ee5\u4fbf\u80fd\u5920\u91cd\u5efa\u539f\u59cb\u8a18\u9304\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Vertical Partitioning",src:n(3293).Z+"",width:"959",height:"539"})}),"\n",(0,t.jsx)(i.h3,{id:"horizontal-partitioning",children:"Horizontal Partitioning"}),"\n",(0,t.jsx)(i.p,{children:"\u5c07\u8868\u7684\u8cc7\u6599\u5207\u6210\u591a\u500b\u4e0d\u76f8\u95dc\u7684\u5b50\u96c6\uff0c\u4e26\u4e14\u627e\u5230\u4e00\u500b key \u4f86\u5c07\u8cc7\u6599\u5e73\u5747\u5206\u914d\u5230\u4e0d\u540c\u7684\u7bc0\u9ede\u4e0a\uff0c\u5e38\u898b\u7684\u5206\u914d\u65b9\u5f0f\u6709 :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Range Partitioning"}),"\n",(0,t.jsx)(i.li,{children:"Hash Partitioning"}),"\n",(0,t.jsx)(i.li,{children:"Predicate Partitioning"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Horizontal Partitioning",src:n(2388).Z+"",width:"955",height:"539"})}),"\n",(0,t.jsx)(i.p,{children:"\u901a\u5e38\u6703\u4f7f\u7528 partitionKey \u4f86\u67e5\u8a62\u8cc7\u6599\uff0c\u4e26\u4f7f\u7528 consistent Hashing \u4f86\u6c7a\u5b9a\u8cc7\u6599\u61c9\u8a72\u5b58\u5132\u5728\u54ea\u500b\u7bc0\u9ede\u4e0a\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Consistent Hashing",src:n(6941).Z+"",width:"958",height:"535"})}),"\n",(0,t.jsx)(i.p,{children:"\u5c07\u6bcf\u500b hash \u503c\u5230\u908f\u8f2f\u74b0\u4e0a\u7684\u4e00\u500b\u4f4d\u7f6e\uff0c\u7136\u5f8c\u7531\u6700\u63a5\u8fd1\u8a72\u4f4d\u7f6e\u7684\u7bc0\u9ede (\u9806\u6642\u91dd\u65b9\u5411) \u8ca0\u8cac\u8a72\u9375\u3002\n\u7576\u4e00\u500b\u7bc0\u9ede\u88ab\u6dfb\u52a0\u6216\u79fb\u9664\u6642\uff0c\u53ea\u6709\u76f8\u9130\u7684\u7bc0\u9ede\u4e4b\u9593\u7684\u9375\u6703\u88ab\u79fb\u52d5\uff0c\u4e26\u4e14\u53ea\u6709 1/n \u7684\u9375\u6703\u88ab\u91cd\u65b0\u5206\u914d\u3002\n\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u5229\u7528 consistent hashing \u4f86\u505a replication \u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5728 shared nothing \u7684\u67b6\u69cb\u4e0b\uff0c\u901a\u5e38\u4f7f\u7528\u7269\u7406\u5206\u7247"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Physical Sharding",src:n(7958).Z+"",width:"955",height:"537"})}),"\n",(0,t.jsx)(i.p,{children:"\u5728 shared disk \u7684\u67b6\u69cb\u4e0b\uff0c\u901a\u5e38\u4f7f\u7528\u908f\u8f2f\u5206\u7247"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Logical Sharding",src:n(3785).Z+"",width:"956",height:"535"})}),"\n",(0,t.jsx)(i.h2,{id:"distributed-concurrency-control",children:"Distributed Concurrency Control"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\uff0c\u4ea4\u6613\u6703\u8a2a\u554f\u4e00\u500b\u6216\u591a\u500b\u5206\u5340\u7684\u8cc7\u6599\uff0c\u5c31\u6703\u9700\u8981\u8907\u96dc\u7684\u5354\u8abf\uff0c\u5373\u6240\u8b02\u7684 transaction coordination\uff0c\u901a\u5e38\u5206\u70ba\u4e2d\u5fc3\u5316\u548c\u53bb\u4e2d\u5fc3\u5316\u5169\u7a2e\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"centralized-coordinator",children:"Centralized Coordinator"}),"\n",(0,t.jsx)(i.h4,{id:"transaction-processing-monitor-tp-monitor",children:"Transaction Processing Monitor (TP Monitor)"}),"\n",(0,t.jsx)(i.p,{children:"\u8981\u5be6\u73fe\u4e2d\u5fc3\u5316\u7684\u5354\u8abf\u5c31\u9700\u8981\u6709\u4e00\u500b\u5143\u4ef6\u4f86\u7ba1\u7406\u6240\u6709\u7684\u4ea4\u6613\uff0c\u9019\u500b\u5143\u4ef6\u88ab\u7a31\u4f5c Transaction Processing Monitor (TP Monitor)\uff0c\u6bcf\u6b21\u767c\u9001\u8acb\u6c42\u6642\uff0c\u90fd\u8981\u7d93\u904e TP Monitor \u4f86\u9032\u884c\u5354\u8abf\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u8209\u4f8b\u5982\u4e0b\u6240\u793a"}),"\n",(0,t.jsx)(i.p,{children:"\u5047\u8a2d\u4e00\u500b DBMS \u6709\u56db\u500b partitions\uff0c\u5206\u5225\u662f P1\u3001P2\u3001P3\u3001P4\uff0c\u4e26\u4e14\u6709\u4e00\u500b TP Monitor \u4f86\u7ba1\u7406\u6240\u6709\u7684\u4ea4\u6613\u3002\n\u9019\u6642\u6709\u4e00\u500b\u4ea4\u6613\u9700\u8981\u4fee\u6539 P1\u3001P3\u3001P4 \u4e0a\u7684\u8cc7\u6599\uff0c\u90a3\u9ebc\u5b83\u9996\u5148\u8981\u5411 TP Monitor \u8acb\u6c42 P1\u3001P3\u3001P4 \u4e0a\u7684\u9396"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Centralized Coordinator",src:n(3224).Z+"",width:"957",height:"539"})}),"\n",(0,t.jsx)(i.p,{children:"\u62ff\u5230\u9396\u4e4b\u5f8c\u624d\u80fd\u4fee\u6539\u8cc7\u6599\uff0c\u4fee\u6539\u5b8c\u7562\u5f8c\u518d\u5411 coordinator \u767c\u9001 commit \u8acb\u6c42\uff0ccoordinator \u6703\u5411\u6240\u6709\u7684\u5206\u5340\u8a62\u554f\u9019\u500b\u4ea4\u6613\u662f\u5426\u53ef\u4ee5 commit\uff0c\u6700\u5f8c\u8fd4\u9084 ACK \u7d66\u4f7f\u7528\u8005\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Centralized Coordinator",src:n(7070).Z+"",width:"958",height:"537"})}),"\n",(0,t.jsx)(i.h4,{id:"middleware",children:"Middleware"}),"\n",(0,t.jsx)(i.p,{children:"Middleware \u662f\u4e00\u500b\u4f4d\u65bc\u61c9\u7528\u7a0b\u5f0f\u548c\u8cc7\u6599\u5eab\u4e4b\u9593\u7684\u8edf\u9ad4\uff0c\u8ca0\u8cac\u8ddf\u8cc7\u6599\u5eab\u9032\u884c\u901a\u4fe1\uff0c\u5c0d\u65bc\u61c9\u7528\u7a0b\u5f0f\u4f86\u8aaa\uff0c\u5b83\u5c31\u662f\u8cc7\u6599\u5eab\u672c\u8eab\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Middleware",src:n(3506).Z+"",width:"960",height:"539"})}),"\n",(0,t.jsx)(i.h3,{id:"decentralized-coordinator",children:"Decentralized Coordinator"}),"\n",(0,t.jsx)(i.p,{children:"\u518d\u53bb\u4e2d\u5fc3\u5316\u7684\u67b6\u69cb\u4e2d\uff0c\u57f7\u884c\u67d0\u500b\u4ea4\u6613\u6642\u6703\u9078\u64c7\u4e00\u500b\u7bc0\u9ede\u4f5c\u70ba master\uff0c\u8ca0\u8cac\u5354\u8abf\u6240\u6709\u7684\u4ea4\u6613\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Decentralized Coordinator",src:n(8220).Z+"",width:"959",height:"539"})}),"\n",(0,t.jsx)(i.h3,{id:"federated-database",children:"Federated Database"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u524d\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u90fd\u5047\u8a2d\u8cc7\u6599\u5eab\u662f\u540c\u4e00\u7a2e\u7684\uff0c\u4f46\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u6211\u5011\u53ef\u80fd\u6703\u60f3\u8981\u4f7f\u7528\u4e0d\u540c\u7a2e\u985e\u7684\u8cc7\u6599\u5eab\uff0c\u4e26\u53ea\u66b4\u9732\u4e00\u500b\u7d71\u4e00\u7684\u4ecb\u9762\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u9019\u7a2e\u6280\u8853\u6709\u5f88\u591a\u7684\u6311\u6230\uff0c\u50cf\u662f query optimization\u3001data migration\u3001data consistency\uff0c\u76ee\u524d\u4ecd\u7136\u6c92\u6709\u4e00\u500b\u5f88\u597d\u7684\u89e3\u6c7a\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Federated Database",src:n(6150).Z+"",width:"961",height:"538"})}),"\n",(0,t.jsx)(i.h3,{id:"distributed-concurrency-control-1",children:"Distributed Concurrency Control"}),"\n",(0,t.jsx)(i.p,{children:"\u5206\u6563\u5f0f\u7684\u4f75\u767c\u63a7\u5236\u6709\u5f88\u591a\u6311\u6230\uff0c\u6bd4\u5982 :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Replication"}),"\n",(0,t.jsx)(i.li,{children:"Network Communication Overhead"}),"\n",(0,t.jsx)(i.li,{children:"Node Failures"}),"\n",(0,t.jsx)(i.li,{children:"Clock Skew"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u4e0b\u5716\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u7531\u65bc\u6c92\u6709\u4e2d\u5fc3\u5316\u7684\u5354\u8abf\u5668\uff0c\u4e00\u65e6\u767c\u73fe\u5982\u5716\u4e2d\u7684\u6b7b\u9396\u60c5\u6cc1\uff0c\u5c31\u5f88\u96e3\u9032\u884c\u5354\u8abf\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Distributed Concurrency Control",src:n(7613).Z+"",width:"955",height:"537"})}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://15445.courses.cs.cmu.edu/fall2023/",children:"CMU 15-445/645: Introduction to Database Systems"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=fyDeu_5svbg&list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g&index=22",children:"CMU 15-445/645: Introduction to Database Systems Youtube 2023 Fall"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},973:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-1-5067671a91e004ef0eb935e78636594b.png"},3785:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-10-d653d6913cd75ddeac03bfb10f87f746.png"},6941:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-11-48197aa8b56ca843f4f6995a809d2467.png"},3224:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-12-34e520761fecdb34db3c774799bcb393.png"},7070:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-13-267e1f33fc6f57e1cb7a5d44ae26054b.png"},3506:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-14-b7676483b7b97777665e6f8d5429eefa.png"},8220:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-15-aef8db88338cffba3048bb86554b602b.png"},6150:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-16-65c27a7381f7365500f3ee959b84a7c1.png"},7613:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-17-305d32914f46d86654130c01a40fe45e.png"},6940:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-3-2d6f6dc596b9ed579255ae3c98a8b8b5.png"},7861:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-5-354cbb6ad8656f5e68585c0bbd351781.png"},3293:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-7-e361a3e5ac831b7374b85a49199ba0e0.png"},2388:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-8-1d53a98eb3e9c23cef795201bdfb548c.png"},7958:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-9-e803f6df3345af11f2ec562683ea8c63.png"},7117:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/image-34cd94f287b21427c48d677c2af3240d.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>d});var t=n(7294);const s={},r=t.createContext(s);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);