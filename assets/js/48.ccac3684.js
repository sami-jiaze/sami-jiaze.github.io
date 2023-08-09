(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{475:function(t,a,r){t.exports=r.p+"assets/img/image-20230805000451344.1e550673.png"},676:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("微前端概念、路由分发、应用隔离、消息通信相关知识总结")])]),t._v(" "),a("h2",{attrs:{id:"什么是微前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是微前端"}},[t._v("#")]),t._v(" 什么是微前端")]),t._v(" "),a("p",[t._v("微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。"),a("strong",[t._v("微前端不是单纯的前端框架或者工具，而是一套架构体系")])]),t._v(" "),a("h2",{attrs:{id:"微前端出现的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端出现的原因"}},[t._v("#")]),t._v(" 微前端出现的原因")]),t._v(" "),a("p",[a("strong",[t._v("拆分和细化")]),t._v("：当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。")]),t._v(" "),a("p",[a("strong",[t._v("整合历史系统")]),t._v("：在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架类似（Backbone.js，Angular.js 1）的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改来逻辑的同时来同时兼容新老两套系统并行运行")]),t._v(" "),a("h2",{attrs:{id:"技术方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[t._v("#")]),t._v(" 技术方案")]),t._v(" "),a("p",[t._v("当下微前端主要采用的是组合式应用路由方案，该方案的核心是“主从”思想，即包括一个基座（MainApp）应用和若干个微（MicroApp）应用，基座应用大多数是一个前端SPA项目，主要负责应用注册，路由映射，消息下发等，而微应用是独立前端项目，这些项目不限于采用React，Vue，Angular或者JQuery开发，每个微应用注册到基座应用中，由基座进行管理，但是如果脱离基座也是可以单独访问")]),t._v(" "),a("p",[a("img",{attrs:{src:r(475),alt:"image-20230805000451344"}})]),t._v(" "),a("h2",{attrs:{id:"why-not-iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-iframe"}},[t._v("#")]),t._v(" Why not Iframe")]),t._v(" "),a("ol",[a("li",[t._v("url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。")]),t._v(" "),a("li",[t._v("UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..")]),t._v(" "),a("li",[t._v("全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。")]),t._v(" "),a("li",[t._v("慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。")])]),t._v(" "),a("h2",{attrs:{id:"微前端的路由分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端的路由分发"}},[t._v("#")]),t._v(" 微前端的路由分发")]),t._v(" "),a("p",[t._v("展示微应用的页面，要能先拉取到微应用的页面内容， 这就需要"),a("strong",[t._v("远程拉取机制")]),t._v("。")]),t._v(" "),a("p",[t._v("远程拉取机制通常会采用fetch API来首先获取到微应用的HTML内容，然后通过解析将微应用的JavaScript和CSS进行抽离，采用eval方法来运行JavaScript，并将CSS和HTML内容append到基座应用中留给微应用的展示区域，当微应用切换走时，同步卸载这些内容，这就构成的当前应用的展示流程。")]),t._v(" "),a("p",[t._v("以采用vue-router开发的基座SPA应用来举例，主要是下面这个流程：")]),t._v(" "),a("ol",[a("li",[t._v("当浏览器的路径变化后，vue-router会监听hashchange或者popstate事件，从而获取到路由切换的时机。")]),t._v(" "),a("li",[t._v("最先接收到这个变化的是基座的router，通过查询注册信息可以获取到转发到那个微应用，经过一些逻辑处理后，采用修改hash方法或者pushState方法来路由信息推送给微应用的路由，微应用可以是手动监听hashchange或者popstate事件接收，或者采用React-router，vue-router接管路由，后面的逻辑就由微应用自己控制。")])]),t._v(" "),a("h2",{attrs:{id:"微前端的应用隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端的应用隔离"}},[t._v("#")]),t._v(" 微前端的应用隔离")]),t._v(" "),a("p",[a("strong",[t._v("CSS隔离")]),t._v("：当主应用和微应用同屏渲染时，就可能会有一些样式会相互污染，如果要彻底隔离CSS污染，可以采用CSS Module 或者命名空间的方式，给每个微应用模块以特定前缀，即可保证不会互相干扰，可以采用webpack的postcss插件，在打包时添加特定的前缀。")]),t._v(" "),a("p",[t._v("而对于微应用与微应用之间的CSS隔离就非常简单，在每次应用加载时，将该应用所有的link和style 内容进行标记。在应用卸载后，同步卸载页面上对应的link和style即可。")]),t._v(" "),a("p",[a("strong",[t._v("JavaScript隔离")]),t._v("：每当微应用的JavaScript被加载并运行时，它的核心实际上是对全局对象Window的修改以及一些全局事件的改变，例如jQuery这个js运行后，会在Window上挂载一个"),a("code",[t._v("window.$")]),t._v("对象，对于其他库React，Vue也不例外。为此，需要在加载和卸载每个微应用的同时，尽可能消除这种冲突和影响，最普遍的做法是采用沙箱机制（SandBox）。")]),t._v(" "),a("p",[t._v("沙箱机制的核心是让局部的JavaScript运行时，对外部对象的访问和修改处在可控的范围内，即无论内部怎么运行，都不会影响外部的对象。通常在Node.js端可以采用vm模块，而对于浏览器，则需要结合with关键字和window.Proxy对象来实现浏览器端的沙箱。")]),t._v(" "),a("h2",{attrs:{id:"消息通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息通信"}},[t._v("#")]),t._v(" 消息通信")]),t._v(" "),a("p",[t._v("消息订阅（pub/sub）模式的通信机制是非常适用的，在基座应用中会定义事件中心Event，每个微应用分别来注册事件，当被触发事件时再有事件中心统一分发，这就构成了基本的通信机制")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904162509979662#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端-最容易看懂的微前端知识 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6955342295998660615#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端学习系列：qiankun - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("掘金小册《深入浅出微前端》")])])])}),[],!1,null,null,null);a.default=s.exports}}]);