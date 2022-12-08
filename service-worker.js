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
    "revision": "28ad3eb6de565f135616d152b481d1a4"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
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
    "url": "assets/js/1.9feb31e2.js",
    "revision": "83ca75b854df95267421e911959297b2"
  },
  {
    "url": "assets/js/10.9eed2d81.js",
    "revision": "f576aff2c95f3c9b1d6a743d1e4a5371"
  },
  {
    "url": "assets/js/11.25857c59.js",
    "revision": "c559d4c4d6c8a81dcc88efc694f62111"
  },
  {
    "url": "assets/js/12.10cf9ebd.js",
    "revision": "b0309e8e70d0c73b03324cb05d35a1ba"
  },
  {
    "url": "assets/js/13.91a969ec.js",
    "revision": "83ad60876b7a96cf052eea42c83b3003"
  },
  {
    "url": "assets/js/14.07873c40.js",
    "revision": "673d230f4df4d1048980597bc1ab0336"
  },
  {
    "url": "assets/js/15.c2427f94.js",
    "revision": "d988d28bb39a0dbd80c3a9a11754f3bf"
  },
  {
    "url": "assets/js/16.23702364.js",
    "revision": "e7fe5f9763ad8e2dfbb6e8d288927831"
  },
  {
    "url": "assets/js/17.3447d73e.js",
    "revision": "b3e271456b98c2aa305e9628802e8182"
  },
  {
    "url": "assets/js/18.a7021e16.js",
    "revision": "d5b3d6a8494426a0bc9b03d0e5b7a80e"
  },
  {
    "url": "assets/js/19.998502ef.js",
    "revision": "4dd037be92fb8aae3dc48569480a154b"
  },
  {
    "url": "assets/js/4.9d0d6ba7.js",
    "revision": "0d70b2fdd19580b48792cedef054b12c"
  },
  {
    "url": "assets/js/5.679d0864.js",
    "revision": "fbc6fa6ac63e5b13a7e6823359833e32"
  },
  {
    "url": "assets/js/6.4caf9ba6.js",
    "revision": "3acd157c5ed5f413562ce89fb225da52"
  },
  {
    "url": "assets/js/7.ce2d02fc.js",
    "revision": "9f6d08feebf54f55a3e4e2b22381a777"
  },
  {
    "url": "assets/js/8.97ee3234.js",
    "revision": "3ae0d4f00688505afd7a5aa242157cf1"
  },
  {
    "url": "assets/js/9.65561eae.js",
    "revision": "26992bede52ef6ba44f91b519bb07ac7"
  },
  {
    "url": "assets/js/app.9d385826.js",
    "revision": "4b5c6db24b71aed337d0863c23419a4c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.de0dc928.js",
    "revision": "89ec72d08570d64334c15e65eb7ebbab"
  },
  {
    "url": "categories/index.html",
    "revision": "d9a3eef99c1b06d8773961d3d14c4436"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "d03e050d59fdccac92b8cc66872eccfc"
  },
  {
    "url": "categories/xx/index.html",
    "revision": "bfbb0dbdb6df440c79087244b0d44db6"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "da185698d3f7c6b955631a7ad199b650"
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
    "revision": "24791054def66bcd2f522c7a2f8bffdb"
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
    "revision": "b7dfe107225db8cd794bceb196c27669"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a8c66a0f95a4536596fb5c2dc280c7a8"
  },
  {
    "url": "tags/xx/index.html",
    "revision": "0e7ab2d1d6d81c3d1a22ff4f0c84a694"
  },
  {
    "url": "tags/xxxx/index.html",
    "revision": "d4545078ec903d46b1b30cd3c4621ca7"
  },
  {
    "url": "timeline/index.html",
    "revision": "c151217802466d84c12ee8ee384dfba9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5922c6a3e333d856fc376074322b1668"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "6023a44ba316f84e3c4b91b8ae44acf3"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "fff0836289cfe9910743fd2cdc67f4eb"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "b7dd18521caf5ec117091cfb87ccc0ba"
  },
  {
    "url": "笔记整理/javascript/深拷贝与浅拷贝.html",
    "revision": "4400e529f8db521a1d4aed1b20f2178f"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "e04cef1a520a7d33e4f5ad0ea12e8d14"
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
