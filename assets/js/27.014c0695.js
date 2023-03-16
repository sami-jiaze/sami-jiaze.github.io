(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{491:function(t,v,r){t.exports=r.p+"assets/img/image-20230316102657461.ff7e07e1.png"},492:function(t,v,r){t.exports=r.p+"assets/img/image-20230316103031208.841f23dd.png"},588:function(t,v,r){"use strict";r.r(v);var _=r(2),e=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),v("p",[t._v("什么是ICMP协议，ICMP类型，如何工作，哪些应用")])]),t._v(" "),v("h2",{attrs:{id:"什么是icmp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是icmp"}},[t._v("#")]),t._v(" 什么是ICMP")]),t._v(" "),v("p",[t._v("因特网控制报文协议ICMP（Internet Control Message Protocol）是一个差错报告机制，通常被IP层或更高层协议（TCP或UDP）使用，属于网络层协议，它用于 TCP/IP 网络中发送控制消息，提供可能发生在通信环境中的各种问题反馈，通过这些信息，使网络管理者可以对所发生的问题作出诊断，然后采取适当的措施解决问题")]),t._v(" "),v("p",[t._v("ICMP主要的功能包括：确认 IP 包是否成功送达目标地址、报告发送过程中 IP 包被废弃的原因和改善网络设置，报告主机是否可达、路由是否可用等。这些控制消息虽然并不传输用户数据，但是对于收集各种网络信息、诊断和排除各种网络故障以及用户数据的传递具有至关重要的作用。")]),t._v(" "),v("p",[t._v("注意: ICMP只能搭配"),v("code",[t._v("IPv4")]),t._v("使用，如果是"),v("code",[t._v("IPv6")]),t._v("的情况下, 需要是用"),v("code",[t._v("ICMPv6")])]),t._v(" "),v("h2",{attrs:{id:"为什么需要icmp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要icmp"}},[t._v("#")]),t._v(" 为什么需要ICMP")]),t._v(" "),v("p",[t._v("在数据传输的过程中，IP提供尽力而为的服务，指为了把数据包发送到目的地址尽最大努力。它并不对目的主机是否收到数据包进行验证，无法进行流量控制和差错控制。因此在数据包传输过程中，产生各种错误在所难免。为了更有效地转发IP数据包和提高数据包交付成功的机会，ICMP应运而生。使用ICMP，当网络中数据包传输出现问题时，主机或设备就会向上层协议报告差错情况和提供有关异常情况的报告，使得上层协议能够通过自己的差错控制程序来判断通信是否正确，以进行流量控制和差错控制，从而保证服务质量。")]),t._v(" "),v("p",[v("img",{attrs:{src:r(491),alt:"image-20230316102657461"}})]),t._v(" "),v("h2",{attrs:{id:"icmp-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp-类型"}},[t._v("#")]),t._v(" ICMP 类型")]),t._v(" "),v("p",[t._v("ICMP 大致可以分为两大类：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("一类是用于诊断的查询消息，也就是「"),v("strong",[t._v("查询报文类型")]),t._v("」")])]),t._v(" "),v("li",[v("p",[t._v("另一类是通知出错原因的错误消息，也就是「"),v("strong",[t._v("差错报文类型")]),t._v("」")]),t._v(" "),v("img",{staticStyle:{zoom:"67%"},attrs:{src:r(492),alt:"image-20230316103031208"}})])]),t._v(" "),v("h2",{attrs:{id:"icmp如何工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp如何工作"}},[t._v("#")]),t._v(" ICMP如何工作")]),t._v(" "),v("p",[t._v("即当数据包处理过程出现差错时,ICMP向数据包的源端设备报告这个差错，它既不会纠正这个差错，也不会通知中间的网络设备。因为ICMP报文被封装在IP数据包内部，作为IP数据包的数据部分通过互联网传递。IP数据包中的字段包含源端和最终的目的端，并没有记录报文在网络传递中的全部路径（除非IP数据包中设置了路由记录选项）。因此当设备检测到差错时，它无法通知中间的网络设备，只能向源端发送差错报告。")]),t._v(" "),v("p",[t._v("源端在收到差错报告后，它虽然不能判断差错是由中间哪个网络设备所引起的，但是却可以根据ICMP报文确定发生错误的类型，并确定如何才能更好地重发传递失败的数据包。")]),t._v(" "),v("p",[t._v("ICMP协议在以下情况下不会产生ICMP差错报文：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ICMP差错报文不会产生ICMP差错报文（但ICMP查询报文可能会产生ICMP差错报文）")])]),t._v(" "),v("li",[v("p",[t._v("目的地址是广播地址或多波地址的IP数据报文；")])]),t._v(" "),v("li",[v("p",[t._v("作为链路层广播的数据包；")])]),t._v(" "),v("li",[v("p",[t._v("不是IP分片的第一片；")])]),t._v(" "),v("li",[v("p",[t._v("源地址不是单个主机的数据包，也就是说，源地址不能为零地址、环回地址、广播地址或"),v("a",{attrs:{href:"https://info.support.huawei.com/info-finder/encyclopedia/zh/%E7%BB%84%E6%92%AD.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("多播"),v("OutboundLink")],1),t._v("地址。")])])]),t._v(" "),v("h2",{attrs:{id:"icmp应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp应用"}},[t._v("#")]),t._v(" ICMP应用")]),t._v(" "),v("h3",{attrs:{id:"tracert"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tracert"}},[t._v("#")]),t._v(" Tracert")]),t._v(" "),v("p",[t._v("Tracert程序主要用于查看数据包从源端到目的端的路径信息，从而检查网络连接是否可用。当网络出现故障时，用户可以使用该命令定位故障点。")]),t._v(" "),v("p",[t._v("Tracert利用ICMP超时信息和目的不可达信息来确定从一个主机到网络上其他主机的路由，并显示IP网络中每一跳的延迟（这里的延迟是指：分组从信息源发送到目的地所需的时间，延迟也分为许多的种类——传播延迟、传输延迟、处理延迟、排队延迟等）")]),t._v(" "),v("p",[v("strong",[t._v("Ping命令")])]),t._v(" "),v("p",[t._v("Ping程序是最常见的用于检测"),v("code",[t._v("IPv4")]),t._v("和"),v("code",[t._v("IPv6")]),t._v("网络设备是否可达的调试手段，它使用ICMP的echo信息来确定：")]),t._v(" "),v("ul",[v("li",[t._v("远程设备是否可达；")]),t._v(" "),v("li",[t._v("与远程主机通信的来回旅程（round-trip）的延迟；")]),t._v(" "),v("li",[t._v("报文包的丢失情况。")])]),t._v(" "),v("p",[v("strong",[t._v("NQA")])]),t._v(" "),v("p",[t._v("网络质量分析NQA（Network Quality Analysis）是一种实时的网络性能探测和统计技术，可以对响应时间、网络抖动、丢包率等网络信息进行统计。NQA能够实时监视网络服务质量，在网络发生故障时进行有效的故障诊断和定位。")]),t._v(" "),v("p",[t._v("利用不同类型的ICMP报文，NQA实现了"),v("code",[t._v("Ping")]),t._v("和"),v("code",[t._v("Tracert")]),t._v("功能的扩展和增强，可以实现对网络运行状况的准确测试，输出统计信息。比如NQA的ICMP测试、ICMP Jitter测试和Trace测试等。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ICMP测试")]),t._v(" "),v("p",[t._v("ICMP测试是通过发送ICMP Echo请求报文和Echo响应报文来判断目的地的可达性、计算网络响应时间及丢包率，从而清晰地反映出网络性能及畅通情况。ICMP测试提供类似于命令行下的Ping命令功能，但输出信息更为丰富。")])]),t._v(" "),v("li",[v("p",[t._v("ICMP Jitter测试")]),t._v(" "),v("p",[t._v("ICMP Jitter测试是以ICMP报文为承载，通过记录在报文中的时间戳信息来统计时延、抖动、丢包的一种测试方法。Jitter（抖动时间）是指相邻两个报文的接收时间间隔减去这两个报文的发送时间间隔。")])]),t._v(" "),v("li",[v("p",[t._v("Trace测试")]),t._v(" "),v("p",[t._v("NQA的Trace测试用于检测源端到目的端的转发路径，并沿该路径记录源设备到中间各个设备的时延等信息。Trace测试类似于"),v("code",[t._v("Tracert")]),t._v("命令功能，但输出信息更为丰富。每一跳信息中能够显示平均时延、丢包、最后一个包接收时间等信息。")])])]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[t._v("小林coding")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/369623317",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解ICMP协议 - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://info.support.huawei.com/info-finder/encyclopedia/zh/ICMP.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是ICMP？ICMP如何工作？ - 华为 (huawei.com)"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/265282626",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICMP协议详解 - 知乎 (zhihu.com)"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);