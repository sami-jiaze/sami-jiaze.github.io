(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{458:function(t,_,e){t.exports=e.p+"assets/img/image-20230106150336737.a2d21645.png"},459:function(t,_,e){t.exports=e.p+"assets/img/image-20230104142517500.b833d7a2.png"},460:function(t,_,e){t.exports=e.p+"assets/img/image-20221217013726366.03ef0e15.png"},461:function(t,_,e){t.exports=e.p+"assets/img/image-20230106152839345.2517793a.png"},462:function(t,_,e){t.exports=e.p+"assets/img/image-20230105091840901.44f1e0ed.png"},463:function(t,_,e){t.exports=e.p+"assets/img/image-20230106151926264.c5d93c46.png"},545:function(t,_,e){"use strict";e.r(_);var v=e(2),r=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[t._v("OSI 7层模型、TCP/IP分层模型、五层网络模型")])]),t._v(" "),_("h2",{attrs:{id:"osi-7层模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#osi-7层模型"}},[t._v("#")]),t._v(" OSI 7层模型")]),t._v(" "),_("p",[t._v("OSI: open system interconnection 开放式系统互联参考模型")]),t._v(" "),_("p",[_("img",{attrs:{src:e(458),alt:"image-20230106150336737"}})]),t._v(" "),_("p",[_("strong",[t._v("应用层")])]),t._v(" "),_("p",[_("code",[t._v("OSI")]),t._v("参考模型中最靠近用户的一层，是为计算机用户提供应用接口，也为用户直接提供各种网络服务。我们常见应用层的网络服务协议有："),_("code",[t._v("HTTP")]),t._v("，"),_("code",[t._v("HTTPS")]),t._v("，"),_("code",[t._v("FTP")]),t._v("，"),_("code",[t._v("POP3")]),t._v("、"),_("code",[t._v("SMTP")]),t._v("等。")]),t._v(" "),_("p",[_("strong",[t._v("表示层")])]),t._v(" "),_("p",[t._v("表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。数据压缩和加密也是表示层可提供的转换功能之一。")]),t._v(" "),_("p",[t._v("在项目开发中，为了方便数据传输，可以使用"),_("code",[t._v("base64")]),t._v("对数据进行编解码。如果按功能来划分，"),_("code",[t._v("base64")]),t._v("应该是工作在表示层")]),t._v(" "),_("p",[_("strong",[t._v("会话层")])]),t._v(" "),_("p",[t._v("会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。")]),t._v(" "),_("p",[_("strong",[t._v("传输层")])]),t._v(" "),_("p",[t._v("传输层建立了主机端到端的链接，传输层的作用是为上层协议提供端到端的可靠和透明的数据传输服务，包括处理差错控制和流量控制等问题。该层向高层屏蔽了下层数据通信的细节，使高层用户看到的只是在两个传输实体间的一条主机到主机的、可由用户控制和设定的、可靠的数据通路。我们通常说的，"),_("code",[t._v("TCP")]),t._v(" "),_("code",[t._v("UDP")]),t._v("就是在这一层。端口号既是这里的“端”。常把这一层的数据叫做段。")]),t._v(" "),_("p",[_("strong",[t._v("网络层")])]),t._v(" "),_("p",[t._v("本层通过"),_("code",[t._v("IP")]),t._v("寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的路由和交换节点，正确无误地按照地址传送给目的端的运输层。就是通常说的"),_("code",[t._v("IP")]),t._v("层。这一层就是我们经常说的"),_("code",[t._v("IP")]),t._v("协议层。"),_("code",[t._v("IP")]),t._v("协议是"),_("code",[t._v("Internet")]),t._v("的基础。我们可以这样理解，网络层规定了数据包的传输路线，而传输层则规定了数据包的传输方式。常把这一层的数据叫做数据包")]),t._v(" "),_("p",[_("strong",[t._v("数据链路层")])]),t._v(" "),_("p",[t._v("将比特组合成字节,再将字节组合成帧,使用链路层地址 (以太网使用MAC地址)来访问介质,并进行差错检测。 网络层与数据链路层的对比，通过上面的描述，我们或许可以这样理解，网络层是规划了数据包的传输路线，而数据链路层就是传输路线。不过，在数据链路层上还增加了差错控制的功能。")]),t._v(" "),_("p",[_("strong",[t._v("物理层")])]),t._v(" "),_("p",[t._v("实际最终信号的传输是通过物理层实现的。通过物理介质传输比特流。规定了电平、速度和电缆针脚。常用设备有（各种物理设备）集线器、中继器、调制解调器、网线、双绞线、同轴电缆。这些都是物理层的传输介质。")]),t._v(" "),_("p",[_("strong",[t._v("OSI七层模型通信特点：对等通信")]),t._v(" 对等通信，为了使数据分组从源传送到目的地，源端OSI模型的每一层都必须与目的端的对等层进行通信，这种通信方式称为对等层通信。在每一层通信过程中，使用本层自己协议进行通信。")]),t._v(" "),_("h2",{attrs:{id:"tcp-ip协议族"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip协议族"}},[t._v("#")]),t._v(" TCP/IP协议族")]),t._v(" "),_("p",[t._v("（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）是指能够在多个不同网络间实现信息传输的"),_("strong",[t._v("协议簇")])]),t._v(" "),_("p",[t._v("TCP/IP协议"),_("strong",[t._v("主要")]),t._v("由网络层的IP协议 和 传输层的TCP协议组成 。")]),t._v(" "),_("h2",{attrs:{id:"tcp-ip的分层-四层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip的分层-四层"}},[t._v("#")]),t._v(" TCP/IP的分层（四层）")]),t._v(" "),_("p",[_("img",{attrs:{src:e(459),alt:"image-20230104142517500"}})]),t._v(" "),_("p",[_("img",{attrs:{src:e(460),alt:"image-20221217013726366"}})]),t._v(" "),_("p",[_("img",{attrs:{src:e(461),alt:"image-20230106152839345"}})]),t._v(" "),_("p",[_("img",{attrs:{src:e(462),alt:"image-20230105091840901"}})]),t._v(" "),_("p",[t._v("我们不希望传输层协议处理太多的事情，只需要服务好应用即可，让其作为应用间数据传输的媒介，帮助实现应用到应用的通信，而实际的传输功能就交给下一层，也就是"),_("strong",[t._v("网络层")]),t._v("（"),_("em",[t._v("Internet Layer")]),t._v("）。")]),t._v(" "),_("h2",{attrs:{id:"五层网络模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五层网络模型"}},[t._v("#")]),t._v(" 五层网络模型")]),t._v(" "),_("ol",[_("li",[t._v("物理层（建立物理连接，传输二进制流）。主机A与主机B之间得有一条物理链路（有线、无线）进行数据传输，否则通信无从谈起；所以物理层的作用便是在主机之间搭建一条物理链路传输二进制流（即0与1，与协议无关）。")]),t._v(" "),_("li",[t._v("数据链路层（局域网，主机间通信）。物理链路联通以后主机之间就具备了数据传输的基础能力，但是物理链路上是无协议的，传输的是二进制流；二进制流意味着没有起始标识符，接收的主机不知道什么时候开始解析数据，也不知道什么时候终止数据的接收；于是在数据链路层上对发送的数据进行了封装：分装成帧（frame）；这样主机在接收二进制流时就知道什么时候开始，什么时候结束；。")]),t._v(" "),_("li",[t._v("网络层（网络路由，主机间通信）。当物理层和数据链路层准备就绪以后，另外的问题出现了：计算机网络中存在大量的主机，那么主机A如何找到主机B呢？即网络路由寻址能力；在网络层最出名的协议莫过于IP协议（Internet Protocol）。在特定的网络下，每台主机都分配了一个唯一IP地址，配合路由器的IP路由寻址，主机A就能通过IP协议找到主机B了；也就意味着主机A与主机B之间具备了数据传输能力。")]),t._v(" "),_("li",[t._v("传输层（进程间通信）。主机之间具备传输功能之后，那么更近一步把数据发送到指定端口即可完成一次不同主机间的进程通信了；传输层并不是数据传输的地方，而是控制数据如何传输的地方：面向连接还是无连接，传输的拥塞控制等。它负责为两台主机中的进程提供通信服务")]),t._v(" "),_("li",[t._v("应用层（发送&接收数据）。直接为应用进程提供服务。应用层协议定义的是应用进程间通讯和交互的规则，不同的应用有着不同的应用层协议，如 HTTP协议（万维网服务）、FTP协议（文件传输）、SMTP协议（电子邮件）、DNS（域名查询）等")])]),t._v(" "),_("p",[_("img",{attrs:{src:e(463),alt:"image-20230106151926264"}})]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[_("strong",[t._v("《计算机网络》 谢希仁")])]),t._v(" "),_("p",[_("strong",[t._v("小林coding")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32059190",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSI 7层模型和TCP/IP 4层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/163691647",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络的7层、4层和5层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/66713866",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络基础 - 五层因特网协议栈 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/296670054",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文看懂网络七层协议/OSI七层模型 - 知乎 (zhihu.com)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.cn/post/6908327746473033741#heading-63",target:"_blank",rel:"noopener noreferrer"}},[t._v("「2021」高频前端面试题汇总之计算机网络篇 - 掘金 (juejin.cn)"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);