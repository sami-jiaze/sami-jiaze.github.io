(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{547:function(t,_,v){t.exports=v.p+"assets/img/image-20230106150336737.a2d21645.png"},548:function(t,_,v){t.exports=v.p+"assets/img/image-20221217013726366.03ef0e15.png"},549:function(t,_,v){t.exports=v.p+"assets/img/image-20230314081023404.e3b31278.png"},550:function(t,_,v){t.exports=v.p+"assets/img/image-20230105091840901.44f1e0ed.png"},551:function(t,_,v){t.exports=v.p+"assets/img/image-20230603141820780.86a04b10.png"},552:function(t,_,v){t.exports=v.p+"assets/img/image-20230603145743743.c9adb787.png"},553:function(t,_,v){t.exports=v.p+"assets/img/image-20230603145708483.0cfec493.png"},554:function(t,_,v){t.exports=v.p+"assets/img/image-20230604155053171.e832ae62.png"},555:function(t,_,v){t.exports=v.p+"assets/img/image-20230604164241946.0c9a923e.png"},556:function(t,_,v){t.exports=v.p+"assets/img/image-20230604155158683.0915f2f9.png"},557:function(t,_,v){t.exports=v.p+"assets/img/image-20230106151926264.c5d93c46.png"},558:function(t,_,v){t.exports=v.p+"assets/img/image-20230104142517500.b833d7a2.png"},559:function(t,_,v){t.exports=v.p+"assets/img/image-20230106152839345.2517793a.png"},661:function(t,_,v){"use strict";v.r(_);var s=v(2),e=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[t._v("OSI 7层模型、TCP/IP分层模型、五层网络模型")]),t._v(" "),_("p",[t._v("更新时间: 2023/3/14")])]),t._v(" "),_("h2",{attrs:{id:"网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[t._v("#")]),t._v(" 网络模型")]),t._v(" "),_("p",[t._v("对于同一台设备上的进程间通信，有很多种方式，比如有管道、消息队列、共享内存、信号等方式，而对于不同设备上的进程间通信，就需要网络通信，而设备是多样性的，所以要兼容多种多样的设备，就协商出了一套"),_("strong",[t._v("通用的网络协议")]),t._v("。")]),t._v(" "),_("p",[t._v("这个网络协议是分层的，每一层都有各自的作用和职责")]),t._v(" "),_("h2",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),_("h2",{attrs:{id:"osi-7层模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#osi-7层模型"}},[t._v("#")]),t._v(" OSI 7层模型")]),t._v(" "),_("p",[t._v("OSI: open system interconnection 开放式系统互联参考模型")]),t._v(" "),_("p",[_("img",{attrs:{src:v(547),alt:"image-20230106150336737"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(548),alt:"image-20221217013726366"}})]),t._v(" "),_("p",[_("strong",[t._v("应用层")])]),t._v(" "),_("p",[_("code",[t._v("OSI")]),t._v("参考模型中最靠近用户的一层，是为计算机用户提供应用接口，也为用户直接提供各种网络服务。我们常见应用层的网络服务协议有："),_("code",[t._v("HTTP")]),t._v("，"),_("code",[t._v("HTTPS")]),t._v("，"),_("code",[t._v("FTP")]),t._v("，"),_("code",[t._v("POP3")]),t._v("、"),_("code",[t._v("SMTP")]),t._v("等。")]),t._v(" "),_("p",[_("strong",[t._v("表示层")])]),t._v(" "),_("p",[t._v("表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。数据压缩和加密也是表示层可提供的转换功能之一。")]),t._v(" "),_("p",[t._v("在项目开发中，为了方便数据传输，可以使用"),_("code",[t._v("base64")]),t._v("对数据进行编解码。如果按功能来划分，"),_("code",[t._v("base64")]),t._v("应该是工作在表示层")]),t._v(" "),_("p",[_("strong",[t._v("会话层")])]),t._v(" "),_("p",[t._v("会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。")]),t._v(" "),_("p",[_("strong",[t._v("传输层")])]),t._v(" "),_("p",[t._v("传输层建立了主机端到端的链接，传输层的作用是为上层协议提供端到端的可靠和透明的数据传输服务，包括处理差错控制和流量控制等问题。该层向高层屏蔽了下层数据通信的细节，使高层用户看到的只是在两个传输实体间的一条主机到主机的、可由用户控制和设定的、可靠的数据通路。我们通常说的，"),_("code",[t._v("TCP")]),t._v(" "),_("code",[t._v("UDP")]),t._v("就是在这一层。端口号既是这里的“端”。常把这一层的数据叫做段。")]),t._v(" "),_("p",[_("strong",[t._v("网络层")])]),t._v(" "),_("p",[t._v("本层通过"),_("code",[t._v("IP")]),t._v("寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的路由和交换节点，正确无误地按照地址传送给目的端的运输层。就是通常说的"),_("code",[t._v("IP")]),t._v("层。这一层就是我们经常说的"),_("code",[t._v("IP")]),t._v("协议层。"),_("code",[t._v("IP")]),t._v("协议是"),_("code",[t._v("Internet")]),t._v("的基础。我们可以这样理解，网络层规定了数据包的传输路线，而传输层则规定了数据包的传输方式。常把这一层的数据叫做数据包")]),t._v(" "),_("p",[_("strong",[t._v("数据链路层")])]),t._v(" "),_("p",[t._v("将比特组合成字节,再将字节组合成帧,使用链路层地址 (以太网使用MAC地址)来访问介质,并进行差错检测。 网络层与数据链路层的对比，通过上面的描述，我们或许可以这样理解，网络层是规划了数据包的传输路线，而数据链路层就是传输路线。不过，在数据链路层上还增加了差错控制的功能。")]),t._v(" "),_("p",[_("strong",[t._v("物理层")])]),t._v(" "),_("p",[t._v("实际最终信号的传输是通过物理层实现的。通过物理介质传输比特流。规定了电平、速度和电缆针脚。常用设备有（各种物理设备）集线器、中继器、调制解调器、网线、双绞线、同轴电缆。这些都是物理层的传输介质。")]),t._v(" "),_("p",[_("strong",[t._v("OSI七层模型通信特点：对等通信")]),t._v(" 对等通信，为了使数据分组从源传送到目的地，源端OSI模型的每一层都必须与目的端的对等层进行通信，这种通信方式称为对等层通信。在每一层通信过程中，使用本层自己协议进行通信。")]),t._v(" "),_("h2",{attrs:{id:"tcp-ip协议族"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip协议族"}},[t._v("#")]),t._v(" TCP/IP协议族")]),t._v(" "),_("p",[t._v("（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）是指能够在多个不同网络间实现信息传输的"),_("strong",[t._v("协议簇")])]),t._v(" "),_("p",[t._v("TCP/IP协议"),_("strong",[t._v("主要")]),t._v("由网络层的IP协议 和 传输层的TCP协议组成 。")]),t._v(" "),_("h2",{attrs:{id:"tcp-ip的分层-四层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip的分层-四层"}},[t._v("#")]),t._v(" TCP/IP的分层（四层）")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("应用层")]),t._v(" "),_("p",[t._v("电脑或手机使用的应用软件都是在应用层实现。那么，当两个不同设备的应用需要通信的时候，应用就把应用数据传给下一层，也就是传输层。")])]),t._v(" "),_("li",[_("p",[t._v("传输层")]),t._v(" "),_("p",[t._v("为应用层提供网络支持，当设备作为接收方时，传输层则要负责把数据包传给应用，但是一台设备上可能会有很多应用在接收或者传输数据，因此需要用一个编号将应用区分开来，这个编号就是"),_("strong",[t._v("端口")]),t._v("。")]),t._v(" "),_("p",[t._v("比如 80 端口通常是 Web 服务器用的，22 端口通常是远程登录服务器用的。而对于浏览器（客户端）中的每个标签栏都是一个独立的进程，操作系统会为这些进程分配临时的端口号。")]),t._v(" "),_("p",[t._v("由于传输层的报文中会携带端口号，因此接收方可以识别出该报文是发送给哪个应用。")])]),t._v(" "),_("li",[_("p",[t._v("网络层")]),t._v(" "),_("p",[t._v("网络环节是错综复杂的，中间有各种各样的线路和分叉路口，如果一个设备的数据要传输给另一个设备，就需要在各种各样的路径和节点进行选择，而传输层的设计理念是简单、高效、专注，如果传输层还负责这一块功能就有点违背设计原则了。")]),t._v(" "),_("p",[t._v("也就是说，我们不希望传输层协议处理太多的事情，只需要服务好应用即可，让其作为应用间数据传输的媒介，帮助实现应用到应用的通信，而实际的传输功能就交给"),_("strong",[t._v("网络层")]),t._v("，网络层负责将数据从一个设备传输到另一个设备")]),t._v(" "),_("p",[t._v("IP 协议的寻址作用是告诉我们去往下一个目的地该朝哪个方向走，路由则是根据「下一个目的地」选择路径。寻址更像在导航，路由更像在操作方向盘")]),t._v(" "),_("p",[t._v("此外 IP 中还包括 "),_("code",[t._v("ICMP")]),t._v(" 协议和 "),_("code",[t._v("ARP")]),t._v(" 协议。"),_("code",[t._v("ICMP")]),t._v(" 用于告知网络包传送过程中产生的错误以及各种控制信息。"),_("code",[t._v("ARP")]),t._v(" 用于根据 IP 地址查询相应的以太网 MAC 地址。")])]),t._v(" "),_("li",[_("p",[t._v("物理链路层(网络接口层)")]),t._v(" "),_("p",[t._v("生成了 IP 头部之后，接下来要交给"),_("strong",[t._v("网络接口层")]),t._v("（"),_("em",[t._v("Link Layer")]),t._v("）在 IP 头部的前面加上 MAC 头部，并封装成数据帧（Data frame）发送到网络上。")]),t._v(" "),_("p",[t._v("IP 头部中的接收方 IP 地址表示网络包的目的地，通过这个地址我们就可以判断要将包发到哪里，但在以太网的世界中，这个思路是行不通的。以太网就是一种在「局域网」内，把附近的设备连接起来，使它们之间可以进行通讯的技术。以太网在判断网络包目的地时和 IP 的方式不同，因此必须采用相匹配的方式才能在以太网中将包发往目的地，而 MAC 头部就是干这个用的，所以，在以太网进行通讯要用到 MAC 地址。")]),t._v(" "),_("p",[t._v("MAC 头部是以太网使用的头部，它包含了接收方和发送方的 MAC 地址等信息，我们可以通过 ARP 协议获取对方的 MAC 地址。")]),t._v(" "),_("p",[t._v("所以说，网络接口层主要为网络层提供「链路级别」传输的服务，负责在以太网、WiFi 这样的底层网络上发送原始数据包，工作在网卡这个层次，使用 MAC 地址来标识网络上的设备")])])]),t._v(" "),_("p",[_("img",{attrs:{src:v(549),alt:"image-20230314081023404"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(550),alt:"image-20230105091840901"}})]),t._v(" "),_("p",[t._v("网络接口层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message）。但这些名词并没有什么本质的区分，可以统称为数据包。")]),t._v(" "),_("h2",{attrs:{id:"五层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五层网络模型"}},[t._v("#")]),t._v(" 五层网络模型")]),t._v(" "),_("p",[_("strong",[t._v("物理层")]),t._v("（建立物理连接，传输二进制流）。主机A与主机B之间得有一条物理链路（有线、无线）进行数据传输，否则通信无从谈起；所以物理层的作用便是在主机之间搭建一条物理链路传输二进制流（即0与1，与协议无关）。")]),t._v(" "),_("p",[_("strong",[t._v("数据链路层")]),t._v("（局域网，主机间通信）。物理链路联通以后主机之间就具备了数据传输的基础能力，但是物理链路上是无协议的，传输的是二进制流；二进制流意味着没有起始标识符，接收的主机不知道什么时候开始解析数据，也不知道什么时候终止数据的接收；于是在数据链路层上对发送的数据进行了封装：分装成"),_("strong",[t._v("帧")]),t._v("（frame）；这样主机在接收二进制流时就知道什么时候开始，什么时候结束。")]),t._v(" "),_("p",[t._v("每一种数据链路层协议都规定了所能够传送的帧的数据长度上限，以太网的MTU(最大传输单元29)为1500个字节")]),t._v(" "),_("p",[t._v("数据链路层的3个基本步骤 ：")]),t._v(" "),_("p",[t._v("封装成帧、透明传输(如果数据部分有特殊字符：帧结束，帧开始，需要进行转义)、差错检验(数据部分计算出一个值和帧尾部的FCS比较)")]),t._v(" "),_("img",{staticStyle:{zoom:"150%"},attrs:{src:v(551),alt:"image-20230603141820780"}}),t._v(" "),_("p",[t._v("Ethernet V2标准 (交换机)")]),t._v(" "),_("p",[_("img",{attrs:{src:v(552),alt:"image-20230603145743743"}})]),t._v(" "),_("p",[t._v("ppp协议(路由器与路由器之间)")]),t._v(" "),_("p",[_("img",{attrs:{src:v(553),alt:"image-20230603145708483"}})]),t._v(" "),_("p",[_("strong",[t._v("网络层")]),t._v("（网络路由，主机间通信）。当物理层和数据链路层准备就绪以后，另外的问题出现了：计算机网络中存在大量的主机，那么主机A如何找到主机B呢？即网络路由寻址能力；在网络层最出名的协议莫过于IP协议（Internet Protocol）。在特定的网络下，每台主机都分配了一个唯一IP地址，配合路由器的IP路由寻址，主机A就能通过IP协议找到主机B了；也就意味着主机A与主机B之间具备了数据传输能力。")]),t._v(" "),_("p",[t._v("网络层数据包（IP数据包，Packet)由首部、数据2部分组成，数据很多时候是由传输层传递下来的数据段(Segment)")]),t._v(" "),_("img",{staticStyle:{zoom:"150%"},attrs:{src:v(554),alt:"image-20230604155053171"}}),t._v(" "),_("p",[t._v("区分服务：提高网络质量 (路由器是否优先转发)")]),t._v(" "),_("p",[t._v("标识： 数据包的ID，当数据包过大进行分片时，同一个数据包的所有片的标识都是一样的，有一个计数器专门管理数据包的ID，每发出一个数据包，ID就加1")]),t._v(" "),_("p",[t._v("标志： 记录分片信息，第一位是保留位，第二位是标记是否允许分片，第三位是标记是否是最后一片")]),t._v(" "),_("p",[t._v("片偏移： 当报文被分片后，该字段标记该分片在原报文中的相对位置。 片偏移以 "),_("strong",[t._v("8 个字节")]),t._v("为偏移单位。 所以，除了最后一个分片，其他分片的偏移值都是 8 字节（64 位）的整数倍。")]),t._v(" "),_("p",[t._v("协议：说明数据部分是用什么协议传输的")]),t._v(" "),_("p",[t._v("生存时间： 路由器在每次转发之前会将生存时间"),_("strong",[t._v("TTL")]),t._v("减一，TTL减为零则返回错误报告，防止死循环")]),t._v(" "),_("p",[_("img",{attrs:{src:v(555),alt:"image-20230604164241946"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(556),alt:"image-20230604155158683"}})]),t._v(" "),_("p",[_("strong",[t._v("传输层")]),t._v("（进程间通信）。主机之间具备传输功能之后，那么更近一步把数据发送到指定端口即可完成一次不同主机间的进程通信了；传输层并不是数据传输的地方，而是控制数据如何传输的地方：面向连接还是无连接，传输的拥塞控制等。它负责为两台主机中的进程提供通信服务")]),t._v(" "),_("p",[t._v("详细见"),_("RouterLink",{attrs:{to:"/笔记整理/浏览器与计网/TCP.html"}},[t._v("TCP与UDP")])],1),t._v(" "),_("p",[_("strong",[t._v("应用层")]),t._v("（发送&接收数据）。直接为应用进程提供服务。应用层协议定义的是应用进程间通讯和交互的规则，不同的应用有着不同的应用层协议，如 HTTP协议（万维网服务）、FTP协议（文件传输）、SMTP协议（电子邮件）、DNS（域名查询）等")]),t._v(" "),_("p",[_("img",{attrs:{src:v(557),alt:"image-20230106151926264"}})]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[_("img",{attrs:{src:v(558),alt:"image-20230104142517500"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(559),alt:"image-20230106152839345"}})]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[_("strong",[t._v("《计算机网络》 谢希仁")])]),t._v(" "),_("p",[_("strong",[t._v("小林coding")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32059190",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSI 7层模型和TCP/IP 4层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/163691647",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络的7层、4层和5层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/66713866",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络基础 - 五层因特网协议栈 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/296670054",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文看懂网络七层协议/OSI七层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=e.exports}}]);