"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1721],{75:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var s=i(5893),r=i(1151);const l={title:"Concurrency Control Theory",sidebar_position:"15",description:"CMU15-445/645 Concurrency Control Theory",keywords:["CMU15-445/645","Concurrency Control Theory","CMU15-445/645 \u7b46\u8a18"]},c=void 0,t={id:"CMU15-445/c15",title:"Concurrency Control Theory",description:"CMU15-445/645 Concurrency Control Theory",source:"@site/docs/CMU15-445/c15.mdx",sourceDirName:"CMU15-445",slug:"/CMU15-445/c15",permalink:"/RulerChen-Website/docs/CMU15-445/c15",draft:!1,unlisted:!1,editUrl:"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/CMU15-445/c15.mdx",tags:[],version:"current",lastUpdatedAt:1724469995e3,sidebarPosition:15,frontMatter:{title:"Concurrency Control Theory",sidebar_position:15,description:"CMU15-445/645 Concurrency Control Theory",keywords:["CMU15-445/645","Concurrency Control Theory","CMU15-445/645 \u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"Query Planning & Optimization",permalink:"/RulerChen-Website/docs/CMU15-445/c14"},next:{title:"Two-Phase Locking Concurrency Control",permalink:"/RulerChen-Website/docs/CMU15-445/c16"}},a={},o=[{value:"Transaction",id:"transaction",level:2},{value:"The Strawman System",id:"the-strawman-system",level:3},{value:"ACID: Atomicity",id:"acid-atomicity",level:2},{value:"Logging",id:"logging",level:3},{value:"Shadow Paging",id:"shadow-paging",level:3},{value:"ACID: Consistency",id:"acid-consistency",level:2},{value:"ACID: Isolation",id:"acid-isolation",level:2},{value:"Schedule",id:"schedule",level:3},{value:"Conflict",id:"conflict",level:3},{value:"Read-Write Conflict",id:"read-write-conflict",level:4},{value:"Write-Read Conflict",id:"write-read-conflict",level:4},{value:"Write-Write Conflict",id:"write-write-conflict",level:4},{value:"Serializability",id:"serializability",level:3},{value:"Conflict Serializability",id:"conflict-serializability",level:4},{value:"View Serializability",id:"view-serializability",level:4},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"ACID: Durability",id:"acid-durability",level:2},{value:"References",id:"references",level:2}];function d(n){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...n.components},{Head:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("title",{children:"CMU 15-445/645 \u7b46\u8a18 Concurrency Control Theory"})}),"\n",(0,s.jsx)(e.p,{children:"\u5c0d\u65bc DBMS \u4f86\u8aaa\uff0c\u9664\u4e86\u57fa\u672c\u7684\u529f\u80fd\u5916\uff0c\u6211\u5011\u9084\u6709\u5169\u500b\u554f\u984c\u9700\u8981\u89e3\u6c7a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u4f55\u5728\u540c\u6642\u66f4\u65b0\u6642\u907f\u514d race condition (concurrency control)"}),"\n",(0,s.jsx)(e.li,{children:"\u7576\u8cc7\u6599\u5eab\u767c\u751f\u6545\u969c\u6642\uff0c\u6211\u5011\u5982\u4f55\u4fdd\u8b49\u8cc7\u6599\u7684\u5b8c\u6574\u6027 (recovery)"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u9019\u7bc0\u4e2d\uff0c\u6211\u5011\u6703\u63a2\u8a0e\u5982\u4f55\u89e3\u6c7a\u7b2c\u4e00\u500b\u554f\u984c\uff0c\u4e5f\u5c31\u662f concurrency control\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"transaction",children:"Transaction"}),"\n",(0,s.jsx)(e.p,{children:"transaction \u662f DBMS \u4e2d\u6700\u57fa\u672c\u7684\u64cd\u4f5c\u55ae\u4f4d\uff0c\u6307\u7684\u662f\u4e00\u7cfb\u5217\u64cd\u4f5c\u7684\u57f7\u884c\uff0c\u4e14\u9019\u4e9b\u64cd\u4f5c\u8981\u9ebc\u5168\u90e8\u57f7\u884c\u6210\u529f\uff0c\u8981\u9ebc\u5168\u90e8\u4e0d\u57f7\u884c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u4ee5\u4e0b\u7684\u7bc4\u4f8b\uff0c\u5047\u8a2d\u4f60\u8981\u5f9e Andy \u7684\u9280\u884c\u5e33\u6236\u4e2d\u8f49\u51fa $100 \u7d66\u4ed6\u7684\u7d93\u7d00\u4eba\uff0c\u9019\u500b\u4ea4\u6613\u6d89\u53ca\u4ee5\u4e0b\u6b65\u9a5f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u78ba\u8a8d Andy \u5e33\u6236\u4e2d\u662f\u5426\u6709 $100"}),"\n",(0,s.jsx)(e.li,{children:"\u5f9e Andy \u7684\u5e33\u6236\u4e2d\u6263\u9664 $100"}),"\n",(0,s.jsx)(e.li,{children:"\u5c07 $100 \u52a0\u5230\u4ed6\u7684\u7d93\u7d00\u4eba\u7684\u5e33\u6236"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u500b\u4ea4\u6613\u8981\u9ebc\u5168\u90e8\u5b8c\u6210\uff08\u5373\u4e0a\u8ff0\u4e09\u500b\u6b65\u9a5f\u90fd\u6210\u529f\u57f7\u884c\uff09\uff0c\u8981\u9ebc\u4e0d\u6703\u6539\u8b8a\u4efb\u4f55\u5e33\u6236\u7684\u72c0\u614b\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"the-strawman-system",children:"The Strawman System"}),"\n",(0,s.jsx)(e.p,{children:"strawman system \u662f\u4e00\u500b\u7c21\u55ae\u7684 transaction system\uff0c\u5b83\u53ea\u6709\u4e00\u500b thread \u4f86\u57f7\u884c\u6240\u6709\u7684 transaction\uff0c\n\u56e0\u6b64\u4e0d\u7ba1\u5728\u4efb\u4f55\u6642\u523b\u90fd\u53ea\u80fd\u6709\u4e00\u500b transaction \u5728\u57f7\u884c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u500b\u7cfb\u7d71\u7684\u8655\u7406\u65b9\u5f0f\u662f\u5c07\u6240\u6709\u6a94\u6848\u90fd\u8907\u88fd\u4e00\u4efd\uff0c\u7136\u5f8c\u5c0d\u9019\u500b\u65b0\u7684\u6a94\u6848\u9032\u884c\u4fee\u6539\uff0c\u5982\u679c\u6210\u529f\u5c31\u5168\u90e8\u8986\u84cb\uff0c\n\u9019\u7a2e\u65b9\u5f0f\u96d6\u7136\u7c21\u55ae\u4f46\u662f\u7f3a\u9ede\u662f\u986f\u800c\u6613\u898b\u7684\uff0c\u5c31\u662f\u7121\u6cd5\u5229\u7528\u591a\u6838\u4f86\u8655\u7406\u7368\u7acb\u7684 transaction\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u63d0\u9ad8\u6548\u7387\uff0c\u6211\u5011\u5fc5\u9808\u5141\u8a31\u591a\u500b transaction \u540c\u6642\u57f7\u884c\uff0c\u4f46\u9019\u6a23\u5c31\u6703\u7522\u751f\u6b63\u78ba\u6027\u7684\u554f\u984c\uff0c\u5982"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Temporary Inconsistency: \u4e0d\u53ef\u907f\u514d"}),"\n",(0,s.jsx)(e.li,{children:"Permanent Inconsistency: \u4e0d\u53ef\u63a5\u6536\uff0c\u6703\u5f71\u97ff\u6b63\u78ba\u6027"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 SQL \u4e2d\uff0c\u6211\u5011\u6703\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"BEGIN"}),"\u3001",(0,s.jsx)(e.code,{children:"COMMIT"}),"\u3001",(0,s.jsx)(e.code,{children:"ROLLBACK"})," \u4f86\u63a7\u5236 transaction \u7684\u57f7\u884c\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u4fdd\u8b49\u8cc7\u6599\u7684\u6b63\u78ba\u6027\uff0c\u8cc7\u6599\u5fc5\u9808\u6eff\u8db3 ACID \u539f\u5247\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"acid-atomicity",children:"ACID: Atomicity"}),"\n",(0,s.jsx)(e.p,{children:"DBMS \u9700\u8981\u4fdd\u8b49 transaction \u7684\u539f\u5b50\u6027\uff0c\u5373\u6240\u6709\u64cd\u4f5c\u53ea\u6709\u5168\u90e8\u5b8c\u6210\u8ddf\u5168\u90e8\u672a\u5b8c\u6210\u5169\u7a2e\u7d50\u679c\uff0c\n\u5982\u679c\u5728\u904e\u7a0b\u4e2d\u51fa\u73fe\u932f\u8aa4\uff0cDBMS \u9700\u8981\u56de\u6efe\u5230\u539f\u672c\u7684\u72c0\u614b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3b\u8981\u6709\u5169\u7a2e\u7b56\u7565"}),"\n",(0,s.jsx)(e.h3,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(e.p,{children:"\u76ee\u524d\u4e3b\u6d41\u7684\u5be6\u4f5c\u65b9\u5f0f\uff0c\u6703\u8a18\u9304\u4ea4\u6613\u904e\u7a0b\u4e2d\u7684\u6bcf\u4e00\u9805\u8b8a\u66f4\uff0c\u4e26\u540c\u6642\u4fdd\u5b58\u5728\u8a18\u61b6\u9ad4\u8ddf\u786c\u789f\u4e0a\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"shadow-paging",children:"Shadow Paging"}),"\n",(0,s.jsx)(e.p,{children:"\u5c07\u4ea4\u6613\u9700\u8981\u4fee\u6539\u7684\u9801\u9762\u8907\u88fd\uff0c\u4e26\u53ea\u5728\u65b0\u7684\u9801\u9762\u4e2d\u4fee\u6539\uff0c\u7576\u4ea4\u6613\u63d0\u4ea4\u6642\u624d\u6703\u8986\u84cb\u539f\u672c\u7684\u6a94\u6848\uff0c\n\u901a\u5e38\u5728 single thread \u7684\u74b0\u5883\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"acid-consistency",children:"ACID: Consistency"}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u793a\u5728\u8cc7\u6599\u5eab\u4e2d\u7684\u908f\u8f2f\u662f\u6b63\u78ba\u7684\uff0c\u4e3b\u8981\u5206\u70ba\u5169\u7a2e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Database Consistency : \u9075\u5faa integrity constraints\uff0c\u4f8b\u5982\u4eba\u7684\u5e74\u9f61\u4e0d\u53ef\u80fd\u662f\u8ca0\u6578\uff0c\n\u53ef\u4ee5\u4f7f\u7528 SQL \u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"CHECK"})," \u6216 ",(0,s.jsx)(e.code,{children:"CONSTRAINT"})," \u4f86\u5be6\u73fe"]}),"\n",(0,s.jsx)(e.li,{children:"Transaction Consistency : \u5982\u679c\u4ea4\u6613\u524d\u662f\u4e00\u81f4\uff0c\u4ea4\u6613\u5f8c\u4e5f\u61c9\u8a72\u662f\u4e00\u81f4\u7684"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"acid-isolation",children:"ACID: Isolation"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u540c\u7684 transaction \u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u61c9\u8a72\u4e92\u76f8\u9694\u96e2\u4e14\u4e92\u4e0d\u5f71\u97ff\uff0c\u5c31\u50cf\u5728\u55ae\u7368\u904b\u884c\u4e00\u6a23\u3002\n\u4f46\u5728\u5be6\u969b\u60c5\u6cc1\u4e2d\uff0c\u7531\u65bc\u6548\u80fd\u554f\u984c\uff0cDBMS \u9700\u8981\u5c07\u591a\u500b\u540c\u6642\u57f7\u884c\u7684\u4ea4\u6613\u4ea4\u932f\u57f7\u884c\uff0c\u4e26\u540c\u6642\u4fdd\u6301\u9694\u96e2\u6027\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8209\u4f8b\u5982\u4e0b\uff0c\n\u6709\u5169\u500b transaction t1 \u548c t2"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"t1 : A \u8f49\u7d66 B 100 \u5143"}),"\n",(0,s.jsx)(e.li,{children:"t2 : A \u548c B \u7372\u5f97 6% \u5229\u606f"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"// t1\nBEGIN\nA = A - 100\nB = B + 100\nCOMMIT\n\n// t2\nBEGIN\nA = A * 1.06\nB = B * 1.06\nCOMMIT\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7576\u9019\u5169\u500b transaction \u767c\u751f\u4e4b\u5f8c\uff0c\n\u4e0d\u7ba1\u9806\u5e8f\u5982\u4f55\uff0cDBMS \u9700\u8981\u78ba\u4fdd\u6700\u5f8c\u5169\u8005\u52a0\u8d77\u4f86\u7684\u7d50\u679c\u662f ",(0,s.jsxs)(e.span,{className:"katex",children:[(0,s.jsx)(e.span,{className:"katex-mathml",children:(0,s.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(e.semantics,{children:[(0,s.jsxs)(e.mrow,{children:[(0,s.jsx)(e.mn,{children:"2000"}),(0,s.jsx)(e.mo,{children:"\xd7"}),(0,s.jsx)(e.mn,{children:"1.06"})]}),(0,s.jsx)(e.annotation,{encoding:"application/x-tex",children:"2000 \\times 1.06"})]})})}),(0,s.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(e.span,{className:"mord",children:"2000"}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(e.span,{className:"mord",children:"1.06"})]})]})]})," = 2120 \u5143\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"schedule",children:"Schedule"}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u63d0\u9ad8 concurrency\uff0cDBMS \u6703\u5c07\u591a\u500b transaction \u4ea4\u932f\u57f7\u884c (interleave)\uff0c\n\u9019\u6a23\u7576\u67d0\u500b\u4ea4\u6613\u5728\u7b49\u5f85\u8cc7\u6e90 (disk IO\u3001page fault) \u6216 CPU \u6709\u7a7a\u9592\u6642\uff0c\u5c31\u53ef\u4ee5\u7e7c\u7e8c\u57f7\u884c\u5176\u4ed6\u4ea4\u6613\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u9700\u8981\u4fdd\u8b49 scheduler \u662f serial schedule \u6216\u662f\u7b49\u50f9\u65bc serial schedule (serializable schedule)\uff0c\n\u4e5f\u5c31\u662f\u8aaa\uff0c\u9019\u4e9b\u4ea4\u6613\u7684\u7d50\u679c\u61c9\u8a72\u8207\u67d0\u500b serial schedule \u7684\u7d50\u679c\u76f8\u540c\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"conflict",children:"Conflict"}),"\n",(0,s.jsx)(e.h4,{id:"read-write-conflict",children:"Read-Write Conflict"}),"\n",(0,s.jsx)(e.h4,{id:"write-read-conflict",children:"Write-Read Conflict"}),"\n",(0,s.jsx)(e.h4,{id:"write-write-conflict",children:"Write-Write Conflict"}),"\n",(0,s.jsx)(e.h3,{id:"serializability",children:"Serializability"}),"\n",(0,s.jsx)(e.h4,{id:"conflict-serializability",children:"Conflict Serializability"}),"\n",(0,s.jsx)(e.h4,{id:"view-serializability",children:"View Serializability"}),"\n",(0,s.jsx)(e.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,s.jsx)(e.p,{children:"concurrency control \u6307\u7684\u662f DBMS \u5982\u4f55\u6c7a\u5b9a\u591a\u500b\u4ea4\u6613\u64cd\u4f5c\u7684\u6b63\u78ba\u9806\u5e8f\uff0c\u5927\u81f4\u6709\u5169\u7a2e\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Pessimistic (\u60b2\u89c0) : DBMS \u5047\u8a2d\u6703\u767c\u751f\u885d\u7a81\uff0c\u53ef\u4ee5\u900f\u904e\u9396\u5b9a\u8cc7\u6e90\u4f86\u5be6\u73fe"}),"\n",(0,s.jsx)(e.li,{children:"Optimistic (\u6a02\u89c0) : DBMS \u5047\u8a2d\u4e0d\u6703\u767c\u751f\u885d\u7a81\uff0c\u76f4\u5230 commit \u6642\u624d\u6703\u6aa2\u67e5\u885d\u7a81\u4e26\u56de\u6efe"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"acid-durability",children:"ACID: Durability"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709\u5df2\u63d0\u4ea4\u7684\u8cc7\u6599\u90fd\u5c07\u6c38\u4e45\u4fdd\u5b58\uff0c\u800c\u4e0d\u6703\u56e0\u70ba\u7cfb\u7d71\u5d29\u6f70\u800c\u907a\u5931"}),"\n",(0,s.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://15445.courses.cs.cmu.edu/fall2023/",children:"CMU 15-445/645: Introduction to Database Systems"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.youtube.com/watch?v=NJyisAkDJYI&list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g&index=16",children:"CMU 15-445/645: Introduction to Database Systems Youtube 2023 Fall"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>c});var s=i(7294);const r={},l=s.createContext(r);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);