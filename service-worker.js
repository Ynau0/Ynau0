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
    "revision": "df7fbd6ebb0320d2a8d589dcab890dfa"
  },
  {
    "url": "assets/css/0.styles.7efc319d.css",
    "revision": "9036aea3ba168f9c6403878eae601c8e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/js/1.398c7c43.js",
    "revision": "d1159911e7429b8e82b9153d654eb330"
  },
  {
    "url": "assets/js/10.b0b85028.js",
    "revision": "d47ab8ac2e0f3205e654c1bfa0bb2f81"
  },
  {
    "url": "assets/js/11.88545a1f.js",
    "revision": "8b6bcffa50530f42beba182e391a354c"
  },
  {
    "url": "assets/js/12.53190d25.js",
    "revision": "911b24b3228f7d98806ea7eaff7e1e1d"
  },
  {
    "url": "assets/js/13.c220d404.js",
    "revision": "f6b8334958461fbea40f45d6ec4d209f"
  },
  {
    "url": "assets/js/14.d2267009.js",
    "revision": "28bb58d03f19bff3c257e7cae691f86b"
  },
  {
    "url": "assets/js/15.d27b9182.js",
    "revision": "c80f615ef2c846adf8c7ef5c4ca1c708"
  },
  {
    "url": "assets/js/16.a0da7d2a.js",
    "revision": "99b0d2fa4ed408e76dcf61aae3c5bc0f"
  },
  {
    "url": "assets/js/17.f28c89d4.js",
    "revision": "f718dc091a561ee31da617b80e52f876"
  },
  {
    "url": "assets/js/18.8e0b6365.js",
    "revision": "123158ca9f026093004afb643a4e1999"
  },
  {
    "url": "assets/js/3.c699edbf.js",
    "revision": "5373372ace570bfedf7aba8839c7b861"
  },
  {
    "url": "assets/js/4.7f82ccd4.js",
    "revision": "70f7bbc6f2a5257e4ac28995232e9226"
  },
  {
    "url": "assets/js/5.e0181147.js",
    "revision": "d5464f72449a77448ee975e229b1114e"
  },
  {
    "url": "assets/js/6.bbb0a6d6.js",
    "revision": "fd9612ad771df137e96571e9f1a757ae"
  },
  {
    "url": "assets/js/7.d787fd98.js",
    "revision": "28da8cdbcb2dc1e97b4444a727df9fc8"
  },
  {
    "url": "assets/js/8.dc651b72.js",
    "revision": "a6cd1e5698cb6d6c9351a4060dbdbea5"
  },
  {
    "url": "assets/js/9.377703e4.js",
    "revision": "895fa6e70a025ed569f38199bf00c2ed"
  },
  {
    "url": "assets/js/app.fab1e391.js",
    "revision": "34a9d53654ea2c409c345ac1bbd57e2d"
  },
  {
    "url": "categories/Guide/index.html",
    "revision": "cfc233c8fef742f0af2edcdaae5f3a38"
  },
  {
    "url": "categories/index.html",
    "revision": "e6e74bc8df4724324e483206e548a4aa"
  },
  {
    "url": "css/style.css",
    "revision": "0ef7b0a012e9ee8500c37d2ee47eceea"
  },
  {
    "url": "guide/index.html",
    "revision": "4ee9e6b5a2036205feb02392874a7482"
  },
  {
    "url": "guide/notes/one.html",
    "revision": "2d0a0a88bd68e3bb10b3bd015e8e93a0"
  },
  {
    "url": "guide/notes/two.html",
    "revision": "cdddf818bcb9a5bcd6e905a5fc2d3630"
  },
  {
    "url": "icon/pig128.png",
    "revision": "cbbcb643ac583e59b84ad762aa67dcf2"
  },
  {
    "url": "icon/pig16.png",
    "revision": "d6e0a7e15ba7ea9e27d71e5cb448439b"
  },
  {
    "url": "icon/pig32.png",
    "revision": "af64a287d9997bddca2b3c51a7eeee5e"
  },
  {
    "url": "icon/pig48.png",
    "revision": "cec74c71cab77bedbddb848769b67e18"
  },
  {
    "url": "icon/pigsvg.svg",
    "revision": "c363a6705e17c9be21a5a2d4bd8417e4"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e150c959f85cd56ef0f0a954827111ac"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "25b4751a56a02ea48e41fd2c8b0c66c2"
  },
  {
    "url": "iconfont/iconfont.js",
    "revision": "4591ba278cbe745ef66e8a767c5b996f"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "343c882d838d1e3ca59b347444af4160"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "0238cfbc253837f69055be3ac759bd3f"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "000a212d4229a27b9c5e26d04ad485ce"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "5e8e8ce8bcaf8d51e66c45c0939270b7"
  },
  {
    "url": "img/bg-logo.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "img/head1.jpg",
    "revision": "15bdeead2980d850f70117565746016a"
  },
  {
    "url": "img/head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "img/logo_small_u.png",
    "revision": "785792c8f206cb1393c0b8b18f72243a"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "7b5ab75f1547bb8d8d0f7ad66550d10e"
  },
  {
    "url": "img/logo1.png",
    "revision": "a6feaddc03f9fa0e0c756711aea16114"
  },
  {
    "url": "img/title2.png",
    "revision": "4b4b8eb83b8032d8dc4a7da601e052c3"
  },
  {
    "url": "index.html",
    "revision": "edd2bb374945e1d1d5568b7ff69fc467"
  },
  {
    "url": "notes/java/index.html",
    "revision": "6b4c221327e6e920eb3eae6191b2cf05"
  },
  {
    "url": "notes/java/notes/h1.html",
    "revision": "dba22aba8fd093f27b9b090ff72369c0"
  },
  {
    "url": "notes/python/index.html",
    "revision": "70e3e4b9b056bef78f2f0f7ebffc885d"
  },
  {
    "url": "notes/python/notes/bd1.html",
    "revision": "c45ebe1554c4ce957a171200e3869613"
  },
  {
    "url": "tag/About/index.html",
    "revision": "3d2b73c1bb74aafc6385f12ae518ebbf"
  },
  {
    "url": "tag/index.html",
    "revision": "24f74d07aae472092d3ee232a23af60d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "29c51082af0debd0a3dab78768aae775"
  },
  {
    "url": "timeline/index.html",
    "revision": "7ec0f13c496d1aacc39fb8235d60fa72"
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
