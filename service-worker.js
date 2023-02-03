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
    "revision": "f2660cfa8011419c54677a7e87aea417"
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
    "url": "assets/img/image-20230116100209635.777d6739.png",
    "revision": "777d67394842153e68652437aea7b107"
  },
  {
    "url": "assets/img/image-20230125115127144.4a44f41e.png",
    "revision": "4a44f41e4ce9585ee8e605b0eaa901e8"
  },
  {
    "url": "assets/js/1.9e3ff7f5.js",
    "revision": "fef76f9153a6c248c0a392d32496d8e6"
  },
  {
    "url": "assets/js/10.2bc1c006.js",
    "revision": "3834eac33b055c30d87f0a88c230af68"
  },
  {
    "url": "assets/js/11.cf16e7c7.js",
    "revision": "51022945316b58e0ea2af2b4a49bd513"
  },
  {
    "url": "assets/js/12.f85d1849.js",
    "revision": "eddee380e03fe719d517c0570b351463"
  },
  {
    "url": "assets/js/13.788433be.js",
    "revision": "1236099364894a2ba7e26e16136ee777"
  },
  {
    "url": "assets/js/14.e0ca5a89.js",
    "revision": "0a6243f56dfe1b512a03bbc86c31c5ec"
  },
  {
    "url": "assets/js/15.c5fac080.js",
    "revision": "0ae1ff52b08a06f3a6495b6a05058f8c"
  },
  {
    "url": "assets/js/16.e9b00068.js",
    "revision": "23a6557afdd5d59c09647b284edf13cb"
  },
  {
    "url": "assets/js/17.f1d72328.js",
    "revision": "259cc40840b00e887c4d088dcdee29c5"
  },
  {
    "url": "assets/js/18.acfbf013.js",
    "revision": "3bed4f5bdede7ae28db99ffa13bf20af"
  },
  {
    "url": "assets/js/19.6121479c.js",
    "revision": "a5ebc457e33eb8d98987d8d1d3694237"
  },
  {
    "url": "assets/js/20.86faeb93.js",
    "revision": "4eb641a57d1c2c9dd47d7cef3f5032b4"
  },
  {
    "url": "assets/js/21.68cc2e5b.js",
    "revision": "ec67797060ff6588b46131acf520b26d"
  },
  {
    "url": "assets/js/22.e3c102d7.js",
    "revision": "34d2d42bd0b9e01635467808b6644e08"
  },
  {
    "url": "assets/js/23.151d10b5.js",
    "revision": "79b39130ecba73776793a9d73165fdda"
  },
  {
    "url": "assets/js/24.59dcbac7.js",
    "revision": "7935d2906340481585b67b906c229452"
  },
  {
    "url": "assets/js/25.5b0f8a59.js",
    "revision": "cafd98ad73a0422eb6eaea0e52befafb"
  },
  {
    "url": "assets/js/26.6b76120a.js",
    "revision": "1936df76d810b3ff73fbd295fb124160"
  },
  {
    "url": "assets/js/27.10e69c0d.js",
    "revision": "1b718cbae1bbed13f39ce223c701e05d"
  },
  {
    "url": "assets/js/28.00ce85e4.js",
    "revision": "c6a4334a81a9c72fb60bc7620dc0a669"
  },
  {
    "url": "assets/js/29.820cc3a2.js",
    "revision": "3b2a5d56f053d925f8a765ba6511bf2b"
  },
  {
    "url": "assets/js/30.38b2a15e.js",
    "revision": "a064c8bc95bf4cc7a5f477c51d60409c"
  },
  {
    "url": "assets/js/31.c0cd3d82.js",
    "revision": "608396d6c900124fd4a0249c7117c60c"
  },
  {
    "url": "assets/js/32.acf4aa3d.js",
    "revision": "946d99a23a3961909b902d802fd89f7c"
  },
  {
    "url": "assets/js/33.4c1d64a2.js",
    "revision": "6e8b768863a07a054020a5960212143d"
  },
  {
    "url": "assets/js/34.53428977.js",
    "revision": "b6435d93a3bc39f49c799591716f087a"
  },
  {
    "url": "assets/js/35.4fa88d5c.js",
    "revision": "075f1e8c6756a69f1e3e4b1b8e538137"
  },
  {
    "url": "assets/js/36.8bb30566.js",
    "revision": "11d1c8d11b6c04c7401acab1a648e086"
  },
  {
    "url": "assets/js/37.db89d9a8.js",
    "revision": "99a6eeafa93bee8186c68e6630dc9e88"
  },
  {
    "url": "assets/js/38.28b06082.js",
    "revision": "05449d2b6b4bf02d16ca03c0fe0f1bb8"
  },
  {
    "url": "assets/js/39.3d4c3cb5.js",
    "revision": "7380781b8c88d8ed6f3364c90f87905c"
  },
  {
    "url": "assets/js/4.7156bfa9.js",
    "revision": "6483b82f2a646add361ee35b807a71f3"
  },
  {
    "url": "assets/js/40.d42ba9f0.js",
    "revision": "0f24fb9f40212a3657efcacbba763f5a"
  },
  {
    "url": "assets/js/41.2e239d03.js",
    "revision": "8eabda82a5473069225a23d06cfd0a52"
  },
  {
    "url": "assets/js/42.3bcdd19b.js",
    "revision": "d5d8a0f7b9fd7d96a88a560199e84475"
  },
  {
    "url": "assets/js/43.7207ccad.js",
    "revision": "6e2b2bd1200227714591102ffa0f0689"
  },
  {
    "url": "assets/js/44.f1e8c24c.js",
    "revision": "8642ca26fcbf8fb43c0e7cebb26fb2fb"
  },
  {
    "url": "assets/js/45.af627e8d.js",
    "revision": "0305802f24fff901a98df7b63b44167a"
  },
  {
    "url": "assets/js/46.e361842c.js",
    "revision": "1d4602ed1c559f8eabed855e1c9756a0"
  },
  {
    "url": "assets/js/47.ef6a64c1.js",
    "revision": "4cfe03540ca75a6e4b00d3accf19811e"
  },
  {
    "url": "assets/js/48.8138149c.js",
    "revision": "1d57c8ff28d558166d8049d822aef48d"
  },
  {
    "url": "assets/js/49.2e6f62fd.js",
    "revision": "373c3c64e4d2e3be8d05b81157194394"
  },
  {
    "url": "assets/js/5.3fcc361a.js",
    "revision": "14fa24ed70de270e0f83b270c3b52f54"
  },
  {
    "url": "assets/js/50.b9e692ec.js",
    "revision": "d9e5eda435e975f4d4f20b0a55ac48c3"
  },
  {
    "url": "assets/js/51.c9d86b79.js",
    "revision": "4a031cb9904cca4de33dfa8795b7ba47"
  },
  {
    "url": "assets/js/52.f84dfe30.js",
    "revision": "8b3982327adf1e96d382cd06d94cf973"
  },
  {
    "url": "assets/js/6.9b28e4c7.js",
    "revision": "e53e0bef64bd4dbbe8e5c6ed091dcb23"
  },
  {
    "url": "assets/js/7.3a1ae327.js",
    "revision": "4b43fe5390067b59ca619b056b278dbf"
  },
  {
    "url": "assets/js/8.bcf773ca.js",
    "revision": "7221cc8b5dcf2c714c5d71856b82ffa5"
  },
  {
    "url": "assets/js/9.920a94b0.js",
    "revision": "319f7d7d435aebb4bfcdd1aa4e2be932"
  },
  {
    "url": "assets/js/app.c682a272.js",
    "revision": "39ef3c02646596eeb30343281675fde1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.84f9a262.js",
    "revision": "3942f10fc5e79493613dccd6c26f1117"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c1ba87bf90cb24f55f6dd2ddf785373c"
  },
  {
    "url": "categories/index.html",
    "revision": "19dbabef38670e347de509dbbac7f066"
  },
  {
    "url": "categories/JavaScript基础/index.html",
    "revision": "c7172e25bb16ea239735302c48c21490"
  },
  {
    "url": "categories/JavaScript基础/page/2/index.html",
    "revision": "017529baea98b85279808fc40385740d"
  },
  {
    "url": "categories/js刷题/index.html",
    "revision": "0f5dd0abd4f667e320543626d45ac787"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "8c0af2d1e89764ccfb051fa9b900cee0"
  },
  {
    "url": "categories/工程化/index.html",
    "revision": "68899b96e77eeac7d2dca80faad13872"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "f21cda16d8d43a5a5ede8159d3b343ab"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "6c1925ed5a3f42750a2ccdbb97719b73"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "b1bd0ac466ed69ed1d0f0722842e406d"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "9ae7666015c04ab9bfb686c492c6a270"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "49db2a504c27a3545a764c3b8f52683c"
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
    "revision": "908ab86d265463df5c70d8d8d433f6bf"
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
    "revision": "b7e0495daecf696e8b6a79f49b6676e8"
  },
  {
    "url": "tags/css/index.html",
    "revision": "0ed81b538b01d49fa91cfc8620f18141"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "0236e54b7fafe5f57bc93811b931be49"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e8a02fe20eefbcf6d9be2c2b00dfb4dc"
  },
  {
    "url": "tags/js/page/2/index.html",
    "revision": "a97260c06b7b0316c6343fcdc5072412"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "90b2937ade7afb612ca741e8f3b58679"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "32039afdbaeb3cc4563e10f20c7b8112"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "b6c9cb31aa1cbcdcdfd50f62002b1730"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "28dd1a2cc6d172be17e0e1af992c9b8e"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "abca04663ef3c9f83ceeb4dcd62a6772"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "060c9459788204276fdc4388d81a4e4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f963f46785340d9dfead0fac18eee06d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a2c5b1eed84e47ba147edaee85ace1a5"
  },
  {
    "url": "知识大纲/index.html",
    "revision": "594f2c56030d95df1655ea24a463cfe4"
  },
  {
    "url": "笔记整理/HTML5与CSS3/CSS权重与选择器.html",
    "revision": "a9b9de139b74710c2f2a33fd9c0fbc99"
  },
  {
    "url": "笔记整理/HTML5与CSS3/line-height.html",
    "revision": "3a63b0ff3a95b23d76e4e8d1b7156c74"
  },
  {
    "url": "笔记整理/HTML5与CSS3/margin.html",
    "revision": "502c9b5d15ad2b624ef85b93076aa220"
  },
  {
    "url": "笔记整理/HTML5与CSS3/overview.html",
    "revision": "eb576f0e5daf66db214a0f49cd41e8aa"
  },
  {
    "url": "笔记整理/HTML5与CSS3/transition和transform.html",
    "revision": "960ada85072368bf86b9c86086fdbdd5"
  },
  {
    "url": "笔记整理/HTML5与CSS3/盒模型.html",
    "revision": "d6050a8ef3d3c53435a9a90ea5a2eee3"
  },
  {
    "url": "笔记整理/javascript/es6/async.html",
    "revision": "1deeebf1b6bc6b8213205aca69b1cca6"
  },
  {
    "url": "笔记整理/javascript/es6/class定义类.html",
    "revision": "50c81f163574ac5b0c48a6f9cb36331b"
  },
  {
    "url": "笔记整理/javascript/es6/Proxy与Reflect.html",
    "revision": "feed94eebaf8ed20a717bd1ef407c4c3"
  },
  {
    "url": "笔记整理/javascript/es6/set和map.html",
    "revision": "fe60e49513e009624a362dc6bd8ab4dc"
  },
  {
    "url": "笔记整理/javascript/es6/Symbol.html",
    "revision": "40b06a6adbe8c03508142a279d497211"
  },
  {
    "url": "笔记整理/javascript/es6/迭代器.html",
    "revision": "bd8ee72d2a2330e93ba50378695b5e64"
  },
  {
    "url": "笔记整理/javascript/js.html",
    "revision": "f7506e4284a97ccadb8ee5775fc3fd76"
  },
  {
    "url": "笔记整理/javascript/js基础/js垃圾回收机制.html",
    "revision": "193256ca70027519fe747c8575309a00"
  },
  {
    "url": "笔记整理/javascript/js基础/Promise.html",
    "revision": "4b05c3fa783b4f4a8b37ca7a4c724da9"
  },
  {
    "url": "笔记整理/javascript/js基础/this指向.html",
    "revision": "5bdeaff387ee565d7354e289b77bffff"
  },
  {
    "url": "笔记整理/javascript/js基础/typeof和instanceof操作符.html",
    "revision": "d658ca7859f56d414df3bb167cf79d07"
  },
  {
    "url": "笔记整理/javascript/js基础/函数增强.html",
    "revision": "cdfc221e6fbaed041725f2f9d3b86c97"
  },
  {
    "url": "笔记整理/javascript/js基础/原型与原型链.html",
    "revision": "6e572409d71353284f5901f8ff098d20"
  },
  {
    "url": "笔记整理/javascript/js基础/对象增强.html",
    "revision": "5b088d75c9329745fae42ad9438e89e0"
  },
  {
    "url": "笔记整理/javascript/js基础/深拷贝与浅拷贝.html",
    "revision": "aa9a74030d80d232909a53142cc1a936"
  },
  {
    "url": "笔记整理/其他计算机知识/overview.html",
    "revision": "985e98692202597b2c8c598262081a30"
  },
  {
    "url": "笔记整理/其他计算机知识/进程与线程.html",
    "revision": "9810651e96d9ed50811e19a7aa3a88c0"
  },
  {
    "url": "笔记整理/工程化/工程化.html",
    "revision": "2b876bf9de3861a2278008a7880ea497"
  },
  {
    "url": "笔记整理/工程化/模块化开发.html",
    "revision": "32c6c3618a0738e4309b06754bf59183"
  },
  {
    "url": "笔记整理/框架/Vue/mvc和mvvm.html",
    "revision": "48f1ad2cdc4d929a018f347cc9cb229f"
  },
  {
    "url": "笔记整理/框架/Vue/overview.html",
    "revision": "97f886854adb8c525f87d293ab7f959b"
  },
  {
    "url": "笔记整理/浏览器与计网/HTTP协议.html",
    "revision": "e09c866b9dd38e3b37e9936ba7f4ebb2"
  },
  {
    "url": "笔记整理/浏览器与计网/overview.html",
    "revision": "531fd19344de4e181a744581307299b1"
  },
  {
    "url": "笔记整理/浏览器与计网/TCP.html",
    "revision": "b44113eaa3af9f1d695758c00759ce92"
  },
  {
    "url": "笔记整理/浏览器与计网/回流与重绘.html",
    "revision": "10a905b98eee01eb51235932c917d308"
  },
  {
    "url": "笔记整理/浏览器与计网/浏览器中的进程.html",
    "revision": "e22b29629ebae0ed6fb0aa01122fa59b"
  },
  {
    "url": "笔记整理/浏览器与计网/网络模型.html",
    "revision": "2077fec085a4c4c9917c58b8fd815710"
  },
  {
    "url": "笔记整理/浏览器与计网/跨域.html",
    "revision": "629649556c26ae274142cb6a4e2d2677"
  },
  {
    "url": "笔记整理/浏览器与计网/输入URL到页面呈现.html",
    "revision": "3a0906da5df179365d75d2b72da3c9e1"
  },
  {
    "url": "笔记整理/算法与手撕JS/overview.html",
    "revision": "3860b4c7e8e6a19d21fb19bc83768420"
  },
  {
    "url": "笔记整理/算法与手撕JS/手写防抖函数.html",
    "revision": "c1e19ea3e81f6461c3d6b562802098c5"
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
