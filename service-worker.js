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
    "revision": "8ef802090eed9e93a28424893b763bd0"
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
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.82237c7f.js",
    "revision": "7526a0460f47f67cf4702d8527256422"
  },
  {
    "url": "assets/js/11.2e85d88e.js",
    "revision": "21981b3f3d6c10b7217fd691e1322463"
  },
  {
    "url": "assets/js/12.dfc78cbc.js",
    "revision": "e6d020b9ce38a2a1221850e92b902223"
  },
  {
    "url": "assets/js/13.56f1ce54.js",
    "revision": "67e61bef142c446dea6fcbb5bba4ca2c"
  },
  {
    "url": "assets/js/14.2b5e0e76.js",
    "revision": "8922391f909acecd639f3bd9a00c211d"
  },
  {
    "url": "assets/js/15.aa92d2b8.js",
    "revision": "b3fe67b2b172b578e371e181929cbf43"
  },
  {
    "url": "assets/js/16.d5e0c72c.js",
    "revision": "293f701d788530c2a741b2ab548a363a"
  },
  {
    "url": "assets/js/17.9f37243e.js",
    "revision": "f522457b858a7f6f961bb17c606b2b69"
  },
  {
    "url": "assets/js/18.2080b324.js",
    "revision": "bd78fffb6651b6793e7992a62e5c7b80"
  },
  {
    "url": "assets/js/19.0e349a95.js",
    "revision": "10e755bd9777d718273bbf549ded6644"
  },
  {
    "url": "assets/js/20.8237e966.js",
    "revision": "d943af0934d1b24c2143eb85af51cd34"
  },
  {
    "url": "assets/js/21.c6d8f110.js",
    "revision": "f60a9776e7e50ab91ba8ec7c2d30c64f"
  },
  {
    "url": "assets/js/22.344fadfd.js",
    "revision": "1783e5ba38124ca5e3a9bb5c85e42243"
  },
  {
    "url": "assets/js/23.4f3e31a6.js",
    "revision": "83ac1a3d622206290e2938aa2c822262"
  },
  {
    "url": "assets/js/24.0e2b06c7.js",
    "revision": "eef437b59e0df1bffa38c9ec8fb63d0b"
  },
  {
    "url": "assets/js/25.94c00551.js",
    "revision": "2162455f46dd49112604ff712637872e"
  },
  {
    "url": "assets/js/26.310306f0.js",
    "revision": "260613eff7b901878598d0007448921a"
  },
  {
    "url": "assets/js/27.79601392.js",
    "revision": "a985d1821d65dcdde662444ef0de8e8a"
  },
  {
    "url": "assets/js/28.47c22f92.js",
    "revision": "3153129e089c90c8bb2adf4624e6b561"
  },
  {
    "url": "assets/js/29.b1bd7750.js",
    "revision": "ce0efb25dcbafb486daeab92d1ec37f3"
  },
  {
    "url": "assets/js/30.38f00638.js",
    "revision": "a8eebc6ae07158b9bc61ba0463885b6d"
  },
  {
    "url": "assets/js/31.590b1b8b.js",
    "revision": "326ec4f8213be242556f7b2fc7b37899"
  },
  {
    "url": "assets/js/32.0c725282.js",
    "revision": "12b46d2a097476769c5d8ada87ea9948"
  },
  {
    "url": "assets/js/33.09d19dd1.js",
    "revision": "fa3ab04f8c51e47624daa91a335441c2"
  },
  {
    "url": "assets/js/34.0e801d3e.js",
    "revision": "927fe5345d770a3b90a4ffd98d9c8851"
  },
  {
    "url": "assets/js/35.74bb0199.js",
    "revision": "c94402831980719b9bb243b5580900e0"
  },
  {
    "url": "assets/js/36.04d7c3b3.js",
    "revision": "be4a30f7c51f2dd2115c42a5f0645349"
  },
  {
    "url": "assets/js/37.ade36f53.js",
    "revision": "ec8a2aafed5dad16413ea997af793e6c"
  },
  {
    "url": "assets/js/38.87202c65.js",
    "revision": "9204f992dfd1c4c2f288dee78898b627"
  },
  {
    "url": "assets/js/39.4286cfbc.js",
    "revision": "f1c86fba2c2aa9c463bc8239bd21dd0c"
  },
  {
    "url": "assets/js/4.a6def9f6.js",
    "revision": "a79a993b6b423247f10b42555ae25bbb"
  },
  {
    "url": "assets/js/40.30e56ab4.js",
    "revision": "2a8455d28d489cfa361c5317bc743914"
  },
  {
    "url": "assets/js/5.bcaa49b5.js",
    "revision": "e3038b9e754c0ee7f3a9ad5ecbfcca55"
  },
  {
    "url": "assets/js/6.75ba9df9.js",
    "revision": "dabe572dcb0facf7a43b4c2b18e367e6"
  },
  {
    "url": "assets/js/7.ccd65777.js",
    "revision": "d83bb078da026e8f003d4733f9e20fb3"
  },
  {
    "url": "assets/js/8.0347770c.js",
    "revision": "56dd821da942d659116495ee9693fed5"
  },
  {
    "url": "assets/js/9.05cd4389.js",
    "revision": "0ae99503f2c9a90798cbb9ccabcc9d17"
  },
  {
    "url": "assets/js/app.a7ab45f1.js",
    "revision": "acdec5b7e457814ca0c9f13bb7359a3b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6b2e9e02.js",
    "revision": "9096370ea0c27bad7c45f85e37b9a1c3"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8a3a5f873d8159230e3a20668bfc7698"
  },
  {
    "url": "categories/index.html",
    "revision": "5db1d6c16c36e3b0ec24a4d5a8d17e66"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "b051add7782d287eed345626dcbc66c3"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "f38f25b9b9bdee574f199362bb4afd7c"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "c4536240a2a0bf725a3f2dce02373a85"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "e043528ba56992d4acc1b39df3e5a91c"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "101992b0287bb28af8e5b5d7ca91868c"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "f0f6252accd3b1aa48e7cea202e723b6"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "0f483f50c5c92242ec211d7e85ed2157"
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
    "revision": "0290c948af81235138768baee6af4c9c"
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
    "revision": "194e51931d74dbfcea83983c8a1da5ce"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9b2869c3328da9a43667b8754b052ea5"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "34bd4347c74a366b09552fde7c831d2f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7286da042d8606e055aba24b3dedd0cf"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "c46fafda6128f9114cfcd56ed8c36e5e"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "84dfd46bc47bb8f96f568288496f3c90"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "e6c2faad8b527f589227e721e1e4d2f3"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "b2cececf213d2e15ee7f68ade7c5f8fb"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "7d3960f6ad175666b87f02eb85501f5a"
  },
  {
    "url": "timeline/index.html",
    "revision": "01f5c6042caef4538c2a13c80d613215"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fed76bb05983c8cbb56cfe44d6301946"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "9d88909809c5d036ce2d610b5b059c8c"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "e5ed0f765b8ef666a3b6b28f38ae6456"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "33749d52465faa206aaca16cdc05be36"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "e07aaf617578174df64ffd78dcf080db"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "3d0961b6749662c9153b7df010b4bc7d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "c2f6fa4bc5b5129f008071ff07a490f6"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "5be7313f4c762ba27f9e689278ca6128"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "7ba2b51d5f991738d5b42682a7da6bce"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "66ea9c77dce455d82293c023a17e1acc"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "9a69d6566a94e6cbd33fb3d53335009a"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "1baa2e2756351442ad1b4e6e4f6d58ea"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "a95c4be174f3817fb77a2feeaea0b295"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "d9e9841829f62defc55373ff6924334a"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "fb6b81072a709a0a6c487c5662ea7e2a"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "cb854e3db0c359ef16bbf55113e0310a"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "bb3f65ac0797fe56a900984606539459"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "9b422c735c4993ad15129cbc0c73ff0f"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "fbad6b42eb594fe70cd96e07b80835f6"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "309da1fb02738ce66a26c4a29a890722"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "7affca421648d8b60840ba72c4faae35"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "5ad7cf7a52e55fde985a5dd94dca3a6d"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "c4e21b6b80d129840fe9f20a9a24e080"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "a964ca552635d4c5208d456d0512e537"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "4dafb409c34f244bad4b40a11d75409b"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "4d912008749c2eb6f2606252ba4b0c22"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "f79f6dbec4c339a0dc5d6700d836ad15"
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
