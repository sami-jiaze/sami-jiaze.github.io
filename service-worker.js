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
    "revision": "dc1d1c33d75cb94ccab7cb09d22c31a9"
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
    "url": "assets/img/image-20230105091248535.12654b44.png",
    "revision": "12654b448e039390ba5e46606088a2fd"
  },
  {
    "url": "assets/img/image-20230105093712483.c9fe3f25.png",
    "revision": "c9fe3f25fd73ac49c17924b4793a9e79"
  },
  {
    "url": "assets/img/image-20230105101013923.e56d477e.png",
    "revision": "e56d477efd093ce1a02c404196aabf98"
  },
  {
    "url": "assets/img/image-20230105222852966.948a4cce.png",
    "revision": "948a4cced46858d6fa5ab89051491e10"
  },
  {
    "url": "assets/img/image-20230105223240058.df314bf2.png",
    "revision": "df314bf2be0f5fc9ff86bac4991e9738"
  },
  {
    "url": "assets/img/image-20230105224211679.11187684.png",
    "revision": "111876845d1fd135373271a2bc6058bf"
  },
  {
    "url": "assets/img/image-20230105230346428.3117613d.png",
    "revision": "3117613df77df0eb32de69f3aa518f42"
  },
  {
    "url": "assets/img/image-20230105232202119.9ea75625.png",
    "revision": "9ea75625cbc1dc0bdf5ea5fe7daec765"
  },
  {
    "url": "assets/img/image-20230105232520734.ab07045f.png",
    "revision": "ab07045f5d8f5a5bb660ee2d2042c19c"
  },
  {
    "url": "assets/img/image-20230106134431941.8c8032a2.png",
    "revision": "8c8032a228a66f885df761976470253a"
  },
  {
    "url": "assets/js/1.d44b9672.js",
    "revision": "c6a7c0c3038daa9d2a8fe90834db588f"
  },
  {
    "url": "assets/js/10.8c16fc26.js",
    "revision": "2544e1df73bf35c5bf5be42cb68fc235"
  },
  {
    "url": "assets/js/11.33d253e6.js",
    "revision": "bed68355e08861d463558e3b1dd82c68"
  },
  {
    "url": "assets/js/12.474f7d1e.js",
    "revision": "348129c63a6f0da56ddb93c5bdc10846"
  },
  {
    "url": "assets/js/13.11dad1e0.js",
    "revision": "79414fa1cffd6971ff3c92b3f0df5c28"
  },
  {
    "url": "assets/js/14.2ebad4da.js",
    "revision": "f1f1ad46ed4ba978b1cae434951523aa"
  },
  {
    "url": "assets/js/15.071fcf95.js",
    "revision": "92223c06318f0f1f275a78dc3c5deb5f"
  },
  {
    "url": "assets/js/16.88a6d892.js",
    "revision": "aa2835dbc1a20fa5846f8908c7b0eb35"
  },
  {
    "url": "assets/js/17.36e43e14.js",
    "revision": "1e2a62be970053a37be56f3202665e21"
  },
  {
    "url": "assets/js/18.1adf9575.js",
    "revision": "50b87306ab3ea55b1a636eb1aa8991ca"
  },
  {
    "url": "assets/js/19.515836af.js",
    "revision": "9b292d06f0f0ad29d40e976b0e74bc19"
  },
  {
    "url": "assets/js/20.30c13f75.js",
    "revision": "3f53dfc3f37b0afd136eb63519bad016"
  },
  {
    "url": "assets/js/21.752839cd.js",
    "revision": "8d5eaced71c8e5c7b68dc54babfd5dfe"
  },
  {
    "url": "assets/js/22.bf94f4b0.js",
    "revision": "38edaf8e06d42d01cbea9cbc596a6865"
  },
  {
    "url": "assets/js/23.e0175cf4.js",
    "revision": "639df232718c2ffbd684aa498ff15669"
  },
  {
    "url": "assets/js/24.cdafaf15.js",
    "revision": "92289944d4d9ec11e005b835524bd4ae"
  },
  {
    "url": "assets/js/25.b0ff975c.js",
    "revision": "764ae7f535f790d3411e076776990b4b"
  },
  {
    "url": "assets/js/26.3cb998c8.js",
    "revision": "d510bbb5aa351b08635c245a1a785b37"
  },
  {
    "url": "assets/js/27.859ebeea.js",
    "revision": "c99e7652c8d664e776de55b173a2f956"
  },
  {
    "url": "assets/js/28.0adf7e63.js",
    "revision": "a6d1fe7967aa97d966c344eb57c2fe92"
  },
  {
    "url": "assets/js/29.33bc75d7.js",
    "revision": "9bd2e5f1568230d929431171df66983e"
  },
  {
    "url": "assets/js/30.15a5f6fc.js",
    "revision": "ae7e46461d712925f5d208bae8c35773"
  },
  {
    "url": "assets/js/31.cb65be03.js",
    "revision": "b85353057492e59a1832a37af52029b0"
  },
  {
    "url": "assets/js/32.9b2b0a2d.js",
    "revision": "53d4235aea7173a7b456ee974c83b8fd"
  },
  {
    "url": "assets/js/33.675bd207.js",
    "revision": "feb0826b66afdd0a2328db942e102c7a"
  },
  {
    "url": "assets/js/34.4daad2c4.js",
    "revision": "aed4ede35b5305aa935173392b07678f"
  },
  {
    "url": "assets/js/4.752ae305.js",
    "revision": "b14bbd4f2417961efed361a7a03b2e2b"
  },
  {
    "url": "assets/js/5.97adc9fa.js",
    "revision": "a9be981d6268ae76f69076b6cbfbc0be"
  },
  {
    "url": "assets/js/6.29a9eb91.js",
    "revision": "59eb27301efc3a2378cfbed4f5eabaf8"
  },
  {
    "url": "assets/js/7.dff47dc9.js",
    "revision": "5d19e41a69d0e26c5d3a7187e31549bf"
  },
  {
    "url": "assets/js/8.48be520a.js",
    "revision": "9e51af006b807584d8b9c6c299aec816"
  },
  {
    "url": "assets/js/9.4529c0a9.js",
    "revision": "708742b8f9889b9e82c37c8e3eb50bdd"
  },
  {
    "url": "assets/js/app.d514cd20.js",
    "revision": "0fc00b3f77df1fdaa1c5cf3659dba023"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.770d48d9.js",
    "revision": "a2f160947f2b69bc323114fdedc6e134"
  },
  {
    "url": "categories/css/index.html",
    "revision": "dda9ed5b2593dcc561f8f3c8d8c65369"
  },
  {
    "url": "categories/index.html",
    "revision": "0f21c26f7312ef4b69112d34ee40c2bd"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "f415540e8dd934547e6f0816f8ad6c1f"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "0081e5de773e692b3fdef4aea2007fc5"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "1a94d1030535452df651641a78a134a4"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "d304d1a828207d47dd679fbf175445ac"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "234e07c74096643e2092c80e44485d58"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "217eca55b4a636382f194f610437a96c"
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
    "revision": "ab3ca4eff507cb61c0f0019709b5f5a5"
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
    "revision": "14dc7d1e49bdef1bf780a06eb8871cb3"
  },
  {
    "url": "tags/css/index.html",
    "revision": "5d2699dbb62f84dccecb5854a5dc7124"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "bb4896e53f69fa61438d45424328cf29"
  },
  {
    "url": "tags/js/index.html",
    "revision": "48e86b5218308b920a50dc5b23f7ba64"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "8ba38c0fd8b29d4f4e0472c7b84d262d"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "690e8d8ec5ef6bf7c8a606d8dd331c7d"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "e380fb565d90ae6cf934c6f41abc22ec"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "978e08da23ab0879b269dfe160b8b95a"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd053872810debf4faa12c110bb1a942"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dbe171239327b4bb8b1385ac33cc71d1"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "8e9aba4afb989878dfc4b3299589fd51"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "2806e9c417804bf7845851c5397de5e1"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "848ca80be62177251eb5807363ccdef5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "471d26057100a4a41ec0f974a9f2d572"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "56aace8228d994cc64d06344370f41af"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "47559271cee0a77494cb3fdeeb5670a5"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "efcb77e2395560371d78c0a7c8487611"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "460902d56b854386ee768734eda1f2bc"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "2e88b840f61a29e15ef9f7355d2eac73"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "ee8c792531f505cccfdd537c72971514"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "e06869583efc4a300d911b9b3a4ec1b3"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "67dc41dca8bfbf93288db61e544f887f"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "43917c27c7988c9c2bd2c8220c105ba0"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "52de9b9c9b093e7d2f8100f64f0c2f71"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "4bca3e8bd01ea390f32347bca03669ff"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "b689fed2b7f14f10842bc3ca15598ada"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "533181ec8d2432a08c604c0210e4292d"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "729e910bc563a9ccd6fbede6f495c35d"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "f243b366f644e61231452563707d398f"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "0bca39ec7d7f703303f55e88c7758406"
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
