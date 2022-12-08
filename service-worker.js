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
    "revision": "8d67bb17748a70131af320faee5246f2"
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
    "url": "assets/js/12.555dea67.js",
    "revision": "2e467128d0e4f3c308ec44d0cacc639b"
  },
  {
    "url": "assets/js/13.df421d57.js",
    "revision": "220fbef0d499250eb67791559d7277a8"
  },
  {
    "url": "assets/js/14.17e5e417.js",
    "revision": "e0fc3d885509c14f0da5b7fbf0440a93"
  },
  {
    "url": "assets/js/15.0c646448.js",
    "revision": "ebe6a80e9e9777d29404de62c9823f5d"
  },
  {
    "url": "assets/js/16.27d97cdb.js",
    "revision": "118e12964e4b72734b3e1f0ed9bd912a"
  },
  {
    "url": "assets/js/17.f67bebb7.js",
    "revision": "88e6ed8da19f416d72ada5501604c643"
  },
  {
    "url": "assets/js/18.ab98e512.js",
    "revision": "c537ebc9db4e13652918d2857ee40534"
  },
  {
    "url": "assets/js/19.8d0283c7.js",
    "revision": "a1da3a8067a1b9e87a9d005751675bcc"
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
    "url": "assets/js/app.b5e17750.js",
    "revision": "6b568fa3532f8390acd5b9b28340dc8b"
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
    "revision": "76a0bcd01cccc7b44772729e5a8e15b6"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "54dcc45572ff763bfb79079ff93b1f9d"
  },
  {
    "url": "categories/xx/index.html",
    "revision": "86f778f490ba489b74fded59dea7bbc8"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "aaa77ad78ab423a33dc8cfb914df0af5"
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
    "revision": "40c9c9bdcafa43cc00cb581e9c540e71"
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
    "revision": "843ee4530700c5fd9799f3c760fac68f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bdfc69eb6afc73f16bb892b575387330"
  },
  {
    "url": "tags/xx/index.html",
    "revision": "2d48b431c5b6f81061fead5852b67e39"
  },
  {
    "url": "tags/xxxx/index.html",
    "revision": "0a0a596afa71614ac49f493d3d05662f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e10f442459450d8c3176eb036fb65fc8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dce1987171b90c764ca3d8b02eaae859"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "3c0b3508f06f4fa5018a070fc9763da1"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "d85b1a98c653022e0b7ecf18e404663e"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "7649b8b7eea47524eed19ebecf353eb0"
  },
  {
    "url": "笔记整理/javascript/深拷贝与浅拷贝.html",
    "revision": "cdbcf958902220acfe8b24ab01cb2e33"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "883a815f54aca826d5b9b934c6942a9e"
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
