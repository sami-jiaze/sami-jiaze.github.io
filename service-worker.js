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
    "revision": "8521dfd34726a3ca268ee5b41902c556"
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
    "url": "assets/js/10.fbcfc90c.js",
    "revision": "f3129cca0fccc3b80ba0ad374218c3bd"
  },
  {
    "url": "assets/js/11.92ed3a07.js",
    "revision": "ebd8032f59272618c3a83589243987ce"
  },
  {
    "url": "assets/js/12.1484b5dc.js",
    "revision": "e0a75d957b4c86d67519fcb8ad4e1a2e"
  },
  {
    "url": "assets/js/13.808798f1.js",
    "revision": "4cfbb14803b1f101a465fe9fbecfb011"
  },
  {
    "url": "assets/js/14.49bddb85.js",
    "revision": "ecd22e84606b5d7738a6feaeb36f16f8"
  },
  {
    "url": "assets/js/15.c351925f.js",
    "revision": "8a0f77119dbd315d0f587b353e74fa3e"
  },
  {
    "url": "assets/js/16.304b4c62.js",
    "revision": "c26cd9f4027207f9aedb8853ba5965ef"
  },
  {
    "url": "assets/js/17.01da0934.js",
    "revision": "8148ee5fec40e0a30dbf77881e6b5a5d"
  },
  {
    "url": "assets/js/18.b932214d.js",
    "revision": "14c9436fe6426646adcc617b22b227c9"
  },
  {
    "url": "assets/js/19.cc1afc13.js",
    "revision": "0c56fab9c9904067e20e8a506151cb8f"
  },
  {
    "url": "assets/js/20.f9aa00cc.js",
    "revision": "a2bb59249bd04d8c4969ce4d7ef7c50d"
  },
  {
    "url": "assets/js/21.7048bc51.js",
    "revision": "8a3795ae0a59a7751388fbc5c8a1c076"
  },
  {
    "url": "assets/js/22.6d2933a1.js",
    "revision": "6bad699c2fe63d12300a65198cdb432f"
  },
  {
    "url": "assets/js/23.aa00d47e.js",
    "revision": "9e89f3702d39e50b7921cba84cee40fe"
  },
  {
    "url": "assets/js/24.d2941ea1.js",
    "revision": "864a7e8afb90f09b1877725731f62cdf"
  },
  {
    "url": "assets/js/25.403c6c7b.js",
    "revision": "b2d50f7e01edc425942dc7ecd6b89e30"
  },
  {
    "url": "assets/js/26.71c43e7b.js",
    "revision": "f85b13d9c197b9be752dec2e349a1945"
  },
  {
    "url": "assets/js/27.dc2ddac4.js",
    "revision": "08880716ee21e4215cb89629caf0db50"
  },
  {
    "url": "assets/js/28.7416b12d.js",
    "revision": "9e9b26499487de7652ec2a0c68d730fe"
  },
  {
    "url": "assets/js/29.4f911950.js",
    "revision": "8ad02c2bee50e545e16a7ea80fbf7fcc"
  },
  {
    "url": "assets/js/30.3c9b6087.js",
    "revision": "83d82d384107f7ce77b584f23998295e"
  },
  {
    "url": "assets/js/31.65bccb51.js",
    "revision": "d3fb939737edb9052fdfe715ed1ffb87"
  },
  {
    "url": "assets/js/32.6ce814d7.js",
    "revision": "bf9b75b9320be4a26fd7ad4a97abfc81"
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
    "url": "assets/js/app.3394ad27.js",
    "revision": "38232756c487b154c273c3370e09b48f"
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
    "revision": "e9fa87fa0706999af9bba0e4c92c83a6"
  },
  {
    "url": "categories/index.html",
    "revision": "48215beac2ed12ec3976bc809ee97532"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "0388fc06e4aff7f109a39d5409e6d822"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "86befda54402bec2a4fa1350e778a012"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "1a02c2a6db076bdec9efde530d7506dc"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "a22a5742a19885a9be0dedfdd91036c9"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "dd967ee159657a8face0e226085a5f5d"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "2f5c73f8ccd3420b348753a98f6c1983"
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
    "revision": "1f6d7876e68b39febbc48a175f451063"
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
    "revision": "eed2d9deb44c0fcbf42c40394dbb9c60"
  },
  {
    "url": "tags/css/index.html",
    "revision": "009d5c42bf0f1d9fee39d95dca3c4b29"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "162ed29a0aac544852369b86aacd7ee2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c5caae49acc30503f5b378ed890e42f0"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "ce0de5d577e5c30b453c071621bbadce"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "8e893b9a5194aef534ec527bd347c45a"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "c9997fd5033c3b9bd21fbbb0c9292624"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "b9954823621fe1c9404d4096b1395ca2"
  },
  {
    "url": "timeline/index.html",
    "revision": "28e345d892f4240fb745cea44a348501"
  },
  {
    "url": "生活分享/life.html",
    "revision": "250ddfe33fdc15bde232b3f2b28e4be6"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "908e17c7360d10ed62e3a4589679b092"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "3d0ece1c87eefcbe248ee3273dbc096c"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "5575716cc30cc915a48730b0c31efb85"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "feca14238ee001c366e26fb2c9a71f87"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "870405db3bc8dfe668d72df9b5f6e28a"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "0a900bf4cf89cd7011924a6baa1b350e"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "1b3ce7ecce84cdae1bad3c73e313187c"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "69fc50cfb9bdc908151413f96fbafb33"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "7067de4041aecdd8aa96c597952ea821"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "ced2475c620099089926bd8de27d2a35"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "daf8aff83c7ac4e8d8af7df91168a383"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "7f10233b22d7873fd523f39c27323404"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "a05532871be1c5a1697af283fc41d52d"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "e661e818c9fdd92da32f4d9a98ec2100"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "70e2c87a412e9768c4f0053650c1b4ef"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "3c0fadc4ce1a1208065ce202f9374d3b"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "c4177c9e40275011a52a482ceecc09c3"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "74c0fc41f4e40e8243baa78c8cea959f"
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
