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
    "revision": "ce080de084574944a33a5521b45605b1"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/02.bdcbcf9f.png",
    "revision": "bdcbcf9fc11817b8a60d7025f0fb26b6"
  },
  {
    "url": "assets/img/1.0d57422a.png",
    "revision": "0d57422ac31db25ad0eb8a5373fa2e45"
  },
  {
    "url": "assets/img/1418466-20180810112625596-2103906128.7bd76d30.png",
    "revision": "7bd76d308b8aedb3cb12f7e637b97bd8"
  },
  {
    "url": "assets/img/1418466-20180812200309137-101174843.4405c74e.png",
    "revision": "4405c74e7d6c10d9e3b039fce4bbc987"
  },
  {
    "url": "assets/img/18url.7fbc74a2.png",
    "revision": "7fbc74a25248ddf018415e7002d1cba8"
  },
  {
    "url": "assets/img/5.46a41bc8.png",
    "revision": "46a41bc84bb4de7b5c42429157062cbe"
  },
  {
    "url": "assets/img/6.3dc161a0.png",
    "revision": "3dc161a0cacc5da6d73f48119bff4500"
  },
  {
    "url": "assets/img/7.abb7acee.png",
    "revision": "abb7aceef3fc2812f814e57df1587f5d"
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
    "url": "assets/img/image-20221101200851217.25b5dfb3.png",
    "revision": "25b5dfb3d61c2962bcdab2741e4d1fa3"
  },
  {
    "url": "assets/img/image-20221217012643576.2e33d2b2.png",
    "revision": "2e33d2b2b10dc3720d418e52a7bdb06a"
  },
  {
    "url": "assets/img/image-20221217013726366.03ef0e15.png",
    "revision": "03ef0e154403eefad8aa0921f618eb3b"
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
    "url": "assets/img/image-20230104142517500.b833d7a2.png",
    "revision": "b833d7a29d954e5ab3eb10ca403b814f"
  },
  {
    "url": "assets/img/image-20230105091248535.12654b44.png",
    "revision": "12654b448e039390ba5e46606088a2fd"
  },
  {
    "url": "assets/img/image-20230105091840901.44f1e0ed.png",
    "revision": "44f1e0edf9f60296494b62b6732b6a4e"
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
    "url": "assets/img/image-20230106150336737.a2d21645.png",
    "revision": "a2d21645e2e9e1b76ca60ceddbd2fa29"
  },
  {
    "url": "assets/img/image-20230106151926264.c5d93c46.png",
    "revision": "c5d93c46dbf01bbb2545bebaeb9b8ffa"
  },
  {
    "url": "assets/img/image-20230106152839345.2517793a.png",
    "revision": "2517793aad08e0f77a7f501fb74501cb"
  },
  {
    "url": "assets/img/image-20230108164514855.98c67600.png",
    "revision": "98c67600cb29a84912b791126d858214"
  },
  {
    "url": "assets/img/image-20230109114533628.940ba56a.png",
    "revision": "940ba56a82b6986361d557709805a079"
  },
  {
    "url": "assets/img/image-20230109130152135.7c140b39.png",
    "revision": "7c140b3945150f8969904e7054c378bb"
  },
  {
    "url": "assets/img/image-20230109132434046.d571d941.png",
    "revision": "d571d941217e25ad19b70be4342f3b09"
  },
  {
    "url": "assets/img/image-20230109172428187.ea26a55f.png",
    "revision": "ea26a55f0f58b8414674fdd0c591ac82"
  },
  {
    "url": "assets/img/image-20230114090304163.794cd2df.png",
    "revision": "794cd2dfc0c3f238e139c35d19345eff"
  },
  {
    "url": "assets/img/image-20230114101950723.db4fd73a.png",
    "revision": "db4fd73a0bb3cc9d91b9f2be9d465547"
  },
  {
    "url": "assets/img/image-20230114112336641.2be42cce.png",
    "revision": "2be42cce9202ba71ce29a16b61a47a8e"
  },
  {
    "url": "assets/img/image-20230114114204597.52a4bd47.png",
    "revision": "52a4bd47b98da87e5850e5611d45b72e"
  },
  {
    "url": "assets/img/image-20230115095856964.2a65cf60.png",
    "revision": "2a65cf606669e5becfe6cac21fc7b975"
  },
  {
    "url": "assets/img/image-20230115102410725.d5dd5c1a.png",
    "revision": "d5dd5c1a5ba525ddd00045cc26ad7bb8"
  },
  {
    "url": "assets/img/image-20230115103116188.e4b5b6d1.png",
    "revision": "e4b5b6d14c3bcd4c4462727ef6168323"
  },
  {
    "url": "assets/img/image-20230115103531483.0fbab94d.png",
    "revision": "0fbab94d8852b38e4e91d4c764f3530b"
  },
  {
    "url": "assets/img/image-20230115104309329.dc9243d4.png",
    "revision": "dc9243d48cfaeebd41de02af87dc17f7"
  },
  {
    "url": "assets/img/image-20230116091338609.a69caab0.png",
    "revision": "a69caab0c860277db47a13e8a5ef66ce"
  },
  {
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.1f52adbb.js",
    "revision": "0faa8e85cde97bda59c2a028c1078666"
  },
  {
    "url": "assets/js/11.08529661.js",
    "revision": "b351f4fe12d281d69802dfe15340792e"
  },
  {
    "url": "assets/js/12.4750e2f0.js",
    "revision": "772771788d570c9c7add4948f5f3dff3"
  },
  {
    "url": "assets/js/13.e8f5a7ab.js",
    "revision": "c061d24554f3b024ead635a361d5c2a8"
  },
  {
    "url": "assets/js/14.dcb03054.js",
    "revision": "6588b11231be077517634973830b3454"
  },
  {
    "url": "assets/js/15.d0e9e9b8.js",
    "revision": "ba9ff866b9a08366ce71722cf6455856"
  },
  {
    "url": "assets/js/16.1f9528a8.js",
    "revision": "69aa6cffd4b1383dcae74abe94fc3df1"
  },
  {
    "url": "assets/js/17.37354167.js",
    "revision": "1e26cf331f4fab4f7a84508b67986cbc"
  },
  {
    "url": "assets/js/18.6562d5bf.js",
    "revision": "4f187a2b24cd0e5c9b6f13a948e155ec"
  },
  {
    "url": "assets/js/19.cf372bff.js",
    "revision": "b34933af5d9dff0fbcb372bddc3d1698"
  },
  {
    "url": "assets/js/20.58bcb5f1.js",
    "revision": "24bb7a6bb11373ab4d79b7a3b317c1d4"
  },
  {
    "url": "assets/js/21.e5dbb8cf.js",
    "revision": "1b54b96c2c7990f79a91b1e666212546"
  },
  {
    "url": "assets/js/22.eebd78bd.js",
    "revision": "018d9ad8c10a5bedfe38f63dbfde3b66"
  },
  {
    "url": "assets/js/23.1e0ab430.js",
    "revision": "1cdbbe3cff06184eef7941b1c956f769"
  },
  {
    "url": "assets/js/24.c2aa9d6d.js",
    "revision": "fe9e872deb6fcfae6c51207c7e7c2bfd"
  },
  {
    "url": "assets/js/25.11c2bc76.js",
    "revision": "b67d0f16e67b9f0f00280bfea444b6da"
  },
  {
    "url": "assets/js/26.802c7205.js",
    "revision": "914aad24fdb76695b6a4e0a92575a9f0"
  },
  {
    "url": "assets/js/27.8fc54bdf.js",
    "revision": "5f0f1ab241404aa16f004a133d7935a6"
  },
  {
    "url": "assets/js/28.0ac41d93.js",
    "revision": "ac5f4f3cdb2206243eb91be437f27b1d"
  },
  {
    "url": "assets/js/29.afc3285e.js",
    "revision": "e9c7f27e61043f98c80770a9ec41189f"
  },
  {
    "url": "assets/js/30.74bcff50.js",
    "revision": "6f40006ec4c05eda59a1c61bc1cb94e0"
  },
  {
    "url": "assets/js/31.bcefd10c.js",
    "revision": "439d05c65941aac9c42e11c8083da9c5"
  },
  {
    "url": "assets/js/32.2e89aa95.js",
    "revision": "af29ba06b102c2fd323ed6118533f9f4"
  },
  {
    "url": "assets/js/33.9cfcd96b.js",
    "revision": "5954e97778359170e1b0dda61b90c741"
  },
  {
    "url": "assets/js/34.6c15152a.js",
    "revision": "b38f72552c1ffe6ed01a2333c11bbdf8"
  },
  {
    "url": "assets/js/35.0142b15a.js",
    "revision": "0c39aea5335ef48a34bb3ebe61cb2207"
  },
  {
    "url": "assets/js/36.3be16507.js",
    "revision": "8bb7427830a5f26f50db2e683e61daca"
  },
  {
    "url": "assets/js/37.4a156d49.js",
    "revision": "524af5c32af2935b13ac7c09bc524c8c"
  },
  {
    "url": "assets/js/38.6ae5eb71.js",
    "revision": "bca0737ea79b634adf23446367c11f49"
  },
  {
    "url": "assets/js/39.e8a0a46f.js",
    "revision": "8583a6233ffed01e3313bb10dc72c0b9"
  },
  {
    "url": "assets/js/4.3138a26c.js",
    "revision": "08c5851fd41c1740d00f35c455d3b996"
  },
  {
    "url": "assets/js/40.d7ed9c03.js",
    "revision": "9a85b1ce4d81ccfbf08535abf7092a59"
  },
  {
    "url": "assets/js/41.87f0d6bb.js",
    "revision": "8fd94d75dd7a351fbb8b7894f83b490d"
  },
  {
    "url": "assets/js/42.3f3018eb.js",
    "revision": "ccff087951ddf20f3090e30c1d298d45"
  },
  {
    "url": "assets/js/43.e40a6eda.js",
    "revision": "7cd3e7dab99b92b0579f727e46cd087d"
  },
  {
    "url": "assets/js/5.4b67ef02.js",
    "revision": "a2c03d9a362206867090f806a4a517a8"
  },
  {
    "url": "assets/js/6.2ac25bf4.js",
    "revision": "074b5e367c3b730549d08271cd2fa450"
  },
  {
    "url": "assets/js/7.0e4f3187.js",
    "revision": "ec1a74f58031d521bbc358d19b026280"
  },
  {
    "url": "assets/js/8.fa6ad204.js",
    "revision": "3bd636b47f2852c47d918b82d1881858"
  },
  {
    "url": "assets/js/9.3eb24405.js",
    "revision": "028e9b01fb301eb13239bb339b861331"
  },
  {
    "url": "assets/js/app.285aef27.js",
    "revision": "061b53408ca546ef1aa057a9eff20f77"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.43f9a2e1.js",
    "revision": "b826f5c938a3674968c2e3c17f88ec17"
  },
  {
    "url": "categories/css/index.html",
    "revision": "396828f15e3eb3ae52ebbbc38433402a"
  },
  {
    "url": "categories/index.html",
    "revision": "c3fa069959c7b3eeffde9e7d05045437"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "a1cb336e4dc4d1d65f45d58559670a5a"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "83ded38903afa6aa562f88c29364758d"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "92514ed6f3e4fc4dbc49ac38be2891c0"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "be7510438c80168f248f7d4564b3dc5d"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "ae311efb2a864024abeff8219c35c54f"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "4941c699765a6aa96bf3cc22b243f819"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "d12e3f3eca4f1bab6f2a3791f6b65dbe"
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
    "revision": "9a5c618f91f52cb50f856b00a30ad073"
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
    "revision": "1f6dbe61f9f5d77d04e7c3f81b61cdb3"
  },
  {
    "url": "tags/css/index.html",
    "revision": "1e93d9e0320c9f66df07d94aaf2cd221"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "2266337450208dbd4f2647ea461b7943"
  },
  {
    "url": "tags/js/index.html",
    "revision": "fe8692494f06ec73597545b29ac27cdc"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "92be7dd50cabd5966796d34bf3d5e89e"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "38b290bd4f4be3865ea040dfae08c8b2"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "33a9e9c0ea219a3074b845728b247b10"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "f338f756a71c12230e9a800a1cc72395"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "1d387510abd9f6e503a43da431333d96"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "5b061dc437b371db4a5bbf60804b823f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ceb3968e775cf469f949595705dd2e7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1bca77f1bef0f2d74b492c807b270c55"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "ec3a7d7a9ae2d9ae9a9a915cbde95646"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "b1fb8e34c7cdde7e1380646f8574cd63"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "c9ebb155239ef390fc9d0d5455582b8d"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "0e589c1d943024910cc785582b92c583"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "d54636a5579fe1d818fe02559057bec9"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "8ca39a375f22216f75b9ef05d6b834f5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "c2acdec8c86311ac11467a07729eebdc"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "5f9201a2aebf0b9da885760cc2c1f4eb"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "333c302b4c18241639c706cb1ff310f0"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "f8f11ea64aa2e66bcb02fdd89663d0f7"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "7f02e623d11afc00eb7958ae1a149180"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "157d97b8c3e7f3fd309493cd92eb546b"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "26c2c3ec9f6fbcee7ff45aa08e343083"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "0c5a30ddc48a30a3e3e7d389ec2b416c"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "37a9d4532302238fd90080a98f793962"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "058d4957623505549000a24410aabdef"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "c6a1bf456257b8f523ab025c31aeff6a"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "f7fc4775e3406532253a0462511a124b"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "5556aed80f9a3c9fa0fac51aae5ebe69"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "262fece8ee0cf33781bff874e1a671a0"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "f20e23b08391622c541c5752279d0bd8"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "90ac066f21a59d7507c479732015d0ec"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "37f21f955ad9c05f7423888b4225f28f"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "20aee508a87f4b097fa7f69355b5d2c4"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "ebc9500ace10caf66d036275316367a3"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "c99a808aff6d34c1ceb53686fc350e41"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "e65cadc96525b3a7ee3b81dcf0c83ab5"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "4b2b4bdb963058aeb317c73298f5ef4a"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "169eb8ecd1ddbf30db6ab1453c849794"
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
