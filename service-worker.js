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
    "revision": "0f2370327237554af35f4342390de6bd"
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
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.68305df7.js",
    "revision": "0511f565d2e1bed9c25b38a2c392c719"
  },
  {
    "url": "assets/js/11.ad38d723.js",
    "revision": "d468d9175818bec1057edbd534c5bdd7"
  },
  {
    "url": "assets/js/12.9b9fc9e9.js",
    "revision": "797ef785cde3930832b9415965c65be4"
  },
  {
    "url": "assets/js/13.be779519.js",
    "revision": "69b7e2385692cdb3e20646dd5c24846e"
  },
  {
    "url": "assets/js/14.bb5915ce.js",
    "revision": "20633fee08ebb38371e1c78918566bea"
  },
  {
    "url": "assets/js/15.05263b2e.js",
    "revision": "a0702a80ce263dcf53750ebb5254bf71"
  },
  {
    "url": "assets/js/16.81c188d5.js",
    "revision": "1d70fc39e28d76a183d20a6f82dc5365"
  },
  {
    "url": "assets/js/17.f8fa239c.js",
    "revision": "06810de706acd5ee84f61e0eb0c80dc3"
  },
  {
    "url": "assets/js/18.bcda4a9d.js",
    "revision": "75db4d096a67dcb724f19bdc419ff401"
  },
  {
    "url": "assets/js/19.0aa25c75.js",
    "revision": "e636a3ecdce356ea950e4dd5c1b24acd"
  },
  {
    "url": "assets/js/20.66221416.js",
    "revision": "f95cb7ad4d20d69091486ef929d15d49"
  },
  {
    "url": "assets/js/21.c96a2cb0.js",
    "revision": "71afcb74874ce34e662137a04b78e9c2"
  },
  {
    "url": "assets/js/22.16fded20.js",
    "revision": "95d7e23f686ac752fe5fd214972315a9"
  },
  {
    "url": "assets/js/23.bc4a20b9.js",
    "revision": "c92baec259a05b71389cc5bc95679714"
  },
  {
    "url": "assets/js/24.86363e94.js",
    "revision": "5c123a5e12bc2ecf4aa059475294b656"
  },
  {
    "url": "assets/js/25.bca0004d.js",
    "revision": "242a143865a2e9882eb602343d4f7b2c"
  },
  {
    "url": "assets/js/26.cd915d47.js",
    "revision": "55a3b40c2dd50cff419cf991e9957ed2"
  },
  {
    "url": "assets/js/27.2ba2148a.js",
    "revision": "45636fbaff6cae3079f9eccd6c388368"
  },
  {
    "url": "assets/js/28.b1da1532.js",
    "revision": "94c4d03a86a53136b20019ac182eaa03"
  },
  {
    "url": "assets/js/29.874c670b.js",
    "revision": "b9c859f1ab45142d7d72eaee84105ce0"
  },
  {
    "url": "assets/js/30.84312cc5.js",
    "revision": "860dc258bc3686b3b7496ae4f7032883"
  },
  {
    "url": "assets/js/31.d3df4de9.js",
    "revision": "41fe127788ad132a6b7e026d5f5ab5d5"
  },
  {
    "url": "assets/js/32.b321a67e.js",
    "revision": "8ea2990b860fec5aeb359b069cd60735"
  },
  {
    "url": "assets/js/33.fb7a5614.js",
    "revision": "b0dd5840063fac990fb3f23662ac11ff"
  },
  {
    "url": "assets/js/34.400a731b.js",
    "revision": "ea415bcee166bff29619bc68bcb2e8b1"
  },
  {
    "url": "assets/js/4.992078af.js",
    "revision": "eeb2cb2d76bd771db196aa2a25ef7953"
  },
  {
    "url": "assets/js/5.6940b772.js",
    "revision": "3a89a98e8a33170176823e8bc9cda1ed"
  },
  {
    "url": "assets/js/6.6b7fb3bb.js",
    "revision": "e0617413439cdaeea1b77025330fc6e8"
  },
  {
    "url": "assets/js/7.33afbe52.js",
    "revision": "8da7f9deec4da3c253f1be7d2ad9b104"
  },
  {
    "url": "assets/js/8.fa80af73.js",
    "revision": "a580632bd1cd0af40840aad3681dd530"
  },
  {
    "url": "assets/js/9.1be98c46.js",
    "revision": "7bacb592172a18d395936a2e67ef9bf5"
  },
  {
    "url": "assets/js/app.1f224b3b.js",
    "revision": "7f38c9315e6e82cbdd71c962eead35b1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a071615f.js",
    "revision": "c7325f3a67a3d8560988bd1bfb60571b"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c706ed3f1ed32b4c0228d70304d0df29"
  },
  {
    "url": "categories/index.html",
    "revision": "752d7083a65ce5caebc07f481c83edb2"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "14e27b2d8cd5674f300b810de645cde4"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "bec2d885fdc4e0538bbf0cdf930f4dd7"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "ef1313d9944a3d7d1defedeec69c528c"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "7fdbb75e3a1f79799a4f761d3256dee8"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "1456570d09eed184f5a60a7cdbd87bf6"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "de91829f700c342fe453897b9029e4d1"
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
    "revision": "2fd233161c8dccef95280a0ec29447eb"
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
    "revision": "7c45e76b3b4ed39796b0364c74f0e985"
  },
  {
    "url": "tags/css/index.html",
    "revision": "e917cb42f66ed7d8cb33133d19debe26"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "865a3acad9ca5fd75ae10f1b1b222280"
  },
  {
    "url": "tags/js/index.html",
    "revision": "da25c9f00cdc9ccb68e092b75cb7f48d"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "22109f175f1ab7645a55623c0c7c1a9b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "aa3e96f9fa78b125a6ba23a737297e92"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "6dbbf1730d6bf9fddec59c1360081100"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "5fab7b58772c9aacbaebde78577ea09e"
  },
  {
    "url": "timeline/index.html",
    "revision": "e63a310126c38d60f4d079206979d8fe"
  },
  {
    "url": "生活分享/life.html",
    "revision": "81c176e2a94b66359934b53d1e80e4ae"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "d53bc65cda607f842e36765c4ac43791"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "aef48a0c66e0f1a3de99309a30b259c5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "f06db331cb29dd7711c652fd7c295ba6"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "df6f167333037112cd3ea019906f5aab"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "26d83b519304e3bbff8f3fc75cf9aeb4"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "382991ce3f41f0303929b583d2ae0f19"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "eaa40bfacd00cbb0114a6413289d880a"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "c560d3c39a9d11102d1fcf4fd1f239c4"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "3a7b197c6a91b5d45eef0b120ad5b6c2"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "6d0cbd56775de9ee222dc6092a75dbeb"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "e85f8a2bc727169404ca0f0050ccf8b8"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "bf706b3121cb2ef542916955f93cd09d"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "7827639a73b480ccc6e1d2eeb4eb53d3"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "ebec4678734ea95a78dd36335db021f2"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "a8339730ed86edf3b185ede173888f77"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "1748602c7f005d4370f639f4c6da9ce2"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "e708cff2dd46366e105cb7351ad94c28"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "930c687d3aebfc2daea0a85882d499d3"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "fa371aee757cbb0ffbdd15605810b492"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "cb5b1151f82216d6dbe5b1a26ef8fd61"
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
