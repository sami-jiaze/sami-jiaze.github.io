(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{519:function(t,s,v){t.exports=v.p+"assets/img/image-20230618115417577.01841c0d.png"},520:function(t,s,v){t.exports=v.p+"assets/img/image-20230618104026462.1e7fa98c.png"},521:function(t,s,v){t.exports=v.p+"assets/img/image-20230618114621784.a47c70ca.png"},522:function(t,s,v){t.exports=v.p+"assets/img/image-20230618114107229.e1087310.png"},523:function(t,s,v){t.exports=v.p+"assets/img/image-20230618111547220.b0e2d39d.png"},524:function(t,s,v){t.exports=v.p+"assets/img/image-20230618113405947.d1d83d57.png"},525:function(t,s,v){t.exports=v.p+"assets/img/image-20230618114908627.940eb35c.png"},526:function(t,s,v){t.exports=v.p+"assets/img/image-20230618115103315.dfaa32ec.png"},527:function(t,s,v){t.exports=v.p+"assets/img/1.d696619a.png"},695:function(t,s,v){"use strict";v.r(s);var _=v(2),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),s("p",[t._v("HTTP版本、HTTP性能优化手段")])]),t._v(" "),s("h2",{attrs:{id:"http版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http版本"}},[t._v("#")]),t._v(" HTTP版本")]),t._v(" "),s("ul",[s("li",[t._v("HTTP0.9只支持GET方法，只能发送HTML格式字符串")]),t._v(" "),s("li",[t._v("HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。增加头信息，每次只能发送一个请求（无持久连接）")]),t._v(" "),s("li",[t._v("HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法，默认持久连接、请求管道化、增加缓存处理、增加Host字段、支持断点传输分块传输等。")]),t._v(" "),s("li",[t._v("HTTP/2.0 二进制分帧、多路复用、头部压缩、服务器推送，基于 HTTPS 的安全性有保证")]),t._v(" "),s("li",[t._v("HTTP/3.0 传输协议改用了 UDP 协议。")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(519),alt:"image-20230618115417577"}})]),t._v(" "),s("h2",{attrs:{id:"http1-1不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-1不足"}},[t._v("#")]),t._v(" HTTP1.1不足")]),t._v(" "),s("ul",[s("li",[t._v("同一个时间一个连接只能对应一个请求")]),t._v(" "),s("li",[t._v("只允许客户端主动发起请求")]),t._v(" "),s("li",[t._v("一个请求只能对应一个响应")]),t._v(" "),s("li",[t._v("同一个会话的多次请求中，头信息会被重复传输")])]),t._v(" "),s("h2",{attrs:{id:"spdy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spdy"}},[t._v("#")]),t._v(" SPDY")]),t._v(" "),s("p",[t._v("基于TCP的应用层协议它强制要求使用SSL/TLS")]),t._v(" "),s("p",[t._v("2009年11月，Google宣布将SPDY作为提高网络速度的内部项目，是HTTP/2的前身，但HTTP2不强求使用TLS")]),t._v(" "),s("p",[s("img",{attrs:{src:v(520),alt:"image-20230618104026462"}})]),t._v(" "),s("h2",{attrs:{id:"http2新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2新特性"}},[t._v("#")]),t._v(" HTTP2新特性")]),t._v(" "),s("ul",[s("li",[t._v("采用二进制格式传输数据，而非HTTP1.1的文本格式")]),t._v(" "),s("li",[t._v("数据流：已建立的连接内的双向字节流，可以承载一条或多条信息")]),t._v(" "),s("li",[t._v("HTTP2的最小通信单位：帧，每个帧都包含帧头，会标识出当前帧所属的数据流，来自不同数据流的帧可以交错发送，然后再跟据每个帧头的数据流标识重新组装")]),t._v(" "),s("li",[t._v("头部压缩：使用HPACK压缩请求头和响应头，极大减少头部开销，进而提高性能")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(521),alt:"image-20230618114621784"}})]),t._v(" "),s("ul",[s("li",[t._v("服务器推送： 除了对最初的请求响应外，服务器可以对客户端推送额外的资源，节省潜在的再次请求")]),t._v(" "),s("li",[t._v("HTTP2允许每个数据流都有一个关联的权重和依赖关系，客户端可以构建和传递“优先级树”，表明它倾向于如何接受响应")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(522),alt:"image-20230618114107229"}})]),t._v(" "),s("ul",[s("li",[t._v("所有通信都在一个TCP连接上完成，此连接可以承载任意数量的双向数据流")]),t._v(" "),s("li",[t._v("多路复用：使用一个连接并行发送多个请求和响应，并且之间互不干扰")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(523),alt:"image-20230618111547220"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(524),alt:"image-20230618113405947"}})]),t._v(" "),s("p",[s("strong",[t._v("HTTP2的问题")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("握手延迟")])]),t._v(" "),s("li",[s("p",[t._v("队头阻塞")])])]),t._v(" "),s("p",[s("img",{attrs:{src:v(525),alt:"image-20230618114908627"}})]),t._v(" "),s("h2",{attrs:{id:"http3新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http3新特性"}},[t._v("#")]),t._v(" HTTP3新特性")]),t._v(" "),s("p",[t._v("使用QUIC (快速UDP网络连接)，弃用TCP协议，改用基于UDP协议的QUIC协议实现")]),t._v(" "),s("p",[s("img",{attrs:{src:v(526),alt:"image-20230618115103315"}})]),t._v(" "),s("ul",[s("li",[t._v("使用QUIC保证可靠传输")]),t._v(" "),s("li",[t._v("连接迁移，TCP基于4要素(源IP源端口，目标IP目标端口)，切换网络时至少会有一个要素发生变化，导致连接发生变化，当连接发生变化时，如果还使用原来的TCP连接，则会导致连接失败，就得等原来的连接超时后重新建立连接，所以我们有时候发现切换到一个新网络时，即使新网络状况良好，但内容还是需要加载很久，而QUIC不以四要素作为标识，而是使用一组Connect ID连接ID来标识一个连接")])]),t._v(" "),s("h2",{attrs:{id:"避免发送-http-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免发送-http-请求"}},[t._v("#")]),t._v(" 避免发送 HTTP 请求")]),t._v(" "),s("p",[t._v("因为在HTTP1.1中没有多路复用一个连接只能对应一个请求对应一个响应，所以之前的优化方式是将多个文件合并成一个文件统一发送。")]),t._v(" "),s("p",[t._v("而对于一些具有重复性的 HTTP 请求，比如每次请求得到的数据都一样的，我们可以把这对「请求-响应」的数据都"),s("strong",[t._v("缓存在本地")]),t._v("，那么下次就直接读取本地的数据，不必在通过网络获取服务器的响应了。")]),t._v(" "),s("p",[t._v("避免发送 HTTP 请求的方法就是通过"),s("strong",[t._v("缓存技术")])]),t._v(" "),s("p",[t._v("客户端会把第一次请求以及响应的数据保存在本地磁盘上，其中将请求的 URL 作为 key，而响应作为 value，两者形成映射关系。")]),t._v(" "),s("p",[t._v("这样当后续发起相同的请求时，就可以先在本地磁盘上通过 key 查到对应的 value，也就是响应，如果找到了，就直接从本地读取该响应")]),t._v(" "),s("p",[s("img",{attrs:{src:v(527),alt:""}})]),t._v(" "),s("p",[t._v("服务器在发送 HTTP 响应时，会估算一个过期的时间，并把这个信息放到响应头部中，这样客户端在查看响应头部的信息时，一旦发现缓存的响应是过期的，则就会重新发送网络请求。")]),t._v(" "),s("p",[t._v("如果客户端从第一次请求得到的响应头部中发现该响应过期了，客户端重新发送请求，假设服务器上的资源并没有变更，还是老样子，那么在服务器的响应不带上这个资源的话，可以提高 HTTP 协议的性能，那具体如何做到呢？")]),t._v(" "),s("p",[t._v("只需要客户端在重新发送请求时，在请求的 "),s("code",[t._v("Etag")]),t._v(" 头部带上第一次请求的响应头部中的摘要，这个摘要是唯一标识响应的资源，当服务器收到请求后，会将本地资源的摘要与请求中的摘要做个比较。")]),t._v(" "),s("p",[t._v("如果不同，那么说明客户端的缓存已经没有价值，服务器在响应中带上最新的资源。")]),t._v(" "),s("p",[t._v("如果相同，说明客户端的缓存还是可以继续使用的，那么服务器"),s("strong",[t._v("仅返回不含有包体的 "),s("code",[t._v("304 Not Modified")]),t._v(" 响应")]),t._v("，告诉客户端仍然有效，这样就可以减少响应资源在网络中传输的延时")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("strong",[t._v("小林coding")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6955293052432809991#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂浏览器缓存（超详细） - 掘金 (juejin.cn)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);