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
    "revision": "a3fe917b5336f668ca37a4c7175e03ba"
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
    "url": "assets/js/10.1fd1fcb5.js",
    "revision": "2d9877622e72d60547b487e757200b8e"
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
    "url": "assets/js/14.1b53e829.js",
    "revision": "6277ec458c98c0d30ff00f3c64803c71"
  },
  {
    "url": "assets/js/15.da74dbcc.js",
    "revision": "5db0172538f2ec57596d9f14b99f109b"
  },
  {
    "url": "assets/js/16.18f6718b.js",
    "revision": "55a0bf005b39c84d5d48b1d25eb2967d"
  },
  {
    "url": "assets/js/17.03b0d084.js",
    "revision": "d1b3553516e5c2c548632c9be9e97259"
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
    "url": "assets/js/20.58270c1d.js",
    "revision": "d91698f936e51cbcac8446e8031d8abf"
  },
  {
    "url": "assets/js/21.e9f99474.js",
    "revision": "7d53be45abc8b95d789272148c9d7722"
  },
  {
    "url": "assets/js/22.a3e5ff65.js",
    "revision": "0e433c45c77c6f023082f874b72eb967"
  },
  {
    "url": "assets/js/23.b5b82054.js",
    "revision": "059cfc8cad8b71a65b0013717ed6a819"
  },
  {
    "url": "assets/js/24.c3ddda97.js",
    "revision": "b883fc892080c9e9c9b67879bc975bbe"
  },
  {
    "url": "assets/js/25.3c9f332c.js",
    "revision": "eeeed7c62fd6802a3f48983e3f3069d0"
  },
  {
    "url": "assets/js/26.ff5bf6fc.js",
    "revision": "a811e0b1185e8b8d547323590ce8e3b3"
  },
  {
    "url": "assets/js/27.06b17917.js",
    "revision": "f61d37e784c786edbb06290f598dd11d"
  },
  {
    "url": "assets/js/28.4f04c891.js",
    "revision": "7ea9a894a818d842f3fa940ac15a9e4f"
  },
  {
    "url": "assets/js/29.b1b0b32d.js",
    "revision": "85279c1a86fd2a42e0cce4ff5006567f"
  },
  {
    "url": "assets/js/30.a8233a74.js",
    "revision": "a8ec2c6eb6084b44b87353a90c81f64e"
  },
  {
    "url": "assets/js/31.773d4aab.js",
    "revision": "97111e4e598c8bb157fa537648d0f673"
  },
  {
    "url": "assets/js/32.6cd02961.js",
    "revision": "b48cd35303d23d1d3692f4d4a748ad40"
  },
  {
    "url": "assets/js/33.006203bf.js",
    "revision": "15bf0e47e7f125a7f922354ac9cb84c2"
  },
  {
    "url": "assets/js/34.8485f9d8.js",
    "revision": "55a6d285484dc89489e621e4174632bb"
  },
  {
    "url": "assets/js/35.74bb0199.js",
    "revision": "c94402831980719b9bb243b5580900e0"
  },
  {
    "url": "assets/js/36.177a0b03.js",
    "revision": "6b5d8d584106361ad4ff55343b94593a"
  },
  {
    "url": "assets/js/37.1d2c0f34.js",
    "revision": "01b6308373f0a7bc50ed923cb073d833"
  },
  {
    "url": "assets/js/38.d673601c.js",
    "revision": "6ff2c961eafbd4a157b566f204630254"
  },
  {
    "url": "assets/js/39.3c505efc.js",
    "revision": "92f102386ffd781f9ac30fbecb8d9827"
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
    "url": "assets/js/8.6224483e.js",
    "revision": "d73f59fb151c2e1fe1cb782538ba987d"
  },
  {
    "url": "assets/js/9.2a141bbf.js",
    "revision": "d41222b7ed01b867ecda191acdcfcaba"
  },
  {
    "url": "assets/js/app.1afb18f7.js",
    "revision": "661963c0a002995100df1afe252ef545"
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
    "revision": "0243f34aaeaea3cd9cfc23f6d5805156"
  },
  {
    "url": "categories/index.html",
    "revision": "ce69b3f5f6c7dc1c80bbc61447d7f4ef"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "e728012b5b07c683160d87ba5798d24a"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "3bd359637e1b55e91425359d59799fd4"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "68a0267eff85675a124db5b823727420"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "02976399aacfa835d60dd0a81b903ebc"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "03d510daa2e49a249d4b59fd493cf72e"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "97a218eb0175e66f84a923f78fcf5a65"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "3f1d4f34e63645e71d3dce85acbb8569"
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
    "revision": "e7da441e91f29c0673185a24e86203f9"
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
    "revision": "7233682c5451c13ef8fe167e519c0861"
  },
  {
    "url": "tags/css/index.html",
    "revision": "395fbfa438641a11eabded1f1acb23f5"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "8572076ae1b66c10cd8b2e3a05c6b512"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b79cedbf8b90aaaf35e7eb68ceeb263d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "85b0ea90ea8ebcc66e4ba4467258424d"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "c0e25ac0fad3f40d8b2318104af21f29"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "7005bca190da7019fb75f36fba3de9c7"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "34bf0bb5f043a7cc8f795c0ae59f28da"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "f1b240e5afc68f834c2c29af055e8c95"
  },
  {
    "url": "timeline/index.html",
    "revision": "3df8be173e5d96a0885e81828a5484e9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2d9e4984ae6fee9d7278142361a50797"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "59d973079ee036be073944f41e0a826f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "efd88174dd881b2a97abf0862d4f6938"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "9a2ab98a29398050f44a3dfcf0180cff"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "1cf741f9969e436640415bd812a70c54"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "627956dc694b072dc06866c2f8f6617a"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "3be17392141ccf800432af2581927c34"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "b5481875d2408e42d60a4e0ca21397ad"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "ba996a5a1bfdc941b3ecf0c641a3e73e"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "1d6ea9b2f9def6bd480e2a074a9f842f"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "d3c1c74794be028ae94348e6be65e649"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "e5c57c99c28f952b909d44a42977f547"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "8287853c9c89257bfb6edf1ab7532ed4"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "1d7b1f789c7a7832723a248f80f705c8"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "8c485ccb91ff72884f6a9eca2aa2cc38"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "977c580419ad31f9f6b6fcb7291e27f0"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "847c401a07a2de3f4af0de0f12d14646"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "60fbbf6d26190d98260f59f503102546"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "ad6b3dff738d2879a93b75f2afe2ab8a"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "6a87521a0a75d2badd1b9dfe793c4038"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "36f37502807862906155f57acb014f58"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "f1aeb9ec17e8545c36e33e6934184c50"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "37da4ae90364933177bd91cdfef26033"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "60dec61777edd01a86a36032de1424ed"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "d357b503ee5d90fee72851297ede7952"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "b94bcf4cc7c5c40a186985de30e8e15a"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "0b9b6a81dfbcc3ea0a502a90421fb043"
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
