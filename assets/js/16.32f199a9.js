(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{442:function(t,s,a){t.exports=a.p+"assets/img/1418466-20180810112625596-2103906128.7bd76d30.png"},443:function(t,s,a){t.exports=a.p+"assets/img/1418466-20180812200309137-101174843.4405c74e.png"},444:function(t,s,a){t.exports=a.p+"assets/img/image-20230109172428187.ea26a55f.png"},505:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),s("p",[t._v("HTTP是超文本传输协议，其定义了客户端与服务器端之间文本传输的规范。是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。")]),t._v(" "),s("p",[t._v("HTTP 协议是一个"),s("strong",[t._v("双向协议")]),t._v("。")]),t._v(" "),s("p",[t._v("我们在上网冲浪时，浏览器是请求方 A ，目标网站就是应答方 B，数据虽然是在 A 和 B 之间传输，但允许中间有"),s("strong",[t._v("中转或接力")]),t._v("。")]),t._v(" "),s("p",[t._v("传递的过程中如果需要经过好多个中间人，这样的传输方式就从「A < --- > B」，变成了「A <-> N <-> M <-> B」。")]),t._v(" "),s("p",[t._v("而在 HTTP 里，需要中间人遵从 HTTP 协议")]),t._v(" "),s("h2",{attrs:{id:"http协议请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议请求方式"}},[t._v("#")]),t._v(" HTTP协议请求方式")]),t._v(" "),s("p",[t._v("HTTP默认使用80端口，这个端口指的是服务端的端口，而客户端使用的端口是动态分配的。当我们没有指定端口访问时，浏览器会默认帮我们添加80端口。我们也可以自己指定访问端口如：http://www.ip138.com:80。 需要注意的是，现在大多数访问都使用了HTTPS协议，而HTTPS的默认端口为443，如果使用80端口访问HTTPS协议的服务器可能会被拒绝。")]),t._v(" "),s("p",[t._v("HTTP请求的方法：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HTTP/1.1协议中共定义了八种方法（有时也叫“动作”），来表明Request-URL指定的资源不同的操作方式")])]),t._v(" "),s("li",[s("p",[t._v("HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。")])]),t._v(" "),s("li",[s("p",[t._v("HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(442),alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"get与post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get与post"}},[t._v("#")]),t._v(" GET与POST")]),t._v(" "),s("p",[t._v("“get”方法提交的数据会直接填充在请求报文的URL上，如“ https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1 ”  “？”问号划分域名和get提交的参数，A=B中的A是参数名，B是参数值，多个参数之间用&进行分割，如果参数值是中文，则会转换成诸如%ab%12加密16进制码。一般来说，浏览器处理的URL最大限度长度为1024B（不同浏览器不一样），所以GET方法提交参数长度有限制。")]),t._v(" "),s("p",[t._v("​    “post”方法提交的数据会附在正文上，一般请求正文的长度是没有限制的，但表单中所能处理的长度一般为100k（不同协议不同浏览器不一样）,而且需要考虑下层报文的传输效率，不推荐过长。")]),t._v(" "),s("p",[t._v("​    所以GET方法可以用来传输一些可以公开的参数信息，解析也比较方便，如百度的搜索的关键词，而POST方法可以用来提交一个用户的敏感信息（如果不使用HTTPS加密，报文正文仍旧是明文，容易被人截获读取）")]),t._v(" "),s("h2",{attrs:{id:"http工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http工作原理"}},[t._v("#")]),t._v(" HTTP工作原理")]),t._v(" "),s("p",[t._v("HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了请求/响应模型。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。")]),t._v(" "),s("h3",{attrs:{id:"http-请求-响应的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-请求-响应的步骤"}},[t._v("#")]),t._v(" HTTP 请求/响应的步骤")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("客户端连接到Web服务器")])]),t._v(" "),s("p",[t._v("一个HTTP客户端，通常是浏览器，与Web服务器的HTTP端口（默认为80）建立一个TCP套接字连接。例如，"),s("a",{attrs:{href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.baidu.com"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("发送HTTP请求")])])])]),t._v(" "),s("p",[t._v("通过TCP套接字，客户端向Web服务器发送一个文本的请求报文，一个请求报文由请求行、请求头部、空行和请求数据4部分组成。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("strong",[t._v("服务器接受请求并返回HTTP响应")])]),t._v(" "),s("p",[t._v("Web服务器解析请求，定位请求资源。服务器将资源复本写到TCP套接字，由客户端读取。一个响应由状态行、响应头部、空行和响应数据4部分组成。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("释放连接TCP连接")])])])]),t._v(" "),s("p",[t._v("若connection 模式为close，则服务器主动关闭TCP连接，客户端被动关闭连接，释放TCP连接;若connection 模式为keepalive，则该连接会保持一段时间，在该时间内可以继续接收请求")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[t._v("客户端浏览器解析HTML内容")])])]),t._v(" "),s("p",[t._v("客户端浏览器首先解析状态行，查看表明请求是否成功的状态代码。然后解析每一个响应头，响应头告知以下为若干字节的HTML文档和文档的字符集。客户端浏览器读取响应数据HTML，根据HTML的语法对其进行格式化，并在浏览器窗口中显示。")]),t._v(" "),s("h2",{attrs:{id:"http请求消息request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求消息request"}},[t._v("#")]),t._v(" HTTP请求消息Request")]),t._v(" "),s("p",[t._v("客户端发送一个HTTP请求到服务器的请求消息包括以下格式")]),t._v(" "),s("p",[t._v("请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。")]),t._v(" "),s("p",[t._v("请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本")]),t._v(" "),s("p",[t._v("Get请求例子，使用Charles抓取的request：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /562f25980001b1b106000338.jpg HTTP/1.1\nHost    img.mukewang.com\nUser-Agent  Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 \nAccept    image/webp,image/*,*/*;q=0.8\nReferer    http://www.imooc.com/\nAccept-Encoding    gzip, deflate, sdch\nAccept-Language    zh-CN,zh;q=0.8\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("第一部分：请求行，用来说明请求类型,要访问的资源以及所使用的HTTP版本.")])]),t._v(" "),s("p",[t._v("GET说明请求类型为GET,[/562f25980001b1b106000338.jpg]为要访问的资源，该行的最后一部分说明使用的是HTTP1.1版本。")]),t._v(" "),s("p",[s("strong",[t._v("第二部分：请求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息")])]),t._v(" "),s("p",[t._v("从第二行起为请求头部，HOST将指出请求的目的地.User-Agent,服务器端和客户端脚本都能访问它,它是浏览器类型检测逻辑的重要基础.该信息由你的浏览器来定义,并且在每个请求中自动发送等等")]),t._v(" "),s("p",[s("strong",[t._v("第三部分：空行，请求头部后面的空行是必须的")])]),t._v(" "),s("p",[t._v("即使第四部分的请求数据为空，也必须有空行。")]),t._v(" "),s("p",[s("strong",[t._v("第四部分：请求数据也叫主体，可以添加任意的其他数据。")])]),t._v(" "),s("p",[t._v("这个例子的请求数据为空。")]),t._v(" "),s("p",[s("strong",[t._v("POST请求例子，使用Charles抓取的request：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST / HTTP1.1\nHost:www.wrox.com\nUser-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)\nContent-Type:application/x-www-form-urlencoded\nContent-Length:40\nConnection: Keep-Alive\n\nname=Professional%20Ajax&publisher=Wiley\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("第一部分：请求行，第一行明了是post请求，以及http1.1版本。\n第二部分：请求头部，第二行至第六行。\n第三部分：空行，第七行的空行。\n第四部分：请求数据，第八行。")]),t._v(" "),s("h2",{attrs:{id:"http请求消息response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求消息response"}},[t._v("#")]),t._v(" HTTP请求消息Response")]),t._v(" "),s("p",[t._v("一般情况下，服务器接收并处理客户端发过来的请求后会返回一个HTTP的响应消息。")]),t._v(" "),s("p",[t._v("HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文")]),t._v(" "),s("p",[s("img",{attrs:{src:a(443),alt:""}})]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("HTTP/1.1 200 OK\nDate: Fri, 22 May 2009 06:07:21 GMT\nContent-Type: text/html; charset=UTF-8\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--body goes here--\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[s("strong",[t._v("第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。")])]),t._v(" "),s("p",[t._v("第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）")]),t._v(" "),s("p",[s("strong",[t._v("第二部分：消息报头，用来说明客户端要使用的一些附加信息")])]),t._v(" "),s("p",[t._v("第二行和第三行为消息报头，\nDate:生成响应的日期和时间；Content-Type:指定了MIME类型的HTML(text/html),编码类型是UTF-8")]),t._v(" "),s("p",[s("strong",[t._v("第三部分：空行，消息报头后面的空行是必须的")])]),t._v(" "),s("p",[s("strong",[t._v("第四部分：响应正文，服务器返回给客户端的文本信息。")])]),t._v(" "),s("p",[t._v("空行后面的html部分为响应正文。")]),t._v(" "),s("h2",{attrs:{id:"常见的http状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的http状态码"}},[t._v("#")]),t._v(" 常见的HTTP状态码")]),t._v(" "),s("p",[s("img",{attrs:{src:a(444),alt:"image-20230109172428187"}})]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("200 OK")]),t._v(" 是最常见的成功状态码，表示一切正常。如果是非 "),s("code",[t._v("HEAD")]),t._v(" 请求，服务器返回的响应头都会有 body 数据")])]),t._v(" "),s("li",[s("p",[t._v("**204 No Content ** 也是常见的成功状态码，与 200 OK 基本相同，但响应头没有 body 数据。")])]),t._v(" "),s("li",[s("p",[t._v("**206 Partial Content ** 是应用于 HTTP 分块下载或断点续传，表示响应返回的 body 数据并不是资源的全部，而是其中的一部分，也是服务器处理成功的状态。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("301 Moved Permanently")]),t._v("  表示永久重定向，说明请求的资源已经不存在了，需改用新的 URL 再次访问。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("302 Found")]),t._v("  表示临时重定向，说明请求的资源还在，但暂时需要用另一个 URL 来访问。")])])]),t._v(" "),s("p",[t._v("301 和 302 都会在响应头里使用字段 "),s("code",[t._v("Location")]),t._v("，指明后续要跳转的 URL，浏览器会自动重定向新的 URL。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("304 Not Modified")]),t._v("   不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称缓存重定向，也就是告诉客户端可以继续使用缓存资源，用于缓存控制。")]),t._v(" "),s("li",[s("strong",[t._v("400 BadRequest")]),t._v("   表示客户端请求的报文有错误，但只是个笼统的错误")]),t._v(" "),s("li",[s("strong",[t._v("401 Unauthorized")]),t._v("    用户没有访问权限，需要进行身份认证")]),t._v(" "),s("li",[t._v("**403 Forbidden **   表示服务器禁止访问资源，并不是客户端的请求出错")]),t._v(" "),s("li",[s("strong",[t._v("404 Not Found")]),t._v("    当资源不存在时，出现此结果。")]),t._v(" "),s("li",[s("strong",[t._v("405 Method Not Allowed")]),t._v("   由于方法和资源组合不正确而出现此错误。 例如，您不能对一个实体集合使用 DELETE 或 PATCH。")]),t._v(" "),s("li",[s("strong",[t._v("501  Not Implemented")]),t._v("   表示客户端请求的功能还不支持。")]),t._v(" "),s("li",[s("strong",[t._v("502 Bad Gateway")]),t._v("  通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误。")]),t._v(" "),s("li",[s("strong",[t._v("503 Service Unavailable")]),t._v("    表示服务器当前很忙，暂时无法响应客户端")])]),t._v(" "),s("h2",{attrs:{id:"解决粘包问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决粘包问题"}},[t._v("#")]),t._v(" 解决粘包问题")]),t._v(" "),s("p",[t._v("HTTP 协议通过设置回车符、换行符作为 HTTP header 的边界，通过 Content-Length 字段作为 HTTP body 的边界，这两个方式都是为了解决“粘包”的问题")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/08/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 协议入门 - 阮一峰的网络日志 (ruanyifeng.com)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("图解HTTP")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xiaolincoding.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小林coding (xiaolincoding.com)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xiaolincoding.com/network/2_http/http_interview.html#http-%E5%B8%B8%E8%A7%81%E5%AD%97%E6%AE%B5%E6%9C%89%E5%93%AA%E4%BA%9B",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.1 HTTP 常见面试题 | 小林coding (xiaolincoding.com)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);