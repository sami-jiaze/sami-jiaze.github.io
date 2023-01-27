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
    "revision": "734280c956c405218822a4c427f35f45"
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
    "url": "assets/js/10.9939cf99.js",
    "revision": "8fc219e1c2b330ac09fef56038167849"
  },
  {
    "url": "assets/js/11.db49d8d0.js",
    "revision": "699bb5f70078fdc466da0ab2fef7b004"
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
    "url": "assets/js/14.e0ca5a89.js",
    "revision": "0a6243f56dfe1b512a03bbc86c31c5ec"
  },
  {
    "url": "assets/js/15.990d19e0.js",
    "revision": "41a9676a94cb5a464d987a5640bc79a9"
  },
  {
    "url": "assets/js/16.c3d96582.js",
    "revision": "f909956c69c0f47cc918fe4a861fc183"
  },
  {
    "url": "assets/js/17.0861f7c3.js",
    "revision": "49d99501d168059d4b669e75aac748fb"
  },
  {
    "url": "assets/js/18.dd03ebea.js",
    "revision": "c016726e316b4aa8e09adfdaf62ec3ab"
  },
  {
    "url": "assets/js/19.f0de10f8.js",
    "revision": "76c197810c26eae18fe1fa7e65724174"
  },
  {
    "url": "assets/js/20.02e06c6e.js",
    "revision": "4422b9272b62763738bc75935fb11bca"
  },
  {
    "url": "assets/js/21.b9b12c11.js",
    "revision": "c10e33169eeb530c2959800ef8671d6a"
  },
  {
    "url": "assets/js/22.9cfa4829.js",
    "revision": "f60333889c1bae85c03d38e828ceeb66"
  },
  {
    "url": "assets/js/23.151d10b5.js",
    "revision": "79b39130ecba73776793a9d73165fdda"
  },
  {
    "url": "assets/js/24.f0451e5c.js",
    "revision": "2d0606babcef949f9229b1923d11a8ea"
  },
  {
    "url": "assets/js/25.28335c0f.js",
    "revision": "8d9946583bfffe0206f6710879c248a1"
  },
  {
    "url": "assets/js/26.ab34226e.js",
    "revision": "edaa470383677e20338adb7e5165b66f"
  },
  {
    "url": "assets/js/27.10e69c0d.js",
    "revision": "1b718cbae1bbed13f39ce223c701e05d"
  },
  {
    "url": "assets/js/28.00ce85e4.js",
    "revision": "c6a4334a81a9c72fb60bc7620dc0a669"
  },
  {
    "url": "assets/js/29.20432589.js",
    "revision": "667598db24b21c76baa67353a019c656"
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
    "url": "assets/js/32.32230b6c.js",
    "revision": "c1d5b2d1303984122ba87418164b936a"
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
    "url": "assets/js/35.109cca76.js",
    "revision": "f6dff00f6e544b24cbcb96fc9d763ee9"
  },
  {
    "url": "assets/js/36.8bb30566.js",
    "revision": "11d1c8d11b6c04c7401acab1a648e086"
  },
  {
    "url": "assets/js/37.4e3fcd31.js",
    "revision": "b80c088857e0fd89ee66a6673ae5f86a"
  },
  {
    "url": "assets/js/38.d52a228d.js",
    "revision": "90e480c7e1996e2020e599e51ccb5203"
  },
  {
    "url": "assets/js/39.eb0cb065.js",
    "revision": "bf65f4fe68956ed9b767b9ab90d7eaa3"
  },
  {
    "url": "assets/js/4.4dc13b99.js",
    "revision": "2334ecad46841c2e90c71ab239832af0"
  },
  {
    "url": "assets/js/40.69d200eb.js",
    "revision": "9503d9613faa6ad1988ec083aa292836"
  },
  {
    "url": "assets/js/41.d6617545.js",
    "revision": "e8329fc8495eadd1863c3c00258a2f55"
  },
  {
    "url": "assets/js/42.d6ce5a8f.js",
    "revision": "5ab72c2578a92b5300bb8caa5aa440a8"
  },
  {
    "url": "assets/js/43.a3202dc9.js",
    "revision": "8f617d9445a65f316f1f91716d009d0b"
  },
  {
    "url": "assets/js/44.00bd4e55.js",
    "revision": "659b04336340eea70fcf2c11fcef04d3"
  },
  {
    "url": "assets/js/45.17efe66a.js",
    "revision": "f2fa303152d8c172f8df5543c1a78fd7"
  },
  {
    "url": "assets/js/46.09d14b5c.js",
    "revision": "69168ecae05ddc1435467729f2ffb293"
  },
  {
    "url": "assets/js/47.0b3d7253.js",
    "revision": "45dcf3dce4449930f1b2e2c2c70c9d69"
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
    "url": "assets/js/8.15943c23.js",
    "revision": "196fdb601c7336531893d9dd9418c523"
  },
  {
    "url": "assets/js/9.c1c076a1.js",
    "revision": "567bf84ebd64e1f8e7d146739c8ff174"
  },
  {
    "url": "assets/js/app.016878bc.js",
    "revision": "270da75ee02c96e5e3b9af8ccef40fb1"
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
    "revision": "b26d22608ccac996c411033f69c4cb55"
  },
  {
    "url": "categories/index.html",
    "revision": "5398a4ef3bf4111015fed600cd1b0bca"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "596df72ba630f0a57c97a87cb709cb08"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "3f5670fc24392268728b1174a33d0b69"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "c736af14db11f7269bff84034470c86a"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "3c45973edd171b031e6dbf71a0309cff"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "2c8e10efbfc29c3799b7110b3a6b11ec"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "712eb3df786a0ac44a047767fb706468"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "500055868340f94192229fd8e4a63c67"
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
    "revision": "fbb2d649e2febeb2b885848b6090903b"
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
    "revision": "751e1ed97f3b670933102e94c27e45cf"
  },
  {
    "url": "tags/css/index.html",
    "revision": "dda3fd242d68d33f5f56478faaea60a0"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "cab7c8ed270a98ea3a8feb0e851f29d3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "33aa66d3282245befe31852c2ae91209"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "6773a3fcf049698803627a7eb0b9e1c1"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "c4055c1bb53930f86803630075b84014"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "6780a0059328bd90e54aaf8c5d8d2932"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "8bc9fb504348c169b785f618dd04d758"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7d5be5d8c754fe9ad015d1c89a617035"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "b8ef637a89b06d1120868455654b9ff5"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "917e19f8dea2d09baf66e39db8156e7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "86a9967ebbecb65394a86d9edbda9236"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f4dda4d6e992833bca344e6c3b3abfa7"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "9b5e53ebbd3b6545cea3e0aec3096564"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "f7d42124243f584010e80dcf93407b6a"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "02e81f8190a5a102885223c4964263a0"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "d069ba5e15c95d52da7e0120cd105f21"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "3a05dd3917ec2ef5f047f90249590813"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "9a5319ac5cf9ddec8fe3522518bedfb1"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "783f761fac732361fa045df9fbb47861"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "6b39bf54355a595d6e7fb192514e22c2"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "90a80d6dddca046bc3dfd8deb666dfd2"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "93e97994ee85341cb0b1385e5d6fab87"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "1b1055961d38f13fa1721a85b6d0f2fd"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "d661fe4dac6f081566b3951e2fdea7be"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "e936901509d2f5c7708ef517e4dcf977"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "46a4c90d58d6c8c780a7c3c7a502e234"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "127e2fdbc9f040a8a39f75eb1c356826"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "1077c8db725f9cb9a61c86235442a84d"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "661af93309c731a812ad315b27376d4c"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "22d97654e29e1431a48a82f267b5ed99"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "dd9071487bd97fbca6151f4cecf91cc1"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "cc0f0db125e422c3a37e0c58a5c531a2"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "c85d1c53f78a956804e6a71c83cf6008"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "8b6606f329741a10f4b0d60423f96528"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "6812114b5e8e137c8d75476b566e27ee"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "7734dbd2e76c33b0209c782a2f4f991a"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "db812038fef453013c15655e7e24a1e8"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "1df653190401afc6b0dfc825f0eabf95"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "1aabbcc4ec62bf277373a0a906529a08"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "9d69fd2b6451bce1193ffc32add5b057"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "a39e1b4bddd63370a0e8c0d04acda46f"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "e833da2f3d5b5656529ddd6a966004fa"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "1d8a359f70d5051a652aa8964438fb60"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "6c9018d42ef12d37fdbada2e1a0bcbc7"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "24fefb98c836044db5bf2828ddccabb4"
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
