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
    "revision": "da3a0aa333832d931b3f43354af6af8d"
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
    "url": "assets/js/10.8652a049.js",
    "revision": "039f22b58176f6f13205e29d503d3488"
  },
  {
    "url": "assets/js/11.03637c6a.js",
    "revision": "9d1c73943d186dfe67105a9816bc8bf5"
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
    "url": "assets/js/15.c5fac080.js",
    "revision": "0ae1ff52b08a06f3a6495b6a05058f8c"
  },
  {
    "url": "assets/js/16.178c8731.js",
    "revision": "e4107bf5e874c9e59014e24172e2b049"
  },
  {
    "url": "assets/js/17.b8b80686.js",
    "revision": "870e1e2f754989ebc0901b441e8ca09d"
  },
  {
    "url": "assets/js/18.5eb219ca.js",
    "revision": "c734c57dfbb3bcdc840effb8493cf34f"
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
    "url": "assets/js/21.b9b12c11.js",
    "revision": "c10e33169eeb530c2959800ef8671d6a"
  },
  {
    "url": "assets/js/22.9c698514.js",
    "revision": "f2d3d6ecf0421fe2438a8e9c802352fb"
  },
  {
    "url": "assets/js/23.151d10b5.js",
    "revision": "79b39130ecba73776793a9d73165fdda"
  },
  {
    "url": "assets/js/24.59dcbac7.js",
    "revision": "7935d2906340481585b67b906c229452"
  },
  {
    "url": "assets/js/25.adbe22a3.js",
    "revision": "1bc7e5c4d85ae10c70cb2725f4837460"
  },
  {
    "url": "assets/js/26.2cb4f48e.js",
    "revision": "34a92c8f1e3d1a2752bf279f5d43e485"
  },
  {
    "url": "assets/js/27.8d122d53.js",
    "revision": "552c896478037a4c299aaed00a8dea70"
  },
  {
    "url": "assets/js/28.00ce85e4.js",
    "revision": "c6a4334a81a9c72fb60bc7620dc0a669"
  },
  {
    "url": "assets/js/29.820cc3a2.js",
    "revision": "3b2a5d56f053d925f8a765ba6511bf2b"
  },
  {
    "url": "assets/js/30.e3ccfcdd.js",
    "revision": "e2f960ecaba8eadfd8b5ad5e2f49b204"
  },
  {
    "url": "assets/js/31.7ce2f265.js",
    "revision": "5471dbdf398fbcda0d3be3c46260f704"
  },
  {
    "url": "assets/js/32.2d189ad7.js",
    "revision": "b3df2411e51aaa012665e6ca933bca7b"
  },
  {
    "url": "assets/js/33.0cb951b4.js",
    "revision": "56abe5f9ad47977785cad9cbe6609817"
  },
  {
    "url": "assets/js/34.e2ee8baa.js",
    "revision": "4b3583244c858f361773389f89ebb19c"
  },
  {
    "url": "assets/js/35.b45a363d.js",
    "revision": "284ec38807c6f63f8bd6fa3fe040bfd2"
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
    "url": "assets/js/38.ce914ee2.js",
    "revision": "c6350d0cff6a90e61bfb01bad7464ea6"
  },
  {
    "url": "assets/js/39.cc789719.js",
    "revision": "22d2a2de9142254c20b7fd7b2c923939"
  },
  {
    "url": "assets/js/4.4dc13b99.js",
    "revision": "2334ecad46841c2e90c71ab239832af0"
  },
  {
    "url": "assets/js/40.a02d8e79.js",
    "revision": "227b8938e9350dae96bee211ef99a253"
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
    "url": "assets/js/45.91e47d69.js",
    "revision": "dce9222934665f234e857e8d87beb7da"
  },
  {
    "url": "assets/js/46.abf3fefa.js",
    "revision": "954233d552ea4cc8b1748a9f705586ba"
  },
  {
    "url": "assets/js/47.911d639e.js",
    "revision": "cc40246b746f4a3ea8b8e6940e9ef681"
  },
  {
    "url": "assets/js/48.4a85934f.js",
    "revision": "c67a27a901c2302fab23e71e6605edba"
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
    "url": "assets/js/8.9707445f.js",
    "revision": "0a58e888ca595c09cad95ac02dd846b1"
  },
  {
    "url": "assets/js/9.c1c076a1.js",
    "revision": "567bf84ebd64e1f8e7d146739c8ff174"
  },
  {
    "url": "assets/js/app.fb0796d8.js",
    "revision": "b8b0ab0ff317fc3d81e484a707bdcb1c"
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
    "revision": "def85b8270581c2eb5154b3c40486ba7"
  },
  {
    "url": "categories/index.html",
    "revision": "1443f82e52ae746036f61fd55e0dc10b"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "bbd599a6f4038f7e548117bea7f34eec"
  },
  {
    "url": "categories/JavaScript基础/page/2/index.html",
    "revision": "0f397eb199073539d086997de721a1af"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "0d5ba9c6dd7299ba64a826202a33d92c"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "719c40434cb559ed6c6dbccbb3c95c3c"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "1aaedb3656e3745ab3f911251bb9ac90"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "a1f88852e1c73ea296b06842dd7603b7"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "c23e5527fa566f52f99fc01ea5b9ba64"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "0d328a873f24ce691b1a9cc24e05bd5b"
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
    "revision": "ee817f7b3296a5155b885b9d5bfc91a1"
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
    "revision": "98cab0c8a53c1458396ec0756ffe2944"
  },
  {
    "url": "tags/css/index.html",
    "revision": "d601fd8e9b141e0b7f56c2f6fa0c1747"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "ffa7793a0ed81ac571c8772d6b54b993"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a0cce00171417ac2e17acb56d0c6cb63"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "afa6bea5f5663d85b3e78ae318ad39ad"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "161d921282638a75e25cc0619f0cf1eb"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "f02b69de751b6ef260b0b5e672f03494"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "475cedf10728619b8083b16725c026dc"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "86fb9316c5c0e8726f1caf3159212763"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "55919edccec9ea18016c77a8a3516cae"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "56917742b3ab43a70f4b92585f9df80b"
  },
  {
    "url": "timeline/index.html",
    "revision": "95fb3de97a41e71e7baccae6617294c2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b5a22b736ef957547972952bf94b1abb"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "6d9286e9ecb9851cf9edf73afd783353"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "ee713cbb9898094f0a4df3c253eefd3e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "80cb5431566551a45eef7d72d69d4e4a"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "d5823a64ea449791a6a8529ff06721c3"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "177552d3b1d486e24fbb5055b08c18ee"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "502559368f715d2f421b5c3036028ba3"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "d4cd73fe8b4de90ca92b095e6980059e"
  },
  {
    "url": "笔记整理/javascript/es6/async.html",
    "revision": "9ec8d6ad53233944629c036a61d4d1e5"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "a691a46ad90a392a5bd2f54e272151a2"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "8c967c55ad9f23e7bc178aabfd498b3a"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "1c41a476ecfe8250c6f7a8e360cabced"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "202a4778b3f11bbe30fa7dcef6aed668"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "0526b02e0aebc297a5a8277c0daf8832"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "b610610a1b0c6986162e9239ff1e9a46"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "f9ec4b0bcb41618623ddc2c215b1a90a"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "8b4b9b9fed19b0eb771a0f628e6e31da"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "c5c5a2c9d4d7b6b5e9316c45f7e4e0df"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "5ebd34f447c6f3ce59f6e1145f4065f6"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "065716ec8cdadaecfa36c5a0511a7aad"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "86429be8c336afc5491f4f1b47fa2a50"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "1b614194351d62b524f10767b3a3cf10"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "a459f3b387559cdba581c4f3aa41ef86"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "64e16071c53234163dbcd8160d3765e8"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "d5bd4ac982b42619b794d84bb658d753"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "a6251ed8a477d5d33bf66f75ec624bb0"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "4b9b027eefd3f76ed1ea9ae13d38ae24"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "eb1d96a00522b358c8cb0ef402eb1279"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "5dd59a4f7828108944be31d77377973b"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "5ef59a0b3b35e4163f06fa4e538994ce"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "09c5845dac62f616e0717d09145ace7d"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "d4fb6a92e44b3b82d22a462b75ea8222"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "0297f43ea49a747e0ca64ad368959ae7"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "639f81a3cc2dd132d527a36fd6e887fe"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "f07b73c873f662a79195e33bdedb93ab"
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
