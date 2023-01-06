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
    "revision": "1b5b08147c29ff66322ba1382ce467c6"
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
    "url": "assets/js/11.bfdd3b43.js",
    "revision": "8fb6a3d1ff6805a62fabee490e756528"
  },
  {
    "url": "assets/js/12.a0c52423.js",
    "revision": "a5b21b5b029ec1fbc998e5a15f162f83"
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
    "url": "assets/js/15.1d19f156.js",
    "revision": "896b023c5348486ed50628997080cd42"
  },
  {
    "url": "assets/js/16.5e739933.js",
    "revision": "3a507451e6e5ffb5e25471a8c1f19721"
  },
  {
    "url": "assets/js/17.087102a5.js",
    "revision": "f0b1af5bc2db00f36ac163b18ab46e56"
  },
  {
    "url": "assets/js/18.1adf9575.js",
    "revision": "50b87306ab3ea55b1a636eb1aa8991ca"
  },
  {
    "url": "assets/js/19.42b883ae.js",
    "revision": "f217f01274d47199c889adf98c2723f0"
  },
  {
    "url": "assets/js/20.92a771d0.js",
    "revision": "2e07e4063ffc926639cb58cd0622e9c3"
  },
  {
    "url": "assets/js/21.8459d524.js",
    "revision": "d595d04e990d94a624642e7d548f9cad"
  },
  {
    "url": "assets/js/22.d3c7259a.js",
    "revision": "3cc538642b9b9093883ad8feeeeec685"
  },
  {
    "url": "assets/js/23.d8d4058a.js",
    "revision": "4fe54447b02b017fafe74a4cf62b7b2b"
  },
  {
    "url": "assets/js/24.a3d7ebd0.js",
    "revision": "71c9fef5846182b4919c8b8a61675577"
  },
  {
    "url": "assets/js/25.f21fb59d.js",
    "revision": "6e9136a8bda7ba0db016a5da8bdf0708"
  },
  {
    "url": "assets/js/26.9bc79fb4.js",
    "revision": "36cc59d07e424d143e23b743e0dd9fe9"
  },
  {
    "url": "assets/js/27.d345a033.js",
    "revision": "eadd099923677eae42b3b12cbfa429d1"
  },
  {
    "url": "assets/js/28.646875cb.js",
    "revision": "70e595d56683eaefcd341cb6def34c73"
  },
  {
    "url": "assets/js/29.3900ffd9.js",
    "revision": "5fa7a549914a50bfa98c54bbe2db5b3d"
  },
  {
    "url": "assets/js/30.257cadf2.js",
    "revision": "2d48780b572c50fad5e1fc17ae415414"
  },
  {
    "url": "assets/js/31.21f2bfb2.js",
    "revision": "a81b9cd6fc2c12e9c6b6ad4aa9361faf"
  },
  {
    "url": "assets/js/32.9b2b0a2d.js",
    "revision": "53d4235aea7173a7b456ee974c83b8fd"
  },
  {
    "url": "assets/js/33.84d47a32.js",
    "revision": "04981148d87f190bdb910bfd6ef9bcf4"
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
    "url": "assets/js/8.4aac53d6.js",
    "revision": "da6f613c88d8945c9dffb742353b8fc8"
  },
  {
    "url": "assets/js/9.4529c0a9.js",
    "revision": "708742b8f9889b9e82c37c8e3eb50bdd"
  },
  {
    "url": "assets/js/app.9da0339c.js",
    "revision": "a2a6b85f469d92891c417121403513f0"
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
    "revision": "ab6948bc77395f9077e7a58ab9e8149e"
  },
  {
    "url": "categories/index.html",
    "revision": "8051d59f78657900a2cfa3cb53ac51d2"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "50d32abad33762945d97d212291e86cb"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "2b57979a8091860d105461c28549e051"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "0fdaf5b18f1e68032876110d765462cc"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "7c059c1320d18c30173658e9c49ca84b"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "f037720ac3d87e67c9135e41fac2cbde"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a5f473d781fd39801894465e69b31594"
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
    "revision": "b59ee5662bade1fe1d45e799817e15d8"
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
    "revision": "9e2e17741271b65875adf7f8bbd49b7d"
  },
  {
    "url": "tags/css/index.html",
    "revision": "92b25f0d5814fa2e3fd2958e11968100"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "b8e639b264c32234f84478f111b4d1b1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "20b0c2d90d20fe516ebca7da643f92fb"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "18c64016d8bcbc6fd45e63a44c3e6796"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "2825f9773f1fb9d51365d60a5644b5d5"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "37265eedec47edb3f2b115eac72665ee"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "08ace94f3e59bc4a03c72fbdcbc99915"
  },
  {
    "url": "timeline/index.html",
    "revision": "9cdfff062f581cf4a6c32a20a5f24d79"
  },
  {
    "url": "生活分享/life.html",
    "revision": "465b7e482cd528f39c0f2e871665f951"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "20ecd33a014575e9d4656d3f921fb19f"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "ec0314249dd98af588fa88330a5eec8e"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "f5efe0db15db01dca77e6a054f9c9c1d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "c70a15d45d52f29749fc16fa298fc99c"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "0904ded6b1583d583742928a33597f2f"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "347f32b4afc717c7aa60f1a9d3dd59f1"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "ef8b1b349c0e7a2ab9e4854d6dabbe67"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "ed9fc885bcd15e4b7d75879178f95802"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "ccdf8d77064b496966d047bb5c011703"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "22e14cff0cb002ded68d608780da0f15"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "088ac1869d1b8a03a1c618bcad82cce3"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "d65e686139552f7dfdb398e838891327"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "3dc38448c6a2d19a21b4cb6fc413e39d"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "43a9ce6ba61873cb961a3d0606806b04"
  },
  {
    "url": "笔记整理/框架/vue.html",
    "revision": "6adb12d4f7558ace188c0271fdf64a88"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "8dabc756dcf63344cd6f227f01b8637d"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "44aeff2846fb3b28b5e1d444b6eeaa8e"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程与线程.html",
    "revision": "87da597108fe498aef4b1c92a41041d4"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "52399492d723e78895f3c66510b31b86"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "521abf2284bd21b76400dcf475a86909"
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
