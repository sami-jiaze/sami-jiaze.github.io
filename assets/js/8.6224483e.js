(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{443:function(_,v,t){_.exports=t.p+"assets/img/image-20230106134431941.8c8032a2.png"},444:function(_,v,t){_.exports=t.p+"assets/img/image-20230105091248535.12654b44.png"},445:function(_,v,t){_.exports=t.p+"assets/img/image-20230105093712483.c9fe3f25.png"},446:function(_,v,t){_.exports=t.p+"assets/img/image-20230105101013923.e56d477e.png"},447:function(_,v,t){_.exports=t.p+"assets/img/image-20230105224211679.11187684.png"},448:function(_,v,t){_.exports=t.p+"assets/img/image-20230105222852966.948a4cce.png"},449:function(_,v,t){_.exports=t.p+"assets/img/image-20230105223240058.df314bf2.png"},450:function(_,v,t){_.exports=t.p+"assets/img/image-20230105230346428.3117613d.png"},451:function(_,v,t){_.exports=t.p+"assets/img/image-20230105232520734.ab07045f.png"},452:function(_,v,t){_.exports=t.p+"assets/img/image-20230105232202119.9ea75625.png"},511:function(_,v,t){"use strict";t.r(v);var r=t(2),e=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("总览")]),_._v(" "),v("p",[_._v("TCP报文段、TCP三次握手四次挥手、TCP重传、TCP流量控制、TCP拥塞控制")])]),_._v(" "),v("h2",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),v("p",[_._v("TCP是一种面向连接的、可靠的、"),v("strong",[_._v("基于字节流的传输层通信协议")]),_._v("，它会保证数据不丢包、不乱序。")]),_._v(" "),v("p",[_._v("流式协议，即协议的内容是像流水一样的字节流，内容与内容之间没有明确的分界标志，需要我们人为地去给这些协议划分边界")]),_._v(" "),v("p",[_._v("HTTP是建立在TCP之上的，当你建立起TCP连接之后，在上面传输的数据用的是HTTP协议。")]),_._v(" "),v("p",[_._v("TCP用序列号和确认应答号（ack）来保证可靠传输。在TCP传送一个数据包时，它会把这个数据包放入重发队列中，同时启动计时器，如果收到了关于这个包的确认信息，便将此数据包从队列中删除，如果在计时器超时的时候仍然没有收到确认信息，则需要重新发送该数据包。另外，TCP通过数据分段中的序列号来 保证所有传输的数据可以按照正常的顺序进行重组，从而保障数据传输的完整")]),_._v(" "),v("p",[v("img",{attrs:{src:t(443),alt:"image-20230106134431941"}})]),_._v(" "),v("h2",{attrs:{id:"tcp报文段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段"}},[_._v("#")]),_._v(" TCP报文段")]),_._v(" "),v("p",[v("img",{attrs:{src:t(444),alt:"image-20230105091248535"}})]),_._v(" "),v("ul",[v("li",[_._v("源端口：标识源端应用进程，即发送TCP分组的进程端口号。")]),_._v(" "),v("li",[_._v("目的端口：标识目的端应用进程，即需要接收分组数据的进程端口号。")]),_._v(" "),v("li",[_._v("序号（seq）：在SYN标志未置1时，该字段指示了用户数据区中的第一个字节的序列号；在SYN标志置1时，该字段指示的是初始发送的序列号。")]),_._v(" "),v("li",[_._v("确认号（ack）：用来确认本端TCP实体已经接收到的数据，其值表示期待对端发送的下一个字节的序号，实际上告诉对方，这个序号减1以前的字节已经正确接收。例如发送确认号为1001，则表示前1000个字节已经被确认接收了。")]),_._v(" "),v("li",[_._v("数据偏移：表示以 32bit为单位的TCP分组头的总长度，用于确定用户数据区的起始位置。这个字段实际上是指出了TCP报文段的首部长度。")]),_._v(" "),v("li",[_._v("RST：连接复位，重新连接")]),_._v(" "),v("li",[_._v("SYN：同步序号，"),v("strong",[_._v("当SYN置1时，表示建立连接")]),_._v("，分组将发送seq为初始序列号（其值一般随机）")]),_._v(" "),v("li",[_._v("终止标志位FIN：结束标志，表示关闭连接，当该字段置1时，表示分组将要关闭连接")]),_._v(" "),v("li",[_._v("ACK：确认号有效的标志，置1时表示确认号有效。")]),_._v(" "),v("li",[_._v("URG：紧急指针有效的标志，置1时表示紧急指针有效")]),_._v(" "),v("li",[_._v("推送标志位PSH：接收方的TCP收到该标志位为1的报文段会尽快上交应用进程，而不必等到接收缓存都填满后再向上交付")]),_._v(" "),v("li",[_._v("窗口： 占16比特，以字节为单位。指出发送本报文段的一方的接收窗。")])]),_._v(" "),v("p",[_._v("注意区别ACK确认号标志位和确认号ack。")]),_._v(" "),v("h2",{attrs:{id:"tcp建立连接的过程-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp建立连接的过程-三次握手"}},[_._v("#")]),_._v(" TCP建立连接的过程（三次握手）")]),_._v(" "),v("p",[_._v("TCP 建立连接的过程叫做"),v("strong",[_._v("握手")]),_._v("，握手需要在客户和服务器之间交换三个TCP 报文段，称之为"),v("strong",[_._v("三报文握手")])]),_._v(" "),v("p",[_._v("三次握手的主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备。实质上其实就是连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号，交换TCP窗口大小信息")]),_._v(" "),v("ul",[v("li",[_._v("主动发起TCP连接建立称为"),v("strong",[_._v("TCP客户")]),_._v("(client)。")]),_._v(" "),v("li",[_._v("被动等待TCP连接建立的应用进程称为"),v("strong",[_._v("TCP服务器")]),_._v("(server)。")])]),_._v(" "),v("p",[v("img",{attrs:{src:t(445),alt:"image-20230105093712483"}})]),_._v(" "),v("p",[v("strong",[_._v("一开始，TCP服务器进程首先创建传输控制块，用来存储TCP连接中的一些重要信息。")]),_._v(" 例如TCP连接表、指向发送和接收缓存的指针、指向重传队列的指针，当前的发送和接收序号等。之后就准备接受TCP客户进程的连接请求， 此时TCP服务器进程就要进入监听状态等待TCP客户进程的连接请求。TCP客户进程也是首先创建传输控制块")]),_._v(" "),v("p",[v("strong",[_._v("第一次握手")]),_._v("：")]),_._v(" "),v("p",[_._v("客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号（ISN），首部的同步位SYN=1，初始序号seq=x，SYN=1的报文段不能携带数据，但要消耗掉一个序号。")]),_._v(" "),v("p",[v("strong",[_._v("第二次握手：")])]),_._v(" "),v("p",[_._v("服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，并且也是指定了自己的初始化序列号（ISN）。同时会把客户端的 ISN + 1 作为ack 的值，表示自己已经收到了客户端的 SYN。在确认报文段中SYN=1，ACK=1，确认号ack=x+1，初始序号seq=y")]),_._v(" "),v("p",[v("strong",[_._v("第三次握手：")])]),_._v(" "),v("p",[_._v("客户端收到 SYN 报文之后，会发送一个 ACK 报文，把服务器的 ISN + 1 作为 ack 的值，表示已经收到了服务端的 SYN 报文，确认报文段ACK=1，确认号ack=y+1，序号seq=x+1，"),v("strong",[_._v("ACK报文段可以携带数据，不携带数据则不消耗序号")]),_._v("。服务器收到应答后连接建立成功")]),_._v(" "),v("h2",{attrs:{id:"为什么需要三次握手-两次握手可以吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要三次握手-两次握手可以吗"}},[_._v("#")]),_._v(" 为什么需要三次握手，两次握手可以吗")]),_._v(" "),v("p",[_._v("防止失效的请求报文段被服务器接收，建立一个无效的连接浪费资源。")]),_._v(" "),v("p",[_._v("谢希仁版《计算机网络》中的例子：“已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client不会向server的确认发出确认。server由于收不到确认，就知道client并没有要求建立连接。”")]),_._v(" "),v("h2",{attrs:{id:"syn泛洪-syn-flood-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#syn泛洪-syn-flood-攻击"}},[_._v("#")]),_._v(" SYN泛洪（SYN flood）攻击")]),_._v(" "),v("p",[_._v("SYN攻击利用的是TCP的三次握手机制，大量的握手请求涌向TCP服务端，而它们只发出SYN报文而不以ACK响应结束握手，服务端就要为这每一个请求都维持约一分多钟的连接去等待ACK，也就形成所谓的“半连接”。维护这些半连接是需要消耗很多服务器的网络连接资源的。如果短时间内这些资源几乎都被半连接占满，那么正常的业务请求在这期间就得不到服务，处于等待状态。")]),_._v(" "),v("p",[_._v("更进一步的，如果这些半连接的握手请求是恶意程序发出，并且持续不断，那么就会导致服务端较长时间内丧失服务功能——这就形成了DoS（Denial of Service拒绝服务）攻击。这种攻击方式就称为SYN泛洪（SYN flood）攻击")]),_._v(" "),v("p",[v("strong",[_._v("防范措施")])]),_._v(" "),v("p",[_._v("如降低SYN timeout时间，使得主机尽快释放半连接的占用；又比如采用SYN cookie设置，如果短时间内连续收到某个IP的重复SYN请求，则认为受到了该IP的攻击，丢弃来自该IP的后续请求报文")]),_._v(" "),v("h2",{attrs:{id:"tcp拆除连接的过程-四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp拆除连接的过程-四次挥手"}},[_._v("#")]),_._v(" TCP拆除连接的过程（四次挥手）")]),_._v(" "),v("p",[v("img",{attrs:{src:t(446),alt:"image-20230105101013923"}})]),_._v(" "),v("p",[v("strong",[_._v("第一次挥手：")])]),_._v(" "),v("p",[_._v("客户端不再有数据发送给服务器，向服务器发送FIN报文表示想要关闭连接，报文中会指定一个序列号。发出连接释放报文段（FIN=1，序号seq=u），并停止再发送数据，主动关闭TCP连接，进入FIN_WAIT1（终止等待1）状态，等待服务端的确认。")]),_._v(" "),v("p",[v("strong",[_._v("第二次挥手：")])]),_._v(" "),v("p",[_._v("服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了")]),_._v(" "),v("p",[_._v("但是，此时"),v("strong",[_._v("服务器可能还有部分数据没有回传给客户端，服务器还要向客户端发送一部分数据才能关闭连接。所以服务器不会立马同意关闭连接，而是先发送表示确认信息的ACK报文")]),_._v("，TCP 的连接是全双工的，所以需要双方分别释放到对方的连接，单独一方的连接释放，只代 表不能再向对方发送数据，连接处于的是半释放的状态，所以服务端仍旧可以发送数据给客户端")]),_._v(" "),v("p",[v("strong",[_._v("第三次挥手：")])]),_._v(" "),v("p",[_._v("在服务器端完成向客户端传送最后的数据后，此时不再有数据需要传输了。那么服务器也准备关闭连接，所以向客户端发送表示关闭连接的FIN报文")]),_._v(" "),v("p",[v("strong",[_._v("第四次挥手：")])]),_._v(" "),v("p",[_._v("客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态。")]),_._v(" "),v("p",[_._v("客户端会等待一段时间再关闭的原因，是为了防止发送给服务器的确认报文段丢失或者出错，从而导致服务器 端不能正常关闭（服务器没有收到应答超时重传）")]),_._v(" "),v("h2",{attrs:{id:"已经建立了连接但是客户端突然出现故障了怎么办"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#已经建立了连接但是客户端突然出现故障了怎么办"}},[_._v("#")]),_._v(" 已经建立了连接但是客户端突然出现故障了怎么办")]),_._v(" "),v("p",[_._v("TCP还设有一个保活计时器，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为2小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔75秒发送一次。若一连发送10个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。")]),_._v(" "),v("h2",{attrs:{id:"tcp重传机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp重传机制"}},[_._v("#")]),_._v(" TCP重传机制")]),_._v(" "),v("p",[_._v("发出去的请求包在规定时间内没有收到ACK，不管是请求包丢失，ACK包丢失，还是网络延迟都会触发重传机制")]),_._v(" "),v("p",[v("strong",[_._v("超时重传")])]),_._v(" "),v("p",[_._v("在请求包发出去的时候，开启一个计时器，当计时器达到时间之后，没有收到ACK，则就进行重发请求的操作，一直重发直到达到重发上限次数或者收到ACK。")]),_._v(" "),v("p",[v("strong",[_._v("RTT")]),_._v("（Round-Trip Time 往返时延）"),v("strong",[_._v("数据从网络一端传送到另一端所需的时间")]),_._v("，也就是包的往返时间。")]),_._v(" "),v("p",[_._v("超时重传时间是以 "),v("strong",[_._v("RTO")]),_._v("（Retransmission Timeout 超时重传时间）表示。")]),_._v(" "),v("p",[_._v("超时重传时间 RTO 的值应该略大于报文往返 RTT 的值。实际上报文往返 RTT 的值是经常变化的，因为我们的网络也是时常变化的。也就因为报文往返 RTT 的值 是经常波动变化的，所以超时重传时间 RTO 的值应该是一个"),v("strong",[_._v("动态变化的值")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:t(447),alt:"image-20230105224211679"}})]),_._v(" "),v("p",[_._v("如果超时重发的数据，再次超时的时候，又需要重传的时候，TCP 的策略是"),v("strong",[_._v("超时间隔加倍。")])]),_._v(" "),v("p",[_._v("也就是每当遇到一次超时重传的时候，都会将下一次超时时间间隔设为先前值的两倍。两次超时，就说明网络环境差，不宜频繁反复发送。")]),_._v(" "),v("p",[v("strong",[_._v("快速重传")])]),_._v(" "),v("p",[_._v("接收端如果没有收到期望的数据，而收到后续乱序的包，也给客户端回复 ACK，只不过是重复的 ACK，回复相同的ACK三次以后触发快速重传")]),_._v(" "),v("p",[_._v("例子：如果发送方发出了1，2，3，4，5份数据，第一份先到送了，于是就ack回2，结果2因为某些原因没收到，3到达了，于是还是ack回2，后面的4和5都到了，但是还是ack回2，因为2还是没有收到，于是发送端收到了三个ack=2的确认，知道了2还没有到，于是就马上重转2。然后，接收端收到了2，此时因为3，4，5都收到了，于是ack回6")]),_._v(" "),v("p",[_._v("快速重传不用考虑超时问题但存在该重传多少个包的问题，上述案例发送端既可以重传2，也可以重传2，3，4，5，因为发送端并不清楚这连续的3个ack(2)是谁传回来的，也许发送端发了20份数据，是#6，#10，#20传来的呢。这样，发送端很有可能要重传从2到20的这堆数据")]),_._v(" "),v("p",[v("strong",[_._v("SACK")])]),_._v(" "),v("p",[_._v("SACK（Selective Acknowledgment），在快速重传的基础上，返回最近收到的报文段的序列号范围，这样客户端就知道，哪些数据包已经到达服务器了。")]),_._v(" "),v("p",[v("img",{attrs:{src:t(448),alt:"image-20230105222852966"}})]),_._v(" "),v("p",[v("strong",[_._v("DSACK")])]),_._v(" "),v("p",[_._v("Duplicate SACK")]),_._v(" "),v("p",[_._v("DSACK，即重复 SACK，这个机制是在 SACK 的基础上，额外携带信息，告知发送方有哪些数据包自己重复接收了。DSACK 的目的是帮助发送方判断，是否发生了包失序、ACK 丢失、包重复或伪重传。让 TCP 可以更好的做网络流控")]),_._v(" "),v("p",[v("img",{attrs:{src:t(449),alt:"image-20230105223240058"}})]),_._v(" "),v("h2",{attrs:{id:"tcp拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp拥塞控制"}},[_._v("#")]),_._v(" TCP拥塞控制")]),_._v(" "),v("p",[_._v("在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络性能就要变坏，这种情况就叫做"),v("strong",[_._v("网络拥塞")])]),_._v(" "),v("p",[_._v("在网络出现拥堵时，如果继续发送大量数据包，可能会导致数据包时延、丢失等，这时 TCP 就会重传数据，但是一重传就会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，这个情况就会进入恶性循环被不断地放大")]),_._v(" "),v("p",[_._v("当网络发送拥塞时，TCP 会降低发送的数据量。这就是"),v("strong",[_._v("拥塞控制")]),_._v("，控制的目的就是避免「发送方」的数据填满整个网络。")]),_._v(" "),v("p",[_._v("为了在「发送方」调节所要发送数据的量，定义了一个叫做「"),v("strong",[_._v("拥塞窗口")]),_._v("」的概念")]),_._v(" "),v("p",[v("strong",[_._v("拥塞窗口 cwnd")]),_._v("是发送方维护的一个 的状态变量，它会根据"),v("strong",[_._v("网络的拥塞程度动态变化的")]),_._v("。")]),_._v(" "),v("p",[_._v("TCP的拥塞控制机制主要是以下四种机制：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("慢启动（慢开始）")])])]),_._v(" "),v("p",[_._v("当发送方每收到一个 ACK，就拥塞窗口 cwnd 的大小就会加 1。")]),_._v(" "),v("p",[v("img",{attrs:{src:t(450),alt:"image-20230105230346428"}})]),_._v(" "),v("p",[_._v("有一个叫慢启动门限 "),v("code",[_._v("ssthresh")]),_._v(" （slow start threshold）状态变量。")]),_._v(" "),v("ol",[v("li",[_._v("当 "),v("code",[_._v("cwnd")]),_._v(" < "),v("code",[_._v("ssthresh")]),_._v(" 时，使用慢启动算法。")]),_._v(" "),v("li",[_._v("当 "),v("code",[_._v("cnwd = ssthresh")]),_._v("时，既可使用慢开始算法，也可以使用拥塞避免算法")]),_._v(" "),v("li",[_._v("当 "),v("code",[_._v("cwnd")]),_._v(" > "),v("code",[_._v("ssthresh")]),_._v(" 时，使用拥塞避免算法。")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("拥塞避免")])])]),_._v(" "),v("p",[_._v("拥塞避免未必能够完全避免拥塞，是说在拥塞避免阶段将拥塞窗口控制为按线性增长，使网络不容易出现阻塞")]),_._v(" "),v("p",[v("img",{attrs:{src:t(451),alt:"image-20230105232520734"}})]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("采用快速重传")])])]),_._v(" "),v("p",[_._v("采用快重传算法可以让发送方尽早知道发生了个别报文段的丢失。而不是等超时重传计时器超时再重传。")]),_._v(" "),v("p",[_._v("快速重传")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("cwnd = cwnd/2")]),_._v(" ，也就是设置为原来的一半")]),_._v(" "),v("li",[v("code",[_._v("ssthresh = cwnd")]),_._v(";")])]),_._v(" "),v("p",[_._v("超时重传")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("ssthresh")]),_._v(" 设为 "),v("code",[_._v("cwnd/2")])]),_._v(" "),v("li",[v("code",[_._v("cwnd")]),_._v(" 重置为 "),v("code",[_._v("1")])])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("快速恢复")])])]),_._v(" "),v("p",[_._v("进入快速恢复之前，"),v("code",[_._v("cwnd")]),_._v(" 和 "),v("code",[_._v("ssthresh")]),_._v(" 已被更新了：")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("cwnd = cwnd/2")]),_._v(" ，也就是设置为原来的一半;")]),_._v(" "),v("li",[v("code",[_._v("ssthresh = cwnd")]),_._v(";")])]),_._v(" "),v("p",[_._v("然后，进入快速恢复算法如下：")]),_._v(" "),v("ol",[v("li",[_._v("拥塞窗口 "),v("code",[_._v("cwnd = ssthresh + 3")]),_._v(" （ 3 的意思是确认有 3 个数据包被收到了）")]),_._v(" "),v("li",[_._v("重传丢失的数据包")]),_._v(" "),v("li",[_._v("如果再收到重复的 ACK，那么 cwnd 增加 1")]),_._v(" "),v("li",[_._v("如果收到新数据的 ACK 后，设置 cwnd 为 ssthresh，接着就进入了拥塞避免算法")])]),_._v(" "),v("p",[v("img",{attrs:{src:t(452),alt:"image-20230105232202119"}})]),_._v(" "),v("h2",{attrs:{id:"tcp流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp流量控制"}},[_._v("#")]),_._v(" TCP流量控制")]),_._v(" "),v("p",[_._v("如果发送方把数据发送得过快，接收方就可能来不及接收，这就会造成数据的丢失。")]),_._v(" "),v("p",[v("strong",[_._v("流量控制")]),_._v("(flow control)就是让发送方的发送速率不要太快，要让接收方来得及接收。")]),_._v(" "),v("p",[_._v("利用"),v("strong",[_._v("滑动窗口机制")]),_._v("可以在TCP连接上实现对发送方的流量控制。")]),_._v(" "),v("p",[_._v("滑动窗口的定义：TCP是双工的协议，会话的双方都可以同时接收和发送数据。窗口大小就是指"),v("strong",[_._v("无需等待确认应答，而可以继续发送数据的最大值")]),_._v("。在tcp的首部有Window字段，也就是窗口大小。这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。发送方的发送窗口不可以大于接收方发回的窗口大小")]),_._v(" "),v("p",[_._v("TCP会话的双方都各自维护一个发送窗口和一个接收窗口。各自的发送窗口则要求取决于对端通告的接收窗口，要求相同。各自的接收窗口大小取决于应用、系统、硬件的限制（TCP传输速率不能大于应用的数据处理速率）。")]),_._v(" "),v("p",[_._v("如果发送方操作的速度快于接收方，接收到的数据最终将充满接收方的缓冲区，导致接收方通告一个零窗口 。发送方收到一个零窗口通告时，必须停止发送，直到接收方重新通告一个正的窗口。但是这个报文在中途丢失的，那么发送方的发送窗口就一直为零导致死锁。")]),_._v(" "),v("p",[_._v("解决这个问题，TCP为每一个连接设置一个"),v("strong",[_._v("持续计时器")]),_._v("（persistence timer）。只要TCP的一方收到对方的零窗口通知，就启动该计时器，周期性的发送一个零窗口探测报文段。对方就在确认这个报文的时候给出现在的窗口大小（注意：TCP规定，即使设置为零窗口，也必须接收以下几种报文段：零窗口探测报文段、确认报文段和携带紧急数据的报文段）。")]),_._v(" "),v("p",[v("strong",[_._v("糊涂窗口综合症：")])]),_._v(" "),v("p",[_._v("当接收方的缓存已满的时候，交互应用程序一次只从缓存中读取一个字节（这时候缓存中腾出一个字节），然后向发送方发送确认信息，此时发送方再发送一个字节（收到的窗口大小为1），这样网络的效率很低。")]),_._v(" "),v("p",[_._v("要解决这个问题，可以让接收方等待一段时间，使得接收缓存已有最够的空间容纳一个最长报文段，或者等到接收缓存已有一半的空间。只要这两种情况出现一种，就发送确认报文，同时发送方可以把数据积累成大的报文段发送。")]),_._v(" "),v("h2",{attrs:{id:"tcp粘包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包"}},[_._v("#")]),_._v(" TCP粘包")]),_._v(" "),v("p",[_._v("TCP 连接会启⽤延迟传送算法 (Nagle 算法), 在数据发送之前缓存他们. 如果短时间有多个数据发送, 会缓冲到⼀起作⼀次发送")]),_._v(" "),v("p",[_._v("TCP粘包就是指发送方发送的若干包数据到达接收方时粘成了一包不知道用户边界，从接收缓冲区来看，后一包数据的头紧接着前一包数据的尾")]),_._v(" "),v("p",[v("strong",[_._v("产生原因")])]),_._v(" "),v("p",[_._v("发送方原因：TCP默认使用Nagle算法（主要作用：减少网络中报文段的数量），而Nagle算法主要做两件事：")]),_._v(" "),v("ol",[v("li",[_._v("只有上一个分组得到确认，才会发送下一个分组")]),_._v(" "),v("li",[_._v("收集多个小分组，在一个确认到来时一起发送")])]),_._v(" "),v("p",[_._v("接收方原因：TCP接收到数据包时，并不会马上交到应用层进行处理，或者说应用层并不会立即处理。实际上，TCP将接收到的数据包保存在接收缓存里，然后应用程序主动从缓存读取收到的分组。这样一来，如果TCP接收数据包到缓存的速度大于应用程序从缓存中读取数据包的速度，多个包就会被缓存，应用程序就有可能读取到多个首尾相接粘到一起的包。")]),_._v(" "),v("p",[v("strong",[_._v("如何处理粘包现象")]),_._v("？")]),_._v(" "),v("p",[_._v("发送方：对于发送方造成的粘包问题，可以通过关闭Nagle算法来解决，使用TCP_NODELAY选项来关闭算法。")]),_._v(" "),v("p",[_._v("接收方：接收方没有办法来处理粘包现象，只能将问题交给应用层来处理。")]),_._v(" "),v("p",[_._v("应用层：应用层的解决办法简单可行，不仅能解决接收方的粘包问题，还可以解决发送方的粘包问题。")]),_._v(" "),v("p",[_._v("解决办法：循环处理，应用程序从接收缓存中读取分组时，读完一条数据，就应该循环读取下一条数据，直到所有数据都被处理完成，但是如何判断每条数据的长度呢？")]),_._v(" "),v("ul",[v("li",[_._v("格式化数据：每条数据有固定的格式（开始符，结束符），这种方法简单易行，但是选择开始符和结束符时一定要确保每条数据的内部不包含开始符和结束符。")]),_._v(" "),v("li",[_._v("发送长度：发送每条数据时，将数据的长度一并发送，例如规定数据的前4位是数据的长度，应用层在处理时可以根据长度来判断每个分组的开始和结束位置。")])]),_._v(" "),v("p",[v("strong",[_._v("UDP会不会产生粘包问题呢")]),_._v("？")]),_._v(" "),v("p",[_._v("因为TCP是基于数据流的协议，而UDP是基于数据报的协议")]),_._v(" "),v("p",[_._v("TCP为了保证可靠传输并减少额外的开销（每次发包都要验证），采用了基于流的传输，基于流的传输不认为消息是一条一条的，是无保护消息边界的（保护消息边界：指传输协议把数据当做一条独立的消息在网上传输，接收端一次只能接受一条独立的消息）。")]),_._v(" "),v("p",[_._v("UDP则是面向消息传输的，是有保护消息边界的，接收方一次只接受一条独立的信息，所以不存在粘包问题。")]),_._v(" "),v("p",[_._v("举个例子：有三个数据包，大小分别为2k、4k、6k，如果采用UDP发送的话，不管接受方的接收缓存有多大，我们必须要进行至少三次以上的发送才能把数据包发送完，但是使用TCP协议发送的话，我们只需要接受方的接收缓存有12k的大小，就可以一次把这3个数据包全部发送完毕。")]),_._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),v("p",[v("strong",[_._v("《图解TCP/IP》")])]),_._v(" "),v("p",[v("a",{attrs:{href:"https://xiaolincoding.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("小林coding (xiaolincoding.com)"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("strong",[_._v("计算机网络微课堂（湖科大教书匠）")])]),_._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/61987654",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于TCP传输协议看这一篇就够了 - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/weixin_45863060/article/details/122152696",target:"_blank",rel:"noopener noreferrer"}},[_._v("(54条消息) TCP协议详解_独行的喵的博客-CSDN博客_tcp协议"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/430799766",target:"_blank",rel:"noopener noreferrer"}},[_._v("深入浅出TCP三次握手 （多图详解） - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/LOOKTOMMER/article/details/121243476?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"}},[_._v("(54条消息) TCP三次握手详解_‍oOoOoOooOO的博客-CSDN博客_tcp三次握手详解"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/LOOKTOMMER/article/details/121307137",target:"_blank",rel:"noopener noreferrer"}},[_._v("(54条消息) TCP四次挥手详解_‍oOoOoOooOO的博客-CSDN博客_tcp四次挥手"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/-wenli/p/13080675.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("TCP重传机制 - -零 - 博客园 (cnblogs.com)"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/qq_41431406/article/details/97926927",target:"_blank",rel:"noopener noreferrer"}},[_._v("(37条消息) TCP的拥塞控制（详解）_一颗程序媛0915的博客-CSDN博客_tcp拥塞控制"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/mocas_wang/article/details/109368587",target:"_blank",rel:"noopener noreferrer"}},[_._v("(37条消息) TCP 可靠传输机制详解_mocas_wang的博客-CSDN博客_在tcp协议中哪些机制会影响其传输时延,"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/-wenli/p/13089310.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("TCP窗口机制与流量控制 - -零 - 博客园 (cnblogs.com)"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/weixin_41047704/article/details/85340311",target:"_blank",rel:"noopener noreferrer"}},[_._v("(37条消息) 什么是TCP粘包？怎么解决这个问题_渔溪大王的博客-CSDN博客_tcp粘包"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);