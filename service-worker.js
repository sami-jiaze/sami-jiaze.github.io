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
    "revision": "ff06788c1af506d801df3b470ec0b69a"
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
    "url": "assets/js/10.9ac182cc.js",
    "revision": "5cb57b6355b934b013f6013a69543a58"
  },
  {
    "url": "assets/js/11.a2a669d6.js",
    "revision": "f1df285c19449601017c46052bfa05fd"
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
    "url": "assets/js/15.5516417e.js",
    "revision": "8e52b4d2deded77430c271c24e82257e"
  },
  {
    "url": "assets/js/16.89c34e7a.js",
    "revision": "36862abd20790d08409e85ad7c33ec43"
  },
  {
    "url": "assets/js/17.9c830a46.js",
    "revision": "eadf50f48d9ebb01cf2a5eee013d74a8"
  },
  {
    "url": "assets/js/18.226dcfca.js",
    "revision": "12098a9bebd4f65b0c440231e5271c8b"
  },
  {
    "url": "assets/js/19.fe682dc9.js",
    "revision": "c5333b12e97e750121aad94ccdcff98e"
  },
  {
    "url": "assets/js/20.11a9506a.js",
    "revision": "f26f2aa5b1b192db6a1c640fe1483c37"
  },
  {
    "url": "assets/js/21.58f7d8e0.js",
    "revision": "07dd135b736192f8638766ad6de7bc28"
  },
  {
    "url": "assets/js/22.a495a2eb.js",
    "revision": "15530b8b67c17a8b127e036163d3fce2"
  },
  {
    "url": "assets/js/23.c1f522d9.js",
    "revision": "dde317511d851c1cf6909fa97467a292"
  },
  {
    "url": "assets/js/24.a82be258.js",
    "revision": "1b0ce700d988312d18cb5a4fccbe3d6d"
  },
  {
    "url": "assets/js/25.10a4078c.js",
    "revision": "bdee5842b365c59d633439e4da0e9d4d"
  },
  {
    "url": "assets/js/26.9ee256b4.js",
    "revision": "b9d294aa5c713455d78059c9b1ba79dc"
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
    "url": "assets/js/30.4cdb3e0b.js",
    "revision": "4c2e6dcdd07f6d497fe25f6f2bc8683b"
  },
  {
    "url": "assets/js/31.2c67bf3e.js",
    "revision": "30adc4b8bbe81dacc4f33749914f8cd9"
  },
  {
    "url": "assets/js/32.d46077cd.js",
    "revision": "c999c69e48b04212a5367aabd905123e"
  },
  {
    "url": "assets/js/33.c8c750b9.js",
    "revision": "ce5c67e6ac686437fa70a9931898ec42"
  },
  {
    "url": "assets/js/34.78171d83.js",
    "revision": "1152cdc4b2a52531ec9b72399c51af65"
  },
  {
    "url": "assets/js/35.0ea911d0.js",
    "revision": "41e72619763555441c889b8b97e862b7"
  },
  {
    "url": "assets/js/36.956c5656.js",
    "revision": "c19ca363cb1e48e40940a4fcab951509"
  },
  {
    "url": "assets/js/37.7bbb71ec.js",
    "revision": "af5f8376ae1ce688fa29426f0cd0eeca"
  },
  {
    "url": "assets/js/38.d5ff6092.js",
    "revision": "335c2abafc329e529d85541f2707a385"
  },
  {
    "url": "assets/js/39.ab3c6fb4.js",
    "revision": "792c33bb9587392bcf75fa0d2fbadc85"
  },
  {
    "url": "assets/js/4.890652b9.js",
    "revision": "93c3ab71514c326c1cb01868842cce0d"
  },
  {
    "url": "assets/js/40.f6d85886.js",
    "revision": "07acca6ae05641b4024d76ff5f06b511"
  },
  {
    "url": "assets/js/41.fc38bdf8.js",
    "revision": "5cc099884b1a1154a8abb1b2b0366d77"
  },
  {
    "url": "assets/js/42.a28d1437.js",
    "revision": "9c378838984961861c268a2c2e42f563"
  },
  {
    "url": "assets/js/43.826caa0c.js",
    "revision": "12942a26a21e75efff285f9594c1d3b4"
  },
  {
    "url": "assets/js/44.31239ac8.js",
    "revision": "212fb16aeb85c3a15c0f011f703e4065"
  },
  {
    "url": "assets/js/45.e78c38d2.js",
    "revision": "1a5bea07cd8f953c1d7b2e2f6f86a253"
  },
  {
    "url": "assets/js/46.3a3b7676.js",
    "revision": "325ccfaffe929a372e0e5f24c3e0d3d4"
  },
  {
    "url": "assets/js/47.3032b8c7.js",
    "revision": "55885d302d60d7cd7662e44ec692b818"
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
    "url": "assets/js/8.1f497ea0.js",
    "revision": "6b9b343b7cb5fe6ac1db53ec2bd51fea"
  },
  {
    "url": "assets/js/9.920a94b0.js",
    "revision": "319f7d7d435aebb4bfcdd1aa4e2be932"
  },
  {
    "url": "assets/js/app.1f918ee5.js",
    "revision": "ed7cae07c42584b6d02bc5d15a40f339"
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
    "revision": "7e8e8e6b76a61a3a37f6a788d867110c"
  },
  {
    "url": "categories/index.html",
    "revision": "7620723b9d8b6b7840fb290a86e6b0b5"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "329397b2892dafde105a6c6a21a64941"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "33cbbb51c52c98ed9ead4ddf3e26887e"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "539a7cd7c84bc0da54d5e38904635523"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "288cc910f778cb9fae8e9f0105e02997"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "5e92c54d4065dae09342fcd47affb868"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "b7bee08b678e94b410849133b0b3c986"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "09cdd53e554cf96201d5c098dcb136ad"
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
    "revision": "de8c2de7e350990b3d5136b642463ac2"
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
    "revision": "523eaceae769e991aadcf411b0c63bdc"
  },
  {
    "url": "tags/css/index.html",
    "revision": "c15a642ae88c838e90a6f182f2a9be42"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "e68784058e53f30d61375d1acebbdbad"
  },
  {
    "url": "tags/js/index.html",
    "revision": "82d24778156778033993b3d655866f29"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "d3930e6eeaa1db553cb2df31c3fee532"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "239760c7705592fc8c912e8ac2d359c4"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "8f8a32d5f5355d6d7406c4bd6750f6ad"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d7cbe75708910a1e8cdf82dbabecc637"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "e2f68c196d15c669eeb9b6844fb72612"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "209d0c0410ae92f044ac90f9f02637e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "aa358b6911ceb6b2c0e4e5757fc95d78"
  },
  {
    "url": "生活分享/life.html",
    "revision": "60d45da8af4898929b54dfa3dc174ea5"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "90b63b13f1e354ad7a00f50baff43763"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "b9ee50c967d5d9bacf989528b6ea79da"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "c8d5f20da9f08baef117bf531c60823e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "f22e04b47244224b3522004d0fae54fb"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "fb6813327db7303ebf88183f17851ffa"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "9c104715525faf36786ebb8f71b07b79"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "9af3f9bc92de7b86a2bf6a422688536b"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "2a8509ecb2b0ff3486ed35ebfa19cb6c"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "5cdcfc1b85213ffc3d8ce1e95c3c2e24"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "6e48036cc70b58d330a01d6adf1838d1"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "da8afe071bbabd869a43bee655fd4f61"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "e3410800b07177b4a0b81d47b2556c58"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "805143a40017a3bdf079478ed69b8470"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "4630417de53ccd00583797e1d07378d5"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "9bd512dd2396789c74ab1da5e8a3f8ac"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "33a4a03771607a4a04d8d2efc0ab7b7e"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "a5ffb55f2542ef110f95a2b5c2fa18ff"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "16746f3ed39ab7d27aacb62c81055802"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "475c2e0aee9f5a04ed9cec9ba4d6c9e8"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "f59cc3b3996ccb7d6233ba6fa3ab814f"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "0d765ea79447132e2cde99dbdef1b310"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "63c83707db55016217db830a071b2744"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "1a68032ff5eb2be2ba89c81a2fb152c9"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "3666d3d865a762b3a3ff393eb2f0740c"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "777938dc5ae76ad2477086f7532d7d5f"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "3ee7a16fc324a8b11843df136212a587"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "56c22696844186995a6d2b14ef8cd964"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "01e3b80671fbfcf3577e5c0b01e68250"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "e275d7ae0ab8dded9f53ef5392cab2ef"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "b36659ed388d8a5ef6e5113ad51430ef"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "12bcb641956d9304619ebadd964d5ad7"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "d64fd1dc7c76c9ccd06aa75f442b0ffb"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "14dec6981e82277b56a2242c9d3b84e5"
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
