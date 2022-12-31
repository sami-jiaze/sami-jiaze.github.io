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
    "revision": "d9fba508e7ce9f40417c4598350a37a3"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1.0d57422a.png",
    "revision": "0d57422ac31db25ad0eb8a5373fa2e45"
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
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.f7bd2a74.js",
    "revision": "2db8a6596a1d6520cfb1a1251790517b"
  },
  {
    "url": "assets/js/11.57608e89.js",
    "revision": "e4d43fd2815dde074fe8d96d5a6447a7"
  },
  {
    "url": "assets/js/12.f041db54.js",
    "revision": "2c755eade78800a126cf4df2fc5b9014"
  },
  {
    "url": "assets/js/13.46408920.js",
    "revision": "406834b520cee59ff53123caa0dae626"
  },
  {
    "url": "assets/js/14.1c08a79c.js",
    "revision": "e3ff1ea4635af487419a368f2fc21573"
  },
  {
    "url": "assets/js/15.46dcfbfd.js",
    "revision": "e5505da96fe15150e510aaec6a16a421"
  },
  {
    "url": "assets/js/16.76038bbd.js",
    "revision": "7a36f0b3a5c08cbcd9e38bdf69a2df54"
  },
  {
    "url": "assets/js/17.5cf61e3d.js",
    "revision": "5559547501459b70ca403ec3ebb2f92a"
  },
  {
    "url": "assets/js/18.aa058ac2.js",
    "revision": "a462249d3f8c9147a3f2f976f1f146a9"
  },
  {
    "url": "assets/js/19.e9db9f7c.js",
    "revision": "3507f98186b7c43f2414d01005e22734"
  },
  {
    "url": "assets/js/20.8a60d3be.js",
    "revision": "fe0cedff70a37d28c8a75dd487e007cb"
  },
  {
    "url": "assets/js/21.44c9a3c7.js",
    "revision": "949fe2c8262e5b5280277c5273d6eec5"
  },
  {
    "url": "assets/js/22.dba7de55.js",
    "revision": "161779ebe32fa5f1802bc1a0773a5cc3"
  },
  {
    "url": "assets/js/23.109ab2c6.js",
    "revision": "811bd84613b3b27b4158562ae0f9fa79"
  },
  {
    "url": "assets/js/24.408cf697.js",
    "revision": "18962be90a95523d7b984a46d17d5b27"
  },
  {
    "url": "assets/js/25.869d5ce5.js",
    "revision": "dac1ccad1e3b6b331006be9af6086172"
  },
  {
    "url": "assets/js/26.a63cd91e.js",
    "revision": "1e5770329b9a16fef6842302aa9df2cf"
  },
  {
    "url": "assets/js/27.0cfcb059.js",
    "revision": "da91478c8c25a877683ff11f050eac3d"
  },
  {
    "url": "assets/js/28.4276f166.js",
    "revision": "d94938079026d8c587ae9c041b4addbd"
  },
  {
    "url": "assets/js/29.b4fe0550.js",
    "revision": "728674b663c3009cc99af0f0eca600fc"
  },
  {
    "url": "assets/js/30.1b764f38.js",
    "revision": "9ba8eb7e44facfa307baabcf920e2a0e"
  },
  {
    "url": "assets/js/4.f2ac2166.js",
    "revision": "9dcce3bff2bdf5d2138c1a9af7092dbb"
  },
  {
    "url": "assets/js/5.91722539.js",
    "revision": "72b7f1f440cd645dee307a13a2b5a7b7"
  },
  {
    "url": "assets/js/6.395dc286.js",
    "revision": "0d9cc561fcd0bd4af94d647af650ee2c"
  },
  {
    "url": "assets/js/7.5f1e4f55.js",
    "revision": "8ffa06fc9666e09b2a112d964790dd4b"
  },
  {
    "url": "assets/js/8.24c42a90.js",
    "revision": "0861692037bfb83856299b9a6e1638ab"
  },
  {
    "url": "assets/js/9.8957b948.js",
    "revision": "8f791d6773d3a07fc6646aa6ff8a61d1"
  },
  {
    "url": "assets/js/app.00ec2eac.js",
    "revision": "2d4f4cf958778f6391bb3158674b4bb2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.d9841f98.js",
    "revision": "d455e00946bf1cdbd38b9514ec2ec4d3"
  },
  {
    "url": "categories/css/index.html",
    "revision": "44eb087bb743388fe426431159940611"
  },
  {
    "url": "categories/index.html",
    "revision": "98da82dd817f9af3f973788f9437aecb"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "abd70f57ca1c4cec93d0e902f082b81c"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "da2e38895e95ddb7fb6542fa4130b8a5"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "93542efb4e1a3ac77376a1ef2ad91e57"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "109f02a80a350ce49751de1c04bf60c1"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "79eb66ec47988ab1529d19ddcd8af208"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "7421e594ac257add40922ef5d8a17ee3"
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
    "revision": "b9dd623cd0c8cba3eb32617c0fedee29"
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
    "revision": "e214c69ef16f877d50546cc5cdaf5144"
  },
  {
    "url": "tags/css/index.html",
    "revision": "1878773db6712779fbe8812d493df359"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "996aa6ec965a18006273eddc22a7e7ff"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dd56207b6d8123861e9fcd584af10886"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "d46441c0289d68b658c4be113c655763"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "590de4da9d09b19363d7ab1b7079e523"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "594c14a0575111766f6e64d83d9e963a"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "0057afd41a2dfe576b620f1aa6aaeee9"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d4f948f46b9d618d84330d535ed9f43"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b752c75de58833c3d77fb5c6815e346d"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "bc5ffdc598052dac8c7f391b28deaaa2"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "0c7e97c8cbe8e03452df609bf4c84d36"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "76b63588469500aa941dc5b1cb9f65ba"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "110f1ec102cc859e12afb2ff9af44845"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "dde92e185ef187ca2eadbaa9077dcd67"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "c208aee285376d28f85cfc9944175318"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "bb51fbd5d7a4e4eda12a4ec12a1f433c"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "c31c8766eacd068e4c18e20580455670"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "f43a37c4a3ab86577ecda9942f14283e"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "db332c0b45b14976fa1b6022bf701460"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "4d2d3236b7ce7acf2f7ef470822c4970"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "017ba5fbe01b46ad347b994fecd1b7fa"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "bf35140368c7ed75796f91c58b11a16a"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "4831e1b13a10bc8e76496799ecbd5da7"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "65ba3efa9a90e94dd3593fdf83dea9c1"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "96320dedf9f4e79af07ef192c826af20"
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
