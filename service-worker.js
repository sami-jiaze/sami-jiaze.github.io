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
    "revision": "0c4ad6df5ac96595ee675a5e78d22bf7"
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
    "url": "assets/js/16.43cde037.js",
    "revision": "0935f3c0c114dbe37f88cece901967dc"
  },
  {
    "url": "assets/js/17.a6614e4c.js",
    "revision": "4433a04229f91cd5791d9d454e882cdc"
  },
  {
    "url": "assets/js/18.e91152ee.js",
    "revision": "38e9cefeb4767d3e90d72796ab3ec8d0"
  },
  {
    "url": "assets/js/19.fb72fb62.js",
    "revision": "522d26c4b69df80610edcc1e674b70a9"
  },
  {
    "url": "assets/js/20.17f4bb61.js",
    "revision": "a205c9d7e105face36455138d5bb4da8"
  },
  {
    "url": "assets/js/21.8dd273f6.js",
    "revision": "911f6cbf30a3d04b7a9ff39c56ea10c4"
  },
  {
    "url": "assets/js/22.2cef91b3.js",
    "revision": "15643ebd6d40c8dc14750a500e2b98ae"
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
    "url": "assets/js/27.911fcf4d.js",
    "revision": "2a60009e88cfd19186855529649d16d9"
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
    "url": "assets/js/app.022ad489.js",
    "revision": "7d2f4aa3b795d44a3b63f2af8c9fc746"
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
    "revision": "5a938c4dafade3fa9077bce3c57885a3"
  },
  {
    "url": "categories/index.html",
    "revision": "46f15918fef4ef7c89f4b99558382017"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "a928569d793f07344fd115211386f122"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "a1d3ed1d1264feb90d1bb0e9b2f14099"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "bca05f2879e7073128ef45e8b0d0c535"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "5007ae8e500e5e73798dba01a8c7a3c1"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "0d6e7eb162d9612834da2050560b531d"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "16b6a8d8fd0b7ada592ad1e20e5592cf"
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
    "revision": "518a2aa3cbc160b1dbc5ace036e391ad"
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
    "revision": "dcde5ffb141a4d58fdb5949c71a03c8a"
  },
  {
    "url": "tags/css/index.html",
    "revision": "26c866b517fa81fc54bb9a368c1cb1ad"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "63ff64ed42b9706099c762d7afd24b56"
  },
  {
    "url": "tags/js/index.html",
    "revision": "be5263e39fb072268ba38fbb0c86e90e"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "4b98142a63b11aefebe1bfa71a8171d9"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "46441acf279a84503f1a66b523a7aa26"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "a5e3b9fd3d1fe2e41bb4ddaa59489a4b"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "67ef5e7ae15644d8471dc49467cf1b41"
  },
  {
    "url": "timeline/index.html",
    "revision": "cf2f618ea0529e9f4ccbe922eb0585ba"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f11551eb7d9bbe1d6a4ba5ed7292c689"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "4264d47a9af3541f99bc891f93f92c96"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "a7051821dc4664159a039fa43f723163"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "0b6a7d3c61e12513e310c40b28a50b98"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "08e6bed4b5069f64ac8598dd4c0fd34e"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "ec2efda5bdcb217342eb68b3767e70b4"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "0abd2d57c237698218f063cf3848a181"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "62dc87258de802eb38ae56e877cc3d15"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "a93f8c8785b61b4a6fc50d95eefabcf9"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "768767ade5547d5789b9a5e45e49b3de"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "a0163465bb608b354ca636ff775af741"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "add3c6c451c6ebf8ec11b861e5628b62"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "77736bb26a49dc8789bcc9b24220cdd8"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "82a78dd4b43ce3f6040d27b54ca3203f"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "656670aff77881f378f89366a4728f1a"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "730335b87887ff05480d572ee610089d"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "c59f9322bb6970a6871e3eb7b7d2607d"
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
