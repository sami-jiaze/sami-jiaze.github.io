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
    "revision": "ff898125995616ac020956501e2ba58c"
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
    "url": "assets/js/10.de5fec33.js",
    "revision": "15e067e3cf9fe5d5524383b3b186ecc6"
  },
  {
    "url": "assets/js/11.55956568.js",
    "revision": "dd7e9dbe6b7844c0f9182356afb55472"
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
    "url": "assets/js/14.82901af2.js",
    "revision": "c526d882b87010fbfc178407f79bcd0a"
  },
  {
    "url": "assets/js/15.130be6a4.js",
    "revision": "4d10ee95979478b9715b1eff6dc9eaa4"
  },
  {
    "url": "assets/js/16.1929da28.js",
    "revision": "6d373f32c02a7161a93500f24680ee35"
  },
  {
    "url": "assets/js/17.a2a74322.js",
    "revision": "ad6000bbbdbe27ae38be23c6999938ba"
  },
  {
    "url": "assets/js/18.20876cd2.js",
    "revision": "9aea1a55fe55d28ce9fd94c4023a3dc2"
  },
  {
    "url": "assets/js/19.68291e98.js",
    "revision": "098eed83a1c4e18dc8e27c2961b82f9a"
  },
  {
    "url": "assets/js/20.97c6dfe3.js",
    "revision": "9b357b0bd9c09c7255cba37392084d3a"
  },
  {
    "url": "assets/js/21.e5dbb8cf.js",
    "revision": "1b54b96c2c7990f79a91b1e666212546"
  },
  {
    "url": "assets/js/22.896bca44.js",
    "revision": "500b33d04ec3c2380367b5789826bc12"
  },
  {
    "url": "assets/js/23.e628326d.js",
    "revision": "4c5efdbf4f64df4dfcfcc6930f27b2cc"
  },
  {
    "url": "assets/js/24.1924b3ef.js",
    "revision": "73ce49c9c1e4522b6bb563b87cc13e50"
  },
  {
    "url": "assets/js/25.3f39a7c1.js",
    "revision": "150495fea3fe4014d6882ad624575910"
  },
  {
    "url": "assets/js/26.3780af2c.js",
    "revision": "4ffa529353fec42a0dc20de6edb64e5d"
  },
  {
    "url": "assets/js/27.d1f4e368.js",
    "revision": "9ec4e54cf818ba1acd464a7057c4aca0"
  },
  {
    "url": "assets/js/28.3c980f5d.js",
    "revision": "c83f500addcd44fe022781269345b076"
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
    "url": "assets/js/32.e9301e07.js",
    "revision": "5d747e8ce4e77eca2d171ce5a3a65745"
  },
  {
    "url": "assets/js/33.ce2144b6.js",
    "revision": "7b0ad7474855c66f6bbeb3ad0952cd17"
  },
  {
    "url": "assets/js/34.46b8efc2.js",
    "revision": "674ed72a3797a5394607e644e531761e"
  },
  {
    "url": "assets/js/35.fcd0c431.js",
    "revision": "c24e452f4568e78e9db8d1b3a0ecbb91"
  },
  {
    "url": "assets/js/36.6020e86f.js",
    "revision": "6d283edf2b44e02cfea1cdd2cea3c7ab"
  },
  {
    "url": "assets/js/37.b4ad3fce.js",
    "revision": "fc5efe4cca2b38d41a8f2ae4817a9413"
  },
  {
    "url": "assets/js/38.1f01eda7.js",
    "revision": "b2173e90af69827dbb44a9d99a1c551d"
  },
  {
    "url": "assets/js/39.9938927a.js",
    "revision": "63ee77cf598c1081398f05c15bd1cc9a"
  },
  {
    "url": "assets/js/4.66424f0b.js",
    "revision": "d8a71015c9a0b8e6231432072db56099"
  },
  {
    "url": "assets/js/40.8cc7aa0f.js",
    "revision": "caed667ceedcb8212e5c5352a52550d6"
  },
  {
    "url": "assets/js/41.fc9f23bb.js",
    "revision": "59effcec6cf78d77344e159536fb09ec"
  },
  {
    "url": "assets/js/42.5450926e.js",
    "revision": "9de5cfc359389ad2d079ec760f83b74f"
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
    "url": "assets/js/8.8b424818.js",
    "revision": "63f1990ca96ef54d1b6cbfe86e4a477f"
  },
  {
    "url": "assets/js/9.05cd4389.js",
    "revision": "0ae99503f2c9a90798cbb9ccabcc9d17"
  },
  {
    "url": "assets/js/app.f8d3fdf4.js",
    "revision": "0e3e0cca20ed355f4ace6b74f521cc00"
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
    "revision": "dbb7f0f491a74580acc58c766fe6b667"
  },
  {
    "url": "categories/index.html",
    "revision": "538a547b6d5482c24d2d91b419dc1acd"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "d4c485ca142e60fdd768fda6c1574ae9"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "e5c760b3f6a7eadcf31cb2eb719604dd"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "e6627eba5ed4865007c309dda42d537b"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "f715eea14102025a462ecc9e02fa93cd"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "c883d0bb42b71e845f4ccaeb746defcc"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "dcc670430bf1a6c3769b81e2e9729e06"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "4eea0c90cd243a18bc2ec880b8003e40"
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
    "revision": "cbdbc3c13907c53eabd63949bf567e97"
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
    "revision": "091f7abcabf209317f2dcd6b30d197a8"
  },
  {
    "url": "tags/css/index.html",
    "revision": "bd5bd8a52488882ec0a3745d6c140b71"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "b1c7d40bd62f8298c4e206c61d40c58b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "26b8eeea4412b52c93238766faed8778"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "5c3a6d879224881d55cd840ab218c008"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "e12f3b3d78abc3e1c036dc7c95830382"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "2ae1452caad73e9bcb65573de49b4184"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b091c8891df3b87df506212b089e426a"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "8fed6bb58da4cbbbdb495f64394c54eb"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "e857871991ec216552c5cc9288e83a32"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2ffdabcb00f98e0a3458394d036543e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b5145ccc12313e47fc6feb3a3fb815b3"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "e99cea4f8567e1bfd033ece586d6f7f5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "616193e5a5089e9cab46e0fcce811cde"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "322a9f4af98845ad7bf5be9d989432af"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "9a9fffb650711efad97e07b8163d1feb"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "4399cf63de0892286e42a7437868cd2f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "e83d95f715586bb86bca1ecf8abad873"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "ad70f6b06dc2796432e99c7e4815a92a"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "31d8b8d870359f646d08153b80e77380"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "d7570ea90620475c7b7c829a81088d26"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "7a85ae7d0c0492f9a3f865f9d65bc7b4"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "9c3b3243f4e169f1d3de92c30b4589b8"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "3b19f22cfafc2ddb98465d2d419315ab"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "80ad685632b03cc5bfbccccb131b3095"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "ab47c080365f680368e88643d8cc9600"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "97ff5b05924c1b43ccd195976f76e3c2"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "a56609b759016e9a6479ca19a9bb6826"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "50780b579e75066b7c3ce42b3fecf6cd"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "47005724bbb9315222cf8431f243b4a5"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "e8ad884c110470b6764ded1bd08bd84a"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "b6807296f2015106b981a04c8dd88c3c"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "e1d64761859af9a72335c8ef292d7b50"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "5a872562301905d119dc9a3f14468cb0"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "4b0dc2d6a4287a2f28c461bca385bc8e"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "0e8e2bde5f9b0c2184bb04ce14e11f2e"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "c2a9b075032b487b001c92cea62c4a9b"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "4cc715ab6a78a32271a273ce94453ff6"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "01afefe08ee2391fed6cc1497e0a9b6b"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "cb78e775c4137e8cff873ae77aa5ce7c"
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
