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
    "revision": "ebb90d8a320d18986f758a4f3b747f6d"
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
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.0633e9df.js",
    "revision": "90d05e28d773b681eec47ed2dfd352ba"
  },
  {
    "url": "assets/js/11.2766a780.js",
    "revision": "486befe7df05e3f63e7bb9d902df0c66"
  },
  {
    "url": "assets/js/12.37ca6fcc.js",
    "revision": "7b0304274174c52cfef3e8d8c7c62b1b"
  },
  {
    "url": "assets/js/13.31f8e16a.js",
    "revision": "c4319249f7db55e200f29f0b669bc1e3"
  },
  {
    "url": "assets/js/14.c8c85b8c.js",
    "revision": "4cdef56064da86ed27e01fb0f83324b3"
  },
  {
    "url": "assets/js/15.93bcfdca.js",
    "revision": "7ebaa65180cdf4b4b2060f603c9d335a"
  },
  {
    "url": "assets/js/16.ce50a5d9.js",
    "revision": "77c44bb432f6b022cb7e238e98a21d1f"
  },
  {
    "url": "assets/js/17.ffae8bd7.js",
    "revision": "80eff8f6ea412d9db55cddf8c06ee899"
  },
  {
    "url": "assets/js/18.f68654d0.js",
    "revision": "cb74ede6595a89317c8dc137bc52278d"
  },
  {
    "url": "assets/js/19.fb5ce86b.js",
    "revision": "dcb0bdd2b643ccc9e9f486e131a7e7fa"
  },
  {
    "url": "assets/js/20.2cfca496.js",
    "revision": "409e0bd291d75e74c140755c7f69e127"
  },
  {
    "url": "assets/js/21.7907e43b.js",
    "revision": "bc9953106a816430056be9bd2c0c66e4"
  },
  {
    "url": "assets/js/22.f7700eb5.js",
    "revision": "8d946d3df3e3d34d502be898dc7da4a6"
  },
  {
    "url": "assets/js/23.1a552549.js",
    "revision": "f22d707b8a8f7ca7e6435b85c00adbee"
  },
  {
    "url": "assets/js/24.f02c80dd.js",
    "revision": "5464a9d9ebaea2fa2bd3f54ed745419f"
  },
  {
    "url": "assets/js/25.036be89a.js",
    "revision": "12d9e0184efe496e1d0835b594407346"
  },
  {
    "url": "assets/js/26.f6ebacf6.js",
    "revision": "c76e3fa87bae3d6c1c7921afdf36c4c0"
  },
  {
    "url": "assets/js/27.dc9ae2be.js",
    "revision": "858a511aace2e2787659f938866d0311"
  },
  {
    "url": "assets/js/28.407a9801.js",
    "revision": "f5741f0e44e51dfb78b568afeea99c11"
  },
  {
    "url": "assets/js/29.997193bf.js",
    "revision": "a9cb0911c78eda3a5c3a940ed51834eb"
  },
  {
    "url": "assets/js/30.91a44288.js",
    "revision": "0cf03a1949a2f1810720070023d2af62"
  },
  {
    "url": "assets/js/31.4508a314.js",
    "revision": "35ce9bbeac1e58381f1a999a3ad556a9"
  },
  {
    "url": "assets/js/32.9ad5d9dc.js",
    "revision": "cff62324fd7c6413eae9259b4f922bae"
  },
  {
    "url": "assets/js/33.9531f63e.js",
    "revision": "d531ecd016a29e6327e2673754df8d0d"
  },
  {
    "url": "assets/js/34.e071671d.js",
    "revision": "40aa99a92eff489c1b51845fc68a50f5"
  },
  {
    "url": "assets/js/35.e3465a6a.js",
    "revision": "472882d58ae33bcc4057c91738f3aaf5"
  },
  {
    "url": "assets/js/36.f4fb836e.js",
    "revision": "ba4be9f93c6a6cc4247c281180a064a9"
  },
  {
    "url": "assets/js/37.1705a653.js",
    "revision": "c7805ec9bd350554a243db34a03afe7a"
  },
  {
    "url": "assets/js/4.cfbb689a.js",
    "revision": "93a1d9de70fd9cfebb0af351100663d6"
  },
  {
    "url": "assets/js/5.ae0d0531.js",
    "revision": "e6a9e6c0e66dfa394c805733536134b8"
  },
  {
    "url": "assets/js/6.3072fec6.js",
    "revision": "3d1e0dada796826d3fdecb2357d31345"
  },
  {
    "url": "assets/js/7.f8bf1ad7.js",
    "revision": "b9dcfb8996a7e947fb44fcebe6d2076e"
  },
  {
    "url": "assets/js/8.1eab0c2e.js",
    "revision": "e39b00ab6b578df9e98491cff79c2f76"
  },
  {
    "url": "assets/js/9.0c4022b4.js",
    "revision": "a44287a8bb40e1462afb0b1e9124250c"
  },
  {
    "url": "assets/js/app.12ec9701.js",
    "revision": "7f47a855a9802c39ff13577228fcb840"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.89f39b94.js",
    "revision": "4ac239e60b217fae49343dca7c51976f"
  },
  {
    "url": "categories/css/index.html",
    "revision": "3600b54d76f7be693112bd14754c858b"
  },
  {
    "url": "categories/index.html",
    "revision": "85bd44944e85920fac08fa67cb6e5849"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "a0f9f62356d1945d515a52d709661b0f"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "8c416784c4ca36e952623d488958224d"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "c93583a5448218f089d701071b915d24"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "b71910c0bf880219b28f71de33baf9f8"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "150d50b564614fcdbac4910297495623"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "5800429c1694b3cbb46883ff2e9e742b"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "13c2aede8bf98187771c9783f4a035bd"
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
    "revision": "e8733689de70f738b1f59537e055ffe5"
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
    "revision": "6c1b09fd621566e1ef63be4dcf759a8f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "4eb1c73fd71afbde9baa9404e8ddf43b"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "52d133f3a5a2a440b197b2fc07545393"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dfd2a5ecacebfcf702004fe3553e3fe2"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "b494a19676e7f1a88821888081e29011"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "6d55acfae9becaa0877414b85e1aa49b"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "00b3a3f85c4dbb8e626da15b4b881203"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "663794b553767bdba1225cad13b2c891"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "636e2b007d83af160afbed3ba7252d11"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a62222095b5fe2090787fb693ef104a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c1a41fe346a2d8323600f50c43e11b29"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "e79fbec88b41feeabf9028a817c16085"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "99d05215c16ceed8ffe2431bd6cb1184"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "40ebd648c803c69dd4334e34cda51e0e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "7492310ea81f57653be306a1a9d25f53"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "3aff5cdc8860209d22ff184a2b1a0b0a"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "6fecf5d3be556161161505eac5b0b328"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "80cf4cf21df4c100d0c45593fabe23e8"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "f4f56dc778e3eaf73204afcad860e937"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "3870dbe8e2eb3ea17325c7238e3823fe"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "cf0ed40ec0cce47ef216068bd6a1627a"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "1d1fea72a4f438233b98f1d36470e435"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "8f79ad9e38368745acfd01aedbc22d52"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "74a373a14c9163286c2902d451485b9a"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "f40e710631155d240401e48b04da5e90"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "87a1eb33404c3d8b189efa411157ca84"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "9b590dba7e860bf3b6468ec6c7cac4f0"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "4fcf379f64b31971435f75fbc149090f"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "9be2e5f3663bfa1ec2273e4d9b8db195"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "a9ca56e45c47e5c7ef8c7f8125d245df"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "c01357dfed302345a112da1f7cd75e8d"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "0451fa26d455d1eb81870088594c8f70"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "5b927307745c27bcbad6367b2524f1ed"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "8f56f0d4288d69fedd8e848bf7731af0"
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
