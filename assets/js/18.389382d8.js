(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{439:function(t,s,a){t.exports=a.p+"assets/img/image-20230211210512000.dc6c94f1.png"},440:function(t,s,a){t.exports=a.p+"assets/img/image-20230211212534107.c9294244.png"},441:function(t,s,a){t.exports=a.p+"assets/img/image-20230211211516930.7e9d0337.png"},442:function(t,s,a){t.exports=a.p+"assets/img/image-20230211213412787.fba72de6.png"},443:function(t,s,a){t.exports=a.p+"assets/img/image-20230211213422417.ea0eda40.png"},657:function(t,s,a){"use strict";a.r(s);var e=a(2),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),s("p",[t._v("v8引擎解析js代码过程，垃圾回收机制，内存泄漏笔记总结")])]),t._v(" "),s("h2",{attrs:{id:"浏览器内核简单介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核简单介绍"}},[t._v("#")]),t._v(" 浏览器内核简单介绍")]),t._v(" "),s("p",[t._v("浏览器内核分或两部分:"),s("code",[t._v("渲染引擎")]),t._v("和"),s("code",[t._v("JS引擎")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("渲染染引擎")]),t._v("：将代码转换成页面输出到浏览器界面。")]),t._v(" "),s("p",[s("code",[t._v("JS引擎")]),t._v("：解析和执行javascript来实现网页的动态效果。")]),t._v(" "),s("p",[t._v("最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，"),s("strong",[t._v("内核就倾向于只指渲染引擎")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"v8工作机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8工作机制"}},[t._v("#")]),t._v(" V8工作机制")]),t._v(" "),s("p",[t._v("V8 是 Google 的开源高性能 JavaScript 和 WebAssembly 引擎")]),t._v(" "),s("p",[t._v("浏览器拿到源代码，先创建运行环境，提取上下文，在将可执行的代码转换为ast树，也就是解释器可以识别的数据结构，解释器拿到ast树之后将其转换为字节码，并执行。正常就是这样的一个流程。从源代码到计算机的执行。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(439),alt:"image-20230211210512000"}})]),t._v(" "),s("p",[s("strong",[t._v("Parse模块")]),t._v("会将JavaScript代码转换成AST（抽象语法树）")]),t._v(" "),s("ul",[s("li",[t._v("这是因为解释器并不直接认识JavaScript代码，如果函数没有被调用，那么是不会被转换成AST的，")])]),t._v(" "),s("p",[s("strong",[t._v("Ignition解释器")]),t._v("，会将AST转换成ByteCode（字节码）")]),t._v(" "),s("ul",[s("li",[t._v("同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）")]),t._v(" "),s("li",[t._v("如果函数只调用一次，Ignition会执行解释执行ByteCode")])]),t._v(" "),s("p",[s("strong",[t._v("TurboFan编译器")]),t._v("，是 V8 的优化编译器，"),s("code",[t._v("TurboFan")]),t._v(" 将字节码生成优化的机器代码。")]),t._v(" "),s("ul",[s("li",[t._v("如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能")]),t._v(" "),s("li",[t._v("但是，机器码实际上也会被还原为ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化，"),s("code",[t._v("Optimized Machine Code")]),t._v("会被还原为"),s("code",[t._v("Bytecode")]),t._v("，这个过程叫做"),s("code",[t._v("Deoptimization")]),t._v("（反向优化）。这是因为"),s("code",[t._v("Ignition")]),t._v("收集的信息可能是错误的，比如add函数的参数之前是整数，后来又变成了字符串。生成的"),s("code",[t._v("Optimized Machine Code")]),t._v("已经假定add函数的参数是整数，那当然是错误的，于是需要进行"),s("code",[t._v("Deoptimization")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"字节码与预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节码与预解析"}},[t._v("#")]),t._v(" 字节码与预解析")]),t._v(" "),s("p",[s("img",{attrs:{src:a(440),alt:"image-20230211212534107"}})]),t._v(" "),s("p",[t._v("机器码占空间很大，机器码占内存过大的情况下，v8 没有办法把所有 js 代码编译成机器码缓存下来。而且即使能全部缓存，这样缓存占用的内存、磁盘空间很大，退出 Chrome 再打开时序列化、反序列化缓存所花费的时间也很长，时间、空间成本都接受不了，所以 "),s("code",[t._v("v8")]),t._v("退而求其次，只编译最外层的 js 代码，也就是上图这个例子里面绿色的部分。那么内部的代码（如上图图中的黄色、红色的部分）先不编译，那什么时候编译的呢？"),s("code",[t._v("v8")]),t._v("推迟到第一次被调用的时候再编译。时间上的推移导致另外一个短板，就是代码必须被解析多次——绿色的代码一次、黄色的代码再解析一次（当 new Person 被调用）、红色的代码再解析一次（当 doWork() 被调用）。因此，如果你的 js 代码的闭包套了 n 层，那么最终他们至少会被 v8 解析 n 次。")]),t._v(" "),s("p",[t._v("而引入字节码之后，占空间的问题就可以得到缓解。通过恰当地设计字节码的编码方式，字节码可以做到比机器码紧凑很多。"),s("code",[t._v("V8")]),t._v(" 引入 "),s("code",[t._v("Ignition")]),t._v(" 字节码后，代码的内存明显降低了。")]),t._v(" "),s("p",[t._v("“字节码是机器代码的抽象” --- 字节码的解释执行比JS源码编译为机器代码执行要快，而且字节码占用内存比机器代码小，提前编译，所以缓存字节码可以达到既提速又能降低内存占用的作用。")]),t._v(" "),s("h2",{attrs:{id:"官方解析图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方解析图"}},[t._v("#")]),t._v(" 官方解析图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(441),alt:"image-20230211211516930"}})]),t._v(" "),s("p",[t._v("Blink将源码交给V8引擎，Stream获取到源码并且进行编码转换")]),t._v(" "),s("p",[t._v("Scanner会进行词法分析（lexical analysis），词法分析会将代码转换成tokens")]),t._v(" "),s("p",[t._v("接下来tokens会被转换成AST树，经过Parser和PreParser：")]),t._v(" "),s("ul",[s("li",[t._v("Parser就是直接将tokens转成AST树架构")]),t._v(" "),s("li",[t._v("PreParser则是预解析\n"),s("ul",[s("li",[t._v("因为不是所有Javascript代码在一开始必须全部解析执行，这样会影响网页运行效率")]),t._v(" "),s("li",[t._v("所以V8引擎就实现了**Lazy Parsing（延迟解析）**的方案，它的作用是将不必要的函数进行预解析，也就是只解析暂时需要的内容，而对函数的全量解析是在函数被调用时才会进行")]),t._v(" "),s("li",[t._v("比如我们在一个函数outer内部定义了另外一个函数inner，那么inner函数就会进行预解析")])])])]),t._v(" "),s("p",[t._v("生成AST树后，会被Ignition转成字节码（bytecode）匹配对应平台CPU指令进行代码执行")]),t._v(" "),s("h2",{attrs:{id:"一段代码如何解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一段代码如何解析"}},[t._v("#")]),t._v(" 一段代码如何解析")]),t._v(" "),s("p",[t._v("当js引擎会在执行代码之前，会在堆内存中创建一个全局对象：Global Object（GO）")]),t._v(" "),s("ul",[s("li",[t._v("该对象 所有的作用域（scope）都可以访问")]),t._v(" "),s("li",[t._v("里面会包含Date、Array、String、Number、setTimeout、setInterval等等")]),t._v(" "),s("li",[t._v("其中还有一个window属性指向自己")])]),t._v(" "),s("p",[t._v("js引擎内部有一个执行上下文栈（Execution Context Stack，简称ECS），它是用于执行代码的调用栈")]),t._v(" "),s("p",[t._v("当它执行全局代码块的时候会构建一个全局执行上下文 Global Execution Context（GEC）")]),t._v(" "),s("p",[t._v("GEC会 被放入到ECS中 执行，其中包含两部分内容")]),t._v(" "),s("ul",[s("li",[t._v("第一部分：在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到GlobalObject中， 但是并不会赋值，此过程也叫变量的作用域提升（hoisting）")]),t._v(" "),s("li",[t._v("第二部分：在代码执行中，对变量赋值，或者执行其他的函数")])]),t._v(" "),s("p",[t._v("在执行的过程中执行到一个函数时，就会根据函数体创建一个函数执行上下文（Functional Execution Context， 简称FEC），并且压入到EC Stack中")]),t._v(" "),s("p",[t._v("FEC中包含三部分内容：")]),t._v(" "),s("ul",[s("li",[t._v("第一部分：在解析函数成为AST树结构时，会创建一个Activation Object（AO）\n"),s("ul",[s("li",[t._v("AO中包含形参、arguments、函数定义和指向函数对象、定义的变量")])])]),t._v(" "),s("li",[t._v("第二部分：作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找")]),t._v(" "),s("li",[t._v("第三部分：根据不同情况this绑定值")])]),t._v(" "),s("h2",{attrs:{id:"垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[t._v("#")]),t._v(" 垃圾回收机制")]),t._v(" "),s("p",[s("strong",[t._v("垃圾回收")]),t._v("（英语：Garbage Collection，缩写为GC）是指一种自动的"),s("strong",[t._v("内存管理")]),t._v("机制。当某个程序占用的一部分内存空间不再被这个程序访问时，这个程序会借助"),s("strong",[t._v("垃圾回收")]),t._v("算法向操作系统归还这部分内存空间。")]),t._v(" "),s("p",[t._v("在js内存管理策略中它会对失去"),s("strong",[t._v("可达性")]),t._v("(无引用或者无法通过某种方式进行访问)的空间进行回收。既失去可达性的内存空间会被视为是垃圾")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ceshi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上方引用地址无变量引用导致白白占用内存空间")]),t._v("\n  ceshi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("如果没有GC，程序员必须自己手动进行内存管理，必须清楚地确保必要的内存空间，释放不要的内存空间。程序员在手动进行内存管理时，申请内存尚不存在什么问题，但在释放不要的内存空间时，就必须一个不漏地释放。这非常地麻烦。")]),t._v(" "),s("h2",{attrs:{id:"标记清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),s("p",[t._v("标记清除分为：标记阶段和清除阶段。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(442),alt:"image-20230211213412787"}})]),t._v(" "),s("p",[t._v("首先它会遍历堆内存上所有的对象，分别给它们打上标记，然后在代码执行过程结束之后，对所使用过的变量取消标记。在清除阶段再把具有标记的内存对象进行整体清除，从而释放内存空间。")]),t._v(" "),s("p",[t._v("经过标记清除策略整理后，老生代内存中因此产生了许多内存碎片，如果不进行清理内存碎片，就会对存储造成影响。")]),t._v(" "),s("p",[s("strong",[t._v("标记整理（Mark-Compact）算法")]),t._v(" 就可以有效地解决标记清除的两个缺点。它的标记阶段和标记清除算法没有什么不同，只是标记结束后，标记整理算法会将活着的对象（即不需要清理的对象）向内存的一端移动，最后清理掉边界的内存。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(443),alt:"image-20230211213422417"}})]),t._v(" "),s("h2",{attrs:{id:"内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),s("p",[t._v("在代码中创建对象和变量时会占据内存，但是"),s("strong",[t._v("JS基于自己的内存回收机制是可以确定哪些变量不再需要，并将其进行清除")]),t._v("。但是，当你的代码中存在逻辑缺陷时，你以为你已经不需要，但是程序中还存在这引用，这就导致程序运行完后并没有进行合适的回收所占有的内存空间。运行时间越长占用内存越多，随之出现的问题就是：性能不佳、高延迟、频繁崩溃。")]),t._v(" "),s("p",[s("strong",[t._v("过多的缓存")]),t._v("。及时清理过多的缓存。")]),t._v(" "),s("p",[s("strong",[t._v("滥用闭包")]),t._v("。尽量避免使用大量的闭包。")]),t._v(" "),s("p",[s("strong",[t._v("定时器或回调太多")]),t._v("。与节点或数据相关联的计时器不再需要时，DOM节点对象可以清除，整个回调函数也不再需要。可是，计时器回调函数仍然没有被回收（计时器停止才会被回收）。当不需要setTimeout或setInterval时，"),s("strong",[t._v("定时器没有被清除")]),t._v("，定时器的糊掉函数以及其内部依赖的变量都不能被回收，"),s("strong",[t._v("会造成内存泄漏")]),t._v("。解决方法：在定时器完成工作时，需要手动清除定时器。")]),t._v(" "),s("p",[s("strong",[t._v("太多无效的DOM引用")]),t._v("。DOM删除了，但是节点的引用还在，导致GC无法实现对其所占内存的回收。解决方法：给删除的DOM节点引用设置为null。")]),t._v(" "),s("p",[t._v("**滥用全局变量。**全局变量是根据定义无法被垃圾回收机制进行收集的，因此需要特别注意临时存储和处理大量信息的全局变量。如果必须使用全局变量来存储数据，请确保将其指定为null或在完成后重新分配它。解决方法：使用严格模式。")]),t._v(" "),s("p",[t._v("**从外到内执行appendChild。**此时即使调用removeChild也无法进行释放内存。解决方法：从内到外appendChild。")]),t._v(" "),s("p",[s("strong",[t._v("反复重写同一个数据会造成内存大量占用")]),t._v("，但是IE浏览器关闭后会被释放。")]),t._v(" "),s("p",[s("strong",[t._v("注意程序逻辑")]),t._v("，避免编写『死循环』之类的代码。")]),t._v(" "),s("p",[s("strong",[t._v("DOM对象和JS对象相互引用")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7062302446386675719#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS高级之V8引擎和代码执行原理 - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6998504075868258312",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8引擎的工作原理 - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7044083628267175966",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8引擎原理 - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7022118343398129700",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解JavaScript的垃圾回收机制 - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7038593947995734030",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript的垃圾回收机制知多少？ - 掘金 (juejin.cn)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7194781956389732389",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文带你读懂V8垃圾回收机制 - 掘金 (juejin.cn)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=v.exports}}]);