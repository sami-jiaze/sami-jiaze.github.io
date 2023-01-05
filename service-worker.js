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
    "revision": "0aeef65e7b82886958744f388ed947ee"
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
    "url": "assets/js/10.658f8f52.js",
    "revision": "1470095bc5058e7cf9989b4ac41edd26"
  },
  {
    "url": "assets/js/11.c626d304.js",
    "revision": "8cdca996dc0079509a58cbd52bc7da76"
  },
  {
    "url": "assets/js/12.1484b5dc.js",
    "revision": "e0a75d957b4c86d67519fcb8ad4e1a2e"
  },
  {
    "url": "assets/js/13.7f35502a.js",
    "revision": "6190c33e461be10e5a2e5f24bca925c1"
  },
  {
    "url": "assets/js/14.1b0a4cb1.js",
    "revision": "8f2bbd069c2a5811d5707921aa611966"
  },
  {
    "url": "assets/js/15.9472b43c.js",
    "revision": "6b709f45350e86bb93b27d560728b161"
  },
  {
    "url": "assets/js/16.a5430b5a.js",
    "revision": "d04ff14a61237c098db07f55fe3dace1"
  },
  {
    "url": "assets/js/17.cec3c3f9.js",
    "revision": "5226ad5d76efa47f60523f982acaf37b"
  },
  {
    "url": "assets/js/18.27327319.js",
    "revision": "e0f67d90bf7823b86a2caf46400d593f"
  },
  {
    "url": "assets/js/19.6dd6222e.js",
    "revision": "3f56d9fc29245a6ab0eeb4c3d1666f4e"
  },
  {
    "url": "assets/js/20.6c021f66.js",
    "revision": "9d2531a327bbc18c0b2bf7f498f60354"
  },
  {
    "url": "assets/js/21.448c6bec.js",
    "revision": "4235433af34d257c2946d062bba2c84f"
  },
  {
    "url": "assets/js/22.e5d766ea.js",
    "revision": "05cd010792e92ca8c9f6f31c569bf2d0"
  },
  {
    "url": "assets/js/23.e1ee1509.js",
    "revision": "a79986b0b1447eccf91cf22aee1c0bbe"
  },
  {
    "url": "assets/js/24.6f4db301.js",
    "revision": "c56fafa82dcaef1752d9ffc03f712efc"
  },
  {
    "url": "assets/js/25.2c1a0728.js",
    "revision": "7bb36b026be6b2c1aca5bb0809c27efe"
  },
  {
    "url": "assets/js/26.c2ae4678.js",
    "revision": "16986a89f00e727e08a1f062e1b88279"
  },
  {
    "url": "assets/js/27.4296987b.js",
    "revision": "2cde2f0c9b0af5600b17297e255d041e"
  },
  {
    "url": "assets/js/28.1d90b4c3.js",
    "revision": "181a49dc36cf35552652ec3179d2d416"
  },
  {
    "url": "assets/js/29.8c28be0e.js",
    "revision": "fea5d101495266f560bd6df4ed1b53dc"
  },
  {
    "url": "assets/js/30.b3cd5a93.js",
    "revision": "c1fa758d52c694655f64c71fc2cff669"
  },
  {
    "url": "assets/js/31.fe69de05.js",
    "revision": "fc1e255176c0cc2ecfe0ea69a663a9d0"
  },
  {
    "url": "assets/js/32.b05f450e.js",
    "revision": "38f005b1cb9a1f8df7ad18527065eaca"
  },
  {
    "url": "assets/js/33.ad91ce26.js",
    "revision": "3e1562f2238959990494c7a79c76cfbc"
  },
  {
    "url": "assets/js/34.1f04c029.js",
    "revision": "d5b4af0be5330a98bdfae8cc73f311de"
  },
  {
    "url": "assets/js/4.fc57c861.js",
    "revision": "df984f6b2d682202157e4ba0578f426d"
  },
  {
    "url": "assets/js/5.788a3e92.js",
    "revision": "c9b62c2e111240075f32bbafd19b58de"
  },
  {
    "url": "assets/js/6.494da9f2.js",
    "revision": "5f4199f09e599b92f394a3d0a64c00b0"
  },
  {
    "url": "assets/js/7.74801de0.js",
    "revision": "076002155a50b3b5fd2eb333c0af320f"
  },
  {
    "url": "assets/js/8.b63a6582.js",
    "revision": "aea416eeae91675c0e51b67e2abe763c"
  },
  {
    "url": "assets/js/9.15a2817f.js",
    "revision": "1ceef6b177be85c98c710c0f05003f70"
  },
  {
    "url": "assets/js/app.d800d66e.js",
    "revision": "d514e56c82190d46c162f320bef216d8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.831f3881.js",
    "revision": "6b6cbfa94637849bcf84abeeb8275031"
  },
  {
    "url": "categories/css/index.html",
    "revision": "55a4d76279278ab3db04a79123e6995b"
  },
  {
    "url": "categories/index.html",
    "revision": "8e08d91ebb93ff2873ec74a0d76f928d"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "8d831f7d8b61876d66061ad518fab73d"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "6012c42375f9c318ac5fc4a360b65636"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "4caa61154859a75560e4d197caf7bd53"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "96e11351980ffa9bb1c51d8cea86a6b1"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "6bb592e7e83bc8ad004288039bfc314d"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "1a495d79da5f56c8080af4ce4453e91b"
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
    "revision": "3656f98151c833ed7f2931564f66f431"
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
    "revision": "94d79354945d2325bbb656f200ba7b77"
  },
  {
    "url": "tags/css/index.html",
    "revision": "7f814bf6428ba5c431ec301bc0581aa9"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "07fb8a1e24897a277555bff69e2ebc1f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e13588db5d5d1aace66022c3ecb94a02"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "82dcc75dd2c12d946b220b814a92610e"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "8c0ac18132154f6dd74d7c0150b22230"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "afeff21810861f479d38a1dc0e814cee"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "e1f7787ecb2f2addbcd11dae8495a1d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d181977637e32dc4bb66e5fd42cfb5bf"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8e221552233c01b3849966ac31d04519"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "ead73c5c1ef86f5c38a99cf938cf73fd"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "6bcdddd5aa3f8b55b02db07857849dad"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "454cd87efa469e6fa91e55386aee3456"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "f9280920b84d501443720b90c9b68d9d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "185916e62682b1dd4984a49fb9145258"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "5d026eb067e45d3f30e7814b08c76983"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "dfd7cf7bd856a45ebb95f7441d5700cd"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "46e825ca9ab9b348bb5d585cae70eebb"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "78971b6110f05af9501c1a717e94fe87"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "57fb9d7a4a27d2abc550bd961cdbfc97"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "ce6a8b142839bcbc61757933364d95a6"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "bc956963283060540febba6f1173d73f"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "9d27dd3c8721fb9ea93f5cd818b3cfd1"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "b205bd6656990fd877bac0773c7c20ad"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "17cf76fbe9302bb3006510d03b377ae1"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "a3d7b3c16178621d19504dbd7c4fc2b9"
  },
  {
    "url": "笔记整理/浏览器与计网/TCPIP.html",
    "revision": "6c01a1cab104bde2b0237333aa20d78e"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "6ddda192de6bea867809e4814482e0b1"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "4188dd18e3293282d3e58db169370b16"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "5519a6b45d16d8da719738ad267f71a2"
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
