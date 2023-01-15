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
    "revision": "77bf842b6f0a3a94c8b5a79958e7e6ea"
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
    "url": "assets/img/1418466-20180810112625596-2103906128.7bd76d30.png",
    "revision": "7bd76d308b8aedb3cb12f7e637b97bd8"
  },
  {
    "url": "assets/img/1418466-20180812200309137-101174843.4405c74e.png",
    "revision": "4405c74e7d6c10d9e3b039fce4bbc987"
  },
  {
    "url": "assets/img/18url.7fbc74a2.png",
    "revision": "7fbc74a25248ddf018415e7002d1cba8"
  },
  {
    "url": "assets/img/5.46a41bc8.png",
    "revision": "46a41bc84bb4de7b5c42429157062cbe"
  },
  {
    "url": "assets/img/6.3dc161a0.png",
    "revision": "3dc161a0cacc5da6d73f48119bff4500"
  },
  {
    "url": "assets/img/7.abb7acee.png",
    "revision": "abb7aceef3fc2812f814e57df1587f5d"
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
    "url": "assets/img/image-20221217012643576.2e33d2b2.png",
    "revision": "2e33d2b2b10dc3720d418e52a7bdb06a"
  },
  {
    "url": "assets/img/image-20221217013726366.03ef0e15.png",
    "revision": "03ef0e154403eefad8aa0921f618eb3b"
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
    "url": "assets/img/image-20230109114533628.940ba56a.png",
    "revision": "940ba56a82b6986361d557709805a079"
  },
  {
    "url": "assets/img/image-20230109130152135.7c140b39.png",
    "revision": "7c140b3945150f8969904e7054c378bb"
  },
  {
    "url": "assets/img/image-20230109132434046.d571d941.png",
    "revision": "d571d941217e25ad19b70be4342f3b09"
  },
  {
    "url": "assets/img/image-20230109172428187.ea26a55f.png",
    "revision": "ea26a55f0f58b8414674fdd0c591ac82"
  },
  {
    "url": "assets/img/image-20230114090304163.794cd2df.png",
    "revision": "794cd2dfc0c3f238e139c35d19345eff"
  },
  {
    "url": "assets/img/image-20230114101950723.db4fd73a.png",
    "revision": "db4fd73a0bb3cc9d91b9f2be9d465547"
  },
  {
    "url": "assets/img/image-20230114112336641.2be42cce.png",
    "revision": "2be42cce9202ba71ce29a16b61a47a8e"
  },
  {
    "url": "assets/img/image-20230114114204597.52a4bd47.png",
    "revision": "52a4bd47b98da87e5850e5611d45b72e"
  },
  {
    "url": "assets/img/image-20230115095856964.2a65cf60.png",
    "revision": "2a65cf606669e5becfe6cac21fc7b975"
  },
  {
    "url": "assets/img/image-20230115102410725.d5dd5c1a.png",
    "revision": "d5dd5c1a5ba525ddd00045cc26ad7bb8"
  },
  {
    "url": "assets/img/image-20230115103116188.e4b5b6d1.png",
    "revision": "e4b5b6d14c3bcd4c4462727ef6168323"
  },
  {
    "url": "assets/img/image-20230115103531483.0fbab94d.png",
    "revision": "0fbab94d8852b38e4e91d4c764f3530b"
  },
  {
    "url": "assets/img/image-20230115104309329.dc9243d4.png",
    "revision": "dc9243d48cfaeebd41de02af87dc17f7"
  },
  {
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.66b18778.js",
    "revision": "63e09617b5daeca600a9cbf90fd57fec"
  },
  {
    "url": "assets/js/11.2fc639cd.js",
    "revision": "2dac1ed985417422995608ac23fe7ed7"
  },
  {
    "url": "assets/js/12.3d0e780c.js",
    "revision": "b29bbdb6a67d62d76e9dcc0cf376d963"
  },
  {
    "url": "assets/js/13.5128b676.js",
    "revision": "c1d1b8a27022e4b6c94adcb23ef17e86"
  },
  {
    "url": "assets/js/14.cc2fd5c7.js",
    "revision": "3aa5fc08697d0f6cdde1f68737cc5608"
  },
  {
    "url": "assets/js/15.fef0d0fe.js",
    "revision": "544c48f7559b05ca1140eac302cada20"
  },
  {
    "url": "assets/js/16.1fc9f2e0.js",
    "revision": "51c6802a4d4c0a532aba8625b82700f6"
  },
  {
    "url": "assets/js/17.9ea25ce5.js",
    "revision": "bad79afbbfd6ee4ea45cfdeb1c7c1bbf"
  },
  {
    "url": "assets/js/18.d413fc8f.js",
    "revision": "9cf0f7bba9f2083b9e0962e39f942281"
  },
  {
    "url": "assets/js/19.68291e98.js",
    "revision": "098eed83a1c4e18dc8e27c2961b82f9a"
  },
  {
    "url": "assets/js/20.45d58f6e.js",
    "revision": "0326c1fa0bdf86c748ed8a377334d017"
  },
  {
    "url": "assets/js/21.e5dbb8cf.js",
    "revision": "1b54b96c2c7990f79a91b1e666212546"
  },
  {
    "url": "assets/js/22.09c6cdd8.js",
    "revision": "156b4fd68a5fb155042d3a1e2a601c01"
  },
  {
    "url": "assets/js/23.44e58415.js",
    "revision": "010eeca0762ce3d404b4e09528e8460e"
  },
  {
    "url": "assets/js/24.1924b3ef.js",
    "revision": "73ce49c9c1e4522b6bb563b87cc13e50"
  },
  {
    "url": "assets/js/25.2ae03625.js",
    "revision": "e670831f87ef3d9123e94c87af29e7f4"
  },
  {
    "url": "assets/js/26.39ea1ef0.js",
    "revision": "3d6de1eecaea6876ddaf6a8905d07047"
  },
  {
    "url": "assets/js/27.c6b39f3c.js",
    "revision": "a35f0bde9232c612a92d2ae795092239"
  },
  {
    "url": "assets/js/28.0b40ed5f.js",
    "revision": "10e9d37494f33549f816abf45743392b"
  },
  {
    "url": "assets/js/29.1d9ea694.js",
    "revision": "1fb1b94902e3ac85f3b6e233e053a846"
  },
  {
    "url": "assets/js/30.eaaf27e1.js",
    "revision": "71ecb5e7a16ad90d2f0d7fdf17dcba9a"
  },
  {
    "url": "assets/js/31.9bf08075.js",
    "revision": "eb2dafcf84c391d21816e204d57138b4"
  },
  {
    "url": "assets/js/32.78645e44.js",
    "revision": "a0b633fbc21b30ff6bd9ae79db630949"
  },
  {
    "url": "assets/js/33.17f87b5b.js",
    "revision": "e84b73dad206c6176dcb9797dc2fbb97"
  },
  {
    "url": "assets/js/34.d2d5077c.js",
    "revision": "0499413c9e29514ff38da75b9d9027c8"
  },
  {
    "url": "assets/js/35.1219c8cc.js",
    "revision": "285556713fba5e822ac55ac1fb372f44"
  },
  {
    "url": "assets/js/36.17433fa9.js",
    "revision": "a594e0a9dd423634e7325ce179628d62"
  },
  {
    "url": "assets/js/37.a6b31174.js",
    "revision": "fa85cd0b5b865138c1f2ee20b29e34ee"
  },
  {
    "url": "assets/js/38.67321465.js",
    "revision": "0db33b08a3e5f2031714cae2ebee172e"
  },
  {
    "url": "assets/js/39.7420dcb2.js",
    "revision": "7739c4d83fe0b25c1debcd3aa5d85fde"
  },
  {
    "url": "assets/js/4.66424f0b.js",
    "revision": "d8a71015c9a0b8e6231432072db56099"
  },
  {
    "url": "assets/js/40.fa2be789.js",
    "revision": "94a4185c18eeaf79ce93b8026d309d0c"
  },
  {
    "url": "assets/js/41.44df02db.js",
    "revision": "62b3203259cc9cd83cc1ff7ac5016007"
  },
  {
    "url": "assets/js/5.6c89cda3.js",
    "revision": "0805ca4c5650b50b708ef15586adf018"
  },
  {
    "url": "assets/js/6.ad539d92.js",
    "revision": "f505e5f4b8835519ada1c5ce3ff66e30"
  },
  {
    "url": "assets/js/7.1e7df565.js",
    "revision": "58efc08d96cec6a1aaac69c955aede01"
  },
  {
    "url": "assets/js/8.176a538e.js",
    "revision": "6b86d10d0ad7e45238ac226f0d3c7897"
  },
  {
    "url": "assets/js/9.6267ac65.js",
    "revision": "1f88c9a5e9969cad290d9e095e0a74ca"
  },
  {
    "url": "assets/js/app.36cd4c09.js",
    "revision": "bba3a1d1d04a47fb0193a50b0718a2c4"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f66d702a.js",
    "revision": "1e7a52e9e89b73df4d07531240aebc6f"
  },
  {
    "url": "categories/css/index.html",
    "revision": "ab8ab09ed4c7ffe514ab6105e2e85287"
  },
  {
    "url": "categories/index.html",
    "revision": "76bd64c866fe86e37ad4e804967d57d0"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "fa410f7295c71a56435410b733b6197e"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "86003d4302033d083303f7b53f8fab2b"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "ee4f01c90049cf9e0151424a4aa7d51a"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "0aee768ee3b3df175a1e6a81cc30bc8e"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "944b939049134465e4febd8b4275145b"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "d3086536f6de8c582f8767aa7339db81"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "e54877821c4283a085bce0f849380da6"
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
    "revision": "6c276eab5887b73aa80e813331916a3c"
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
    "revision": "cd11bb93c8b4b00c9222b4419bc4f13f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "198d6b3c7c45b7f9dc05c1acb7f86488"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "80900502ceb8c9b291147ce667170e1d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b383cd338501fd0ef1cb870c88fbc843"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "70ac4ed435de58f32523220481953a1b"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "eff0a2b391a1d7a81a9444b8f5c06879"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "860575672fddd1ceb79d5b635c7fce99"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e4293ce49a2b8972272cd2097bdcf0fd"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "1a49ee8a4a740b10acf8902da8de48bb"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "07c155c8edf42873c3e907ed7da6e986"
  },
  {
    "url": "timeline/index.html",
    "revision": "6815a19a399c78ddb724035658669990"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e8ecd1b842beb5f152a74c0b9bed4880"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "cec8cc62941973a2be0f80f2b225e8c7"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "3701b2cc0cc89971a04ee07ac3e97bb4"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "58dff0c7010d4de1e2bec5ec1ea2bcf2"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "6fd1b952ea973063e5169d2e4e773a0f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "567854a89b1528e9320bfde70a4ed815"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "2365fd32b3c879af56b4a463f9ce806d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "5d007813ddb744d74e23ef5e43b93691"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "015032efc43f586d6cbc0ade72cab0ac"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "b7c00ba650cf4016cc0ea834b1776346"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "25fff9f465745c313191697bfe3fcb7b"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "61cb190e33addcee5e37c922351bd1de"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "cf0892f5640a8bf273c8c37737904fdd"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "d538d93ff78f93f873a7fe431d16bfc8"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "de0a53ffeffee70acd1308aa3f8b53c2"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "6714b9f232c5ec84acc3d2547f0c6f5f"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "30d45ee6f75f7c90c486339222c7db01"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "0d13ff0d433929d1e1713a4e912a64a1"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "53bfb8027302fc9b82ef55797062409c"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "ca843c05d878aed26e4ca751e2d4872b"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "45d48a0d2533415453aa44d9fc8fb4f4"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "0558b1f511710d0f59ce8f7844406a53"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "1badd56a724b7d060d278cf128e1bf79"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "7093de25459c671dd8ceed953d85442a"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "bbf9504389c3357f3de56c1aa6c9e6a0"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "81b4520af02a043abd5208d5ba55db76"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "5d7fa4676b0bf9c9af7b4cfa6ae41beb"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "1b9805cf9e891c3ac98ccdbcf53687f8"
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
