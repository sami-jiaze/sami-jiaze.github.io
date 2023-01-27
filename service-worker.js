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
    "revision": "49b6c84e54038e000a3eec92eb14be23"
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
    "url": "assets/js/10.e4d9e8cf.js",
    "revision": "d3195aae2a5497e690167467ad97bb51"
  },
  {
    "url": "assets/js/11.ce966f14.js",
    "revision": "e414f481ea13495b0f95ebb59c1b7a3f"
  },
  {
    "url": "assets/js/12.f85d1849.js",
    "revision": "eddee380e03fe719d517c0570b351463"
  },
  {
    "url": "assets/js/13.788433be.js",
    "revision": "1236099364894a2ba7e26e16136ee777"
  },
  {
    "url": "assets/js/14.e0ca5a89.js",
    "revision": "0a6243f56dfe1b512a03bbc86c31c5ec"
  },
  {
    "url": "assets/js/15.6ea8b61b.js",
    "revision": "cac9671ae3117879e38905377a76258e"
  },
  {
    "url": "assets/js/16.b611b9b6.js",
    "revision": "88c56959e1321952ecbdfd9d8a12b019"
  },
  {
    "url": "assets/js/17.55b85db6.js",
    "revision": "45ba45844f40ee203a98ecd251435907"
  },
  {
    "url": "assets/js/18.13f8cc8a.js",
    "revision": "266a0a4110d1150d225eb51bf4b98ea5"
  },
  {
    "url": "assets/js/19.ae38395b.js",
    "revision": "73c18bf35cc03f2e08e4aa1049e5994f"
  },
  {
    "url": "assets/js/20.e8099361.js",
    "revision": "831e5cce6796138ce4bdafa7c0f55f0c"
  },
  {
    "url": "assets/js/21.3086166b.js",
    "revision": "4e396c2c26a02c5fe41026994d30808b"
  },
  {
    "url": "assets/js/22.6c5b61bc.js",
    "revision": "93f2746519e15c7040a46fda3fd3cc5e"
  },
  {
    "url": "assets/js/23.198cc2b4.js",
    "revision": "f40fff24c8612eb4692a8dd258904d72"
  },
  {
    "url": "assets/js/24.2b624b46.js",
    "revision": "2ce832363a6c2f3190deb1857e1bf0a3"
  },
  {
    "url": "assets/js/25.25674dab.js",
    "revision": "01519dfd90b5bbb58bc2a0cba4399268"
  },
  {
    "url": "assets/js/26.a88ce59e.js",
    "revision": "1dfcdd98341afb9ae9e4e18c41fdb396"
  },
  {
    "url": "assets/js/27.b1de14ce.js",
    "revision": "d16bec358a732e12b70af76275b5528e"
  },
  {
    "url": "assets/js/28.27af73fe.js",
    "revision": "bbcb0ca4725062d4ce73bfbb7d1228c4"
  },
  {
    "url": "assets/js/29.97064c2d.js",
    "revision": "a20526c073042ad0bd0171fdd1943493"
  },
  {
    "url": "assets/js/30.82123dbf.js",
    "revision": "4f8112970443d08ed059ffbfd9d3401a"
  },
  {
    "url": "assets/js/31.4bfcce71.js",
    "revision": "5824ae49dc58823769b0acaa56c22c34"
  },
  {
    "url": "assets/js/32.c45e0fa4.js",
    "revision": "06268ed3df05ef6bc89f77f0c2a6bfe9"
  },
  {
    "url": "assets/js/33.641ff31e.js",
    "revision": "3c97917ae9a43bcb1f706c6dc647e598"
  },
  {
    "url": "assets/js/34.44462469.js",
    "revision": "44050aa8c7c4cc96ee7c6c585e39f202"
  },
  {
    "url": "assets/js/35.d6f2285b.js",
    "revision": "044c9e8244f1f849b31af55a95445aba"
  },
  {
    "url": "assets/js/36.674af057.js",
    "revision": "b3a8cd4eae186a440088f1d6b8439475"
  },
  {
    "url": "assets/js/37.58a3b097.js",
    "revision": "36b1ebe5bbfd36c0708b7b06244d364c"
  },
  {
    "url": "assets/js/38.3547b0de.js",
    "revision": "e7d2eee58dcd54db872839d2e834d935"
  },
  {
    "url": "assets/js/39.ab3c6fb4.js",
    "revision": "792c33bb9587392bcf75fa0d2fbadc85"
  },
  {
    "url": "assets/js/4.7156bfa9.js",
    "revision": "6483b82f2a646add361ee35b807a71f3"
  },
  {
    "url": "assets/js/40.e298fe20.js",
    "revision": "7bb841c242727620c1867724541b82d6"
  },
  {
    "url": "assets/js/41.0dddd3b5.js",
    "revision": "eeb448ff63f8a3329b826b7e85686112"
  },
  {
    "url": "assets/js/42.a28d1437.js",
    "revision": "9c378838984961861c268a2c2e42f563"
  },
  {
    "url": "assets/js/43.6b3b8e58.js",
    "revision": "89c334e8bdfaf9a988203554683d3629"
  },
  {
    "url": "assets/js/44.31239ac8.js",
    "revision": "212fb16aeb85c3a15c0f011f703e4065"
  },
  {
    "url": "assets/js/45.ffa14a70.js",
    "revision": "346af44b798e8f15e92049f4757f2ffd"
  },
  {
    "url": "assets/js/46.25e9c62d.js",
    "revision": "e50f0bb37ed480e399233fd528281fd1"
  },
  {
    "url": "assets/js/47.3032b8c7.js",
    "revision": "55885d302d60d7cd7662e44ec692b818"
  },
  {
    "url": "assets/js/5.3fcc361a.js",
    "revision": "14fa24ed70de270e0f83b270c3b52f54"
  },
  {
    "url": "assets/js/6.9b28e4c7.js",
    "revision": "e53e0bef64bd4dbbe8e5c6ed091dcb23"
  },
  {
    "url": "assets/js/7.3a1ae327.js",
    "revision": "4b43fe5390067b59ca619b056b278dbf"
  },
  {
    "url": "assets/js/8.a9222bfd.js",
    "revision": "44dbe17c0e9d37b95b4617849caed98d"
  },
  {
    "url": "assets/js/9.a60846d3.js",
    "revision": "e30142df2287d7379c931b1460c2b7ae"
  },
  {
    "url": "assets/js/app.2fd61906.js",
    "revision": "e0526c790f67d81d4ba8868e175cc92e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.84f9a262.js",
    "revision": "3942f10fc5e79493613dccd6c26f1117"
  },
  {
    "url": "categories/css/index.html",
    "revision": "9b8623f35355e1f359bae67706149573"
  },
  {
    "url": "categories/index.html",
    "revision": "c2c217350380794154765ae591f1a155"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "4f1866d9eed0e73ae68976cc37193451"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "dbb987d1a1e696a5a3eef6a6da7fff3f"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "1c62cfc6fb011b7effbb055401e07c0d"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "571b74564a70f5abbca49908222d3ff3"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "8200c7c83fa6cb5d546258cdc1b96d13"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "ba003e90ecd1e49177099161c2bbe7c9"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "ba628ad402af640f50f45affc3ac1e28"
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
    "revision": "c6def3081df6c69308b4b0cd970687b7"
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
    "revision": "201845114fc5783ce80d07c178f31855"
  },
  {
    "url": "tags/css/index.html",
    "revision": "80d761933a710544bd84a7bb73acef3e"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "94b0d37dddea2d198e05659ed94fdf1c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f7cf9e6e890344db910561e1a960bdc0"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "f913a40a41717a1fd70d6f00565cc161"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "3ae81576efc9ea6c7813882f30db1514"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "88e3cc20b00eb9b92cdd58799c2b753b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7e2326325c71e13051ba46833e6717e8"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "eee950695e642fe0549b70a541f2e8a7"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "b1c6348d2cc31ef98d7fe315f7d52ddb"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7e674ee9ce0fbeeb14f8eeabf82efc8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "66bc6dd358f4c965234bc486e9a643a4"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "16334e66c7cd8bab7bab32f7387e85ce"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "0529a490564fca283a9cee2a77eafc20"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "be0f633f07e14a7aed11b7772cf7fd60"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "fd955c57ff519c3ac8bb164759a70922"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "c7090aee3010e4355a699d69439ad4be"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "632a7708bf86d3416846eb933f880c6c"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "5899a38bff23dcf81b87724c868efea1"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "0c69ebb772a11c42bca9ea0443acf927"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "99f4c27961496bb52d1549c9d8698434"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "445d505c98fcf4a00d2e2700fe3fe8c2"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "da4213439224567b14eddaf6d786c21e"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "fadc70a08dbce9b2c0de102fac7f053c"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "c2ef26700afac3534c7c9019c2b43bca"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "5c5f829d20988db22898eaddb69c0f10"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "23d71cfa89fbf2fcab4efb11a451da31"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "2fd2e92b2a374d675a6b4cc7754f7807"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "3bf79ecd03f19e7aaf40396d6b965335"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "cc6be1690f712cb245563c4adc047af9"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "ca493a45d617b7954aafaa1380e80378"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "e678c8dbc5fe7f45356d783842fb8997"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "47eb7b353cf43816a14ab4d1be16933e"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "e15871d4ef637b4ee46786a9f545ca81"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "ec55d1fbfd301c1adb5dce55b0f21516"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "b8ed463f5cc81a5e6bdf18c4450b24bd"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "76a88e11ad9343b3e83988db9d5f19de"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "c055509ae075bef973648d060ffbc7eb"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "9db3d02a3b68162000313837b1fcaa46"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "52f327bb9c765e1bda52e876d31ca50c"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "b5d5ec248d98fc7c812d0a4ea735699e"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "8ee6852a332407d9c5e26b9a5e31a01a"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "50a63bf440e3f8a4a068f0f881e51fe8"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "3e363550e9d92dd80d061270e5de6602"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "b8e55729ae5f955ec29aa49227ce37b2"
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
