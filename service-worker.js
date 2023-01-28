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
    "revision": "9c8e7535f97c7beb18ebf971abf2b909"
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
    "url": "assets/img/image-20230116091338609.a69caab0.png",
    "revision": "a69caab0c860277db47a13e8a5ef66ce"
  },
  {
    "url": "assets/img/image-20230116100209635.777d6739.png",
    "revision": "777d67394842153e68652437aea7b107"
  },
  {
    "url": "assets/img/image-20230125115127144.4a44f41e.png",
    "revision": "4a44f41e4ce9585ee8e605b0eaa901e8"
  },
  {
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.86de11d5.js",
    "revision": "e200ffaba4e768b2bd2739381b99e382"
  },
  {
    "url": "assets/js/11.dbf12e0c.js",
    "revision": "0dc22ce3c66250c1a01696ca5782cfbb"
  },
  {
    "url": "assets/js/12.6aea5ee9.js",
    "revision": "e5a2e0dd3a8c0afc7115dcca7ace8ea2"
  },
  {
    "url": "assets/js/13.59f424dc.js",
    "revision": "49aa1b4a521e522a59807533b32efd33"
  },
  {
    "url": "assets/js/14.4a46aff2.js",
    "revision": "75dbe94acce4e56feeb2b6d22776229e"
  },
  {
    "url": "assets/js/15.7da80679.js",
    "revision": "23de24bba9821109c31a942e162b99ac"
  },
  {
    "url": "assets/js/16.346e222a.js",
    "revision": "f1a420773d22d30b975e84e605ee4f66"
  },
  {
    "url": "assets/js/17.c845d925.js",
    "revision": "f9ec94dee3cc1f9e73908812d4806f25"
  },
  {
    "url": "assets/js/18.99cd483f.js",
    "revision": "cc246f7f07272dd29fd0f2e7e091669f"
  },
  {
    "url": "assets/js/19.f0de10f8.js",
    "revision": "76c197810c26eae18fe1fa7e65724174"
  },
  {
    "url": "assets/js/20.9d60ec6b.js",
    "revision": "c00a5f8ce8c09b179bcfe5c355fda67f"
  },
  {
    "url": "assets/js/21.b9b12c11.js",
    "revision": "c10e33169eeb530c2959800ef8671d6a"
  },
  {
    "url": "assets/js/22.dcbe8e1a.js",
    "revision": "63f1b4efc9e334704da8e38f9d8bb533"
  },
  {
    "url": "assets/js/23.071c3625.js",
    "revision": "605c972b291924f4fd41984c12f0c615"
  },
  {
    "url": "assets/js/24.000b9de3.js",
    "revision": "2d0606babcef949f9229b1923d11a8ea"
  },
  {
    "url": "assets/js/25.051ef79a.js",
    "revision": "52009be77048bba30225a2e2ff9641fd"
  },
  {
    "url": "assets/js/26.c8c72bc7.js",
    "revision": "bb86c73a7b4cdbd71038d993a001ec77"
  },
  {
    "url": "assets/js/27.8d122d53.js",
    "revision": "552c896478037a4c299aaed00a8dea70"
  },
  {
    "url": "assets/js/28.d5390439.js",
    "revision": "cb0f36a90e9f66a332f9aaa43f9dbb82"
  },
  {
    "url": "assets/js/29.73f260a4.js",
    "revision": "6d9cd5218b8140370007b14c998bd03b"
  },
  {
    "url": "assets/js/30.98c8566d.js",
    "revision": "66ba3a7c7ba876686fc9875b685785bc"
  },
  {
    "url": "assets/js/31.6b6aa262.js",
    "revision": "aad54618219bd462ff16d60fe34327b7"
  },
  {
    "url": "assets/js/32.acf4aa3d.js",
    "revision": "946d99a23a3961909b902d802fd89f7c"
  },
  {
    "url": "assets/js/33.0cb951b4.js",
    "revision": "56abe5f9ad47977785cad9cbe6609817"
  },
  {
    "url": "assets/js/34.a71e2e3c.js",
    "revision": "c35a16697a05acb960d95d55c822afd2"
  },
  {
    "url": "assets/js/35.af8ffde1.js",
    "revision": "827d97b3d6410e62398a669bb27e9bd3"
  },
  {
    "url": "assets/js/36.844851bb.js",
    "revision": "44d617804314cf31c7d939eb4cd3112d"
  },
  {
    "url": "assets/js/37.7ab8d281.js",
    "revision": "58e57066ea44958840201aac0f61388e"
  },
  {
    "url": "assets/js/38.94471657.js",
    "revision": "b5d5750b17f597a1b15bfdbee1fd169e"
  },
  {
    "url": "assets/js/39.2357e4f5.js",
    "revision": "7eb17ba67feadd65aa6df6b017ddd59f"
  },
  {
    "url": "assets/js/4.4dc13b99.js",
    "revision": "2334ecad46841c2e90c71ab239832af0"
  },
  {
    "url": "assets/js/40.c2e996b6.js",
    "revision": "562c22c479e12b96e1a7e7146edec648"
  },
  {
    "url": "assets/js/41.9e799d54.js",
    "revision": "28eb4a2b3a20a5be40690f2059506a54"
  },
  {
    "url": "assets/js/42.9e281c1a.js",
    "revision": "cb9c6983577ca134a0e0b2c34e140482"
  },
  {
    "url": "assets/js/43.39f9d572.js",
    "revision": "9d94679936b9f2e27dd9b2982f64e7d7"
  },
  {
    "url": "assets/js/44.f2c33871.js",
    "revision": "fdc0d74f692ce0cc0bd05c636e762071"
  },
  {
    "url": "assets/js/45.b9a2c316.js",
    "revision": "71f912fa5dc844a0187d1d5c71df0167"
  },
  {
    "url": "assets/js/46.8367ac6b.js",
    "revision": "ce07efd9c3e71cf2c41e8a79b04ce4f0"
  },
  {
    "url": "assets/js/47.ef6a64c1.js",
    "revision": "4cfe03540ca75a6e4b00d3accf19811e"
  },
  {
    "url": "assets/js/48.1d12b288.js",
    "revision": "ce2b5b88aeced45cb4ad4ea6bdcba1ea"
  },
  {
    "url": "assets/js/49.1852c0cf.js",
    "revision": "7fbdb1a969450ab0c5ac0088613f30ca"
  },
  {
    "url": "assets/js/5.7c66e4a5.js",
    "revision": "7c96397d62b1c0adf9d486050f65f1b5"
  },
  {
    "url": "assets/js/50.b9e692ec.js",
    "revision": "d9e5eda435e975f4d4f20b0a55ac48c3"
  },
  {
    "url": "assets/js/6.6f1bb2ca.js",
    "revision": "662efe758657ed04fcb0fdf099065b3a"
  },
  {
    "url": "assets/js/7.58090194.js",
    "revision": "be6f47071d96e5c047bd059409be5eb1"
  },
  {
    "url": "assets/js/8.2cfbb589.js",
    "revision": "99515d655e1a7115657b86504cb92508"
  },
  {
    "url": "assets/js/9.a60846d3.js",
    "revision": "e30142df2287d7379c931b1460c2b7ae"
  },
  {
    "url": "assets/js/app.da7959a3.js",
    "revision": "f65c0f135e699bcd6753539e3b08ec36"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a6ff53df.js",
    "revision": "3c38f99a92878952df2ed9837a344107"
  },
  {
    "url": "categories/css/index.html",
    "revision": "087efad2b53f2783786ad4bab18bf27a"
  },
  {
    "url": "categories/index.html",
    "revision": "90ef54db306368fad98dd5d37406e3b9"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "4b7432acf9de597c948c613bc24f9594"
  },
  {
    "url": "categories/JavaScript基础/page/2/index.html",
    "revision": "24faec86c0706a611fd62515b3eb2227"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "adcc1a59515a2a7459cdc768b33e2dfb"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "f9cf974c1307aa2153420635b3c2ef1d"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "eef1d1aef68b668ed0fca493c1986a63"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "47ed16b0fe69089b537c8ad2d0f11985"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "1cf9a912e5614606198233bf54fb2eec"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "115c41b231ef98f559296d6e271b45cc"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "d3fbb829c55628358f0c68d11b052c8a"
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
    "revision": "940e488a5aa12b599bc2d45c2398adad"
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
    "revision": "2789acb983afea6fc4432987ad9b6ecd"
  },
  {
    "url": "tags/css/index.html",
    "revision": "3515330b3572b59713c9d8a852265b23"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "cad2489d4d011c237f173759f862688a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dba978742af8419c8af53e243fb4ee8f"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "753fda1c669e370bb40c812dfd6c9737"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "c40d0e4a4669f05c05859b3c0b7e4362"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "ae43b714a1a80595c7da2bdbd7945b04"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "fa7ff869bb5f9d62b644f8d2b8864aff"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "394e07d9b224866a763fb4e89da0e2f5"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "7249f4ba6de896346e5f650031b100d5"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "c949338360f94dd5d5195980877279d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e7ca041c602aadcf45b510d99f5ab59"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9769b7f6a9820764eedc5b697deee086"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "304ba538ce5e050590e6b8f22b4d0bbc"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "eb0ab8efa9e8984044d3e8075d72d396"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "d23712ae75acc21b24e3a2c153ee06a6"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "774ca31346f3e6086a068a64e57057ff"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "60cc6f2049e20bc3e2226a0fbd8dda69"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "60a0f2836a5bed08bd9dcbeb92c60409"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "7717d40dda3ad6d4b36a089ca4274390"
  },
  {
    "url": "笔记整理/javascript/es6/async.html",
    "revision": "ae8d8d1a001745f2d5e2db3b2c393d33"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "c3ca3b917184b3f188381b1ebff0dd0d"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "8d5c301828c6923ed301b10dd292fa86"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "1bfbd7b374ea9dc74da6f1657a573146"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "a78d9de253f3113934cfbb68aef79caf"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "3a3e7218a6a133a328df928c1517276e"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "9afb8789b138588706359edcae46d2b8"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "93feeb8b9f7b8a10629dea1c4eda37cd"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "a5d306f1eb32a5eb0740bac67f781e43"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "529d7d224cb120d5e79bcab973a967bd"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "85a922786485bdf8286e4e56c33f8c4a"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "e9086f73f1f437403a59c4c93429c2e2"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "6937e79d34242c0b4c2a012814a634a9"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "4795da443a39009bbd43b072b1cc8a59"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "8911bf7ee95246f45e3a508b17abafc0"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "60d0b0f30c726d5e9d43109dec111b21"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "11d130bced769ab74eaaacde3bf4b1ee"
  },
  {
    "url": "笔记整理/工程化/工程化.html",
    "revision": "d47fd5b5f0ff20a2424bfae5cd4ce33a"
  },
  {
    "url": "笔记整理/工程化/模块化开发.html",
    "revision": "a8ae1345922e8219cc0410ee9de23249"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "7c3e9f1d143ef3d7e231a6ab7eaf7ec4"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "0540609d78254e5ebbdf5acd94ddacd3"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "1ba55597ad8837a17158c0b170c9846d"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "c91b2620e9780a11c0568770b4c09c53"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "484577ee8383982d438b54d7f9040759"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "5dec9c49b083c50e2d4c4ed7e34142e6"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "461c3176b29d26bcedd1e953fa1a31b4"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "74db6015da6fe318467c5b9de6957c0a"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "151b1f0f092def879864fba72ce8e7cb"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "9216c0b207774750e6c7a859c7ed2082"
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
