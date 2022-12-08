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
    "revision": "5943e54d34a46fef0792d485b4ffc3f6"
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
    "url": "assets/js/11.ab4062e4.js",
    "revision": "9bbc2a6c05503ff5d6b33e30130022ce"
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
    "url": "assets/js/14.b173351b.js",
    "revision": "dcab70a9e40e532ddc70a8839be4a647"
  },
  {
    "url": "assets/js/15.11bb42ab.js",
    "revision": "a5b6ccb948a5e8106ad9b10707675de1"
  },
  {
    "url": "assets/js/16.e89296a7.js",
    "revision": "972b17bbbecd24cdbbb89457fb683eeb"
  },
  {
    "url": "assets/js/17.754d720e.js",
    "revision": "88adaaab1f0cbe5f81e909de0024ed68"
  },
  {
    "url": "assets/js/18.bfc89cba.js",
    "revision": "68cbb4fb994c2cfe25fd358ffd7ed843"
  },
  {
    "url": "assets/js/19.7df34a89.js",
    "revision": "c6bddb5851142983c3c5eef0b6502a0c"
  },
  {
    "url": "assets/js/20.617b9f74.js",
    "revision": "1f31bb7a04f7ffb12210798c738c745e"
  },
  {
    "url": "assets/js/21.eca0e17d.js",
    "revision": "3c393ba03f0889047c5c471080b31244"
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
    "url": "assets/js/app.c691140b.js",
    "revision": "02b40948880fceabf0d3c5b31986ecb3"
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
    "revision": "887b319e86d18f8438b9d7c480b791b0"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "3ea3615ddeb3ed6302da9dcc628cf764"
  },
  {
    "url": "categories/xx/index.html",
    "revision": "802fc4bf4c31f7f21b1097fc03fdf7c3"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "c834aacdb7455de5d99f901b7322bae2"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "436ae383d024144bb4b550130486cb74"
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
    "revision": "f89db348c015eb3599267151b48de54d"
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
    "revision": "a02c5a265be9353d37855ef916c86b72"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f52a6bc2bfb49cf075a9c3bcad48f07c"
  },
  {
    "url": "tags/xx/index.html",
    "revision": "0c04990cc9437fdf474100021a38d1cf"
  },
  {
    "url": "tags/xxxx/index.html",
    "revision": "f10819b5c5e60bdaeb67287d82cefed7"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "d5df8a8eab1f05172cc470f9ca927c15"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "ad4f15977a8f4441404acf07307fdf62"
  },
  {
    "url": "timeline/index.html",
    "revision": "10c58623b13e7b2468cece712a71746c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "14d563a7b74ff72803f8ed98413ed336"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "5472132d191c302c808e80bfd7b6e07f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "281fc1b11de461e0d4ac420d51d7d126"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "a324cee9082367c4b73c0b864d144761"
  },
  {
    "url": "笔记整理/javascript/深拷贝与浅拷贝.html",
    "revision": "e583b70152b1f9bbdf56384fbe3f5e2a"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "91a0c62fd0272146c9b150fc47ebbddf"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "81d47433b67df9b6ce123621b17dcd99"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "6883b5793bcca85970a59b40148695c4"
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
