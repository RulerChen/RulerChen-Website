"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82],{9136:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var s=i(5893),l=i(1151);const d={title:"Storage Models & Compression",sidebar_position:"5",description:"CMU15-445/645 Storage Models & Compression",keywords:["CMU15-445/645","Storage Models & Compression","CMU15-445/645 \u7b46\u8a18"]},t=void 0,o={id:"CMU15-445/c05",title:"Storage Models & Compression",description:"CMU15-445/645 Storage Models & Compression",source:"@site/docs/CMU15-445/c05.mdx",sourceDirName:"CMU15-445",slug:"/CMU15-445/c05",permalink:"/RulerChen-Website/docs/CMU15-445/c05",draft:!1,unlisted:!1,editUrl:"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/CMU15-445/c05.mdx",tags:[],version:"current",lastUpdatedAt:1723442166e3,sidebarPosition:5,frontMatter:{title:"Storage Models & Compression",sidebar_position:5,description:"CMU15-445/645 Storage Models & Compression",keywords:["CMU15-445/645","Storage Models & Compression","CMU15-445/645 \u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"Database Storage",permalink:"/RulerChen-Website/docs/CMU15-445/c03"},next:{title:"Memory & Disk I/O Management",permalink:"/RulerChen-Website/docs/CMU15-445/c06"}},r={},c=[{value:"Database Workloads",id:"database-workloads",level:2},{value:"Storage Models",id:"storage-models",level:2},{value:"N-ary Storage Model (NSM)",id:"n-ary-storage-model-nsm",level:3},{value:"Decomposition Storage Model (DSM)",id:"decomposition-storage-model-dsm",level:3},{value:"Partition Attributes Across (PAX)",id:"partition-attributes-across-pax",level:3},{value:"Compression",id:"compression",level:2},{value:"Naive Compression (Block-level)",id:"naive-compression-block-level",level:2},{value:"Columnar Compression (Column-level)",id:"columnar-compression-column-level",level:2},{value:"Run-Length Encoding (RLE)",id:"run-length-encoding-rle",level:3},{value:"Bit-Packing Encoding",id:"bit-packing-encoding",level:3},{value:"Mostly Encoding",id:"mostly-encoding",level:3},{value:"Bitmap Encoding",id:"bitmap-encoding",level:3},{value:"Delta Encoding",id:"delta-encoding",level:3},{value:"Dictionary Compression",id:"dictionary-compression",level:3}];function a(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"database-workloads",children:"Database Workloads"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Database Workloads",src:i(6875).Z+"",width:"958",height:"541"})}),"\n",(0,s.jsx)(n.p,{children:"\u8cc7\u6599\u5eab\u53ef\u4ee5\u4f9d\u64da\u61c9\u7528\u5834\u666f\u5206\u70ba\u5169\u500b\u7dad\u5ea6 (\u67e5\u8a62\u8907\u96dc\u5ea6\u4ee5\u53ca\u8b80\u5beb\u6bd4\u4f8b) :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OLTP (Online Transaction Processing) : \u4e00\u4e9b\u7c21\u55ae\u7684\u8b80\u5beb\u64cd\u4f5c\uff0c\u4e14\u901a\u5e38\u53ea\u5305\u542b\u4e00\u5c0f\u90e8\u5206\u7684\u8cc7\u6599"}),"\n",(0,s.jsx)(n.li,{children:"OLAP (Online Analytical Processing) : \u4e00\u4e9b\u8907\u96dc\u7684\u67e5\u8a62\uff0c\u4e14\u6709\u5927\u91cf\u7684\u8cc7\u6599\u805a\u5408"}),"\n",(0,s.jsx)(n.li,{children:"HTAP (Hybrid Transaction/Analytical Processing) : \u540c\u6642\u652f\u6301 OLTP \u548c OLAP"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"storage-models",children:"Storage Models"}),"\n",(0,s.jsx)(n.p,{children:"relational model \u4e26\u6c92\u6709\u5f37\u8abf\u540c\u4e00\u500b tuple \u7684\u6240\u6709\u5c6c\u6027\u90fd\u8981\u88ab\u5132\u5b58\u5728\u540c\u4e00\u500b page \u4e2d\uff0c\n\u5728\u4e0d\u540c\u7684\u61c9\u7528\u5834\u666f\u4e0b\uff0c\u6211\u5011\u53ef\u4ee5\u6709\u4e0d\u4e00\u6a23\u7684\u505a\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5e38\u898b\u7684\u5132\u5b58\u6a21\u578b\u6709\u4ee5\u4e0b\u5e7e\u7a2e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"N-ary Storage Model (NSM) (row store)"}),"\n",(0,s.jsx)(n.li,{children:"Decomposition Storage Model (DSM) (column store)"}),"\n",(0,s.jsx)(n.li,{children:"Hybrid Storage Model (PAX)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"n-ary-storage-model-nsm",children:"N-ary Storage Model (NSM)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"N-ary Storage Model (NSM)",src:i(5716).Z+"",width:"958",height:"536"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u540c\u6211\u5011\u4e4b\u524d\u6240\u5b78\u7684\u4e00\u6a23\uff0cNSM \u6703\u5c07\u4e00\u500b tuple \u7684\u5c6c\u6027\u5728 page \u4e2d\u9023\u7e8c\u5132\u5b58\uff0c\n\u9019\u7a2e\u5132\u5b58\u65b9\u5f0f\u8f03\u70ba\u9069\u5408 OLTP \u7684\u61c9\u7528\u5834\u666f\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"N-ary Storage Model (NSM)",src:i(1620).Z+"",width:"957",height:"539"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u5716\u6240\u793a\uff0c\u4e00\u822c\u7684 OLTP \u61c9\u7528\u5834\u666f\u4e2d\uff0c\u6211\u5011\u6703\u6709\u5927\u91cf\u7684\u77ed\u5c0f\u7684\u67e5\u8a62\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u900f\u904e index \u4e4b\u5f8c\u8fd4\u9084\u6240\u6709\u8cc7\u6599\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"N-ary Storage Model (NSM)",src:i(5566).Z+"",width:"958",height:"536"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u5c0d\u65bc OLAP \u61c9\u7528\u5834\u666f\uff0c\u5373\u4f7f\u6211\u5011\u53ea\u9700\u8981\u4e00\u500b tuple \u7684\u90e8\u5206\u5c6c\u6027\uff0c\u6211\u5011\u4e5f\u9700\u8981\u8b80\u53d6\u6574\u500b page\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7e3d\u7d50\u4f86\u8aaa\uff0cNSM \u7684\u512a\u7f3a\u9ede\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u512a\u9ede","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5feb\u901f\u7684 insert\u3001update\u3001delete"}),"\n",(0,s.jsx)(n.li,{children:"\u9069\u5408\u9700\u8981\u6240\u6709\u5c6c\u6027\u7684\u67e5\u8a62"}),"\n",(0,s.jsx)(n.li,{children:"\u9069\u5408\u4f7f\u7528 index \u7684\u67e5\u8a62"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7f3a\u9ede","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0d\u9069\u5408\u9700\u8981 table \u4e2d\u5927\u91cf tuple \u6216\u662f\u4e00\u90e8\u5206\u5c6c\u6027\u7684\u67e5\u8a62"}),"\n",(0,s.jsx)(n.li,{children:"\u8a18\u61b6\u9ad4\u4f7f\u7528\u6548\u7387\u8f03\u4f4e (\u9700\u8981\u8b80\u53d6\u6574\u500b page)"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u9069\u5408\u9032\u884c\u58d3\u7e2e"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"decomposition-storage-model-dsm",children:"Decomposition Storage Model (DSM)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Decomposition Storage Model (DSM)",src:i(6061).Z+"",width:"958",height:"541"})}),"\n",(0,s.jsx)(n.p,{children:"DSM \u6703\u5c07\u6240\u6709 tuple \u7684\u540c\u4e00\u500b\u5c6c\u6027\u5132\u5b58\u5728\u4e00\u8d77\uff0c\u9019\u7a2e\u5132\u5b58\u65b9\u5f0f\u8f03\u70ba\u9069\u5408 OLAP \u7684\u61c9\u7528\u5834\u666f\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Decomposition Storage Model (DSM)",src:i(2907).Z+"",width:"959",height:"542"})}),"\n",(0,s.jsx)(n.p,{children:"\u900f\u904e\u9019\u7a2e\u65b9\u5f0f\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684 I/O\uff0c\u53ea\u8b80\u53d6\u6211\u5011\u9700\u8981\u7684\u90e8\u5206\u5c6c\u6027\uff0c\n\u4f46\u9019\u6a23\u4e5f\u6703\u9020\u6210\u65b0\u7684\u554f\u984c\uff0c\n\u4f8b\u5982\u8981\u5982\u4f55\u5b58\u53d6\u540c\u4e00\u500b tuple \u7684\u4e0d\u540c\u5c6c\u6027\uff0c\n\u901a\u5e38\u9019\u500b\u554f\u984c\u6709\u5169\u7a2e\u89e3\u6c7a\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Decomposition Storage Model (DSM)",src:i(8545).Z+"",width:"956",height:"539"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed-length Offsets : \u6bcf\u500b\u5c6c\u6027\u90fd\u662f\u56fa\u5b9a\u9577\u5ea6\uff0c\u900f\u904e offset \u4f86\u5b58\u53d6 (\u5e38\u898b)"}),"\n",(0,s.jsx)(n.li,{children:"Embedded Tuple Ids : \u5728\u6bcf\u500b\u5c6c\u6027\u524d\u90fd\u52a0\u4e0a tuple id\uff0c\u900f\u904e tuple id \u4f86\u5b58\u53d6"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c0d fixed-length offsets \u4f86\u8aaa\uff0cpadding \u6703\u9020\u6210\u7a7a\u9593\u6d6a\u8cbb\uff0c\n\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u8003\u616e\u4f7f\u7528 dictionary compression\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7e3d\u7d50\u4f86\u8aaa\uff0cDSM \u7684\u512a\u7f3a\u9ede\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u512a\u9ede","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6e1b\u5c11 OLAP \u67e5\u8a62\u7684 I/O"}),"\n",(0,s.jsx)(n.li,{children:"\u8a18\u61b6\u9ad4\u4f7f\u7528\u6548\u7387\u8f03\u9ad8"}),"\n",(0,s.jsx)(n.li,{children:"\u9069\u5408\u9032\u884c\u58d3\u7e2e"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7f3a\u9ede","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"insert\u3001update\u3001delete \u8f03\u6162"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"partition-attributes-across-pax",children:"Partition Attributes Across (PAX)"}),"\n",(0,s.jsx)(n.p,{children:"PAX \u662f\u4e00\u7a2e\u6df7\u5408\u5f0f\u7684\u5132\u5b58\u6a21\u578b\uff0c\u76ee\u6a19\u662f\u5c07 column store \u7684\u512a\u9ede (\u8655\u7406\u901f\u5ea6) \u548c row store \u7684\u512a\u9ede (\u7a7a\u9593) \u7d50\u5408\u5728\u4e00\u8d77\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Partition Attributes Across (PAX)",src:i(6401).Z+"",width:"959",height:"533"})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u7a2e\u5132\u5b58\u65b9\u5f0f\u6703\u5148\u5c07 tuple \u5206\u6210\u5e7e\u500b group\uff0c\n\u5728\u6bcf\u500b group \u4e2d\uff0c\u8cc7\u6599\u6703\u4ee5 column store \u7684\u65b9\u5f0f\u5132\u5b58\uff0c\n\u540c\u6642\u5728 global header \u4e2d\u5132\u5b58\u6bcf\u500b tuple \u7684 offset\uff0c\n\u4e14\u6bcf\u500b group \u4e5f\u90fd\u6709\u81ea\u5df1\u7684 header \u4f86\u5132\u5b58 metadata\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"compression",children:"Compression"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u65bc disk I/O \u662f\u8cc7\u6599\u5eab\u4e2d\u6700\u8017\u6642\u7684\u64cd\u4f5c\uff0c\n\u56e0\u6b64\u58d3\u7e2e\u88ab\u5ee3\u6cdb\u7684\u4f7f\u7528\u5728 disk-oriented \u7684\u8cc7\u6599\u5eab\u4e2d\uff0c\n\u7279\u5225\u662f\u5728\u4e00\u4e9b read-only \u7684 OLAP \u61c9\u7528\u5834\u666f\u4e0b\uff0c\n\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u63d0\u5347 I/O \u7684\u6548\u7387\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 DBMS \u4e2d\uff0c\u6211\u5011\u5e0c\u671b\u58d3\u7e2e\u4e4b\u5f8c\u53ef\u4ee5\u9054\u5230\u4ee5\u4e0b\u5e7e\u500b\u76ee\u6a19"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7522\u751f fixed-length \u7684\u503c"}),"\n",(0,s.jsx)(n.li,{children:"\u53ea\u6709\u7576\u9700\u8981\u7684\u6642\u5019\u624d\u89e3\u58d3\u7e2e"}),"\n",(0,s.jsx)(n.li,{children:"\u7121\u640d\u58d3\u7e2e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u91dd\u5c0d\u58d3\u7e2e\u7684\u7c92\u5ea6\uff0c\u5927\u81f4\u5206\u70ba\u4ee5\u4e0b\u5e7e\u7a2e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Block-level : \u58d3\u7e2e\u540c\u4e00\u500b\u8868\u7684\u90e8\u5206 tuple"}),"\n",(0,s.jsx)(n.li,{children:"Tuple-level : \u58d3\u7e2e\u6574\u500b tuple (NSM only)"}),"\n",(0,s.jsx)(n.li,{children:"Attribute-level : \u58d3\u7e2e\u4e00\u500b tuple \u5167\u7684\u55ae\u4e00\u6ea2\u51fa (overflow) \u5c6c\u6027\uff0c\u5982 blob"}),"\n",(0,s.jsx)(n.li,{children:"Column-level : \u58d3\u7e2e\u591a\u500b tuple \u5132\u5b58\u7684\u4e00\u500b\u6216\u591a\u500b\u5c6c\u6027 (DSM only)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"naive-compression-block-level",children:"Naive Compression (Block-level)"}),"\n",(0,s.jsx)(n.p,{children:"\u5927\u591a\u6578\u7684 DBMS \u90fd\u6703\u4f7f\u7528\u4e00\u822c\u7684\u58d3\u7e2e\u7b97\u6cd5\uff0c\u5982 gzip\u3001snappy\u3001lz4\u3001Zstd \u7b49\uff0c\n\u4e3b\u8981\u8003\u91cf\u7684\u9ede\u662f\u58d3\u7e2e\u7387\u548c\u58d3\u7e2e / \u89e3\u58d3\u7e2e\u901f\u5ea6\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Naive Compression",src:i(4987).Z+"",width:"956",height:"536"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u500b\u6709\u540d\u7684\u58d3\u7e2e\u4f8b\u5b50\u662f MySQL \u7684 InnoDB\uff0cInnoDB \u6703\u5c07 page \u58d3\u7e2e\u6210 1\u30012\u30014\u30018 KB \u518d\u50b3\u9001\u5230 buffer pool \u4e2d\uff0c\n\u5982\u679c\u6211\u5011\u9700\u8981\u5beb\u5165\u8cc7\u6599\uff0cInnoDB \u6703\u5c07\u8cc7\u6599\u5beb\u5165\u5230 mod log \u4e2d\u800c\u4e0d\u9700\u8981\u89e3\u58d3\u7e2e\uff0c\n\u4f46\u5982\u679c\u6211\u5011\u9700\u8981\u8b80\u53d6\u8cc7\u6599\uff0cInnoDB \u6703\u5c07\u5168\u90e8\u89e3\u58d3\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u500b\u65b9\u6cd5\u7684\u7f3a\u9ede\u5728\u65bc\uff0c\n\u5982\u679c\u6211\u5011\u9700\u8981\u4fee\u6539\uff0c\u6211\u5011\u9700\u8981\u89e3\u58d3\u7e2e\u8cc7\u6599\uff0c\n\u9019\u9650\u5236\u4e86\u58d3\u7e2e\u7684\u7bc4\u570d\uff0c\u4f7f\u5f97\u6211\u5011\u5fc5\u9808\u8981\u8cc7\u6599\u5206\u6210\u8f03\u5c0f\u7684 block \u4f86\u9032\u884c\u58d3\u7e2e\u3002\n\u53e6\u4e00\u500b\u554f\u984c\u662f\u58d3\u7e2e\u4e0d\u6703\u8003\u616e\u8cc7\u6599\u7684\u7d50\u69cb\uff0c\u4e5f\u4e0d\u6703\u77e5\u9053 query plan \u5982\u4f55\u8a2a\u554f\u8cc7\u6599\uff0c\n\u56e0\u6b64 DBMS \u4e0d\u6703\u77e5\u9053\u8981\u600e\u9ebc\u5ef6\u9072\u89e3\u58d3\u7e2e\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"columnar-compression-column-level",children:"Columnar Compression (Column-level)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Columnar Compression",src:i(1406).Z+"",width:"958",height:"537"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7406\u60f3\u8acb\u6cc1\u4e0b\uff0c\u6211\u5011\u5e0c\u671b\u53ef\u4ee5\u5728\u8b80\u8cc7\u6599\u7684\u6642\u5019\u4e0d\u9700\u8981\u5c0d\u6574\u500b page \u89e3\u58d3\u7e2e\uff0c\n\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u5c0d\u67e5\u8a62\u7684 query \u9032\u884c\u4e00\u4e9b\u8f49\u63db\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"run-length-encoding-rle",children:"Run-Length Encoding (RLE)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Run-Length Encoding (RLE)",src:i(5293).Z+"",width:"957",height:"538"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u53ef\u4ee5\u5c07\u4e00\u6a23\u7684\u503c\u58d3\u7e2e\u6210\u4e09\u5143\u7d44 (value, offset, length)\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Run-Length Encoding (RLE)",src:i(7983).Z+"",width:"961",height:"541"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u6392\u5e8f\u4f86\u6e1b\u5c11\u7a7a\u9593\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"bit-packing-encoding",children:"Bit-Packing Encoding"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Bit-Packing Encoding",src:i(4171).Z+"",width:"958",height:"538"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6574\u6578\u7684\u503c\u5c0f\u65bc\u7d66\u5b9a\u985e\u578b\u7684\u503c\u7684\u4f4d\u6578\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u6574\u6578\u58d3\u7e2e\u6210\u8f03\u5c0f\u7684\u4f4d\u6578\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"mostly-encoding",children:"Mostly Encoding"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mostly Encoding",src:i(9071).Z+"",width:"957",height:"538"})}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u5927\u90e8\u5206\u7684\u503c\u7684\u4f4d\u6578\u5c0f\u65bc\u6700\u5927\u7684\u5927\u5c0f\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u5c0d\u5927\u90e8\u5206\u7684\u503c\u9032\u884c\u58d3\u7e2e\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"bitmap-encoding",children:"Bitmap Encoding"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Bitmap Encoding",src:i(4339).Z+"",width:"959",height:"540"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c0d\u65bc\u6bcf\u500b\u4e0d\u540c\u7684\u503c\uff0c\u6211\u5011\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b bitmap \u4f86\u8868\u793a\u662f\u5426\u6709\u9019\u500b\u503c\uff0c\n\u4e0d\u9069\u5408\u7528\u5728\u9ad8 cardinality \u7684 column\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"delta-encoding",children:"Delta Encoding"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delta Encoding",src:i(4826).Z+"",width:"959",height:"540"})}),"\n",(0,s.jsx)(n.p,{children:"\u7d00\u9304\u5dee\u7684\u503c\uff0c\u9069\u5408\u7528\u5728\u6709\u5e8f\u7684 column\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"dictionary-compression",children:"Dictionary Compression"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Dictionary Compression",src:i(4336).Z+"",width:"956",height:"537"}),"\n",(0,s.jsx)(n.img,{alt:"Dictionary Compression",src:i(8986).Z+"",width:"959",height:"539"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5e38\u898b\u7684\u58d3\u7e2e\u65b9\u5f0f\uff0c\n\u5c07\u5e38\u898b\u7684\u503c\u8f49\u63db\u6210\u4e00\u500b\u8f03\u5c0f\u4e14\u56fa\u5b9a\u9577\u5ea6\u7684\u503c\uff0c\n\u4e26\u4e14\u7dad\u8b77\u4e00\u500b dictionary \u4f86\u5c0d\u61c9\u539f\u672c\u7684\u503c\uff0c\n\u7531\u65bc\u9700\u8981\u52a0\u89e3\u78bc\uff0c\u56e0\u6b64\u7121\u6cd5\u4f7f\u7528 hash function \u4f86\u5c0d\u61c9\u539f\u672c\u7684\u503c\uff0c\n\u9664\u6b64\u4e4b\u5916\uff0c\u9084\u9700\u8981\u6ce8\u610f\u9806\u5e8f\u4f86\u78ba\u4fdd\u4f7f\u7528\u58d3\u7e2e\u548c\u672a\u58d3\u7e2e\u7684\u7d50\u679c\u662f\u4e00\u6a23\u7684 (\u5982\u6392\u5e8f\u3001\u7bc4\u570d\u67e5\u8a62\u7b49\u7b49)\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e09\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u7528\u4f86\u5132\u5b58 dictionary"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Dictionary Compression",src:i(1900).Z+"",width:"958",height:"536"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Array","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u500b\u9663\u5217\u5132\u5b58\u9577\u5ea6\u548c\u5b57\u4e32\uff0c\u53e6\u4e00\u500b\u9663\u5217\u5132\u5b58 offset"}),"\n",(0,s.jsx)(n.li,{children:"update\u3001delete \u8f03\u6162"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Hash Table","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901f\u5ea6\u8f03\u5feb"}),"\n",(0,s.jsx)(n.li,{children:"\u7121\u6cd5\u652f\u6301 range query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["B+ Tree","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6bd4 hash table \u6162\uff0c\u4e14\u9700\u8981\u6d88\u8017\u8a18\u61b6\u9ad4"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 range query"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1406:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-10-cc3139c0989c7ecbb4373377d3bde71a.png"},5293:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-11-dfd7e1457c808c2ca818e7ad9fb14c43.png"},7983:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-12-19001bd128c653d6101c0c762e14e205.png"},4171:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-13-e622f7a0270635610cbeeb5ffcfc9632.png"},9071:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-14-a5afbc87322a2dcfba3bf336f3b7beb8.png"},4339:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-15-6f6c420922431f08d3fb972dfd04dd47.png"},4826:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-16-7902b8cfc2b1f7f0b25e279f9bb98b82.png"},8986:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-17-b1c5c6d17a7efd26953d99b017981174.png"},4336:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-18-c24c523c076b89db09b79791f7cd4840.png"},1900:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-19-2e36ca1f6d1b3b59d313907d2c097245.png"},1620:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-2-563ddfb39e06325286c3ef2001bdd161.png"},5716:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-3-249a2ed35dd8b8d9b60f7a7cefa8b1ff.png"},5566:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-4-8b7d4b59eb372788ef27e1c01c39d180.png"},6061:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-5-a2b72a084b3bd74c07c97a4ef9d13bb8.png"},2907:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-6-3a2bbdb520b5c6fe6ee8dc10cc49bd5f.png"},8545:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-7-0e563ea52ac79c55a94017391a6fbc12.png"},6401:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-8-aa741473f53554bf80433c7b3ce80f2e.png"},4987:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-9-5a46fb17733fe7f8aa5a3dc278023a38.png"},6875:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-1563e741d1df822ea141fa0563d197a3.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var s=i(7294);const l={},d=s.createContext(l);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);