"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6234],{4869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(5893),r=t(1151);const d={title:"[C++] \u667a\u6167\u6307\u6a19 (Smart Pointer)",sidebar_position:"50",description:"C++ \u667a\u6167\u6307\u6a19",keywords:["C++","\u667a\u6167\u6307\u6a19","Smart Pointer"]},c=void 0,i={id:"C++/smartpointer",title:"[C++] \u667a\u6167\u6307\u6a19 (Smart Pointer)",description:"C++ \u667a\u6167\u6307\u6a19",source:"@site/docs/C++/smartpointer.mdx",sourceDirName:"C++",slug:"/C++/smartpointer",permalink:"/RulerChen-Website/docs/C++/smartpointer",draft:!1,unlisted:!1,editUrl:"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/C++/smartpointer.mdx",tags:[],version:"current",lastUpdatedAt:1730105636e3,sidebarPosition:50,frontMatter:{title:"[C++] \u667a\u6167\u6307\u6a19 (Smart Pointer)",sidebar_position:50,description:"C++ \u667a\u6167\u6307\u6a19",keywords:["C++","\u667a\u6167\u6307\u6a19","Smart Pointer"]},sidebar:"tutorialSidebar",previous:{title:"[C++] \u57fa\u672c\u4ecb\u7d39 (\u958b\u767c\u74b0\u5883\u3001\u7de8\u8b6f\u3001Debugger)",permalink:"/RulerChen-Website/docs/C++/intro"},next:{title:"[C++] \u79fb\u52d5\u8a9e\u610f (Move Semantics)",permalink:"/RulerChen-Website/docs/C++/move"}},o={},l=[{value:"RAII",id:"raii",level:2},{value:"std::unique_ptr",id:"stdunique_ptr",level:2},{value:"std::shared_ptr",id:"stdshared_ptr",level:2},{value:"std::weak_ptr",id:"stdweak_ptr",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6587\u6703\u8b1b\u89e3 C++ \u4e2d\u667a\u6167\u6307\u6a19 (smart pointer) \u7684\u57fa\u672c\u6982\u5ff5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"raii",children:"RAII"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9032\u5165\u667a\u6167\u6307\u6a19\u4e4b\u524d\uff0c\u9700\u8981\u5148\u4e86\u89e3\u932f\u8aa4\u7684\u6307\u6a19\u4f7f\u7528\u65b9\u5f0f\uff0c\u8209\u4f8b\u5982\u4e0b :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\n\nint main() {\n    int *p = new int(5);\n\n    int a = 5;\n    if (a == 5) {\n        throw 0;\n    }\n\n    // do something\n    delete p;\n    return 0;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u767c\u73fe\u7576 ",(0,s.jsx)(n.code,{children:"a == 5"})," \u6642\uff0c\u6703\u62cb\u51fa\u4f8b\u5916\uff0c\u4f46\u662f\u5728\u62cb\u51fa\u4f8b\u5916\u4e4b\u524d\uff0c\u6211\u5011\u6c92\u6709\u91cb\u653e ",(0,s.jsx)(n.code,{children:"p"})," \u6240\u6307\u5411\u7684\u8a18\u61b6\u9ad4\u800c\u9020\u6210\u8a18\u61b6\u9ad4\u6d29\u6f0f (memory leak)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\u5728 C++ \u4e2d\uff0c\u6700\u597d\u7684\u505a\u6cd5\u4e26\u975e\u662f\u624b\u52d5\u5728\u4f8b\u5916\u60c5\u6cc1\u4e2d\u91cb\u653e\u8a18\u61b6\u9ad4\uff0c\u800c\u662f\u5728 constructor \u4e2d\u5206\u914d\u8a18\u61b6\u9ad4\uff0c\u5728 destructor \u4e2d\u91cb\u653e\u8a18\u61b6\u9ad4\uff0c\u4e5f\u5c31\u662f\u6240\u8b02\u7684 RAII (Resource Acquisition Is Initialization)\u3002"}),"\n",(0,s.jsx)(n.p,{children:"C++11 \u5f15\u5165\u4e86\u56db\u7a2e\u667a\u6167\u6307\u6a19\u4f86\u89e3\u6c7a\u9019\u7a2e\u554f\u984c\uff0c\u5206\u5225\u662f :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"std::unique_ptr"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"std::shared_ptr"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"std::weak_ptr"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"std::auto_ptr"}),"(\u5728 C++17 \u4e2d\u79fb\u9664)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"stdunique_ptr",children:"std::unique_ptr"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"std::unique_ptr"})," \u662f\u4e00\u500b\u7368\u5360\u6240\u6709\u6b0a\u7684\u667a\u6167\u6307\u6a19\uff0c\u7981\u6b62\u5176\u4ed6\u667a\u6167\u6307\u6a19\u6307\u5411\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <memory> // for std::unique_ptr\n#include <utility> // for std::move\n\nclass Resource {\npublic:\n\tResource() { std::cout << "Resource acquired\\n"; }\n\t~Resource() { std::cout << "Resource destroyed\\n"; }\n};\n\nint main() {\n\tstd::unique_ptr<Resource> res1{ new Resource{} }; // Resource created here\n\tstd::unique_ptr<Resource> res2{}; // Start as nullptr\n\n\tstd::cout << "res1 is " << (res1 ? "not null\\n" : "null\\n");\n\tstd::cout << "res2 is " << (res2 ? "not null\\n" : "null\\n");\n\n\t// res2 = res1; // Won\'t compile: copy assignment is disabled\n\tres2 = std::move(res1); // res2 assumes ownership, res1 is set to null\n\n\tstd::cout << "Ownership transferred\\n";\n\n\tstd::cout << "res1 is " << (res1 ? "not null\\n" : "null\\n");\n\tstd::cout << "res2 is " << (res2 ? "not null\\n" : "null\\n");\n\n\treturn 0;\n} // Resource destroyed here when res2 goes out of scope\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u800c\u5728 C++14 \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"std::make_unique"})," \u4f86\u5efa\u7acb ",(0,s.jsx)(n.code,{children:"std::unique_ptr"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::unique_ptr<int> t = std::make_unique<int>(5);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"t.get()"})," \u4f86\u53d6\u5f97\u6307\u5411\u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"stdshared_ptr",children:"std::shared_ptr"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u662f\u4e00\u500b\u5171\u4eab\u6240\u6709\u6b0a\u7684\u667a\u6167\u6307\u6a19\uff0c\u5b83\u53ef\u4ee5\u8a18\u9304\u6709\u591a\u5c11\u500b ",(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u6307\u5411\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5f9e\u800c\u907f\u514d\u986f\u6027\u7684\u8abf\u7528 ",(0,s.jsx)(n.code,{children:"delete"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"shared_ptr"})," \u5167\u90e8\u6703\u7dad\u8b77\u5169\u500b\u6307\u6a19\uff0c\u4e00\u500b\u6307\u5411\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u4e00\u500b\u6307\u5411 control block\uff0ccontrol block \u6703\u8a18\u9304\u6709\u591a\u5c11\u500b ",(0,s.jsx)(n.code,{children:"shared_ptr"})," \u6307\u5411\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002\n\u7576\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"shared_ptr"})," \u6642\uff0c\u5169\u584a\u8a18\u61b6\u9ad4\u6703\u55ae\u7368\u5206\u914d\uff0c\u800c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"make_shared"})," \u6642\uff0c\u5169\u584a\u8a18\u61b6\u9ad4\u6703\u4e00\u8d77\u5206\u914d\u4e26\u7372\u5f97\u66f4\u597d\u7684\u6548\u80fd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"new"})," \u4f86\u5efa\u7acb ",(0,s.jsx)(n.code,{children:"std::shared_ptr"}),"\uff0c\u4f46\u975e\u5fc5\u8981\u7684\u8a71\u8acb\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"std::make_shared"})," \u4f86\u5efa\u7acb (\u7531\u65bc\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"new"})," \u6642\u6703\u7368\u7acb\u5206\u914d control block\uff0c\u6240\u4ee5\u53ef\u80fd\u5c0e\u81f4\u904e\u65e9\u522a\u9664)\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <memory> // for std::shared_ptr\n\nclass Resource {\npublic:\n\tResource() { std::cout << "Resource acquired\\n"; }\n\t~Resource() { std::cout << "Resource destroyed\\n"; }\n};\n\nint main() {\n\t// allocate a Resource object and have it owned by std::shared_ptr\n\tResource* res { new Resource };\n\tstd::shared_ptr<Resource> ptr1{ res };\n\t{\n\t\tstd::shared_ptr<Resource> ptr2 { ptr1 }; // make another std::shared_ptr pointing to the same thing\n\n\t\tstd::cout << "Killing one shared pointer\\n";\n\t} // ptr2 goes out of scope here, but nothing happens\n\n\tstd::cout << "Killing another shared pointer\\n";\n\n\treturn 0;\n} // ptr1 goes out of scope here, and the allocated Resource is destroyed\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::shared_ptr<int> t = std::make_shared<int>(5);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"get()"})," \u4f86\u53d6\u5f97\u539f\u59cb\u7684\u6307\u6a19\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"use_count()"})," \u4f86\u53d6\u5f97\u6709\u591a\u5c11\u500b ",(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u6307\u5411\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"reset()"})," \u4f86\u5c07\u8a08\u6578\u6e1b\u4e00\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::shared_ptr<int> t = std::make_shared<int>(5);\nstd::shared_ptr<int> t2 = t;\nstd::cout << t.use_count() << std::endl; // 2\nt2.reset();\nstd::cout << t.use_count() << std::endl; // 1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"stdweak_ptr",children:"std::weak_ptr"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u524d\u9762\u6211\u5011\u5df2\u7d93\u63d0\u5230\u904e\u95dc\u65bc ",(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4f46\u5982\u679c\u6211\u5011\u4ed4\u7d30\u89c0\u5bdf\uff0c\u5c31\u6703\u767c\u73fe\u9019\u7a2e\u65b9\u5f0f\u4f9d\u7136\u6709\u554f\u984c\uff0c\u8209\u4f8b\u5982\u4e0b :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'struct A;\nstruct B;\n\nstruct A {\n    std::shared_ptr<B> pointer;\n    ~A() {\n        std::cout << "A destroyed" << std::endl;\n    }\n};\nstruct B {\n    std::shared_ptr<A> pointer;\n    ~B() {\n        std::cout << "B destroyed" << std::endl;\n    }\n};\nint main() {\n    auto a = std::make_shared<A>();\n    auto b = std::make_shared<B>();\n    a->pointer = b;\n    b->pointer = a;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u7a0b\u5f0f\u78bc\u7684\u7d50\u679c\u5c31\u662f a \u8ddf b \u90fd\u4e0d\u6703\u88ab\u91cb\u653e\uff0c\u56e0\u70ba a \u8ddf b \u4e92\u76f8\u6307\u5411\u5c0d\u65b9\uff0c\u9020\u6210\u5faa\u74b0\u5f15\u7528\uff0c\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"std::weak_ptr"})," \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"std::weak_ptr"})," \u4e26\u4e0d\u6703\u8b93\u8a08\u6578\u589e\u52a0\uff0c\u800c\u662f\u626e\u6f14\u4e00\u500b ",(0,s.jsx)(n.strong,{children:"\u89c0\u5bdf\u8005"})," \u7684\u89d2\u8272\uff0c\u5728\u4e0a\u9762\u7684\u554f\u984c\u4e2d\uff0c\u53ef\u4ee5\u5c07\u5176\u4e2d\u4e00\u500b ",(0,s.jsx)(n.code,{children:"std::shared_ptr"})," \u6539\u70ba ",(0,s.jsx)(n.code,{children:"std::weak_ptr"})," \u5c31\u53ef\u4ee5\u907f\u514d\u5faa\u74b0\u5f15\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'struct A;\nstruct B;\n\nstruct A {\n    std::shared_ptr<B> pointer;\n    ~A() {\n        std::cout << "A destroyed" << std::endl;\n    }\n};\nstruct B {\n    std::weak_ptr<A> pointer;\n    ~B() {\n        std::cout << "B destroyed" << std::endl;\n    }\n};\nint main() {\n    auto a = std::make_shared<A>();\n    auto b = std::make_shared<B>();\n    a->pointer = b;\n    b->pointer = a;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"weak_ptr"})," \u9084\u6709\u4e00\u500b\u7f3a\u9ede\u662f\u5b83\u6c92\u6709 ",(0,s.jsx)(n.code,{children:"*"})," \u8ddf ",(0,s.jsx)(n.code,{children:"->"})," \u904b\u7b97\u5b50\uff0c\u56e0\u6b64\u6c92\u8fa6\u6cd5\u76f4\u63a5\u5c0d\u8cc7\u6e90\u9032\u884c\u64cd\u4f5c\uff0c\u5fc5\u9808\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"lock()"})," \u4f86\u53d6\u5f97 ",(0,s.jsx)(n.code,{children:"std::shared_ptr"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::shared_ptr<int> t = std::make_shared<int>(5);\nstd::weak_ptr<int> w = t;\nstd::shared_ptr<int> t2 = w.lock();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"expired()"})," \u4f86\u5224\u65b7 ",(0,s.jsx)(n.code,{children:"std::weak_ptr"})," \u662f\u5426\u5df2\u7d93\u5931\u6548\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"std::shared_ptr<int> t = std::make_shared<int>(5);\nstd::weak_ptr<int> w = t;\nstd::cout << w.expired() << std::endl; // 0\nt.reset();\nstd::cout << w.expired() << std::endl; // 1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://changkun.de/modern-cpp/zh-cn/05-pointers/",children:"Modern C++ Tutorial"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.learncpp.com/",children:"Learn C++"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var s=t(7294);const r={},d=s.createContext(r);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);