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
    "revision": "7700b9e01efcfb159441244016afbf7b"
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
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.34ccce65.js",
    "revision": "30bf7a32706749092db4c8f1bcbe2271"
  },
  {
    "url": "assets/js/11.b3c57e74.js",
    "revision": "f6f0b23685757e4ed77091b4feb4032d"
  },
  {
    "url": "assets/js/12.b2661742.js",
    "revision": "4a64df19972c8f063cfd4338e94e9011"
  },
  {
    "url": "assets/js/13.fd201727.js",
    "revision": "d50e2d1ca9844d3c3b50f391f6681d0e"
  },
  {
    "url": "assets/js/14.4a46aff2.js",
    "revision": "75dbe94acce4e56feeb2b6d22776229e"
  },
  {
    "url": "assets/js/15.168b042c.js",
    "revision": "833559b97dbb4e74000a1a17df2cd5f1"
  },
  {
    "url": "assets/js/16.39cc0f5b.js",
    "revision": "b19830670ae4d91f33ba6348de9ab289"
  },
  {
    "url": "assets/js/17.294d220f.js",
    "revision": "6265bd004a64e708ed90bb24ef216985"
  },
  {
    "url": "assets/js/18.4521b402.js",
    "revision": "2ddc9fe8246a03c09837b166520a055d"
  },
  {
    "url": "assets/js/19.fe682dc9.js",
    "revision": "c5333b12e97e750121aad94ccdcff98e"
  },
  {
    "url": "assets/js/20.eb503d6e.js",
    "revision": "6d9b5ef9db001ac25c34a16e02979f82"
  },
  {
    "url": "assets/js/21.3086166b.js",
    "revision": "4e396c2c26a02c5fe41026994d30808b"
  },
  {
    "url": "assets/js/22.9e63fe81.js",
    "revision": "c8147844c4719b155cd99a49aedc4adf"
  },
  {
    "url": "assets/js/23.b9baa887.js",
    "revision": "a619adf69c8e20ca95bd95949caeba25"
  },
  {
    "url": "assets/js/24.c27bd2fe.js",
    "revision": "5e2f5c5c869cb6e60fae277f11b9cb90"
  },
  {
    "url": "assets/js/25.5a754081.js",
    "revision": "540214962c1e4941939984cf8a772468"
  },
  {
    "url": "assets/js/26.bb9ad124.js",
    "revision": "d7c3dc609b6e99c42a24ba35b2de4f83"
  },
  {
    "url": "assets/js/27.f5e44996.js",
    "revision": "b908e5a251a702e699f385b8c1dbd837"
  },
  {
    "url": "assets/js/28.3b95b841.js",
    "revision": "363b0f17496012c72dbd466ea8b3a3c7"
  },
  {
    "url": "assets/js/29.35844140.js",
    "revision": "f207cb5261b5b2ecb5e962c55499887a"
  },
  {
    "url": "assets/js/30.87b28c74.js",
    "revision": "ca19b77156a1a67311d3b2f3e47f88e2"
  },
  {
    "url": "assets/js/31.f52cbbf1.js",
    "revision": "fc11cf107c7d5a1317cc59bfe8351b0e"
  },
  {
    "url": "assets/js/32.a6defa0e.js",
    "revision": "4adef69ba5164cf3078adea531452453"
  },
  {
    "url": "assets/js/33.4484d0ab.js",
    "revision": "6c5f90144cb786784eb0129c76f5a9a1"
  },
  {
    "url": "assets/js/34.762e62a2.js",
    "revision": "648ae6013d81259b9465fd2ace444500"
  },
  {
    "url": "assets/js/35.18a5dba8.js",
    "revision": "5534f88560eca0bff781c32cd773027e"
  },
  {
    "url": "assets/js/36.b12b4e82.js",
    "revision": "983ee2ca136037b89e1064c8c4f8b0da"
  },
  {
    "url": "assets/js/37.8952c8ed.js",
    "revision": "fe01c39cac903eebb866cfd01fe1b9f2"
  },
  {
    "url": "assets/js/38.3f5f378a.js",
    "revision": "3fcbde5becf09ae97848cd65eb9762ab"
  },
  {
    "url": "assets/js/39.38c0bcf8.js",
    "revision": "bfb1d8e63bbbcf0beae16c9977186221"
  },
  {
    "url": "assets/js/4.890652b9.js",
    "revision": "93c3ab71514c326c1cb01868842cce0d"
  },
  {
    "url": "assets/js/40.f7ba347b.js",
    "revision": "fa08979c08a7b26f2ef311345346fd16"
  },
  {
    "url": "assets/js/41.0e5d1851.js",
    "revision": "4373a8d3066fa9ff8acd9c2ab6129fda"
  },
  {
    "url": "assets/js/42.f81c3a30.js",
    "revision": "b9fb8d58a30a22252e2271ce42549393"
  },
  {
    "url": "assets/js/43.046acb08.js",
    "revision": "ce5d23c7e7d191c60e8d9cfc0f4b40c3"
  },
  {
    "url": "assets/js/44.a8efab79.js",
    "revision": "72830b5975f0147800009219d69075f8"
  },
  {
    "url": "assets/js/45.51eaae8b.js",
    "revision": "f760912e0ca71d3e2d50528fbf874232"
  },
  {
    "url": "assets/js/5.f4df9681.js",
    "revision": "4d25a90c3c9d6646dd8883fdb67209d2"
  },
  {
    "url": "assets/js/6.f7ef236d.js",
    "revision": "f5d92febb80f8e97a0b0a619b5ecda84"
  },
  {
    "url": "assets/js/7.41343105.js",
    "revision": "adfba9fa29183136349f4fa176e1721f"
  },
  {
    "url": "assets/js/8.4b98e1a9.js",
    "revision": "91d76e79a4bf0fdc7631a7d1e4722c81"
  },
  {
    "url": "assets/js/9.a60846d3.js",
    "revision": "e30142df2287d7379c931b1460c2b7ae"
  },
  {
    "url": "assets/js/app.03e88864.js",
    "revision": "f5522b85e2e65890b5f0965c7108f282"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.d168785c.js",
    "revision": "203b91c817fdf840d3603e952b2e1cdd"
  },
  {
    "url": "categories/css/index.html",
    "revision": "15ad631c32c294981e97c5b64d553923"
  },
  {
    "url": "categories/index.html",
    "revision": "8b351c4b92a64715c8f5fa2a7db5d78e"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "8985428f59680993013fc21bb2603d9e"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "31c73f962cf734ea12af283849ac5501"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "503df4aed88be412dc98bf04d59499a1"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "eae4bdcc8d46c5fca0457695609d3c04"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "ee9e17b13ef2fcb48a2970af21dfa8ad"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "768a30f62ee8c0a58e13c8e0b5c2cd0e"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "bacc247a3e8f1adfeeb172cb4a3342b2"
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
    "revision": "eb8298e1a96ec231d17d127f88108719"
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
    "revision": "1004d84179fd8336072a97160a8084c7"
  },
  {
    "url": "tags/css/index.html",
    "revision": "d3dec096c5cdd7f46b2fdca118d91c62"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "93a13028a34784079468e4a3c64068ac"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8e0d4d6b7932fbc48dab206a972d4605"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "46df8a2eccf1b676e028b7a25d3c168b"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "5357df6281e776fe7d895ac804551f80"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "8ff1630715b558aa4b5df5428ca1a4dc"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "4aa981ad809f1bf44022bad85b2531c8"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "be6f0ae514cc8f6026e4ceb2ea6bce8b"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "0aaa30bd8d77970b5da3e087fa5b6271"
  },
  {
    "url": "timeline/index.html",
    "revision": "3056c5c5219eb9e82a154002e77ed812"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1cb7132a4667a92f5d27d32a0b523d5c"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "e4269b6714862ca57a23e388aa99e300"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "2f76f1d8f0b884e98c2869bd8e22776b"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "9e311a2fdb933305f6ccffbb4ebef760"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "24720cfa7bbec60852a10c24c61813ad"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "804a30f2890f19426450388db7424021"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "627cdced290f0be4a927e68a48ee6165"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "e5891e185f66403d19eb394853c81728"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "eadacb531c9aa33291592887c9465d65"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "05739f59a40809ccd72ae7bc2b82d88f"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "c3795a3a4d041b47e2295eb29e97dbc8"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "f20988a62afe8efc94fcbdff0b09c776"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "e4ec34595eefb2ed67dbf850311b99f9"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "84dad932e41ae2c666a3230b1cb797d6"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "0c43be2bbf985ef29be52af026c8cc9c"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "9fe04689a6ffc980185e28bf45333afb"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "cf1ceba4ba4e67fa6253ade7b0f46665"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "fcc8a46769d96cd5985b0b286a2af067"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "93f4e9009e2bd350c25c6d339f881701"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "e13bd6761844fcaf3f3a51ea7e6f5c23"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "71caf752e436da86572fbd4cf3fa649a"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "7e6231e83a1f86d4e602d7f18228877d"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "14f6702ae1ffb8abbb37cc7ad9e4dd12"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "14faa7bfe7b3c316b32953e86d235322"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "5c8dc9cbe8b9d64a5c8c0c08416c7f54"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "0f9f675043ee35d440d255661b5379f2"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "b9e941248ef430c8e0367c662c786963"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "0b7c00368c9beae9ae3f9fdc4731ec6a"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "ad6abc51a90412842fedb5f6ac62fb37"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "12a4b4d087ad10ce6cd7631f24a24a84"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "73d94c97cdd78975776d58ef962ec0aa"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "ecdd459e98e5a81e9f80ff965f307b7f"
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
