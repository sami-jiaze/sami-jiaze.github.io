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
    "revision": "248ee71aba8b15ad82f6d2d4e4565e8a"
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
    "url": "assets/js/10.53d0f185.js",
    "revision": "45f24e1a63e9dd581830a899cd641c3f"
  },
  {
    "url": "assets/js/11.57608e89.js",
    "revision": "e4d43fd2815dde074fe8d96d5a6447a7"
  },
  {
    "url": "assets/js/12.8fe37188.js",
    "revision": "50843667fbf996cddadbfb73416e813c"
  },
  {
    "url": "assets/js/13.ef669d42.js",
    "revision": "041fd4c59850da0a94dfc7983036ddf3"
  },
  {
    "url": "assets/js/14.fc4b262d.js",
    "revision": "1da56f272e7fd066197065e3821fe5bb"
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
    "url": "assets/js/17.a4eaf506.js",
    "revision": "c0ce8471f4c5356b80d9c5b5633d625e"
  },
  {
    "url": "assets/js/18.176b4547.js",
    "revision": "82ba1650d808394edc1fedb28a3c5995"
  },
  {
    "url": "assets/js/19.5bbcc094.js",
    "revision": "2fd2351b240b2c993e0a1d2436425668"
  },
  {
    "url": "assets/js/20.739dc69b.js",
    "revision": "c02440748c311d4eb23535384aabfaf1"
  },
  {
    "url": "assets/js/21.458ea290.js",
    "revision": "830c11a19945c22c611a57ef2b62a774"
  },
  {
    "url": "assets/js/22.91e4a90e.js",
    "revision": "9bdc5f4de7657287533e2199aea8eeef"
  },
  {
    "url": "assets/js/23.2c174c6f.js",
    "revision": "ea0d290e474274ef58629ef326c61e2c"
  },
  {
    "url": "assets/js/24.eec8be3f.js",
    "revision": "db5a77dc3b0b078f6f5041819332bb97"
  },
  {
    "url": "assets/js/25.55417bc2.js",
    "revision": "0711a3f4ed6c61eef3297ea7cc14b035"
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
    "url": "assets/js/app.a3595c31.js",
    "revision": "cd0b65ed80b7bb2437cb9c8a272bcad6"
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
    "url": "categories/index.html",
    "revision": "283b5a1988db191341168d4d8429be9d"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "915abb30ca257b1a60e43cad41894cfa"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "4277b9e28a77f5f20ea24cbb6a62c61c"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "3029012f4b7197cb72075dd97d620b66"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "a3f06a3901261df1b95cc42b315fbf7b"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "c3792cc662f86bbb771ae2dc4639c159"
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
    "revision": "2804da7c1f8e559d4ecb41ade47e0cdd"
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
    "revision": "192a2729d10a135b7c4d755b4be0887d"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "a7bba569dae064d80323463df3cd1964"
  },
  {
    "url": "tags/js/index.html",
    "revision": "091273f55e53f9766080f3d9243e1dca"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "e2f21ca55b7c8f1b9e0bc4a198112c85"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "12601dff7b3adb8a79e7b41e2b81362f"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "bb0e824ff8a402798f6907e346d72f27"
  },
  {
    "url": "timeline/index.html",
    "revision": "6fd66067573c951f75ebbed1b6b6ff5d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "540c02070ebbdb184f86618ef75c3cb2"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "6f78faf423d64db1373b0824a2d6596f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "ab2c0f45601c013c9dd02f223126a0e6"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "d1df54ebfcf094654ec3973033fcd956"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "c0f99bfdbf0efd7f3d96c58dfaff5562"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "7dd1d8e68ecc06c2c61f097c02f47d08"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "63351235d16c08e2c796035aa9215f07"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "8bf16a9682ef0f01f0712cbf71fe0970"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "3a589789c73fa123c1baae6b6dbe34e4"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "5a2f1808d382ffbbb64ccb8b1b816f2c"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "2a9b167e591fbf555e06d71f1c2076b0"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "9f2380155692eb372dd3e04f99780870"
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
