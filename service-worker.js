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
    "revision": "7aa0ca0aaa73c9a1501afa97d1ba9fad"
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
    "url": "assets/js/10.586bae83.js",
    "revision": "2f7b9d605904e8d64958294dfe04d0b4"
  },
  {
    "url": "assets/js/11.ceb57204.js",
    "revision": "c5f224d06a7c6fb24afa6c08c5d6d9c6"
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
    "url": "assets/js/14.b1a520f2.js",
    "revision": "a9b3d1caa0138e9807e00b3820ba43d5"
  },
  {
    "url": "assets/js/15.a487b417.js",
    "revision": "97e37db5608c07b31c46a1198df809c2"
  },
  {
    "url": "assets/js/16.5fba8211.js",
    "revision": "4a002f5071cadfddd668d60f3ce0507d"
  },
  {
    "url": "assets/js/17.360d4881.js",
    "revision": "3bda85113a736f54e82d794efbcb0439"
  },
  {
    "url": "assets/js/18.05c4e5df.js",
    "revision": "e66003fae004416bfc03e9576d22678b"
  },
  {
    "url": "assets/js/19.f0de10f8.js",
    "revision": "76c197810c26eae18fe1fa7e65724174"
  },
  {
    "url": "assets/js/20.52c401a3.js",
    "revision": "0ad3553acbf76204ab1ae0d89237047d"
  },
  {
    "url": "assets/js/21.959be7e7.js",
    "revision": "a7c203efd53f65aaf247979a078526ac"
  },
  {
    "url": "assets/js/22.2e86cf29.js",
    "revision": "7a4fb822b0aabf9c2a8e29cf180b0dfd"
  },
  {
    "url": "assets/js/23.a51d74c7.js",
    "revision": "306a6073ed6bdd98430ff0075157e3d1"
  },
  {
    "url": "assets/js/24.b01ceaf2.js",
    "revision": "1cba689fb8da77361621010c7a824986"
  },
  {
    "url": "assets/js/25.47575282.js",
    "revision": "bdcd65808cabbca67293d51b61b1db30"
  },
  {
    "url": "assets/js/26.4035d80a.js",
    "revision": "4a3ca5a6b73abd30cc2c7ecd826efa54"
  },
  {
    "url": "assets/js/27.527c8b93.js",
    "revision": "d8d3d5953343eb3d7af9bca09f11ae39"
  },
  {
    "url": "assets/js/28.00ce85e4.js",
    "revision": "c6a4334a81a9c72fb60bc7620dc0a669"
  },
  {
    "url": "assets/js/29.8f353b17.js",
    "revision": "8b643f8e65bdb1d3452f7a512bdc2f36"
  },
  {
    "url": "assets/js/30.e3ccfcdd.js",
    "revision": "e2f960ecaba8eadfd8b5ad5e2f49b204"
  },
  {
    "url": "assets/js/31.a071b820.js",
    "revision": "ffd26bec9ca30c02e9f8dcda801b6ef7"
  },
  {
    "url": "assets/js/32.2d189ad7.js",
    "revision": "b3df2411e51aaa012665e6ca933bca7b"
  },
  {
    "url": "assets/js/33.d9ee6b2f.js",
    "revision": "8a9e4bd69792381c5fc346c820cfea64"
  },
  {
    "url": "assets/js/34.87807f18.js",
    "revision": "acea5759b566a327c3cf38e78ba720f7"
  },
  {
    "url": "assets/js/35.9a1bbcb7.js",
    "revision": "5402838025b028bdaf881ca184950d5e"
  },
  {
    "url": "assets/js/36.8389f212.js",
    "revision": "3a6b9549aea4b5326002ef45e7b0aefa"
  },
  {
    "url": "assets/js/37.1a800430.js",
    "revision": "4e24cca1033f4ae6259321d5944b1b94"
  },
  {
    "url": "assets/js/38.ed7a5141.js",
    "revision": "f7834f7db259264db165e6b237ff4eb5"
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
    "url": "assets/js/40.17685b43.js",
    "revision": "3527f16c4962f81d8d6f7b17e394ef78"
  },
  {
    "url": "assets/js/41.7168dd7a.js",
    "revision": "9bfda242e21f9cfecdc630834976c338"
  },
  {
    "url": "assets/js/42.c683f2e6.js",
    "revision": "a2d7ebddfb46a0e23493d28be912c124"
  },
  {
    "url": "assets/js/43.5f50b4b1.js",
    "revision": "a1d9717b89b17ad6f86722b5f0a09569"
  },
  {
    "url": "assets/js/44.ce846648.js",
    "revision": "9fd270a1141dddc2d6d35e760bc82cdf"
  },
  {
    "url": "assets/js/45.ba0d035a.js",
    "revision": "4e31450f1fd6e2f21d22367a019cbd2d"
  },
  {
    "url": "assets/js/46.6dbc0a33.js",
    "revision": "ed0f61ba3e9daaf217fe438a247cca01"
  },
  {
    "url": "assets/js/47.911d639e.js",
    "revision": "cc40246b746f4a3ea8b8e6940e9ef681"
  },
  {
    "url": "assets/js/48.7119caf9.js",
    "revision": "7b4e5827100ed0b32f58e2264b07a739"
  },
  {
    "url": "assets/js/5.7c66e4a5.js",
    "revision": "7c96397d62b1c0adf9d486050f65f1b5"
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
    "url": "assets/js/8.87e6f237.js",
    "revision": "2a55dbc2e8681562d31c3b7db50eda96"
  },
  {
    "url": "assets/js/9.cab7e1c6.js",
    "revision": "4ed57916cf9b31e630025a3b8bc4de13"
  },
  {
    "url": "assets/js/app.a48f6cda.js",
    "revision": "32f52b339f586c2ff9e7856330f29fcb"
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
    "revision": "98bd98e83e0cd1858b139332c4b538ba"
  },
  {
    "url": "categories/index.html",
    "revision": "e91b818b2728ba5ba45f2e9d83dd4c9f"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "d675abdc8ee5738fb27eb4b3820b215d"
  },
  {
    "url": "categories/JavaScript基础/page/2/index.html",
    "revision": "3006d7ee057c6fe37dd9eb91140b5757"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "050c30a92ce05f939df5ac225a00820f"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "7817946ee5fad4c9a4450d61b5459f96"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "f88a05f68f1706917095f299bb28d356"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "1d203107383e4d95e239aa4943a77ef4"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "e4addc4269fc21b1f05fd0f143bcd0bb"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "ca86b137fc57f4dcf11e90625e0fafff"
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
    "revision": "e674b56a95ec13c94214d14d86769e58"
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
    "revision": "f4e9ebd3b60b8fd981a6c87452f1aecf"
  },
  {
    "url": "tags/css/index.html",
    "revision": "685a7da89c85415f3c366127056c08c6"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "9951770340541955158277775b6e89e2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "250c42bc865b68817ee35f3a76134c43"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "322afdc13786a90b5e714af57eaf20b6"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "b4e1da4781a42539e0f6d2888b5cce3e"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "97c2718bf79b938e7ede835bf6834e62"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "ee7e1077585e3bd88e86277173f70034"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "0a113eed682974304aae502308c2d4b0"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "3314cdccfeeebe49f2f0685963996b4d"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "715ebbedc0b50320df0e452e937207fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "e026d3f8a042e2f0ec106c3fdae16fa6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7281f6e6e3ef420a93f8714ee5ff6c3e"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "2ec744ea99c9a9c02e81c3481cf529a1"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "38589ca2296bacf943984eae1ae33e13"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "b1a1367dae99c3a25a1faa44a806127f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "d4e4fd4d64da3041c3d0dafb45105842"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "22c627445d5c111a44f7830c0cdf574e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "ab6152f16054aff9dc2537a65721891b"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "426b5dc8f49d99fd20edc34a37b81645"
  },
  {
    "url": "笔记整理/javascript/es6/async.html",
    "revision": "702b61e968c6bb7964caa2080564134c"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "b4e04329ee2a9f290382edc23f4b54c6"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "13c76aa95bb79f7e0b2f2e72e5694baf"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "fa52bca2a6ffa33f06e9802aaddc35cb"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "c583892c45f72705715b388a2669ffe5"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "d9add54ce42a9c60f1d42bae33859520"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "73b6630d71181ba7e39b4650071eaf9c"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "c4206a533893e1678a27fbe49decb38b"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "3e0a9a2db70c67ca81751674b17877a4"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "935cd439c57d5bafe6e3d53ec18d723b"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "61cce42663663e359c27feacb62eaf3d"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "02d9a24198c5cd2d1bac0c72ecab827f"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "5fad1e15c434ec3d61851dfb59a8acaa"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "c9136e0e2aa0f6550bd09210d5acc12b"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "f4cdb442117114ee633cac2d609f7c4e"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "feae92d06211f53fb221fedae9b5bbf0"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "c8f32581ae09ba6c806d739be6ef3002"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "16215aa7d074700b167ae60804ccad70"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "0d2383eb6aed062a79dbe022d5275f9c"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "d1ef4052747b3c84695de32aeaa2df84"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "61a07dc48c1d95786709d70e446952a8"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "056012d4ca5dd6aa277b3edbe15a9b81"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "775c2b81eea1e6704e6db641e1687c23"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "45ab04dcd0ffe1b704c3a95dd3bf847b"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "27f45f05e21ad4d87824fe6a4c1fc12d"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "346182e4daccb0595bcd72a94c41cc6f"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "18b0404b2a84241ae8410485f2f7bf11"
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
