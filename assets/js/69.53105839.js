(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{624:function(v,_,C){"use strict";C.r(_);var t=C(2),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[v._v("#")])]),v._v(" "),_("h2",{attrs:{id:"冯诺依曼模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼模型"}},[v._v("#")]),v._v(" 冯诺依曼模型")]),v._v(" "),_("p",[v._v("在 1945 年冯诺依曼和其他计算机科学家们提出了计算机具体实现的报告，其遵循了图灵机的设计，而且还提出用电子元件构造计算机，并约定了用二进制进行计算和存储")]),v._v(" "),_("p",[v._v("最重要的是定义计算机基本结构为 5 个部分，分别是"),_("strong",[v._v("运算器、控制器、存储器、输入设备、输出设备")]),v._v("，这 5 个部分也被称为"),_("strong",[v._v("冯诺依曼模型")]),v._v("。")]),v._v(" "),_("img",{attrs:{src:"E:\\HTMLCSSJavaScript\\myBlog\\Jiaze-blog\\docs\\笔记整理\\操作系统与组成原理\\CPU执行程序过程.assets\\image-20230406143152260.png",alt:"image-20230406143152260"}}),v._v(" "),_("p",[v._v("运算器、控制器是在中央处理器里的，存储器就我们常见的内存，输入输出设备则是计算机外接的设备，比如键盘就是输入设备，显示器就是输出设备。")]),v._v(" "),_("p",[_("strong",[v._v("中央处理器")])]),v._v(" "),_("p",[v._v("中央处理器也就是我们常说的 CPU，32 位和 64 位 CPU 最主要区别在于一次能计算多少字节数据：")]),v._v(" "),_("ul",[_("li",[v._v("32 位 CPU 一次可以计算 4 个字节；")]),v._v(" "),_("li",[v._v("64 位 CPU 一次可以计算 8 个字节；")])]),v._v(" "),_("p",[v._v("这里的 32 位和 64 位，通常称为 CPU 的位宽，代表的是 CPU 一次可以计算（运算）的数据量。")]),v._v(" "),_("p",[v._v("之所以 CPU 要这样设计，是为了能计算更大的数值，如果是 8 位的 CPU，那么一次只能计算 1 个字节 "),_("code",[v._v("0~255")]),v._v(" 范围内的数值，这样就无法一次完成计算 "),_("code",[v._v("10000 * 500")]),v._v(" ，于是为了能一次计算大数的运算，CPU 需要支持多个 byte 一起计算，所以 CPU 位宽越大，可以计算的数值就越大，比如说 32 位 CPU 能计算的最大整数是 "),_("code",[v._v("2^32 = 4294967295")]),v._v("。")]),v._v(" "),_("p",[v._v("CPU 内部还有一些组件，常见的有"),_("strong",[v._v("寄存器、控制单元和逻辑运算单元")]),v._v("等。其中，控制单元负责控制 CPU 工作，逻辑运算单元负责计算，而寄存器可以分为多种类，每种寄存器的功能又不尽相同。")]),v._v(" "),_("p",[v._v("CPU 中的寄存器主要作用是存储计算时的数据，寄存器就在 CPU 里，紧挨着控制单元和逻辑运算单元，计算时速度会很快。")]),v._v(" "),_("p",[v._v("常见的寄存器种类：")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("通用寄存器")]),v._v("，用来存放需要进行运算的数据，比如需要进行加和运算的两个数据。")]),v._v(" "),_("li",[_("em",[v._v("程序计数器")]),v._v("，用来存储 CPU 要执行下一条指令「所在的内存地址」，注意不是存储了下一条要执行的指令，此时指令还在内存中，程序计数器只是存储了下一条指令「的地址」。")]),v._v(" "),_("li",[_("em",[v._v("指令寄存器")]),v._v("，用来存放当前正在执行的指令，也就是指令本身，指令被执行完成之前，指令都存储在这里。")])]),v._v(" "),_("p",[_("strong",[v._v("总线")])]),v._v(" "),_("p",[v._v("总线是用于 CPU 和内存以及其他设备之间的通信，总线可分为 3 种：")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("地址总线")]),v._v("，用于指定 CPU 将要操作的内存地址；")]),v._v(" "),_("li",[_("em",[v._v("控制总线")]),v._v("，用于发送和接收信号，比如中断、设备复位等信号，CPU 收到信号后自然进行响应，这时也需要控制总线；")]),v._v(" "),_("li",[_("em",[v._v("数据总线")]),v._v("，用于读写内存的数据；")])]),v._v(" "),_("p",[v._v("当 CPU 要读写内存数据的时候，一般需要通过下面这三个总线：")]),v._v(" "),_("ul",[_("li",[v._v("首先要通过「地址总线」来指定内存的地址；")]),v._v(" "),_("li",[v._v("然后通过「控制总线」控制是读或写命令；")]),v._v(" "),_("li",[v._v("最后通过「数据总线」来传输数据；")])]),v._v(" "),_("p",[_("strong",[v._v("输入、输出设备")])]),v._v(" "),_("p",[v._v("输入设备向计算机输入数据，计算机经过计算后，把数据输出给输出设备。期间，如果输入设备是键盘，按下按键时是需要和 CPU 进行交互的，这时就需要用到控制总线了")]),v._v(" "),_("h2",{attrs:{id:"线路位宽与-cpu-位宽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线路位宽与-cpu-位宽"}},[v._v("#")]),v._v(" 线路位宽与 CPU 位宽")]),v._v(" "),_("p",[v._v("数据是通过操作电压传输的，低电压表示 0，高压电压则表示 1。")]),v._v(" "),_("p",[v._v("如果构造了高低高这样的信号，其实就是 101 二进制数据，十进制则表示 5，如果只有一条线路，就意味着每次只能传递 1 bit 的数据，即 0 或 1，那么传输 101 这个数据，就需要 3 次才能传输完成，这样的效率非常低。")]),v._v(" "),_("p",[v._v("这样一位一位传输的方式，称为串行，下一个 bit 必须等待上一个 bit 传输完成才能进行传输。为了避免低效率的串行传输的方式，线路的位宽最好一次就能访问到所有的内存地址。")]),v._v(" "),_("p",[v._v("CPU 想要操作「内存地址」就需要「地址总线」：")]),v._v(" "),_("ul",[_("li",[v._v("如果地址总线只有 1 条，那每次只能表示 「0 或 1」这两种地址，所以 CPU 能操作的内存地址最大数量为 2（2^1）个（注意，不要理解成同时能操作 2 个内存地址）；")]),v._v(" "),_("li",[v._v("如果地址总线有 2 条，那么能表示 00、01、10、11 这四种地址，所以 CPU 能操作的内存地址最大数量为 4（2^2）个。")])]),v._v(" "),_("p",[v._v("那么，想要 CPU 操作 4G 大的内存，那么就需要 32 条地址总线，因为 "),_("code",[v._v("2 ^ 32 = 4G")]),v._v("。这就是线路位宽的意义。")]),v._v(" "),_("p",[v._v("CPU 的位宽最好不要小于线路位宽，比如 32 位 CPU 控制 40 位宽的地址总线和数据总线的话，工作起来就会非常复杂且麻烦，所以 32 位的 CPU 最好和 32 位宽的线路搭配，因为 32 位 CPU 一次最多只能操作 32 位宽的地址总线和数据总线。")]),v._v(" "),_("p",[v._v("如果用 32 位 CPU 去加和两个 64 位大小的数字，就需要把这 2 个 64 位的数字分成 2 个低位 32 位数字和 2 个高位 32 位数字来计算，先加个两个低位的 32 位数字，算出进位，然后加和两个高位的 32 位数字，最后再加上进位，就能算出结果了，可以发现 32 位 CPU 并不能一次性计算出加和两个 64 位数字的结果。")]),v._v(" "),_("p",[v._v("对于 64 位 CPU 就可以一次性算出加和两个 64 位数字的结果，因为 64 位 CPU 可以一次读入 64 位的数字，并且 64 位 CPU 内部的逻辑运算单元也支持 64 位数字的计算。但是并不代表 64 位 CPU 性能比 32 位 CPU 高很多，很少应用需要算超过 32 位的数字，所以"),_("strong",[v._v("如果计算的数额不超过 32 位数字的情况下，32 位和 64 位 CPU 之间没什么区别的，只有当计算超过 32 位数字的情况下，64 位的优势才能体现出来")]),v._v("。另外，32 位 CPU 最大只能操作 4GB 内存，就算你装了 8 GB 内存条，也没用。而 64 位 CPU 寻址范围则很大，理论最大的寻址空间为 "),_("code",[v._v("2^64")])]),v._v(" "),_("p",[_("strong",[v._v("硬件的 64 位和 32 位指的是 CPU 的位宽，软件的 64 位和 32 位指的是指令的位宽")])]),v._v(" "),_("h2",{attrs:{id:"cpu执行程序原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu执行程序原理"}},[v._v("#")]),v._v(" CPU执行程序原理")]),v._v(" "),_("ul",[_("li",[v._v("第一步，CPU 读取「程序计数器」的值，这个值是指令的内存地址，然后 CPU 的「控制单元」操作「地址总线」指定需要访问的内存地址，接着通知内存设备准备数据，数据准备好后通过「数据总线」将指令数据传给 CPU，CPU 收到内存传来的数据后，将这个指令数据存入到「指令寄存器」。")]),v._v(" "),_("li",[v._v("第二步，「程序计数器」的值自增，表示指向下一条指令。这个自增的大小，由 CPU 的位宽决定，比如 32 位的 CPU，指令是 4 个字节，需要 4 个内存地址存放，因此「程序计数器」的值会自增 4；")]),v._v(" "),_("li",[v._v("第三步，CPU 分析「指令寄存器」中的指令，确定指令的类型和参数，如果是计算类型的指令，就把指令交给「逻辑运算单元」运算；如果是存储类型的指令，则交由「控制单元」执行；")])]),v._v(" "),_("p",[v._v("简单总结一下就是，一个程序执行的时候，CPU 会根据程序计数器里的内存地址，从内存里面把需要执行的指令读取到指令寄存器里面执行，然后根据指令长度自增，开始顺序读取下一条指令。")]),v._v(" "),_("p",[v._v("CPU 从程序计数器读取指令、到执行、再到下一条指令，这个过程会不断循环，直到程序执行结束，这个不断循环的过程被称为 "),_("strong",[v._v("CPU 的指令周期")])]),v._v(" "),_("h2",{attrs:{id:"a-1-2-执行具体过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#a-1-2-执行具体过程"}},[v._v("#")]),v._v(" a = 1 + 2 执行具体过程")]),v._v(" "),_("p",[v._v("CPU 是不认识 "),_("code",[v._v("a = 1 + 2")]),v._v(" 这个字符串，还需要把整个程序翻译成"),_("strong",[v._v("汇编语言")]),v._v("的程序，这个过程称为编译成汇编代码。")]),v._v(" "),_("p",[v._v("针对汇编代码，还需要用汇编器翻译成机器码，这些机器码由 0 和 1 组成的机器语言，这一条条机器码，就是一条条的"),_("strong",[v._v("计算机指令")]),v._v("，这个才是 CPU 能够真正认识的东西。")]),v._v(" "),_("p",[v._v("程序编译过程中，编译器通过分析代码，发现 1 和 2 是数据，于是程序运行时，内存会有个专门的区域来存放这些数据，这个区域就是「"),_("strong",[v._v("数据段")]),v._v("」。如下图，数据 1 和 2 的区域位置：")]),v._v(" "),_("ul",[_("li",[v._v("数据 1 被存放到 0x200 位置；")]),v._v(" "),_("li",[v._v("数据 2 被存放到 0x204 位置；")])]),v._v(" "),_("p",[_("strong",[v._v("注意，数据和指令是分开区域存放的，存放指令区域的地方称为「正文段」")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"E:%5CHTMLCSSJavaScript%5CmyBlog%5CJiaze-blog%5Cdocs%5C%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86%5C%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%B8%8E%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86%5CCPU%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F%E8%BF%87%E7%A8%8B.assets%5Cimage-20230407172447763.png",alt:"image-20230407172447763"}})]),v._v(" "),_("p",[v._v("编译器会把 "),_("code",[v._v("a = 1 + 2")]),v._v(" 翻译成 4 条指令，存放到正文段中。如图，这 4 条指令被存放到了 0x100 ~ 0x10c 的区域中：")]),v._v(" "),_("ul",[_("li",[v._v("0x100 的内容是 "),_("code",[v._v("load")]),v._v(" 指令将 0x200 地址中的数据 1 装入到寄存器 "),_("code",[v._v("R0")]),v._v("；")]),v._v(" "),_("li",[v._v("0x104 的内容是 "),_("code",[v._v("load")]),v._v(" 指令将 0x204 地址中的数据 2 装入到寄存器 "),_("code",[v._v("R1")]),v._v("；")]),v._v(" "),_("li",[v._v("0x108 的内容是 "),_("code",[v._v("add")]),v._v(" 指令将寄存器 "),_("code",[v._v("R0")]),v._v(" 和 "),_("code",[v._v("R1")]),v._v(" 的数据相加，并把结果存放到寄存器 "),_("code",[v._v("R2")]),v._v("；")]),v._v(" "),_("li",[v._v("0x10c 的内容是 "),_("code",[v._v("store")]),v._v(" 指令将寄存器 "),_("code",[v._v("R2")]),v._v(" 中的数据存回数据段中的 0x208 地址中，这个地址也就是变量 "),_("code",[v._v("a")]),v._v(" 内存中的地址；")])]),v._v(" "),_("p",[v._v("编译完成后，具体执行程序的时候，程序计数器会被设置为 0x100 地址，然后依次执行这 4 条指令。")]),v._v(" "),_("p",[v._v("上面的例子中，由于是在 32 位 CPU 执行的，因此一条指令是占 32 位大小，所以你会发现每条指令间隔 4 个字节。")]),v._v(" "),_("p",[v._v("而数据的大小是根据你在程序中指定的变量类型，比如 "),_("code",[v._v("int")]),v._v(" 类型的数据则占 4 个字节，"),_("code",[v._v("char")]),v._v(" 类型的数据则占 1 个字节。"),_("strong",[v._v("在JavaScript中，number内存空间占比是不区分具体类型的，数字和整数都是以64位浮点数形式储存，也就是8个字节。")])]),v._v(" "),_("h2",{attrs:{id:"指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[v._v("#")]),v._v(" 指令")]),v._v(" "),_("p",[v._v("指令的内容是一串二进制数字的机器码，每条指令都有对应的机器码，CPU 通过解析机器码来知道指令的内容。不同的 CPU 有不同的指令集，也就是对应着不同的汇编语言和不同的机器码")]),v._v(" "),_("p",[v._v("编译器在编译程序的时候，会构造指令，这个过程叫做指令的编码。CPU 执行程序的时候，就会解析指令，这个过程叫作指令的解码。现代大多数 CPU 都使用来流水线的方式来执行指令，所谓的流水线就是把一个任务拆分成多个小任务，于是一条指令通常分为 4 个阶段，称为 4 级流水线")]),v._v(" "),_("p",[_("img",{attrs:{src:"E:%5CHTMLCSSJavaScript%5CmyBlog%5CJiaze-blog%5Cdocs%5C%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86%5C%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%B8%8E%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86%5CCPU%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F%E8%BF%87%E7%A8%8B.assets%5Cimage-20230407174334023.png",alt:"image-20230407174334023"}})]),v._v(" "),_("ol",[_("li",[v._v("CPU 通过程序计数器读取对应内存地址的指令，这个部分称为 "),_("strong",[v._v("Fetch（取得指令）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 对指令进行解码，这个部分称为 "),_("strong",[v._v("Decode（指令译码）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 执行指令，这个部分称为 "),_("strong",[v._v("Execution（执行指令）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 将计算结果存回寄存器或者将寄存器的值存入内存，这个部分称为 "),_("strong",[v._v("Store（数据回写）")]),v._v("；")])]),v._v(" "),_("p",[v._v("上面这 4 个阶段，我们称为"),_("strong",[v._v("指令周期（Instrution Cycle）")]),v._v("，CPU 的工作就是一个周期接着一个周期，周而复始。")]),v._v(" "),_("p",[_("img",{attrs:{src:"E:%5CHTMLCSSJavaScript%5CmyBlog%5CJiaze-blog%5Cdocs%5C%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86%5C%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%B8%8E%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86%5CCPU%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F%E8%BF%87%E7%A8%8B.assets%5Cimage-20230407174456226.png",alt:"image-20230407174456226"}})]),v._v(" "),_("ul",[_("li",[v._v("取指令的阶段，我们的指令是存放在"),_("strong",[v._v("存储器")]),v._v("里的，实际上，通过程序计数器和指令寄存器取出指令的过程，是由"),_("strong",[v._v("控制器")]),v._v("操作的；")]),v._v(" "),_("li",[v._v("指令的译码过程，也是由"),_("strong",[v._v("控制器")]),v._v("进行的；")]),v._v(" "),_("li",[v._v("指令执行的过程，无论是进行算术操作、逻辑操作，还是进行数据传输、条件分支操作，都是由"),_("strong",[v._v("算术逻辑单元")]),v._v("操作的，也就是由"),_("strong",[v._v("运算器")]),v._v("处理的。但是如果是一个简单的无条件地址跳转，则是直接在"),_("strong",[v._v("控制器")]),v._v("里面完成的，不需要用到运算器")])])])}),[],!1,null,null,null);_.default=a.exports}}]);