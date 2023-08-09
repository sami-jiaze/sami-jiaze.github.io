(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{482:function(t,e,a){t.exports=a.p+"assets/img/image-20221218113424632.c9806965.png"},483:function(t,e,a){t.exports=a.p+"assets/img/image-20221218132645964.670b0e7e.png"},484:function(t,e,a){t.exports=a.p+"assets/img/image-20221218132658096.a9e69ed3.png"},485:function(t,e,a){t.exports=a.p+"assets/img/image-20221218131925522.eb64e7f5.png"},683:function(t,e,a){"use strict";a.r(e);var r=a(2),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),e("p",[t._v("什么是进程、什么是线程、多线程与多进程、通信方式、生命周期")])]),t._v(" "),e("h2",{attrs:{id:"进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),e("p",[t._v("进程就是一个程序运行的实例，操作系统会为进程创建独立的内存，用来存放运行所需的代码和数据;也就是说"),e("strong",[t._v("每个进程都有自己独立的一块内存空间")])]),t._v(" "),e("h2",{attrs:{id:"线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),e("p",[t._v("线程是进程的组成部分，是进程的一个执行单元，负责当前进程中程序的执行。"),e("strong",[t._v("一个进程至少有一个主线程")]),t._v("，一个进程可以运行多个线程，多个线程可共享数据，这些线程由所属的进程进行启动和管理。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(482),alt:"image-20221218113424632"}})]),t._v(" "),e("h2",{attrs:{id:"进程控制块-pcb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程控制块-pcb"}},[t._v("#")]),t._v(" 进程控制块(PCB)")]),t._v(" "),e("p",[t._v("是进程实体的一部分，是操作系统中最重要的记录型数据结构。\nPCB是进程存在的唯一标志\n系统能且只能通过PCB对进程进行控制和调度\nPCB记录了操作系统所需的、用于描述进程的当前情况以及控制进程运行的全部信息")]),t._v(" "),e("h2",{attrs:{id:"进程生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程生命周期"}},[t._v("#")]),t._v(" 进程生命周期")]),t._v(" "),e("ul",[e("li",[t._v("创建状态：系统已为其分配了PCB，但进程所需资源尚未分配，进程还未进入主存，即创建工作尚未完成，进程还不能被调度运行。")]),t._v(" "),e("li",[t._v("就绪状态：进程已分配到除CPU以外打的所有必要资源，等待获得CPU。")]),t._v(" "),e("li",[t._v("执行状态：进程已获得CPU，程序正在执行。")]),t._v(" "),e("li",[t._v("阻塞状态：正在执行的进程由于某事件而暂时无法继续执行时，放弃处理机而自行阻塞。")]),t._v(" "),e("li",[t._v("终止状态：进程到达自然结束点或者因意外被终结，将进入终止状态，进入终止状态的进程不能再执行，但在操作系统中仍然保留着一个记录，其中保存状态码和一些计时统计数据，供其它进程收集。")])]),t._v(" "),e("p",[t._v("进程挂起：暂停进程的执行，此时进程不占内存空间，其映射在硬盘上。进程挂起，分为阻塞挂起和就绪挂起。解除挂起和挂起的操作主要原理是内存和硬盘换入换出。当内存空间不够用时，操作系统就会将没在执行的进程挂起（换到硬盘中）以腾出内存空间。或者有优先级更高的进程需要被执行时，此时可能会将低优先级的进程进行挂起。如果阻塞挂起进程的资源被满足，可在磁盘上修改进程状态为就绪挂起")]),t._v(" "),e("p",[e("img",{attrs:{src:a(483),alt:"image-20221218132645964"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(484),alt:"image-20221218132658096"}})]),t._v(" "),e("h2",{attrs:{id:"进程线程有关的通信的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程线程有关的通信的方式"}},[t._v("#")]),t._v(" 进程线程有关的通信的方式")]),t._v(" "),e("ul",[e("li",[t._v("管道（pipe）及有名管道（named pipe）：管道可用于具有亲缘关系的父子进程间的通信，有名管道除了具有管道所具有的功能外，它还允许无亲缘关系进程间的通信。")]),t._v(" "),e("li",[t._v("信号（signal）：信号是在软件层次上对中断机制的一种模拟，它是比较复杂的通信方式，用于通知进程有某事件发生，一个进程收到一个信号与处理器收到一个中断请求效果上可以说是一致的。")]),t._v(" "),e("li",[t._v("消息队列（message queue）：消息队列是消息的链接表，它克服了上两种通信方式中信号量有限的缺点，具有写权限得进程可以按照一定得规则向消息队列中添加新信息；对消息队列有读权限得进程则可以从消息队列中读取信息。")]),t._v(" "),e("li",[t._v("共享内存（shared memory）：可以说这是最有用的进程间通信方式。它使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据得更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。")]),t._v(" "),e("li",[t._v("信号量（semaphore）：主要作为进程之间及同一种进程的不同线程之间得同步和互斥手段。 不能传递复杂消息，只能用来同步")]),t._v(" "),e("li",[t._v("套接字（socket）：在不同主机的进程通信。")])]),t._v(" "),e("h2",{attrs:{id:"线程与进程区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程与进程区别"}},[t._v("#")]),t._v(" "),e("strong",[t._v("线程与进程区别")])]),t._v(" "),e("p",[t._v("线程具有许多传统进程所具有的特征，故又称为轻型进程(Light—Weight Process)或进程元；而把传统的进程称为重型进程(Heavy—Weight Process)，它相当于只有一个线程的任务。")]),t._v(" "),e("p",[t._v("根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位")]),t._v(" "),e("p",[t._v("资源开销：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。")]),t._v(" "),e("p",[t._v("包含关系：如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。")]),t._v(" "),e("p",[t._v("内存分配：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的但是可以通过IPC机制进行进程间通信，进程所占用的资源会在其关闭后由操作系统回收。即使进程中存在某个线程产生的内存泄漏，当进程退出时，相关的内存资源也会被回收。")]),t._v(" "),e("p",[t._v("影响关系：一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。")]),t._v(" "),e("p",[t._v("执行过程：每个独立的进程有程序运行的入口、顺序执行序列和程序出口。但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制，两者均可并发执行")]),t._v(" "),e("h2",{attrs:{id:"同步与互斥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步与互斥"}},[t._v("#")]),t._v(" 同步与互斥")]),t._v(" "),e("ul",[e("li",[t._v("同步，是指散布在不同进程之间的若干程序片断，它们的运行必须严格按照规定的某种先后次序来运行，这种先后次序依赖于要完成的特定的任务。如果用对资源的访问来定义的话，同步是指在互斥的基础上（大多数情况），通过其它机制实现访问者对资源的有序访问。在大多数情况下，同步已经实现了互斥，特别是所有写入资源的情况必定是互斥的。少数情况是指可以允许多个访问者同时访问资源。")]),t._v(" "),e("li",[t._v("互斥，是指散布在不同进程之间的若干程序片断，当某个进程运行其中一个程序片段时，其它进程就不能运行它们之中的任一程序片段，只能等到该进程运行完这个程序片段后才可以运行。如果用对资源的访问来定义的话，互斥某一资源同时只允许一个访问者对其进行访问，具有唯一性和排它性。但互斥无法限制访问者对资源的访问顺序，即访问是无序的")])]),t._v(" "),e("h2",{attrs:{id:"多进程与多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多进程与多线程"}},[t._v("#")]),t._v(" 多进程与多线程")]),t._v(" "),e("p",[t._v("多进程：操作系统中同时运行的多个程序")]),t._v(" "),e("p",[t._v("在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态，这便是多进程，也称多任务。")]),t._v(" "),e("p",[t._v("多线程：在同一个进程中同时运行的多个任务")]),t._v(" "),e("p",[t._v("为了更好的利用cpu的资源，如果只有一个线程，则第二个任务必须等到第一个任务结束后才能进行，如果使用多线程则在主线程执行任务的同时可以执行其他任务，而不需要等待，创建线程代价比较小")]),t._v(" "),e("p",[e("img",{attrs:{src:a(485),alt:"image-20221218131925522"}})]),t._v(" "),e("p",[e("strong",[t._v("多进程与多线程使用场景")])]),t._v(" "),e("p",[t._v("对资源的管理和保护要求高，不限制开销和效率时，使用多进程。")]),t._v(" "),e("p",[t._v("要求效率高，频繁切换时，资源的保护管理要求不是很高时，使用多线程。")]),t._v(" "),e("h2",{attrs:{id:"僵尸进程与孤儿进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程与孤儿进程"}},[t._v("#")]),t._v(" 僵尸进程与孤儿进程")]),t._v(" "),e("p",[t._v("孤儿进程：故名思义，就是没爹的孩子。父进程退出了，而它的一个或多个进程还在运行，那么这些子进程都会成为孤儿进程。这些孤儿都将被init进程收养，并负责这些孤儿的以后")]),t._v(" "),e("p",[t._v("僵尸进程：就是子进程比父进程先结束，而父进程又没有释放子进程占用的资源，那么子进程的描述还留在系统中，这种进程就是僵尸进程")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" "),e("strong",[t._v("参考")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.php.cn/faq/416853.html#:~:text=%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%9A%E8%BF%9B%E7%A8%8B%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("多进程和多线程的区别是什么？-常见问题-PHP中文网"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/yjboke/p/8911220.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("多线程全面详解总结 - 关键我是你杰哥 - 博客园 (cnblogs.com)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/ThinkWon/article/details/102021274",target:"_blank",rel:"noopener noreferrer"}},[t._v("(54条消息) 进程和线程的区别(超详细)_ThinkWon的博客-CSDN博客_进程和线程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1334756",target:"_blank",rel:"noopener noreferrer"}},[t._v("进程与线程的联系和区别？ - 腾讯云开发者社区-腾讯云 (tencent.com)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/114453309",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试必考 | 进程和线程的区别 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/500471993#:~:text=%E8%BF%9B%E7%A8%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8C%85,%E7%A8%8B%E5%94%A4%E9%86%92-%E8%BF%9B%E7%A8%8B%E7%BB%93%E6%9D%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解进程状态和生命周期 - 知乎 (zhihu.com)"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);