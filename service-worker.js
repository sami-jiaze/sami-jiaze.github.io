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
    "revision": "7642b84f8b3d5d9f3a8bec5b00034460"
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
    "url": "assets/js/1.9feb31e2.js",
    "revision": "83ca75b854df95267421e911959297b2"
  },
  {
    "url": "assets/js/10.e5a361e2.js",
    "revision": "30250d5db0ce9ac1760b076c23fe067e"
  },
  {
    "url": "assets/js/11.4744556f.js",
    "revision": "8fdff049604dc4e331df055ac8c1b46b"
  },
  {
    "url": "assets/js/12.d23b313e.js",
    "revision": "d396f62377197b921a6b11e9972cb628"
  },
  {
    "url": "assets/js/13.0525cf4a.js",
    "revision": "5af18aa2ca3bc7002abc6fd049b9f730"
  },
  {
    "url": "assets/js/14.81d83ebe.js",
    "revision": "e3195611f5b45fa691a251e8ed444946"
  },
  {
    "url": "assets/js/15.59443c88.js",
    "revision": "4bb3264a47fd2abea6d028dcff1f4777"
  },
  {
    "url": "assets/js/16.6d77c739.js",
    "revision": "b19154a3b48658019bec191731b2e50b"
  },
  {
    "url": "assets/js/17.99eb0922.js",
    "revision": "18304f611e68359d1f86595bc6c9f60f"
  },
  {
    "url": "assets/js/18.5f0abb22.js",
    "revision": "6a77eef9223f469090bb2a4765bc14fe"
  },
  {
    "url": "assets/js/19.d9b787b3.js",
    "revision": "2479c590da555f9dea75216d7123e110"
  },
  {
    "url": "assets/js/20.7358118e.js",
    "revision": "93df1fe7d45d872f1ee5faa8797314fd"
  },
  {
    "url": "assets/js/21.190f1fd0.js",
    "revision": "8563236ab5f25bf4123a8f01eac9cd04"
  },
  {
    "url": "assets/js/22.a32d4b62.js",
    "revision": "22fdb33931f1199cac02c4d7603feace"
  },
  {
    "url": "assets/js/23.bab38b63.js",
    "revision": "566c5f3511a9d3bc65fbbaa7afd6361d"
  },
  {
    "url": "assets/js/24.4dc8b9c8.js",
    "revision": "3ecf53442bdf4a104bdc1730359cc0af"
  },
  {
    "url": "assets/js/4.8f3cbc14.js",
    "revision": "b1a4071af569339da714edfe313ec9ee"
  },
  {
    "url": "assets/js/5.877f6180.js",
    "revision": "19d4f3a0c4b8808221c8dd2a3ee66f3c"
  },
  {
    "url": "assets/js/6.70e75842.js",
    "revision": "5f8fde29b0cfea667d8f35b9a659e424"
  },
  {
    "url": "assets/js/7.90ab6b91.js",
    "revision": "0d7431ef2d031d1305385e0977abae2e"
  },
  {
    "url": "assets/js/8.50c1ccd7.js",
    "revision": "9b3e86b00a1d6ff276468c1787605dc5"
  },
  {
    "url": "assets/js/9.dfa122e7.js",
    "revision": "28f934303d118c596eb34342ab931bc1"
  },
  {
    "url": "assets/js/app.49891b92.js",
    "revision": "5856cf633f6e4b2ddcea3a7a7fc5ff27"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.d9841f98.js",
    "revision": "d455e00946bf1cdbd38b9514ec2ec4d3"
  },
  {
    "url": "categories/index.html",
    "revision": "31fc224171b5040b1807564a78858651"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "835dc1c750c886408e51b6038c23fd38"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "a73d5c476018eb09aeaef5d282b0a925"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "dee8161e3bb86344e5eb8cd22ed58e36"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "f1ce48f05d111e658412c1c9093029c3"
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
    "revision": "2210459d1d33dd51f3ef710850b6f56e"
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
    "revision": "6581cf481ae14fe054119e4a395c0454"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8b2bcfce517bf977081bac80c04b810a"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "7add3081ffa1512d463086b53e53ad71"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2abd6c0612bdce3d29cd6f276ad29144"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "56c700a89f6bb980a589873859096ecc"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d72838dc5ad48de04aaecfa38f3f154"
  },
  {
    "url": "生活分享/life.html",
    "revision": "07b2614db84ccf358db374bd62a23f51"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "7e3b5f9be81476eb4ccc2bad1f6b06d8"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "602f6cacfaeb12394fb581694e023db7"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "08b6ebd598e49e1ae543e0bf41ce7e90"
  },
  {
    "url": "笔记整理/javascript/深拷贝与浅拷贝.html",
    "revision": "741d8a21b340258c4954b6674b14cc50"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "ce28fb3dd32a5d6f9920a3a7ce2eeaef"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "1dc216d2f930bffa286c50aabff21e31"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "05afce6ff08fb93fa21fa2424e3a1217"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "4d9fd7a5e7dbd37eb32d0f1eb899de17"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "3ff0337574653ebd348007bf54114c08"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "8576a0624806a4488c759255dc6ba2c3"
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
