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
    "revision": "b8d56de06e9d45f153c8679a00d1c6c6"
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
    "url": "assets/js/10.c36a4135.js",
    "revision": "72eb0aa2fd3e1433056ae6266cf154f8"
  },
  {
    "url": "assets/js/11.57608e89.js",
    "revision": "e4d43fd2815dde074fe8d96d5a6447a7"
  },
  {
    "url": "assets/js/12.33736636.js",
    "revision": "62d1be7bed42fcabf40e7ec8c6d4691a"
  },
  {
    "url": "assets/js/13.abf51b1b.js",
    "revision": "32b72418398b7b12143ab558ece7ca8b"
  },
  {
    "url": "assets/js/14.0efef3e5.js",
    "revision": "7b345434224178d6ceeeda2d5585f8db"
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
    "url": "assets/js/17.06106e44.js",
    "revision": "0b4421498b7cc2380f4c943e863565d3"
  },
  {
    "url": "assets/js/18.aa058ac2.js",
    "revision": "a462249d3f8c9147a3f2f976f1f146a9"
  },
  {
    "url": "assets/js/19.a80690ff.js",
    "revision": "f9a898b1c63b59c4797cb48a1f05e59a"
  },
  {
    "url": "assets/js/20.d8cfd8ed.js",
    "revision": "d88efa76520e01305a946c8bdeae81b7"
  },
  {
    "url": "assets/js/21.bfb3a483.js",
    "revision": "7c038fe59e195cedc441e5dda053dd80"
  },
  {
    "url": "assets/js/22.85d605e4.js",
    "revision": "4e7e5cbf9ae92ee36029d955a9c822e4"
  },
  {
    "url": "assets/js/23.3ba6f925.js",
    "revision": "8f0988dcaa990a1882a74e4fb9cab2da"
  },
  {
    "url": "assets/js/24.d26dea6f.js",
    "revision": "05b9c089c270b52fe6e701c9faff47f0"
  },
  {
    "url": "assets/js/25.34632822.js",
    "revision": "1d12f7c42f6df18384e8ac306d63c564"
  },
  {
    "url": "assets/js/26.ae19efc0.js",
    "revision": "0375663c3476e917f76c3a684087eb0a"
  },
  {
    "url": "assets/js/27.daf6109f.js",
    "revision": "784309c401954bfbf6b14cdef2416895"
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
    "url": "assets/js/app.0a4ab7ad.js",
    "revision": "5c7cf2a57140379089ecead94628f3f1"
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
    "revision": "7592cdb66e8c195c49046e6c5596ff11"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "fb32c8d0988e8293dba0786c74e0512b"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "cc37a39338d8307be05187e0cd81603f"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "2dc11b1a76683cb1d01733a21b05510c"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "00a82dfb5efa0653c07308a192ae844a"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a91581ada34668f0f4556ea00570f687"
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
    "revision": "9e83719d611b2f755bfdfa951b948b2c"
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
    "revision": "b8558c80b67eb36370cbf1ec93e06df4"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "aec387b3c9bec470afafdbad42e6171d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4102c0463c3d85f571222ca7db823a07"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "c07e6681237ee6a153069f2a2f19ad10"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "540727c2cb77f1c476da33f315bdfe62"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "6ffce43f61492319b054856946e3f116"
  },
  {
    "url": "timeline/index.html",
    "revision": "03948b01bb73cb1e5c58d23d6d6868be"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9b8118f392536ede31df43be3ad73332"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "081170cfc824d9c03ae1144421c863b5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "e9605a37a631095fb8548b82f60d32cf"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "7ee40a534d1768f809b249d608e915a2"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "bfd9872fec7b5dfb7f0e1983da459e16"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "4216e8304a36f464f4d770f59cc4a6b5"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "2c5a567a06c715ba1bb1eb7c3925e838"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "6b6292275e891c6389f16799c3432777"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "5356f0096319997aced22c03d5088b6c"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "2e300600a901b17dda37e65ebe51ac61"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "34197029004915079ded08e1047b1ef7"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "a7de3e7850bbe9e1d27fce2d47b4cbba"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "a279e2b89049570b31ff99cb10e7dd28"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "77b74bba0604ea2d64206f7153201085"
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
