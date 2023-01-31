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
    "revision": "6ef5b7f31aa931841c2eb83be44c560c"
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
    "url": "assets/js/10.5fdb6887.js",
    "revision": "eaa9203d95f853a78a3b230c0e99b06e"
  },
  {
    "url": "assets/js/11.0e56eb9e.js",
    "revision": "be1cfc492ae7ac2e6a588a4d9563b070"
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
    "url": "assets/js/14.4a46aff2.js",
    "revision": "75dbe94acce4e56feeb2b6d22776229e"
  },
  {
    "url": "assets/js/15.990d19e0.js",
    "revision": "41a9676a94cb5a464d987a5640bc79a9"
  },
  {
    "url": "assets/js/16.0978858c.js",
    "revision": "822038400e8b2690673a5a858adcff38"
  },
  {
    "url": "assets/js/17.74ea58df.js",
    "revision": "66bc591b4a620b68695e9ad2df0c9af7"
  },
  {
    "url": "assets/js/18.acfbf013.js",
    "revision": "3bed4f5bdede7ae28db99ffa13bf20af"
  },
  {
    "url": "assets/js/19.6121479c.js",
    "revision": "a5ebc457e33eb8d98987d8d1d3694237"
  },
  {
    "url": "assets/js/20.0bc396a2.js",
    "revision": "8021ffabf37d60f41b18fd7ba9c77684"
  },
  {
    "url": "assets/js/21.ba7e2c19.js",
    "revision": "a6cf4104429d1d4b44e34e15063ecfb9"
  },
  {
    "url": "assets/js/22.8a4cb0a0.js",
    "revision": "25c56c28d38413d5e8eae1b420a39669"
  },
  {
    "url": "assets/js/23.151d10b5.js",
    "revision": "79b39130ecba73776793a9d73165fdda"
  },
  {
    "url": "assets/js/24.000b9de3.js",
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
    "url": "assets/js/28.bfa7ac26.js",
    "revision": "363b0f17496012c72dbd466ea8b3a3c7"
  },
  {
    "url": "assets/js/29.73f260a4.js",
    "revision": "6d9cd5218b8140370007b14c998bd03b"
  },
  {
    "url": "assets/js/30.269d052a.js",
    "revision": "96e902b48cbc8f9633d5f152ece9fe99"
  },
  {
    "url": "assets/js/31.d03bb574.js",
    "revision": "113d243c7b1bf1176ee1b3badb981405"
  },
  {
    "url": "assets/js/32.2d189ad7.js",
    "revision": "b3df2411e51aaa012665e6ca933bca7b"
  },
  {
    "url": "assets/js/33.7de0a488.js",
    "revision": "7ae7a99fe9213f40083cdac5708b61c3"
  },
  {
    "url": "assets/js/34.53428977.js",
    "revision": "b6435d93a3bc39f49c799591716f087a"
  },
  {
    "url": "assets/js/35.13c58c79.js",
    "revision": "d92b397074ecbb9b0b5a2df21b7f25fa"
  },
  {
    "url": "assets/js/36.8bb30566.js",
    "revision": "11d1c8d11b6c04c7401acab1a648e086"
  },
  {
    "url": "assets/js/37.7ab8d281.js",
    "revision": "58e57066ea44958840201aac0f61388e"
  },
  {
    "url": "assets/js/38.ed7a5141.js",
    "revision": "f7834f7db259264db165e6b237ff4eb5"
  },
  {
    "url": "assets/js/39.cc789719.js",
    "revision": "22d2a2de9142254c20b7fd7b2c923939"
  },
  {
    "url": "assets/js/4.7156bfa9.js",
    "revision": "6483b82f2a646add361ee35b807a71f3"
  },
  {
    "url": "assets/js/40.d42ba9f0.js",
    "revision": "0f24fb9f40212a3657efcacbba763f5a"
  },
  {
    "url": "assets/js/41.c53bba97.js",
    "revision": "b4309f6aa337b7ca55d30fd4676ffa83"
  },
  {
    "url": "assets/js/42.3bcdd19b.js",
    "revision": "d5d8a0f7b9fd7d96a88a560199e84475"
  },
  {
    "url": "assets/js/43.7207ccad.js",
    "revision": "6e2b2bd1200227714591102ffa0f0689"
  },
  {
    "url": "assets/js/44.f1e8c24c.js",
    "revision": "8642ca26fcbf8fb43c0e7cebb26fb2fb"
  },
  {
    "url": "assets/js/45.af627e8d.js",
    "revision": "0305802f24fff901a98df7b63b44167a"
  },
  {
    "url": "assets/js/46.8367ac6b.js",
    "revision": "ce07efd9c3e71cf2c41e8a79b04ce4f0"
  },
  {
    "url": "assets/js/47.da58aff7.js",
    "revision": "57ed26f027ad8be36e0c5350aa06780d"
  },
  {
    "url": "assets/js/48.1f0ee0c3.js",
    "revision": "e6bd3ee20e10587b93ffb3b563b833ff"
  },
  {
    "url": "assets/js/49.420a55a7.js",
    "revision": "1cef0373807e6926b566edd481b647fc"
  },
  {
    "url": "assets/js/5.3fcc361a.js",
    "revision": "14fa24ed70de270e0f83b270c3b52f54"
  },
  {
    "url": "assets/js/50.d0d9dc75.js",
    "revision": "1330a136b215aca1ce51b968f3c8b858"
  },
  {
    "url": "assets/js/51.18841196.js",
    "revision": "5bd5eec676ab1b7dfbc96b6b327b63b6"
  },
  {
    "url": "assets/js/52.3e7d3b3e.js",
    "revision": "f0f3d92b3b4071018c0cbae57f8958ae"
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
    "url": "assets/js/8.c07f9570.js",
    "revision": "a80206850cfd005835501968ed6d4adc"
  },
  {
    "url": "assets/js/9.a60846d3.js",
    "revision": "e30142df2287d7379c931b1460c2b7ae"
  },
  {
    "url": "assets/js/app.473f5017.js",
    "revision": "ba9c08cd93b0279205f781a087006a71"
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
    "revision": "103c54b515d254cc5dba919b918b3089"
  },
  {
    "url": "categories/index.html",
    "revision": "2cdc514b513eddcc9e2577aab8d3e5fe"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "e50050a942d6616573697b1bb81e1180"
  },
  {
    "url": "categories/JavaScript基础/page/2/index.html",
    "revision": "eeec7d2e83a57ff8bdecd1f280ed0b10"
  },
  {
    "url": "categories/js刷题/index.html",
    "revision": "c52b7b9fb0c367c2074d3ce3bb0c142f"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "f5f3d7159d02a45a1d56d13fe0df854a"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "432fd64c71caec1229050b7ae8d38737"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "753ac6c2eefb4d12a8cbb3b3a2045c7a"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "8c4e0ee263013591b1ba1f4ef9332297"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "59b619f8795896a35d78434b335fc350"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "314ad9674c1412bb2050ffbed20efbfd"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a1dd6cbc287170cd18d3333243497d92"
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
    "revision": "b3acc034c52e7fee02e5de03fcdb3186"
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
    "revision": "b78aba06e61dcc1576f9e4c06549f10f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "6faa1ffba3ea57e79643c4885cf297f4"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "e06fc996d5d64531f9c7327cb6380565"
  },
  {
    "url": "tags/js/index.html",
    "revision": "13ac73473bf0d2a59d9744b423850fde"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "a5dd09204ad25dc3ecef2d7d43364137"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "20ba443c2eb57bc67ee20aa5e2013888"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "d4ab27e3f8b7fd356e047c9f83d68697"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "a5148247692fb155918f29bd84b986a4"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b7a90a7e3e78826ea28d280730651296"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "462615b756c5e9d3383443db17367923"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "d2495ccecafea41383dbaec1bbbb782d"
  },
  {
    "url": "timeline/index.html",
    "revision": "94ed2df1f5bbc2fd80695ff9058dde10"
  },
  {
    "url": "生活分享/life.html",
    "revision": "59ee82ff57dbf086ee63640d62bb67b2"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "594813652cc451b5cd2c081e76dfdde9"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "ddbded805e26171d7473b22a7dee3cbd"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "c92918486bf05dfbb7c48a895a79791b"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "5e19380035361a7b39dcb7103f66ff97"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "6596256c63cebba90f9cac10ae1d4846"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "f578f92015ed1592a146e5af87fad747"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "511920cb2f0a717e36add0728d837dfc"
  },
  {
    "url": "笔记整理/javascript/es6/async.html",
    "revision": "77b89b90237eaf5f5ea0b7df634afe15"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "abcc7dda7e37890662de90b34334387d"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "e99723b83c99bdcd87ce5fe85998d7d0"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "183046d4d67712db3b6650ae32d33bc8"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "7b2d8f4531ba93a3953f4f197af73c43"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "2fb191d401b547feb2938476c3b98c5e"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "fd68131777cb48016476347279976d99"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "b6728c762b5badb6d17aaf792c227d85"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "64803c1e1282141fd6ccb0eff77d7aad"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "94a0db058124556ec007c538e971a4cf"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "ca44b138a3c39d12fc005a42b95a9a3f"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "429087cf92fead2a6d372cbf36e4078b"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "2e97fbcf63ca8d33edf24cac297b8ba7"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "ba38c9fded31b90949bb9df5f449c4d8"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "6901555984c239f4c3691fa66f53c612"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "116271d98dfc9d6e1a60b2b0e9dc12e3"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "a9ee161e5edf22a2eb46b486e3faf509"
  },
  {
    "url": "笔记整理/工程化/工程化.html",
    "revision": "4f86670c5694115f28871f5531ce2cc8"
  },
  {
    "url": "笔记整理/工程化/模块化开发.html",
    "revision": "49bf33fa2d4f2f3be757956d359386e4"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "5d228d348ffab837aae5eae6b4ddbdac"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "8f760258a95851204caeeeb7383bf632"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "13047e629a673d41acfa8dc5579475a3"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "4519a7bf0f38e4c5351ce779c491d62a"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "0320f4ced1977856af2b54ebb5b7a121"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "aa69bcfae874041ec52954f74032d010"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "37173076afe5051d8efcedeb1e11c074"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "5c8a6ab4f5d5685f6521d956cdfc76eb"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "df239961aba4b7e191b5d39cef8a0a75"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "939e428df86b34db7321b3a8837ae7eb"
  },
  {
    "url": "笔记整理/算法与手撕JS/overview.html",
    "revision": "bff5f8a0c3d320cd6806bb765cc4bb73"
  },
  {
    "url": "笔记整理/算法与手撕JS/手写防抖函数.html",
    "revision": "c4afc7db4d72b236077f5d47e8ca4f75"
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
