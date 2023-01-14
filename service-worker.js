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
    "revision": "3bed711114e38e9ef56d1d6863a54690"
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
    "url": "assets/img/image-20230114114204597.52a4bd47.png",
    "revision": "52a4bd47b98da87e5850e5611d45b72e"
  },
  {
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.48087170.js",
    "revision": "b831df56a7eaa076515c1399bd51ed73"
  },
  {
    "url": "assets/js/11.e5aca02b.js",
    "revision": "7570863155a0a12155c678a7264a917c"
  },
  {
    "url": "assets/js/12.69aeed4e.js",
    "revision": "725604fe3aea7d59f4e0f060aa0fd71f"
  },
  {
    "url": "assets/js/13.7a86b188.js",
    "revision": "af88de936a53135e9e1b4c3d54689701"
  },
  {
    "url": "assets/js/14.12da6bbd.js",
    "revision": "4b565449853c675a9b3ecc7a2c758c96"
  },
  {
    "url": "assets/js/15.534a60bb.js",
    "revision": "9f5906eefea8c354e59f518fa2692428"
  },
  {
    "url": "assets/js/16.281338e4.js",
    "revision": "f81945de3de401d85795d724a0ead400"
  },
  {
    "url": "assets/js/17.21f67f43.js",
    "revision": "9940198fd5eccf321a1e115543c9d0ce"
  },
  {
    "url": "assets/js/18.c86044ae.js",
    "revision": "9feaf549504716c33063f3b1331ff2db"
  },
  {
    "url": "assets/js/19.01e47201.js",
    "revision": "76d1983fa43545f11e445190465ced57"
  },
  {
    "url": "assets/js/20.6a312fa3.js",
    "revision": "f199c8373aecbc0bbdd1ce8f93b22ac0"
  },
  {
    "url": "assets/js/21.324589c5.js",
    "revision": "cb6595a5c961087ebb4175933116a8cf"
  },
  {
    "url": "assets/js/22.3b5d9f71.js",
    "revision": "99b11bd4aded8310d41b2571fb1883cb"
  },
  {
    "url": "assets/js/23.b5b82054.js",
    "revision": "059cfc8cad8b71a65b0013717ed6a819"
  },
  {
    "url": "assets/js/24.0e2b06c7.js",
    "revision": "eef437b59e0df1bffa38c9ec8fb63d0b"
  },
  {
    "url": "assets/js/25.a5dce963.js",
    "revision": "efa5b746aa500172575c4c553b04be81"
  },
  {
    "url": "assets/js/26.1666aa1e.js",
    "revision": "2fcfe25cbaa674f3a4df6ed6315b62c1"
  },
  {
    "url": "assets/js/27.af0f5a26.js",
    "revision": "b5ee160bb9356beb146b04bf6c7b8490"
  },
  {
    "url": "assets/js/28.297953bc.js",
    "revision": "f15090ed76bbaec532c653f26d77a0c9"
  },
  {
    "url": "assets/js/29.9255c74c.js",
    "revision": "b26284557dbd72456433c868228b8d44"
  },
  {
    "url": "assets/js/30.38f00638.js",
    "revision": "a8eebc6ae07158b9bc61ba0463885b6d"
  },
  {
    "url": "assets/js/31.00949edd.js",
    "revision": "66c9e536e4c1ad0fe3fd1a54291a76a6"
  },
  {
    "url": "assets/js/32.86707cb8.js",
    "revision": "bfbf87b7b9c2626d673139de2e569dc8"
  },
  {
    "url": "assets/js/33.16a61f72.js",
    "revision": "15d2d1f80c568a36dfa88c0b0fa7b441"
  },
  {
    "url": "assets/js/34.9d5c49ab.js",
    "revision": "7ff4fc88e3832aff482e10bdf47736f4"
  },
  {
    "url": "assets/js/35.c199fc86.js",
    "revision": "5bbda96226689c030022d4f9af23e775"
  },
  {
    "url": "assets/js/36.24e857d9.js",
    "revision": "d52d654ce01fff1ae19ba80898c89fa8"
  },
  {
    "url": "assets/js/37.be53061f.js",
    "revision": "1c3f31dfc8c8d139a23f020907e66ac8"
  },
  {
    "url": "assets/js/38.87202c65.js",
    "revision": "9204f992dfd1c4c2f288dee78898b627"
  },
  {
    "url": "assets/js/39.f44cba85.js",
    "revision": "7a33ffb6024233b5f8b7b1f8c3a31286"
  },
  {
    "url": "assets/js/4.5363261f.js",
    "revision": "992f8d52af5d9422106d8f022c9d6368"
  },
  {
    "url": "assets/js/40.99a77693.js",
    "revision": "dea2934c16e0b3fd60123aa3bc3074f2"
  },
  {
    "url": "assets/js/5.4378bfdc.js",
    "revision": "ceee3ba9658f9380a0d441b39294d11a"
  },
  {
    "url": "assets/js/6.74a11cb8.js",
    "revision": "e5778c6a55a01fbc9a55fb5b47c775fe"
  },
  {
    "url": "assets/js/7.6672dd11.js",
    "revision": "794e8e959e26d4d4f5282e109fc8670f"
  },
  {
    "url": "assets/js/8.72662905.js",
    "revision": "54a63e745a23cf052b1fe0f828da9889"
  },
  {
    "url": "assets/js/9.f9fdadac.js",
    "revision": "97ed24aea90f1ed2f1ac0f6b90315428"
  },
  {
    "url": "assets/js/app.0f2a7086.js",
    "revision": "0b3ccf32d88e8600ced5bbb5f5525f31"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f2e4c8cc.js",
    "revision": "8e4c187e6e742baa84a46b1a9bc79cd6"
  },
  {
    "url": "categories/css/index.html",
    "revision": "a71a7691d9bf2c208fcf8c16076471c5"
  },
  {
    "url": "categories/index.html",
    "revision": "0a2720cdd900d24a659cabbbc8370ca5"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "221bf2d8c7e7a0ca0eeb04a7777013dd"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "34cdbd7fda01033a7235a375d7d41e3e"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "0a9278cf81087a8dd78e8ff901610d6f"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "0545d4a013e5f9378cbe018598df520e"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "7c3bbc08abc08a92eb3a5ee5b1a0d056"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "6c5cee8a3df497ebb9d46a2418642b79"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a81af76983e4d0dd596d90d2dfac19fe"
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
    "revision": "0f9b023441d71dbbcaa334b0849c1143"
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
    "revision": "cbdd62b5d3023323c69e0ec72919ffab"
  },
  {
    "url": "tags/css/index.html",
    "revision": "27c208fe47e05a5cdc9b7e06f00ec6e8"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "e2d554a715b9dfcc9814d7749393c705"
  },
  {
    "url": "tags/js/index.html",
    "revision": "16246f460b0ed6eec6e77e5507c05a40"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8bf62671a57537be4e661b096458a461"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "6733d8376c5f292dbd87b182815f68e9"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "1a6977a28ddec5332ba08d1c6f72f3d9"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "f4bdd8370bb609c01431a8888d90d2d7"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "7f61826c5807f78c5be4a90e6a068e21"
  },
  {
    "url": "timeline/index.html",
    "revision": "46197a8d115bfccba818802f28ca4b8b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5572e4f2d1a482217eec4b6ca4de694d"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "22318e4426ab7f365e1328fbab775344"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "70ba02baaf8b1be2e6942af960d0b670"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "38c921df2b6d5a0a5e2b3681c86802ac"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "a42ca17527ab2ea884557d2d3d27c355"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "7e35c684a2e0421c86b6559a91a19925"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "10126263273c911ceb641d5fab5ae908"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "4464b80c60e0203d22f745be3815c354"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "f59405ee4dc205f47b7992e6a4901da5"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "d05d4ca9dd5d6fc6f80fc1af6652340b"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "9eb1a9fa1979009633ea614cfc537e40"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "7a1f37ef582b3fe4e61e8f0cb099b3e4"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "3e59995cc5e9b40d0f5eb8d43acdd7f0"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "bc2fb08cbcaef66e1c37340d536f8518"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "7db2a1ce150ba3a7115cf844228020ee"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "0cf31767f3d1d49b7c7c174d69596006"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "6936d5374f2a5ec5e434b2a55cf4faf6"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "1f94b58c01f3982ff4f5663c2f2fa0f8"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "c3c13c18649331f3d68a447480f87b7b"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "49e7185e334971dfca423fc8f9689d61"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "e9eeefad4a337a89468099115f816d42"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "4a162d01048894faa6d7e0bbf7948186"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "98dd821b4161d7b7ba963b929649fe54"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "7ef5fa0b5d755fee9763dd7a2783bba4"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "c738875a2e4bdac2112b4ba23992d0a6"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "2e05845b0cc6f7654e13ae2ae847adc7"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "4bcd66402ff4c54b66205f9413f953c1"
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
