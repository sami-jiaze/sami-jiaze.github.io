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
    "revision": "4275d3e0e7bb3033b053529803cbd4a5"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/02.bdcbcf9f.png",
    "revision": "bdcbcf9fc11817b8a60d7025f0fb26b6"
  },
  {
    "url": "assets/img/1.0d57422a.png",
    "revision": "0d57422ac31db25ad0eb8a5373fa2e45"
  },
  {
    "url": "assets/img/h1.740ba545.png",
    "revision": "740ba54590782ce87b0154453478d960"
  },
  {
    "url": "assets/img/h2.4d3d9c1d.png",
    "revision": "4d3d9c1d12340180789993047d6905e1"
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
    "url": "assets/img/image-20221101200851217.25b5dfb3.png",
    "revision": "25b5dfb3d61c2962bcdab2741e4d1fa3"
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
    "url": "assets/img/image-20230104142517500.b833d7a2.png",
    "revision": "b833d7a29d954e5ab3eb10ca403b814f"
  },
  {
    "url": "assets/img/image-20230105091248535.12654b44.png",
    "revision": "12654b448e039390ba5e46606088a2fd"
  },
  {
    "url": "assets/img/image-20230105091840901.44f1e0ed.png",
    "revision": "44f1e0edf9f60296494b62b6732b6a4e"
  },
  {
    "url": "assets/img/image-20230105093712483.c9fe3f25.png",
    "revision": "c9fe3f25fd73ac49c17924b4793a9e79"
  },
  {
    "url": "assets/img/image-20230105101013923.e56d477e.png",
    "revision": "e56d477efd093ce1a02c404196aabf98"
  },
  {
    "url": "assets/img/image-20230105222852966.948a4cce.png",
    "revision": "948a4cced46858d6fa5ab89051491e10"
  },
  {
    "url": "assets/img/image-20230105223240058.df314bf2.png",
    "revision": "df314bf2be0f5fc9ff86bac4991e9738"
  },
  {
    "url": "assets/img/image-20230105224211679.11187684.png",
    "revision": "111876845d1fd135373271a2bc6058bf"
  },
  {
    "url": "assets/img/image-20230105230346428.3117613d.png",
    "revision": "3117613df77df0eb32de69f3aa518f42"
  },
  {
    "url": "assets/img/image-20230105232202119.9ea75625.png",
    "revision": "9ea75625cbc1dc0bdf5ea5fe7daec765"
  },
  {
    "url": "assets/img/image-20230105232520734.ab07045f.png",
    "revision": "ab07045f5d8f5a5bb660ee2d2042c19c"
  },
  {
    "url": "assets/img/image-20230106134431941.8c8032a2.png",
    "revision": "8c8032a228a66f885df761976470253a"
  },
  {
    "url": "assets/img/image-20230106150336737.a2d21645.png",
    "revision": "a2d21645e2e9e1b76ca60ceddbd2fa29"
  },
  {
    "url": "assets/img/image-20230106151926264.c5d93c46.png",
    "revision": "c5d93c46dbf01bbb2545bebaeb9b8ffa"
  },
  {
    "url": "assets/img/image-20230106152839345.2517793a.png",
    "revision": "2517793aad08e0f77a7f501fb74501cb"
  },
  {
    "url": "assets/img/image-20230108164514855.98c67600.png",
    "revision": "98c67600cb29a84912b791126d858214"
  },
  {
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.bba7ca23.js",
    "revision": "5319e7161ce2c48831efd1d367d0ee65"
  },
  {
    "url": "assets/js/11.28c657a7.js",
    "revision": "09695d297dc616d00bc15d131a865bcd"
  },
  {
    "url": "assets/js/12.7b8467e8.js",
    "revision": "3f5e34e48ed53d564ed7c30d9d4a2dcc"
  },
  {
    "url": "assets/js/13.6fcb243b.js",
    "revision": "0cbb51d82dd9337a52e82c122e862426"
  },
  {
    "url": "assets/js/14.d7c05438.js",
    "revision": "ca5593ba777f50d4d13ec09863dd87b9"
  },
  {
    "url": "assets/js/15.2aba57e7.js",
    "revision": "e5c3a3d46db39d46763716ac1afdf51a"
  },
  {
    "url": "assets/js/16.16e90ce0.js",
    "revision": "2233fb337ba840bd12df1792255e981f"
  },
  {
    "url": "assets/js/17.d241436d.js",
    "revision": "54ee72f515ee57ae2539faafb991cfd2"
  },
  {
    "url": "assets/js/18.292041b4.js",
    "revision": "7f7aa91a7b2f6d2886fe0b210794885a"
  },
  {
    "url": "assets/js/19.b95f1887.js",
    "revision": "29dda4d49eb2e94434357de72b737519"
  },
  {
    "url": "assets/js/20.b0891e2c.js",
    "revision": "abd2f73cc7446b07fd3043b5fc1ac463"
  },
  {
    "url": "assets/js/21.e2224682.js",
    "revision": "8da054ee2f311c2de9819ffd91fdffd0"
  },
  {
    "url": "assets/js/22.7462d566.js",
    "revision": "7c3cbf4ad5bbd55b6ed8bd96f1eeaa3f"
  },
  {
    "url": "assets/js/23.e4bf3ce9.js",
    "revision": "b08f7e8c6828ff8c98f91af820da31e2"
  },
  {
    "url": "assets/js/24.4a014e97.js",
    "revision": "85026d1cb9278f98dfaaac55d4cfc534"
  },
  {
    "url": "assets/js/25.b3f44367.js",
    "revision": "0e1bbdcade7fc264b5d4bf714952dfdb"
  },
  {
    "url": "assets/js/26.2def18f5.js",
    "revision": "3be4161d8173bfbe5466f765b1f155dc"
  },
  {
    "url": "assets/js/27.dec27ef0.js",
    "revision": "ec6cc59bd863b4d0c97d62e0c993c139"
  },
  {
    "url": "assets/js/28.ab0a689c.js",
    "revision": "135be7970542d5f74b9017985b785a43"
  },
  {
    "url": "assets/js/29.6dc804f2.js",
    "revision": "c5d3b20e39f6fad2474fe1ad87bf5807"
  },
  {
    "url": "assets/js/30.a179f52a.js",
    "revision": "c1dc9732cd3ef3a765b9f6c02afb3e3a"
  },
  {
    "url": "assets/js/31.1bd3816b.js",
    "revision": "81a7d1a1d0f0cb2dcfc7cd2a083356c3"
  },
  {
    "url": "assets/js/32.1d0ceaac.js",
    "revision": "9769f22616b05178c8fd3f5009aff914"
  },
  {
    "url": "assets/js/33.f7933b78.js",
    "revision": "17b7b8761445e55c77e1416d8b8f1898"
  },
  {
    "url": "assets/js/34.f3314fb3.js",
    "revision": "ab511c5c97259329756113c700d0fa2c"
  },
  {
    "url": "assets/js/35.70e65f52.js",
    "revision": "661f04961f3cb1d4ee1d435fe4353a2c"
  },
  {
    "url": "assets/js/4.21fe86d3.js",
    "revision": "29a899bfeef78afb722adea189e9b39c"
  },
  {
    "url": "assets/js/5.cd2e7efd.js",
    "revision": "e314c9f0410e254edcbe3262527f2914"
  },
  {
    "url": "assets/js/6.86720c42.js",
    "revision": "0c281d07ad38a6426eea5b1a5d1facec"
  },
  {
    "url": "assets/js/7.e94bd5cd.js",
    "revision": "819dd1a32f97ab483338054f8a1f8053"
  },
  {
    "url": "assets/js/8.f38b08a0.js",
    "revision": "be9b49fcc06354b15d5e055d21e915b3"
  },
  {
    "url": "assets/js/9.5e8bc4fc.js",
    "revision": "ac5df735c5f1e5b83ff0d5ff1db2ee9a"
  },
  {
    "url": "assets/js/app.df55dd4c.js",
    "revision": "fdad1fa589b2b121c6ad8dde373aa576"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.ed787789.js",
    "revision": "627ad49f2f2b5a642d85a9715c0af755"
  },
  {
    "url": "categories/css/index.html",
    "revision": "9ddcb2bd8e722e71721ce1d679fe8700"
  },
  {
    "url": "categories/index.html",
    "revision": "a9fad59c923ded87d41e48167bbe4dfb"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "0cabfd99f3c8724a7b8b5208db61cf41"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "6b1de2f4e6b32e657209ffea36c0fc10"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "47d51b74dbaf9c303878aac2f2952642"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "6d66869a5a824dd807aee1e6bc44debe"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "eaa3480d334881c26f4a9e47b9ecfe9e"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "1ea863066d0760326cf1dab6014b3b39"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "38d23719e834371ffeca6a78225bbfb2"
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
    "revision": "1a260a3099158c980ec3b400aa78e6a0"
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
    "revision": "89be5a4dd77ef2cbe09f01c3eb9c7ab5"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9e796e1ac17d698909edc7a130322672"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "e966f8016ad16b8f8c5d204d84bb3a69"
  },
  {
    "url": "tags/js/index.html",
    "revision": "be7c9b599c31a932cdc0950260d70f50"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "9a57e1ff75b58eabba5751750592ca1a"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "175a4d59bad348a76138ae4bda954412"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1921e5959ff4e896a589629dc3cdd5d4"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "52d48be80a3ece2488c11c0eabf3c675"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "a1865d4b895aeabf88362aa08d1e0138"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b3c52b91f8eb49d99be96ad36b4c38a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e2b13efeb0dedc3c8059f2fe04f00377"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "55edcfc42aef96165e4731bcf4bbbac6"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "0dc4b7b8d4c0ee4f37148afadc5aae8f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "954ac5635178a65dd560dd8f7c89565e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "a70d9e59788b72f30c3da89e4bbf745d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "f7bb3b56cfd658438bd0c1f4932b8dcd"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "2325878cc4a2f1f2f2be7786759b7285"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "4aa598a99363e171703d8a93b9548759"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "1240004110f1f4d37c9defa24b4560bc"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "99258c9a681d5cad0a83d93c536d8198"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "3740255380db76cfc9b03e721929dfc9"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "e3ae2d769fa985a6bf1b8934b75f0565"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "db1dbc77faf2cb0ceed4c7bf3e6b7cf4"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "6a1f15f6f7251e36aeec5c3a4029107e"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "84ff87b6015caae0bd89f4b9c0585a09"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "191379b010a210396b8cda4bcee5a8c6"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "967fd6e9a8efbc186f2e5a6134d868ff"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "8ebd4740142d769d7ae4e725f991f427"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "c728b045f77dc6a52e7ab6e1ecfac2cf"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "d7204c9279f90d1c1619896dc9c23d8c"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "95e7e328d3eb6836040953955e7910b6"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "6a95970c58187206144ae733e3398567"
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
