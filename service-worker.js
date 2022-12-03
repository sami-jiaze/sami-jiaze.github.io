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
    "revision": "4aede054e74748680d93f2059c113a0e"
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
    "url": "assets/js/11.ef843cdd.js",
    "revision": "af465ef06a6db609e5dc6e7056440aad"
  },
  {
    "url": "assets/js/12.10cf9ebd.js",
    "revision": "b0309e8e70d0c73b03324cb05d35a1ba"
  },
  {
    "url": "assets/js/13.347cc639.js",
    "revision": "8b52475951db68f495674794f4a9b581"
  },
  {
    "url": "assets/js/14.338f7eb3.js",
    "revision": "dd2351f523e39dbe483d4261350e3804"
  },
  {
    "url": "assets/js/15.9a445065.js",
    "revision": "491abaf1c137c6697f120f3949736130"
  },
  {
    "url": "assets/js/16.64fcc8ff.js",
    "revision": "5e23dc36576711f55454749f89c4e417"
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
    "url": "assets/js/app.ca47a121.js",
    "revision": "71844450e31984618da9d04e476a51e1"
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
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "d3fa8058e6e72d1e2eaf4fe9a03c15b5"
  },
  {
    "url": "categories/js/index.html",
    "revision": "0d292d3865d199203e582403489db807"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "31c22065c4402df41d5a81f99cb7bec7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a364dd22b639a1e2d6a9882f1329bed5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "712166964094b36893c79b64a2aa9e8f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
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
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1df1337ca13d64b42ccd9b47757e5ede"
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
    "revision": "302fcbf26d22e3adb98c2a107fa5d759"
  },
  {
    "url": "tags/Js/index.html",
    "revision": "355245a951b70f425a65cdeb510c67ac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0dc2d52dac8e88989cda016cc868a2de"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "84031cc92ecced2be79dfce87cb3276b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9b6bfef16a732324bc072aca7b16af3f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "464e1531bb4a1fa67a3bd2e7f259aa17"
  },
  {
    "url": "timeline/index.html",
    "revision": "4faf2d1f5e6c05eaabe1e2fc1216ffc4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/javascript/js.html",
    "revision": "4728440068cf3cfa48eca7ad653870c6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "54a125814946f0b88366c20a864b0566"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ceb1bfe485d8b2888e8e68a40ca949cd"
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
