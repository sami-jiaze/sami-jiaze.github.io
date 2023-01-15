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
    "revision": "7e9bd72134adf174cf9371dd8d6cb692"
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
    "url": "assets/js/10.9625727c.js",
    "revision": "e9985fe56a9ef9b2166c8bb0afdcad48"
  },
  {
    "url": "assets/js/11.071571bd.js",
    "revision": "9fda5bd4811c1954ff4e2b4b60401dd4"
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
    "url": "assets/js/14.c57e7e56.js",
    "revision": "8bb381642c3d7a656ab73e43c5fe0f03"
  },
  {
    "url": "assets/js/15.5927ee26.js",
    "revision": "d94f3b72020ac0ebf7ef586e2053cd17"
  },
  {
    "url": "assets/js/16.9af31bef.js",
    "revision": "948e833c2de43738fad04bb0edd3f6fc"
  },
  {
    "url": "assets/js/17.efc09852.js",
    "revision": "018198a6a31ca4a30292c26d734d9a15"
  },
  {
    "url": "assets/js/18.d8468ae9.js",
    "revision": "fc4b44a098bababf2d78c33db25c2af3"
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
    "url": "assets/js/21.bc177bbb.js",
    "revision": "11a8fcb13d5f8f0392dfd7e5a9ef6668"
  },
  {
    "url": "assets/js/22.df5e764a.js",
    "revision": "0b3af829f4307d0bff4a56504bf0db89"
  },
  {
    "url": "assets/js/23.3b43d416.js",
    "revision": "cdbdf128033c92bbb23cc9f7163a6725"
  },
  {
    "url": "assets/js/24.a53878aa.js",
    "revision": "755ef9993f1c7382a340031b45cfd4b1"
  },
  {
    "url": "assets/js/25.3f39a7c1.js",
    "revision": "150495fea3fe4014d6882ad624575910"
  },
  {
    "url": "assets/js/26.f6104a61.js",
    "revision": "4c677f7f1d9867d2d99e26bba01b859b"
  },
  {
    "url": "assets/js/27.f18dd881.js",
    "revision": "c5f7a080ccd74545f7640e9100690917"
  },
  {
    "url": "assets/js/28.08613529.js",
    "revision": "3a71b899598f5d788ea8db8dfe335759"
  },
  {
    "url": "assets/js/29.827d8b05.js",
    "revision": "231f0ff287f73d4ed50f7be7c2900b76"
  },
  {
    "url": "assets/js/30.2e57bc08.js",
    "revision": "0d80333df2ce06583ab3465558e31b5e"
  },
  {
    "url": "assets/js/31.9bf08075.js",
    "revision": "eb2dafcf84c391d21816e204d57138b4"
  },
  {
    "url": "assets/js/32.01954c41.js",
    "revision": "f0e653811296888ea6d4d0a6b0640474"
  },
  {
    "url": "assets/js/33.6ff5c9aa.js",
    "revision": "eb27081e37961a99c1ba7add49ff4776"
  },
  {
    "url": "assets/js/34.3195b16a.js",
    "revision": "1d46644f0ade15b234d3d7a14a53db9d"
  },
  {
    "url": "assets/js/35.df3e608c.js",
    "revision": "fcbd68e19e30f226cb8133e464a55f69"
  },
  {
    "url": "assets/js/36.ef7b0cce.js",
    "revision": "d73cacca32209c8b035f553a7b407ca4"
  },
  {
    "url": "assets/js/37.4977e008.js",
    "revision": "1b86b96d15721b9131212fb58e5b4994"
  },
  {
    "url": "assets/js/38.cc627bd3.js",
    "revision": "a705f1b3544a6f7411de9a487d167058"
  },
  {
    "url": "assets/js/39.d57c94bd.js",
    "revision": "732406f07d33ee817f968c61476fdf0a"
  },
  {
    "url": "assets/js/4.66424f0b.js",
    "revision": "d8a71015c9a0b8e6231432072db56099"
  },
  {
    "url": "assets/js/40.1278efda.js",
    "revision": "a74f71897c4528602468e473578378b8"
  },
  {
    "url": "assets/js/41.2d6bbd7b.js",
    "revision": "aa21e19db8e33e96ac42b9d3ea82fd49"
  },
  {
    "url": "assets/js/42.07296709.js",
    "revision": "c83a8d312fdc396c07786efbf100b714"
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
    "url": "assets/js/8.379e9aa9.js",
    "revision": "45296d3feda019a79006840044d1ab7b"
  },
  {
    "url": "assets/js/9.208e3ad8.js",
    "revision": "15afe519455a58e0a19db7ab06c24177"
  },
  {
    "url": "assets/js/app.937274bf.js",
    "revision": "dcd6f101ef8c3a61953ff28bfdbcd4b0"
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
    "revision": "b49f6c9e7c5b5b2a56036d279ab7839e"
  },
  {
    "url": "categories/index.html",
    "revision": "7a6dc6e6b5732df6b4c7c1e4e6781e8e"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "d4eacf84c77e79332baf04d7bd956fa4"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "51b1bbd1fde3106412e2b6850977940b"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "956ccf780bffcd1632109b1f57cff791"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "8a0fd444c6a49e97e6bbcb4981d68035"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "ed2d5b9e94274c6654e2e7194e729364"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "1a7cd3044acc1ccf8da15fb6e2e74609"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a239a13d5c171917976785984193961c"
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
    "revision": "617539d37633ca417180240ca48c8b91"
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
    "revision": "abdd43842dbbfba53497c075c39e169a"
  },
  {
    "url": "tags/css/index.html",
    "revision": "a59a081a3679f873311f10dbf13acf62"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "6fb6cd051515e648446c6e50075e4c58"
  },
  {
    "url": "tags/js/index.html",
    "revision": "cbc90674b31cc0e8b81dbb94e6e8353a"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "b50a83ccab8fbbf855cc40dea302b901"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "3773c31e88a9a2e299b6916160fb1316"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "8587ef2b5cdd3fc7f7bea60c892e2ad7"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "470035f0cf44345a3262c8cb69ddc94f"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "c720ec62bbad566dcef13abf90ede488"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "68e4912d40a2139885a3ab9665eadec4"
  },
  {
    "url": "timeline/index.html",
    "revision": "383633f3425f2e25af7cf2d72d565e54"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8aea9a07cff21d82793f5d23f06974fe"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "99d04f97d308744150a31ea4ce2e47f6"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "280395cc836be75f61a6620e720b690f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "24c11128eec6bff8adf79e938ee3bd25"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "58d81af7856d436b59a54568a32fee03"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "b79fa04e40bcf681b173d486f15151cf"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "0b64db82dc2124cd3bac901f6f920ea8"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "e4378b36b726ce1401eb319aff73394f"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "35747df3366fe68c5c60b46e06fc1abf"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "e115c58d85b98bba531a76947fb15097"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "143f6ae0b8d93731212feabeacccce1f"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "9ff4629727d0c4c03a19a780a55dbb27"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "4ecceb9b2d0eb89773f7cf26d2ee656d"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "677d2b99acbadcce1fd227f309158ca0"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "4b84f464fadd02fb2465cbf77842d0a5"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "8ec0dd7e5c3fbda7d47b6c378743a9e2"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "395f13ee6476568f24749fc010dd9e25"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "80724cb2156d15fa4948b21699deb2ca"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "82ef2fc35b3625887df56beb7c28460f"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "ee45f4d4172fa42d34d5facc0fb32334"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "d9091318b9ad1635a58f9ac1b75b4fa6"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "c77df999c3736cdda650a07da54fa54a"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "b2eb688b90cc3355c6106449058f0653"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "7e9c89c30e16d0a6f502bac228a590e5"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "20a8de0aa89bb0a7bdc11b24c2524552"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "b4295bc6bf38981d68782a7e34b5dd24"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "cbeac9b94f97715a858aa82e99c9a60e"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "b8c334d1d7b3c26823063bd8d80b8bff"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "9301547393c5c5f95081daf3c392715c"
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
