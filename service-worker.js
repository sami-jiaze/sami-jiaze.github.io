/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d76f17c983b1026f43ebf38bb7cd43ba"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1.0d57422a.png",
    "revision": "0d57422ac31db25ad0eb8a5373fa2e45"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/image-20221218113424632.c9806965.png",
    "revision": "c9806965f025e0be10a9cecd3d735f67"
  },
  {
    "url": "assets/img/image-20221218131925522.eb64e7f5.png",
    "revision": "eb64e7f51817bc389328d8515af2bec1"
  },
  {
    "url": "assets/img/image-20221218132645964.670b0e7e.png",
    "revision": "670b0e7e714f5985c02e47a3a9277e83"
  },
  {
    "url": "assets/img/image-20221218132658096.a9e69ed3.png",
    "revision": "a9e69ed3d9cec4c5d22b13b5c0de7039"
  },
  {
    "url": "assets/img/image-20221218170155476.55023fc1.png",
    "revision": "55023fc18e2ae00b686559d116f2b456"
  },
  {
    "url": "assets/img/image-20221218172337398.a7b1648e.png",
    "revision": "a7b1648e19212403e514303af23144f3"
  },
  {
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.53206839.js",
    "revision": "6502007caa4c13259661ace3fcfe872c"
  },
  {
    "url": "assets/js/11.94573dcb.js",
    "revision": "080d719fe5d8ed1d4f167c6cb6f353ac"
  },
  {
    "url": "assets/js/12.e680913b.js",
    "revision": "55ac84094b946a7a9d3631353d4a63bc"
  },
  {
    "url": "assets/js/13.1c8d7eab.js",
    "revision": "bb92ec64470bf0d5094d64d235f1685b"
  },
  {
    "url": "assets/js/14.b8d1af8b.js",
    "revision": "9e62983a907d19b79e168f1f815d68f7"
  },
  {
    "url": "assets/js/15.4a4a9734.js",
    "revision": "5d256f538d4bd7c2bfdf9cca3611c732"
  },
  {
    "url": "assets/js/16.4b736c94.js",
    "revision": "3a02cc6f873b869760b548c6202b4248"
  },
  {
    "url": "assets/js/17.3724fa7f.js",
    "revision": "27c36c61a930eee4e676a855ad024112"
  },
  {
    "url": "assets/js/18.4ef34a5e.js",
    "revision": "cc3bfb8dc52097038a26455438cba01c"
  },
  {
    "url": "assets/js/19.519037b0.js",
    "revision": "72c5c4b904316e5eaa11706a6d72b86d"
  },
  {
    "url": "assets/js/20.39ef1598.js",
    "revision": "9993f71a270058abfd628fe84ba5c4c7"
  },
  {
    "url": "assets/js/21.1d6d7a65.js",
    "revision": "110e3560c616cc8134400d6843ce75ac"
  },
  {
    "url": "assets/js/22.99f205af.js",
    "revision": "a5400ba05028f045933f85b906a69fa5"
  },
  {
    "url": "assets/js/23.f3249d48.js",
    "revision": "4b377756b647ca34f3b297229257af6a"
  },
  {
    "url": "assets/js/24.6f4db301.js",
    "revision": "c56fafa82dcaef1752d9ffc03f712efc"
  },
  {
    "url": "assets/js/25.d95ac696.js",
    "revision": "3baf4ff4ffbe3e6fbfed7d3a00027903"
  },
  {
    "url": "assets/js/26.f81d245f.js",
    "revision": "00b4a5230e5e594c90022cf887fb63a1"
  },
  {
    "url": "assets/js/27.a8f2b1c3.js",
    "revision": "e522a79f786043371e2990e9fab7f6a6"
  },
  {
    "url": "assets/js/28.2a9cbce1.js",
    "revision": "006c4fcbd50b37a199a32f36f551ec6a"
  },
  {
    "url": "assets/js/29.b5c14588.js",
    "revision": "42b398dd19dc1aa020d67abf3676c3d1"
  },
  {
    "url": "assets/js/30.5a54eab2.js",
    "revision": "d92b39c40e05206fc331e3dacfe15c01"
  },
  {
    "url": "assets/js/31.d65dca50.js",
    "revision": "1f9f66d3b10f93f58c7c0171f3769244"
  },
  {
    "url": "assets/js/32.18693f01.js",
    "revision": "5c447af13d3584db85a10a3dbfe50ff0"
  },
  {
    "url": "assets/js/4.48df71e4.js",
    "revision": "d7805af533d77d09dd7a0f3ef7ee1011"
  },
  {
    "url": "assets/js/5.3e6430a2.js",
    "revision": "dd96842155049deb361b906eb4c0d996"
  },
  {
    "url": "assets/js/6.d87b9146.js",
    "revision": "1fbf69b79af6e041d653a7b86141c4ef"
  },
  {
    "url": "assets/js/7.9260ddb3.js",
    "revision": "4a2ad913f2af330ef90cf5a6df688fc0"
  },
  {
    "url": "assets/js/8.4b7ca787.js",
    "revision": "e3bccb3524a109d1b38b87a7bc4393cd"
  },
  {
    "url": "assets/js/9.f2a28c6f.js",
    "revision": "8c5f6663d520bfbb4efaf6920b2b2974"
  },
  {
    "url": "assets/js/app.fb3d8390.js",
    "revision": "1752dd0c13fd0dd1b3a67254ceb5dcf8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.d719ec0d.js",
    "revision": "c7df4b99516d3134300178cf55589766"
  },
  {
    "url": "categories/css/index.html",
    "revision": "650e494d69c2fd3182cb6c1def0ba8e4"
  },
  {
    "url": "categories/index.html",
    "revision": "a5c8652149e10e4ac419e4208710636e"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "8450778dcbf587f2bfefff1ed65a43eb"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "8a9a05101f3462e3d9254859f80c27b2"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "6801d50ecb611768ac37264478e8adae"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "f83622b776f8b269ce339f82839b1950"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "e3d0acf9aa0dde9bc67c28d9032963e9"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "2719edd3acdc231c18650089c9d944ad"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "dbace37f3931ab0465bcdcb633870d32"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "index.html",
    "revision": "3efef6ed0cbbd5d84d7f14747e56618a"
  },
  {
    "url": "js/custom.js",
    "revision": "03b09a6cef22754a08eed7ffc88a4bc3"
  },
  {
    "url": "member1.jpg",
    "revision": "6ca05b5aef91673ba360c3536f1e4a88"
  },
  {
    "url": "tag/index.html",
    "revision": "959bcd11851cc44d37d8897ff08d0c4d"
  },
  {
    "url": "tags/css/index.html",
    "revision": "70554b2e8bdee3b759cbd19783ec0885"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "c9e69d1e2d3939368dc556a555c85f93"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b5bb07fc0a5da2d46bc471c019ce8a6c"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "7686e20fb668e430ba2868fd5977f3ba"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1ea48ff8a0db9362d8ba962270373e69"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "c18b4af26f8eb22bfddbc2dd25a09e4c"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "f70324ea3d492d11c00398cc95cdc0cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "8360a140d2202582184e4c1b8a38c276"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4a9a4aa9812092e6f068e01013ef9503"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "3755b3bae24a4b5f107c188647f77235"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "1a0e30f8a33057b3771c861459343d93"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "0b82909642f4d8ab88c85041ce2379cb"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "b65fdd12d8a0ab9c39929606aeaee268"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "6f0b4cd717c215c921bb34bd50dde597"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "7ff6b38503f4ed7be77f1d01292efe2a"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "9d8d97fecf3141667c7c85bb541b68fe"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "c3e6e528ff5b586098bc2b694bf8d53a"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "63d31e3242a40cb477f781b23be96ff3"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "bf3b37ac93030f1d3de9d86d767e040f"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "5204978f12c455f7aed20de7b132e58a"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "6bcca0101e5213934a0ad2514e7f9cc6"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "35b13fd5414e0ac1890dfbfa40118ffc"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "69994eab54324aedcf1f1e406d138454"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "f4fe3a8b9c581d088761baa0c3a9f469"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "a56cf69a4aea8d9d2cd5719f34e9ba52"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "85a8d86dde57c818b56a0d0baab2b0ac"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "894ab6614a9fe458a653eafa62ff0d85"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
