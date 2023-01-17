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
    "revision": "f10f9291090034b1113787a51948db19"
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
    "url": "assets/js/10.7f6e622c.js",
    "revision": "ecc11a4ea0b9bacbf00fa0a4f60c717f"
  },
  {
    "url": "assets/js/11.0ddd9dfc.js",
    "revision": "9bd1892c1ff77d3d150832a3fef56c2d"
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
    "url": "assets/js/14.1cf2b8bc.js",
    "revision": "c0ae6a9810b014f3ffb7030d8c9a04d0"
  },
  {
    "url": "assets/js/15.72ce820d.js",
    "revision": "e467d948e94da17e27094fd1afc553e7"
  },
  {
    "url": "assets/js/16.827d5c73.js",
    "revision": "2e04f4e9101df977ce5730bf937f39e7"
  },
  {
    "url": "assets/js/17.0b20858f.js",
    "revision": "5bcbd62808d8f6f15ae3659f5ea141e7"
  },
  {
    "url": "assets/js/18.e5c8707e.js",
    "revision": "78e0dc681d774df0707eaef2cf5e26e1"
  },
  {
    "url": "assets/js/19.fe682dc9.js",
    "revision": "c5333b12e97e750121aad94ccdcff98e"
  },
  {
    "url": "assets/js/20.78250f8b.js",
    "revision": "1509d6922d89adc57b4edfa8566bd2bb"
  },
  {
    "url": "assets/js/21.58f7d8e0.js",
    "revision": "07dd135b736192f8638766ad6de7bc28"
  },
  {
    "url": "assets/js/22.21981279.js",
    "revision": "e290873cf5cfb1c12b811f57a6e9daa5"
  },
  {
    "url": "assets/js/23.83f30eda.js",
    "revision": "f07aeaa09ecd645d35772194de7fb9c5"
  },
  {
    "url": "assets/js/24.ce9ca62a.js",
    "revision": "af4c86e84fe3d60573321463a136c11e"
  },
  {
    "url": "assets/js/25.7604c7bd.js",
    "revision": "ee186a8ff09b06a69b1be8a46872ef13"
  },
  {
    "url": "assets/js/26.cc531788.js",
    "revision": "3d6de1eecaea6876ddaf6a8905d07047"
  },
  {
    "url": "assets/js/27.57e8442b.js",
    "revision": "0e996be2be168e9f58989ee553620124"
  },
  {
    "url": "assets/js/28.aceb17bf.js",
    "revision": "cb0f36a90e9f66a332f9aaa43f9dbb82"
  },
  {
    "url": "assets/js/29.a570b147.js",
    "revision": "8e9d4ece3e046eb96182e6b9fad76947"
  },
  {
    "url": "assets/js/30.28887c17.js",
    "revision": "c3458953d14995e49979d64990cad074"
  },
  {
    "url": "assets/js/31.30c71a38.js",
    "revision": "bec62394facd71c75022ea0111cb3423"
  },
  {
    "url": "assets/js/32.d46077cd.js",
    "revision": "c999c69e48b04212a5367aabd905123e"
  },
  {
    "url": "assets/js/33.3df12f5a.js",
    "revision": "8509b8a38c7b7de1c89029642a72c366"
  },
  {
    "url": "assets/js/34.c1ba54b1.js",
    "revision": "3e20a5b92f1e3f074e874b22dbf60b90"
  },
  {
    "url": "assets/js/35.0e3263ff.js",
    "revision": "d08a6a03ee0243c57020630eecc907a6"
  },
  {
    "url": "assets/js/36.77d50046.js",
    "revision": "9a9600a08275f7c5ed94ca8985fb1ed3"
  },
  {
    "url": "assets/js/37.4342ea0a.js",
    "revision": "c340d6defa49d5a1797642efd24a0ac7"
  },
  {
    "url": "assets/js/38.c6ae7faf.js",
    "revision": "a09011ea947fb3a5eab5906d02aeb178"
  },
  {
    "url": "assets/js/39.9863cf21.js",
    "revision": "ae30d516d26cfa1d2bcc8b8da218f036"
  },
  {
    "url": "assets/js/4.890652b9.js",
    "revision": "93c3ab71514c326c1cb01868842cce0d"
  },
  {
    "url": "assets/js/40.bd6046c7.js",
    "revision": "ea0b43b148ff00a357d58ed103596be4"
  },
  {
    "url": "assets/js/41.1e56bb45.js",
    "revision": "0a6f0e49b424235e0d7bace7eb265730"
  },
  {
    "url": "assets/js/42.c1cbcd3f.js",
    "revision": "149fb5b9fb4d7fd357c9ae66afc4d2a4"
  },
  {
    "url": "assets/js/43.16fc8d35.js",
    "revision": "f2643700ef61c7b79a5261163c4a8a08"
  },
  {
    "url": "assets/js/44.f71b6517.js",
    "revision": "809f3fc9a17bfb82a044ac625e03e587"
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
    "url": "assets/js/8.7b95777f.js",
    "revision": "0e84cc619d7fde2172ce376c403a516c"
  },
  {
    "url": "assets/js/9.817fd839.js",
    "revision": "4cc110e382fd1c36cf98ffd125ca36de"
  },
  {
    "url": "assets/js/app.677070af.js",
    "revision": "7127c1447e25c2c180aa5ddf9998cced"
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
    "revision": "6d3423f02d14ddbd32e074d051906a04"
  },
  {
    "url": "categories/index.html",
    "revision": "9e3be8d7f852e0faa021a3d34138b163"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "0b8edb09fd6560f99163494fe4f90fb5"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "9b06fb76762bd3dc7f62be69acfaa2ea"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "27898bf33cf7fce7b6e96d6777434ce2"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "001138c772949a1df80a1e4bc9077c37"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "48d39949c32026375cf3649910aa7008"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "58e7fe6c07c0275622435e46c21fba69"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "b6c6e03eb455193ba83bca8f658bbd83"
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
    "revision": "7860a3c917388299e6688bffc37df3d9"
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
    "revision": "2816fa1dd394175a347a0c2eceb264d3"
  },
  {
    "url": "tags/css/index.html",
    "revision": "c4289c9d3df0dcdf30abc137175fc66a"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "c867433f955112dee92915818d2d4561"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3f15a0a254d7129e35225d7274be0fe4"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "462acebc4974e3f7b5312f237188ebd5"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "9dc720545304d2c38ade784b9ddbeb3d"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "69c27364d9d00c93489017f6b45f3f9a"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e821747629c242adaad558e02bf876a8"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "9b21d950ca235a2674f8738b5a9b8558"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "f2f9e7938fdd779370e46f09ced96c5c"
  },
  {
    "url": "timeline/index.html",
    "revision": "bf9d73a9918d5e82f43956f8ca15ce33"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6ac4db64c8767574f42a7b822aaf2a5a"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "934b95655a4054c59bb05d8569aa9859"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "7421558aaf0d28dfd6854f40c4be8140"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "f06bf1fd5135ea6fc03ab5083342d5fc"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "040819e0d76b9c2ec2007b17e551ca4f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "828036cd70088334f27cb4cae61b49bd"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "a7458370ef062e61fa7143c86dfdf034"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "faec620ace1911edd2e010e7d653c35c"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "6e21ae35b047d1c18b3b631cba740be8"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "e2aae17a3f60306352e283f0fb2d96b7"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "71b80782fac00c78104a80a96e5107c4"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "0dce795fcc07890d5471a9e7534fc151"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "b857362a01be02e50e0192030a965b80"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "1105d8cdeca45e39efcd45c861695da9"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "8b46f8134ec6654fb30f86bac1623369"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "d2cb6cba4169a2f389ad609c6e51669d"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "668d3b472341eb35f2657533731b64be"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "056779e203326b23669ccce3ec9b6646"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "37b01e07e8e3f10ccaef815eb273da4f"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "ae7d4301a845fbbf28bb1ec944196667"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "9836f4115099390ed3152f585244dde3"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "3dc149f375d792473f9024d1fdb99c80"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "47c3add6637415bbb15aed3f2942e06e"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "70736bc8cd79326ef48a224142aed9dd"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "6bb0577ca62f2b48830d49e6d431e1ce"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "d41c52200a2ee37a4ffbcd828ba93b19"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "9c808e96e768bb23b964a1bed60d266c"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "3bcdf24f16d0e82a4f617931d456ad3e"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "85384ca5f006660880aa3b35f8879a3b"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "3419de6ed8472bf6810d89c3c62832e5"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "18761d02bdf106f68c3244246a7f3243"
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
