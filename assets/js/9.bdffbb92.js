(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{487:function(t,v,_){t.exports=_.p+"assets/img/image-20230324143409392.2ddcb6ac.png"},488:function(t,v,_){t.exports=_.p+"assets/img/image-20230324145606381.c454cef3.png"},489:function(t,v,_){t.exports=_.p+"assets/img/image-20230324143928696.3c9da3fc.png"},490:function(t,v,_){t.exports=_.p+"assets/img/image-20230616101446133.34e8eacd.png"},491:function(t,v,_){t.exports=_.p+"assets/img/image-20230616102210414.825c3660.png"},492:function(t,v,_){t.exports=_.p+"assets/img/image-20230324144240088.368b9297.png"},493:function(t,v,_){t.exports=_.p+"assets/img/image-20230616103453234.840f7a48.png"},494:function(t,v,_){t.exports=_.p+"assets/img/image-20230616104133209.fa24d025.png"},495:function(t,v,_){t.exports=_.p+"assets/img/image-20230324145801353.ec5ced34.png"},496:function(t,v,_){t.exports=_.p+"assets/img/image-20230324145816151.41f1f21a.png"},497:function(t,v,_){t.exports=_.p+"assets/img/image-20230616111719117.dd22b70b.png"},498:function(t,v,_){t.exports=_.p+"assets/img/image-20230616161557623.da581265.png"},499:function(t,v,_){t.exports=_.p+"assets/img/23.937e4dac.png"},500:function(t,v,_){t.exports=_.p+"assets/img/image-20230328180017703.dfff9aa0.png"},501:function(t,v,_){t.exports=_.p+"assets/img/image-20230328180150688.59668f37.png"},502:function(t,v,_){t.exports=_.p+"assets/img/image-20230328180056974.9f3c387b.png"},503:function(t,v,_){t.exports=_.p+"assets/img/image-20230328163152850.50bf6ab8.png"},692:function(t,v,_){"use strict";_.r(v);var a=_(2),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),v("p",[t._v("HTTPS和HTTP、对称加密和非对称加密、中间人攻击、摘要算法和数字签名算法、数字证书、SSL/TLS与HTTPS链接的建立")])]),t._v(" "),v("h2",{attrs:{id:"http和https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http和https"}},[t._v("#")]),t._v(" HTTP和HTTPS")]),t._v(" "),v("p",[t._v("HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，从而就诞生了HTTPS。简单来说，HTTPS 就是在 HTTP 与 TCP 层之间增加了 SSL/TLS 安全传输层，HTTP的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全。")]),t._v(" "),v("p",[t._v("HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。")]),t._v(" "),v("h2",{attrs:{id:"https特征"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https特征"}},[t._v("#")]),t._v(" HTTPS特征")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("信息加密")]),t._v("：交互信息无法被窃取")]),t._v(" "),v("p",[v("strong",[t._v("混合加密")]),t._v("的方式实现信息的"),v("strong",[t._v("机密性")]),t._v("，解决了窃听的风险。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("校验机制")]),t._v("：无法篡改通信内容，篡改了就不能正常显示")]),t._v(" "),v("p",[v("strong",[t._v("摘要算法")]),t._v("的方式来实现"),v("strong",[t._v("完整性")]),t._v("，它能够为数据生成独一无二的「指纹」，指纹用于校验数据的完整性，解决了篡改的风险。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("身份证书")]),t._v("：CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的")]),t._v(" "),v("p",[t._v("将服务器公钥放入到"),v("strong",[t._v("数字证书")]),t._v("中，解决了冒充的风险。")])])]),t._v(" "),v("p",[t._v("它采用的就是上面说的 “混合加密” + “数字证书” 两种技术，来保证整个通信过程的安全可靠。")]),t._v(" "),v("h2",{attrs:{id:"对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),v("p",[v("strong",[t._v("对称密钥加密的特点就是使用相同的密钥进行加密和解密")])]),t._v(" "),v("img",{staticStyle:{zoom:"105%"},attrs:{src:_(487),alt:"image-20230324143409392"}}),t._v(" "),v("p",[t._v("常见的对称加密算法：")]),t._v(" "),v("ul",[v("li",[t._v("DES： 将64bit明文加密成64bit密文的对称加密算法")]),t._v(" "),v("li",[t._v("3DES：将DES重复三次 加密+解密+加密（每次密钥不同）")]),t._v(" "),v("li",[t._v("AES：新标准的对称加密算法")])]),t._v(" "),v("p",[v("strong",[t._v("密钥配送问题")]),t._v(" 即如何防止公钥在传输的过程中被窃听")]),t._v(" "),v("ul",[v("li",[t._v("事先共享密钥")]),t._v(" "),v("li",[t._v("密钥分配中心（KDC）")]),t._v(" "),v("li",[t._v("非对称加密")])]),t._v(" "),v("h2",{attrs:{id:"非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),v("p",[t._v("也称为"),v("strong",[t._v("公开密钥加密")]),t._v("，用于加密的密钥被称为“公钥”，用于解密的密钥被称为“私钥”")]),t._v(" "),v("p",[t._v("公钥和私钥是一一对应的，不能单独生成")]),t._v(" "),v("img",{staticStyle:{zoom:"93%"},attrs:{src:_(488),alt:"image-20230324145606381"}}),t._v(" "),v("img",{staticStyle:{zoom:"103%"},attrs:{src:_(489),alt:"image-20230324143928696"}}),t._v(" "),v("ol",[v("li",[v("strong",[t._v("接收方")]),t._v(" B 创建一个公钥和一个私钥，公钥被发送给 A")]),t._v(" "),v("li",[t._v("A 使用从 B收到的公钥加密数据，将密文发送给 B")]),t._v(" "),v("li",[t._v("B使用私钥解密从 A接收到的密文，得到原始数据")])]),t._v(" "),v("p",[t._v("非对称加密算法：RSA")]),t._v(" "),v("h2",{attrs:{id:"混合加密-非对称加密-对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#混合加密-非对称加密-对称加密"}},[t._v("#")]),t._v(" 混合加密（非对称加密+对称加密）")]),t._v(" "),v("p",[t._v("HTTPS 采用的是"),v("strong",[t._v("对称加密")]),t._v("和"),v("strong",[t._v("非对称加密")]),t._v("结合的「混合加密」方式：")]),t._v(" "),v("p",[t._v("会话密钥：为本次通信随机生成的临时密钥作为对称加密的密钥，用于加密消息，提高速度")]),t._v(" "),v("ul",[v("li",[t._v("在通信建立前采用"),v("strong",[t._v("非对称加密")]),t._v("的方式交换「会话秘钥」，后续就不再使用非对称加密。")]),t._v(" "),v("li",[t._v("在通信过程中全部使用"),v("strong",[t._v("对称加密")]),t._v("的「会话秘钥」的方式加密明文数据。")])]),t._v(" "),v("p",[t._v("采用「混合加密」的方式的原因：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("对称加密")]),t._v("只使用一个密钥，运算速度快，密钥必须保密，无法做到安全的密钥交换。")]),t._v(" "),v("li",[v("strong",[t._v("非对称加密")]),t._v("使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢。")])]),t._v(" "),v("p",[v("strong",[t._v("加密过程")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(490),alt:"image-20230616101446133"}})]),t._v(" "),v("ol",[v("li",[t._v("消息接收者生成一对公钥和私钥")]),t._v(" "),v("li",[t._v("消息发送者拿到消息接收者的公钥")]),t._v(" "),v("li",[t._v("随机生成会话密钥，用会话密钥加密消息（非对称加密）")]),t._v(" "),v("li",[t._v("用接收者的公钥加密会话密钥（对称加密）")]),t._v(" "),v("li",[t._v("将2和3一并发给消息接收者")])]),t._v(" "),v("p",[v("strong",[t._v("解密过程")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(491),alt:"image-20230616102210414"}})]),t._v(" "),v("ol",[v("li",[t._v("消息接收者用自己的私钥解密出会话密钥")]),t._v(" "),v("li",[t._v("在用解密出的会话密钥，解密消息")])]),t._v(" "),v("p",[t._v("一图流")]),t._v(" "),v("p",[v("img",{attrs:{src:_(492),alt:"image-20230324144240088"}})]),t._v(" "),v("h2",{attrs:{id:"数字签名与摘要算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字签名与摘要算法"}},[t._v("#")]),t._v(" 数字签名与摘要算法")]),t._v(" "),v("ul",[v("li",[t._v("生成签名")])]),t._v(" "),v("p",[t._v("由消息发送者完成。通过签名密钥生成")]),t._v(" "),v("ul",[v("li",[t._v("验证签名")])]),t._v(" "),v("p",[t._v("由消息接收者完成，通过验证密钥验证")]),t._v(" "),v("p",[v("img",{attrs:{src:_(493),alt:"image-20230616103453234"}})]),t._v(" "),v("p",[t._v("一般我们不会用非对称加密来加密实际的传输内容，因为非对称加密的计算比较耗费性能的。")]),t._v(" "),v("p",[t._v("过程改进，用摘要算法**（哈希函数）来计算出内容的哈希值**，这个"),v("strong",[t._v("哈希值是唯一的，且无法通过哈希值推导出内容")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(494),alt:"image-20230616104133209"}})]),t._v(" "),v("p",[t._v("所以非对称加密的用途主要在于"),v("strong",[t._v("通过「私钥加密，公钥解密」的方式，来确认消息的身份")]),t._v("，我们常说的"),v("strong",[t._v("数字签名算法")]),t._v("，就是用的是这种方式，不过私钥加密内容不是内容本身，而是"),v("strong",[t._v("对内容的哈希值加密")]),t._v("。")]),t._v(" "),v("p",[t._v("用公钥加密内容，然后用私钥解密，也可以用私钥加密内容，公钥解密内容。流程的不同，意味着目的也不相同：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("公钥加密，私钥解密")]),t._v("。这个目的是为了"),v("strong",[t._v("保证内容传输的安全")]),t._v("，因为被公钥加密的内容，其他人是无法解密的，只有持有私钥的人，才能解密出实际的内容；")]),t._v(" "),v("li",[v("strong",[t._v("私钥加密，公钥解密")]),t._v("。这个目的是为了"),v("strong",[t._v("保证消息不会被冒充")]),t._v("，因为私钥是不可泄露的，如果公钥能正常解密出私钥加密的内容，就能证明这个消息是来源于持有私钥身份的人发送的。")])]),t._v(" "),v("h2",{attrs:{id:"中间人攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),v("p",[t._v("如果遭到中间人攻击，那公钥可能是伪造的")]),t._v(" "),v("p",[v("img",{attrs:{src:_(495),alt:"image-20230324145801353"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(496),alt:"image-20230324145816151"}})]),t._v(" "),v("p",[v("code",[t._v("A")]),t._v(" 拿到的其实是 "),v("code",[t._v("X")]),t._v(" 发送给他的伪造公钥，但是 "),v("code",[t._v("A")]),t._v(" 无法察觉")]),t._v(" "),v("p",[t._v("最后，"),v("code",[t._v("X")]),t._v(" 用他自己的密钥加密响应数据，并发送给 "),v("code",[t._v("A")]),t._v("，就这样，虽然 "),v("code",[t._v("A")]),t._v("、"),v("code",[t._v("B")]),t._v(" 双方能顺利完成通信，但是恶意的第三方 "),v("code",[t._v("X")]),t._v(" 能看到解密后的请求数据和响应数据，而 "),v("code",[t._v("A")]),t._v("、"),v("code",[t._v("B")]),t._v(" 双方则毫不知情。")]),t._v(" "),v("p",[t._v("这种通过秘密替换公钥窃取数据的方法被称为“中间人攻击”，问题的根源在于 "),v("code",[t._v("A")]),t._v(" 无法确认他们收到的公钥是否由 "),v("code",[t._v("B")]),t._v(" 方创建")]),t._v(" "),v("h2",{attrs:{id:"数字证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[t._v("#")]),t._v(" 数字证书")]),t._v(" "),v("ul",[v("li",[t._v("可以通过哈希算法来保证消息的完整性；")]),t._v(" "),v("li",[t._v("可以通过数字签名来保证消息的来源可靠性（能确认消息是由持有私钥的一方发送的）；")])]),t._v(" "),v("p",[t._v("但是这还远远不够，"),v("strong",[t._v("还缺少身份验证的环节")]),t._v("，万一公钥是被伪造的呢？如之前的"),v("strong",[t._v("中间人攻击")])]),t._v(" "),v("p",[t._v("于是出现了权威的机构就是 CA （"),v("strong",[t._v("数字证书认证机构")]),t._v("），将服务器公钥放在数字证书（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的，通过数字证书的方式保证服务器公钥的身份，解决冒充的风险。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(497),alt:"image-20230616111719117"}})]),t._v(" "),v("p",[t._v("事实上，认证机构形成一个树形结构，高级别的权威机构为较低级别的机构创建证书，那就是说，如果要验证的话，就是一级一级向上认证，信任链条的最终是Root CA，他采用自签名，对他的签名是无条件的信任。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(498),alt:"image-20230616161557623"}})]),t._v(" "),v("h2",{attrs:{id:"ssl-tls与https链接的建立"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls与https链接的建立"}},[t._v("#")]),t._v(" SSL/TLS与HTTPS链接的建立")]),t._v(" "),v("p",[t._v("HTTPS 做的事情其实就是在传输层跟应用层之间加了一层 "),v("code",[t._v("SSL/TLS")]),t._v("，用于对 TCP 传输内容的加密和解密")]),t._v(" "),v("p",[t._v("SSL 是 “"),v("em",[t._v("Secure Sockets Layer")]),t._v("” 的缩写，中文叫做「安全套接层」。它是在上世纪 90 年代中期，由网景公司设计的。")]),t._v(" "),v("p",[t._v("到了1999年，SSL 因为应用广泛，已经成为互联网上的事实标准。IETF 就在那年把 SSL 标准化。标准化之后的名称改为 TLS（是 “"),v("em",[t._v("Transport Layer Security")]),t._v("” 的缩写），中文叫做 「传输层安全协议」。一般把这两者并列称呼（SSL/TLS），因为这两者可以视作同一个东西的不同阶段。")]),t._v(" "),v("p",[t._v("SSL/TLS 协议基本流程：")]),t._v(" "),v("ul",[v("li",[t._v("客户端向服务器索要并验证服务器的公钥。")]),t._v(" "),v("li",[t._v("双方协商生产「会话秘钥」。")]),t._v(" "),v("li",[t._v("双方采用「会话秘钥」进行加密通信。")])]),t._v(" "),v("p",[t._v("前两步也就是 SSL/TLS 的建立过程，涉及"),v("strong",[t._v("四次")]),t._v("通信，使用不同的密钥交换算法，TLS 握手流程也会不一样的，现在常用的密钥交换算法有两种：RSA 算法和 ECDHE 算法")]),t._v(" "),v("h2",{attrs:{id:"tls-协议建立的详细流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tls-协议建立的详细流程"}},[t._v("#")]),t._v(" TLS 协议建立的详细流程")]),t._v(" "),v("img",{attrs:{src:_(499)}}),t._v(" "),v("p",[v("strong",[t._v("1.ClientHello")])]),t._v(" "),v("p",[t._v('客户端向服务器发送"Client Hello"消息，该消息中包含了客户端支持的SSL/TLS的版本，支持的加密套件列表（例如RSA加密，AES加密等），以及一个客户端生成的随机数')]),t._v(" "),v("p",[v("strong",[t._v("2.SeverHello")])]),t._v(" "),v("p",[t._v('服务器回应"Server Hello"消息，该消息中包含了服务器选择使用的SSL/TLS的版本，选择的加密套件，以及一个服务器生成的随机数。')]),t._v(" "),v("p",[v("strong",[t._v("3.Certificate")])]),t._v(" "),v("p",[t._v('服务器发送"Certificate"消息，该消息包含了服务器的证书信息。证书里包含了服务器的公钥和由证书颁布机构（CA）签名的数字签名')]),t._v(" "),v("p",[v("strong",[t._v("4.")])]),t._v(" "),v("p",[t._v("客户端会验证服务器的证书，客户端生成一个新的随机数，然后用服务器的公钥加密这个随机数，然后发送给服务器。这个随机数会被用来生成对话密钥，对话密钥会用于接下来的数据加密。")]),t._v(" "),v("p",[v("strong",[t._v("5.")])]),t._v(" "),v("p",[t._v("服务器用自己的私钥解密这个消息，得到客户端发送的随机数。然后，服务器和客户端根据之前交换的所有随机数生成对话密钥。")]),t._v(" "),v("p",[v("strong",[t._v("6.")])]),t._v(" "),v("p",[t._v("服务器和客户端互相通知对方开始使用新的对话密钥加密接下来的信息")]),t._v(" "),v("h2",{attrs:{id:"客户端校验数字证书的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端校验数字证书的流程"}},[t._v("#")]),t._v(" 客户端校验数字证书的流程")]),t._v(" "),v("p",[v("img",{attrs:{src:_(500),alt:"image-20230328180017703"}})]),t._v(" "),v("p",[t._v("CA 签发证书的过程，如上图左边部分：")]),t._v(" "),v("ul",[v("li",[t._v("首先 CA 会把持有者的公钥、用途、颁发者、有效时间等信息打成一个包，然后对这些信息进行 Hash 计算，得到一个 Hash 值；")]),t._v(" "),v("li",[t._v("然后 CA 会使用自己的私钥将该 Hash 值加密，生成 Certificate Signature，也就是 CA 对证书做了签名；")]),t._v(" "),v("li",[t._v("最后将 Certificate Signature 添加在文件证书上，形成数字证书；")])]),t._v(" "),v("p",[t._v("客户端校验服务端的数字证书的过程，如上图右边部分：")]),t._v(" "),v("ul",[v("li",[t._v("首先客户端会使用同样的 Hash 算法获取该证书的 Hash 值 H1；")]),t._v(" "),v("li",[t._v("通常浏览器和操作系统中集成了 CA 的公钥信息，浏览器收到证书后可以使用 CA 的公钥解密 Certificate Signature 内容，得到一个 Hash 值 H2 ；")]),t._v(" "),v("li",[t._v("最后比较 H1 和 H2，如果值相同，则为可信赖的证书，否则则认为证书不可信。")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(501),alt:"image-20230328180150688"}})]),t._v(" "),v("p",[t._v("对于这种三级层级关系的证书的验证过程如下：")]),t._v(" "),v("ul",[v("li",[t._v("客户端收到 baidu.com 的证书后，发现这个证书的签发者不是根证书，就无法根据本地已有的根证书中的公钥去验证 baidu.com 证书是否可信。于是，客户端根据 baidu.com 证书中的签发者，找到该证书的颁发机构是 “GlobalSign Organization Validation CA - SHA256 - G2”，然后向 CA 请求该中间证书。")]),t._v(" "),v("li",[t._v("请求到证书后发现 “GlobalSign Organization Validation CA - SHA256 - G2” 证书是由 “GlobalSign Root CA” 签发的，由于 “GlobalSign Root CA” 没有再上级签发机构，说明它是根证书，也就是自签证书。应用软件会检查此证书有否已预载于根证书清单上，如果有，则可以利用根证书中的公钥去验证 “GlobalSign Organization Validation CA - SHA256 - G2” 证书，如果发现验证通过，就认为该中间证书是可信的。")]),t._v(" "),v("li",[t._v("“GlobalSign Organization Validation CA - SHA256 - G2” 证书被信任后，可以使用 “GlobalSign Organization Validation CA - SHA256 - G2” 证书中的公钥去验证 baidu.com 证书的可信性，如果验证通过，就可以信任 baidu.com 证书。")])]),t._v(" "),v("p",[t._v("在这四个步骤中，最开始客户端只信任根证书 GlobalSign Root CA 证书的，然后 “GlobalSign Root CA” 证书信任 “GlobalSign Organization Validation CA - SHA256 - G2” 证书，而 “GlobalSign Organization Validation CA - SHA256 - G2” 证书又信任 baidu.com 证书，于是客户端也信任 baidu.com 证书。")]),t._v(" "),v("p",[t._v("总括来说，由于用户信任 GlobalSign，所以由 GlobalSign 所担保的 baidu.com 可以被信任，另外由于用户信任操作系统或浏览器的软件商，所以由软件商预载了根证书的 GlobalSign 都可被信任。")]),t._v(" "),v("p",[t._v("但事实上，证书的验证过程中"),v("strong",[t._v("还存在一个证书信任链的问题")]),t._v("，因为我们向 CA 申请的证书一般不是根证书签发的，而是由中间证书签发的")]),t._v(" "),v("p",[v("img",{attrs:{src:_(502),alt:"image-20230328180056974"}})]),t._v(" "),v("h2",{attrs:{id:"简单总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单总结"}},[t._v("#")]),t._v(" 简单总结")]),t._v(" "),v("p",[v("img",{attrs:{src:_(503),alt:"image-20230328163152850"}})]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/08/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 协议入门 - 阮一峰的网络日志 (ruanyifeng.com)"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("strong",[t._v("图解HTTP")])]),t._v(" "),v("p",[v("strong",[t._v("小林coding")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43789231",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底搞懂HTTPS的加密原理 - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844903764399243278#heading-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("完全图解 HTTPS - 掘金 (juejin.cn)"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=s.exports}}]);