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
    "revision": "876b76aa6135c318221ff2b8dfb0c6dd"
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
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.e2cb37f0.js",
    "revision": "5262e607cddd899a1810e13013bc0ee8"
  },
  {
    "url": "assets/js/11.46563f29.js",
    "revision": "fa1d632b851f1be4d1a0874076313876"
  },
  {
    "url": "assets/js/12.d91bbce6.js",
    "revision": "aecca5c12d23a30c5c5e6138f77a3d9e"
  },
  {
    "url": "assets/js/13.c5e8c49c.js",
    "revision": "6adbf91b4d615f63b53631dab9901972"
  },
  {
    "url": "assets/js/14.d6df1ef6.js",
    "revision": "bd320b1a96fee0bdd32c84737dd89aad"
  },
  {
    "url": "assets/js/15.9e4299d8.js",
    "revision": "a75eab27e534e839841d8e23d3f717d0"
  },
  {
    "url": "assets/js/16.f9d0db50.js",
    "revision": "33d141a809fd29861ed39e3d6eb06fab"
  },
  {
    "url": "assets/js/17.fe900d83.js",
    "revision": "0a5329aac71ad1ddd03bc29fd14d9446"
  },
  {
    "url": "assets/js/18.a17ed9f8.js",
    "revision": "b2d50da5eaffb6a8861bf687a3f9d332"
  },
  {
    "url": "assets/js/19.3317ed96.js",
    "revision": "f4ca820fd3acc876748f79dc4a11f29e"
  },
  {
    "url": "assets/js/20.68bf7c59.js",
    "revision": "2ac9a6cb4ce2878cfbf3976ad683977f"
  },
  {
    "url": "assets/js/21.fbc38628.js",
    "revision": "3086a46e29d5f4969de72597d717fa97"
  },
  {
    "url": "assets/js/22.e0661f93.js",
    "revision": "52dcb938849ebe70c10147b283c196ca"
  },
  {
    "url": "assets/js/23.cc9bfaeb.js",
    "revision": "4a88354ed2f7336327d56c5182340ea7"
  },
  {
    "url": "assets/js/24.8478fd52.js",
    "revision": "91001e65211000e29d859eb8a07fa40b"
  },
  {
    "url": "assets/js/25.90262e9d.js",
    "revision": "d8e07695ba21ed0e6b6384bb5bdc526b"
  },
  {
    "url": "assets/js/26.6c3580e2.js",
    "revision": "d2559b89bbaf5906d5ef743d55080f9a"
  },
  {
    "url": "assets/js/27.a88a9ffd.js",
    "revision": "4271913c758e84c1c963412c8a1759e5"
  },
  {
    "url": "assets/js/28.b20b4796.js",
    "revision": "63194d28063fd98fd4ea827f9ce9e415"
  },
  {
    "url": "assets/js/29.c78858f2.js",
    "revision": "32f707c14aeab24f12742dc6e75cce5c"
  },
  {
    "url": "assets/js/30.dd412c68.js",
    "revision": "d5ea5047cd516b42a1929cefcbf131a1"
  },
  {
    "url": "assets/js/31.bea33839.js",
    "revision": "527d15dce9aec933c0e1a593e1cdb1fe"
  },
  {
    "url": "assets/js/32.156b6b3c.js",
    "revision": "5778d471498d50007a0f9a0c1850972f"
  },
  {
    "url": "assets/js/33.b5bfc862.js",
    "revision": "a91e3805a8534c0e7fe4ec8569771f70"
  },
  {
    "url": "assets/js/34.6e0aa615.js",
    "revision": "1c807393cf625ac7041a06b1b4d872fb"
  },
  {
    "url": "assets/js/35.1548e5f2.js",
    "revision": "15af90671d00a38c73231d7ba7f9929e"
  },
  {
    "url": "assets/js/36.18f3ad03.js",
    "revision": "25b9b89846090f1a278cf2ab78c9d333"
  },
  {
    "url": "assets/js/37.e0a3264a.js",
    "revision": "3bfa01adb823dee9fd18988b875a47b5"
  },
  {
    "url": "assets/js/38.8c8205c7.js",
    "revision": "1379c25cd477f1e5f82757071c5f8773"
  },
  {
    "url": "assets/js/39.28598a54.js",
    "revision": "6104a7dd5bee23639f7f467a1cd570dc"
  },
  {
    "url": "assets/js/4.dc7d5f72.js",
    "revision": "f4e810e5b67ea9900c8043d0695dfdee"
  },
  {
    "url": "assets/js/5.1809102d.js",
    "revision": "3273dd6b02a73d47cdd66d948d9bd37c"
  },
  {
    "url": "assets/js/6.ff1c8b86.js",
    "revision": "c72cea72024d0c12bff3a597d953b69e"
  },
  {
    "url": "assets/js/7.7f56f276.js",
    "revision": "81294b8055944f59b26827ac284141c5"
  },
  {
    "url": "assets/js/8.6014f79c.js",
    "revision": "43af699254aaa6b39857ae9bbf0d14aa"
  },
  {
    "url": "assets/js/9.5a7f0e52.js",
    "revision": "5fe2931b8843808373141ec8a2512817"
  },
  {
    "url": "assets/js/app.dde6ac87.js",
    "revision": "294d64581a4d1038d1f91cd31155b62b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f24792cf.js",
    "revision": "a0c4a6e6f16e645089e1830f5c076f4a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "520d5ffb9d3d0eaa864f0c8f907adb10"
  },
  {
    "url": "categories/index.html",
    "revision": "11535d869f99dde3127d1392c072968d"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "f205f792d8faad611bbefc57898ff8a0"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "897b8ee14b758bf4c89efde2b97f5428"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "7e954475eef4884ffc66fd1ed946ff96"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "e01ffa8ba5df6e207f84f685666ad732"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "0c37b477b0d68422b04122c785566249"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "9a38d1d14c34b29c3baaef400e826885"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "ca2d4ad736c4e10ec934051f27a9e811"
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
    "revision": "123f6af5876ebb785514bc5cb1daed96"
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
    "revision": "171812751a57ba22d12293395a707d31"
  },
  {
    "url": "tags/css/index.html",
    "revision": "b16c67e9b3415b2af08bd85564d81cb2"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "486f3af8e82eb013ef0134d643ada438"
  },
  {
    "url": "tags/js/index.html",
    "revision": "badf6108bc1b0d61f19cfc66293852a5"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "23645306e851cbc0c5f301df5a33ea4e"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "eb60f1066467e7b9d7af4dd0e7d2e177"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "b2104b3691d8505e006477fbae55b8f3"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "262647c689578c30bbe3972757365824"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "3c0ef42604ec64826a9843a8ff9ff016"
  },
  {
    "url": "timeline/index.html",
    "revision": "b199d3e90289526ce469e4a1ec4071d8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d532d638e5322aa5a4566d928db787a9"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "c8ba6fde224e8ae442d06f9fc5d1ba58"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "5ad42ae555b9ea9bf9849128a280d970"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "ff08466e3a2cd2376a1794d65364903e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "0c9b54720c519c43351043f9ae1809e8"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "e6de146dbd57a75dd805ddad60150c0d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "595dcf78eb6c7011a38d97ae4619ce46"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "0cc0e031a50a6d22271272087f2644a5"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "ee64647f02b7bbbb94cbc7474bdc75ba"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "8a741daa552006537f7b9657e6a01c26"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "00d8a6c1397944553304ed523b6f9298"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "8bd53c1d62a9de52adeea74434875f2c"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "9014d5598a9af69ffdd20d9a7cac2679"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "0c8c8c0056b2076619d82bdf35e0ad37"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "ec26eba99c1309758dd4adc9fca8fb75"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "c67bdc049b6c897739da2944cd765b17"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "c3624e8dcb305ec14c064bc387924f29"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "6ad053b7094bcb5a9b37a27ddfdfddab"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "0fadcd98cfd1141540766efc0bfe00e4"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "5b3f81ee116bb5b3c20f7edb7d187f68"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "0345b2f8b898f307d8a304840bfdfa63"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "d50416a305b6b9557f6ac49b0ea8918b"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "a4c532e785cac76c86d8c98dfb631261"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "2b1b343a3b3e5b3d081e15d3dd871c31"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "a5a1fce264a2ce31c37568bf9cb041b0"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "9324a346fb23228b66afc7b8dbc04bb8"
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
