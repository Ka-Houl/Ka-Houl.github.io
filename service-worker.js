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
    "revision": "ab2df4c47be121fd91ccb80d67f9dca0"
  },
  {
    "url": "assets/css/0.styles.0bb2b5d3.css",
    "revision": "bde68fcb4e65cbf125a4d3086e55dbd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d1dca7f6.js",
    "revision": "80b74cf11ae19d489451d75db6bf603e"
  },
  {
    "url": "assets/js/10.0f4090f0.js",
    "revision": "b7f35da477469b3c4278746558f39126"
  },
  {
    "url": "assets/js/11.9ec2edb3.js",
    "revision": "6afb96dfec7fd0037a5e357c96c5ea54"
  },
  {
    "url": "assets/js/12.41d1c38e.js",
    "revision": "8c73e39a22421e4744f238dc7ceb5ba7"
  },
  {
    "url": "assets/js/13.2aadfb68.js",
    "revision": "b243dd7cef1a2b7f8d20afe22dded546"
  },
  {
    "url": "assets/js/14.c4a6631d.js",
    "revision": "3fedb3ebefaeee1a2498d943b0e68b72"
  },
  {
    "url": "assets/js/15.3d1ae141.js",
    "revision": "b4324372df580f0f039c73651c121078"
  },
  {
    "url": "assets/js/16.28a1d754.js",
    "revision": "81922adcbb7d1e235ba9267a2bfa1aa1"
  },
  {
    "url": "assets/js/17.2fc6e4dd.js",
    "revision": "4ffbcc898e6baf0fe97ed513e48a5d14"
  },
  {
    "url": "assets/js/18.bfebd037.js",
    "revision": "0877bfcd6f931607211918d5afd0ae67"
  },
  {
    "url": "assets/js/19.b425e233.js",
    "revision": "2745688bb36b695ae9d146a6cbd786ce"
  },
  {
    "url": "assets/js/2.0a52b522.js",
    "revision": "0868c3fac14819d0b780b1eaa57fcc00"
  },
  {
    "url": "assets/js/20.5d3ca18c.js",
    "revision": "37a07fda52a492bebe2c4a679626ba46"
  },
  {
    "url": "assets/js/21.446b96d8.js",
    "revision": "887da5aa9efd59deb2e778485f7b087c"
  },
  {
    "url": "assets/js/22.dea504aa.js",
    "revision": "ec8e667e640fb4034197dbf1a9829ade"
  },
  {
    "url": "assets/js/23.bf6a5243.js",
    "revision": "173c7b5e6737d9769d5ee35eeaf2f5d8"
  },
  {
    "url": "assets/js/24.53be8142.js",
    "revision": "b55fb55374963df57a052469cf37a171"
  },
  {
    "url": "assets/js/25.a59498ca.js",
    "revision": "327498c7f9da497b43879bf43b5be040"
  },
  {
    "url": "assets/js/26.35d52534.js",
    "revision": "ab749a4a7d14221eb7593a3ad26dec6e"
  },
  {
    "url": "assets/js/27.38291d87.js",
    "revision": "a8d4028767127a0a11461ac3407239a5"
  },
  {
    "url": "assets/js/28.8e1831db.js",
    "revision": "5369cd5afac07b52bb4bf23d86aacb67"
  },
  {
    "url": "assets/js/29.27b217c5.js",
    "revision": "1459c887c44d44fad9f90c8814f31f80"
  },
  {
    "url": "assets/js/3.a898ecd2.js",
    "revision": "5a74ccbeb8b3f227feff80d3791cc393"
  },
  {
    "url": "assets/js/30.691e4025.js",
    "revision": "74290a36c46edf69ca1ee1571979503f"
  },
  {
    "url": "assets/js/31.a248e3e2.js",
    "revision": "49721d742b8987d8c6e0c0717959bad5"
  },
  {
    "url": "assets/js/32.102f3265.js",
    "revision": "e6ebfd9d30398dbbe0c401b937dbf2cb"
  },
  {
    "url": "assets/js/33.b23f8dd4.js",
    "revision": "136bcff30ad40688d0c99a2adf5a54ff"
  },
  {
    "url": "assets/js/34.527f05d9.js",
    "revision": "3a62b7f2b600f7a6a548aa2a8ef7f9a6"
  },
  {
    "url": "assets/js/35.a5e6da70.js",
    "revision": "19e32caf68f492fa3c6b1c04edc10adb"
  },
  {
    "url": "assets/js/36.e5fb2983.js",
    "revision": "88b4275a0743c947c0bf8cd3537aa421"
  },
  {
    "url": "assets/js/37.69cd5ca5.js",
    "revision": "4cb7780743c10f87aa5effa6b2640462"
  },
  {
    "url": "assets/js/38.64189072.js",
    "revision": "a17e8f79a9918fd11d712c00159cdf9b"
  },
  {
    "url": "assets/js/39.cb535a98.js",
    "revision": "0ada7be6328a8c1985e9caedd5df8c59"
  },
  {
    "url": "assets/js/4.bd36354d.js",
    "revision": "e2a8116f73d87e4eef2ab5ed477ef726"
  },
  {
    "url": "assets/js/40.2fd68a48.js",
    "revision": "e27ddadac97ec0760ada413ee045902e"
  },
  {
    "url": "assets/js/41.91bc863e.js",
    "revision": "108b4f7d826df1450c7fa616ce4235e4"
  },
  {
    "url": "assets/js/42.719b337b.js",
    "revision": "4d3460d5043ee354145e8f538c5fd67b"
  },
  {
    "url": "assets/js/43.98c1e493.js",
    "revision": "abd864f4a87fe1f777bb0add5cfb3669"
  },
  {
    "url": "assets/js/44.e66b46a0.js",
    "revision": "605e27d0432e92bf87b29b9108f6a2ae"
  },
  {
    "url": "assets/js/45.90ace98c.js",
    "revision": "e73fe196b791a9d035cf1f860309f59b"
  },
  {
    "url": "assets/js/46.1b76cc0b.js",
    "revision": "c716c2ea956818fbd280d972ee067358"
  },
  {
    "url": "assets/js/47.5d1285e8.js",
    "revision": "aa3c22a7b17fe36f5dab9e8e1dc3aa82"
  },
  {
    "url": "assets/js/48.2005a939.js",
    "revision": "c41622c4e4aadc12d127d534ac3784d0"
  },
  {
    "url": "assets/js/49.071eab20.js",
    "revision": "f1e1ef3141336a9f8f0063e7f09aca96"
  },
  {
    "url": "assets/js/5.d9e25f21.js",
    "revision": "c6e4da98f1899fb61d3520b63a2955ff"
  },
  {
    "url": "assets/js/50.d4c8ba26.js",
    "revision": "72efc065cf0a6c9ec231f24d0a277d85"
  },
  {
    "url": "assets/js/51.a48a0b9c.js",
    "revision": "12ad53dbc60e4844adb9ad1567821da9"
  },
  {
    "url": "assets/js/52.5c0beee1.js",
    "revision": "90060750345028db2312e2a58a5a0f51"
  },
  {
    "url": "assets/js/53.9cd70c65.js",
    "revision": "a4a658179fa1b95540ff5eda66f94fd3"
  },
  {
    "url": "assets/js/54.41147c90.js",
    "revision": "d0a6fd83938bbc1255dabb396991cd99"
  },
  {
    "url": "assets/js/55.6c755c08.js",
    "revision": "25879408fe32cb9ca8957454f5e015b8"
  },
  {
    "url": "assets/js/56.19e56f9b.js",
    "revision": "7a372d5cfe11b499ab25f164383791fa"
  },
  {
    "url": "assets/js/57.cce070fb.js",
    "revision": "332d40c9a28d3466300e7e3644c7e479"
  },
  {
    "url": "assets/js/58.7f3fea83.js",
    "revision": "8f739ec60a95b7b8bc4204f9779198ec"
  },
  {
    "url": "assets/js/59.55ff841a.js",
    "revision": "2d4aaa04d721bdb3427121797a74a332"
  },
  {
    "url": "assets/js/6.80955a3d.js",
    "revision": "604bd910af29e9ff1c92be43684a8790"
  },
  {
    "url": "assets/js/60.cc725942.js",
    "revision": "a1917e2e3062cecb1712cab080206234"
  },
  {
    "url": "assets/js/61.ab11ec01.js",
    "revision": "701e84eb81392715ca6e3f77f3d98da0"
  },
  {
    "url": "assets/js/62.81386a8f.js",
    "revision": "a381993ed493a317db828a53dea3a823"
  },
  {
    "url": "assets/js/63.a0b5acda.js",
    "revision": "5efcef28d3f8c9c06b809308618dbacd"
  },
  {
    "url": "assets/js/64.43a373a6.js",
    "revision": "2ffb3f0c73271d004898f0d8303e49af"
  },
  {
    "url": "assets/js/65.84a8c869.js",
    "revision": "016cbb01029d4cfec55a77e65325519b"
  },
  {
    "url": "assets/js/66.829642e9.js",
    "revision": "c0cc148a6c06dbb27775089b34ade4df"
  },
  {
    "url": "assets/js/67.2e20eb06.js",
    "revision": "9b55566f7e826e23c3d925d26e1a8e02"
  },
  {
    "url": "assets/js/68.9b080215.js",
    "revision": "ecd16ed4325a0c199d453adb54162834"
  },
  {
    "url": "assets/js/69.7a0bf407.js",
    "revision": "1ab81f83e3e6b4c073626e41d27a32dd"
  },
  {
    "url": "assets/js/7.bbdb394c.js",
    "revision": "082d3a6d13eeecb0a35385a42f516c8a"
  },
  {
    "url": "assets/js/70.6fc40fba.js",
    "revision": "6f87f91ce469b8978b88fea84d1f15bc"
  },
  {
    "url": "assets/js/71.9094bc72.js",
    "revision": "d29be37f1c0761a433cc55ea04e17b3d"
  },
  {
    "url": "assets/js/72.e49c5624.js",
    "revision": "afff5b5d485374da32205adcdc4365be"
  },
  {
    "url": "assets/js/73.75ba5cbb.js",
    "revision": "16f8a8b345c441e654c3052296213986"
  },
  {
    "url": "assets/js/74.9f5537c2.js",
    "revision": "ab09e7b8cdf4e139444d2e484c74365b"
  },
  {
    "url": "assets/js/75.251d89f5.js",
    "revision": "01a90d127ee9a2b19376348477bb36f8"
  },
  {
    "url": "assets/js/76.7dea9b52.js",
    "revision": "32f3fc53ae6b9b2a85363a3f00ee7992"
  },
  {
    "url": "assets/js/77.79afc808.js",
    "revision": "637f25b31466f9137cbd4c33cce2d717"
  },
  {
    "url": "assets/js/app.27def233.js",
    "revision": "1b5a7011d894337006fb8639fd9dda69"
  },
  {
    "url": "assets/js/vendors~docsearch.a22722c0.js",
    "revision": "e9fa6766bf0e93e437228d77d71c75d3"
  },
  {
    "url": "base/browser/browser-cache.html",
    "revision": "4f357dd5eaa2039ceeef0fc5cba0346c"
  },
  {
    "url": "base/browser/browser-render.html",
    "revision": "36ae8cc849cc659cf1ddfeb6b0e6afa5"
  },
  {
    "url": "base/browser/browser-start.html",
    "revision": "ea51bbf39fd2deef517b6c9d37d6447a"
  },
  {
    "url": "base/browser/cross-domain.html",
    "revision": "ebc5da3309032fc7852086129f1950a4"
  },
  {
    "url": "base/browser/DNS.html",
    "revision": "841bd036bb5a45c52e76f48b73d4cd2c"
  },
  {
    "url": "base/browser/dom-event.html",
    "revision": "f63f61d14065b10e3aff6b741879684b"
  },
  {
    "url": "base/browser/http-history.html",
    "revision": "486b30b006f6e35db6eb6aa235d52502"
  },
  {
    "url": "base/browser/http-message.html",
    "revision": "f500c663efcb1445b44448ac91cee2c8"
  },
  {
    "url": "base/browser/http-methods.html",
    "revision": "0914b9e8f53f9d1dbea02126599a363c"
  },
  {
    "url": "base/browser/http-status.html",
    "revision": "dd9ff3566e50d46c13185b720146e636"
  },
  {
    "url": "base/browser/js-gc.html",
    "revision": "7a476a02ad6f7c210cd8406467b8fe88"
  },
  {
    "url": "base/browser/network-OSI.html",
    "revision": "0c9b58a28b6983a657d3268049186781"
  },
  {
    "url": "base/browser/network-tcp.html",
    "revision": "e81332b8c4ffa0db6feeb82408206383"
  },
  {
    "url": "base/browser/network-websocket.html",
    "revision": "17abe8ccb9de7ef3526fd9ae3f892a21"
  },
  {
    "url": "base/browser/reference.html",
    "revision": "7ec01aefb53ff520bd44228840cfd696"
  },
  {
    "url": "base/browser/web-attack.html",
    "revision": "990be31a59f18cfb1046bf475d9ec201"
  },
  {
    "url": "base/browser/web-security.html",
    "revision": "90e34d638341fb7b65cb672f3d0ca44c"
  },
  {
    "url": "base/browser/web-storage.html",
    "revision": "e51f4e5c47c70d59855fafe870485e44"
  },
  {
    "url": "base/css/css-bfc.html",
    "revision": "215626ee8be50f64a11c91d0df391785"
  },
  {
    "url": "base/css/css-box.html",
    "revision": "407584253691dd01697127cd95cd0e43"
  },
  {
    "url": "base/css/css-cc.html",
    "revision": "fc7d58f4f9998471224e9b3c02a6eea8"
  },
  {
    "url": "base/css/css-ifc.html",
    "revision": "80e52f93bdc0c27b2f62a4849c79fe50"
  },
  {
    "url": "base/css/css-issues.html",
    "revision": "cfe31ed7b26cdc2fa209116dab51b2d3"
  },
  {
    "url": "base/css/css-knowledge.html",
    "revision": "365babb158b5de0395904c24a8c8d66b"
  },
  {
    "url": "base/css/css-layout.html",
    "revision": "7a4e4b135b8fbcd2da9e7c0ea562912b"
  },
  {
    "url": "base/css/css-rule.html",
    "revision": "9eea2467514f229140974e57f8ab6548"
  },
  {
    "url": "base/css/css-text.html",
    "revision": "d0f1876cdc993b50802ef4d409882bfc"
  },
  {
    "url": "base/index.html",
    "revision": "fc242ff92ff494019f440d98789281af"
  },
  {
    "url": "base/javascript/arguments.html",
    "revision": "614e503f92a9c8543f69595268a42d09"
  },
  {
    "url": "base/javascript/arrow-function.html",
    "revision": "d9ff13f6d5c04bd995bdd2498ee38310"
  },
  {
    "url": "base/javascript/async-achieve.html",
    "revision": "b7bbdfd6fe512dea786f3bcf22eed484"
  },
  {
    "url": "base/javascript/async-plan.html",
    "revision": "e3d2c1d2d98c8c98c3c4b2ecdb5b619c"
  },
  {
    "url": "base/javascript/closure.html",
    "revision": "5e78c18b1283f607f5cc4c874f4b7d22"
  },
  {
    "url": "base/javascript/decorator.html",
    "revision": "33fd0fdc951bc2ff2a465cb04972f011"
  },
  {
    "url": "base/javascript/ECS.html",
    "revision": "ed082cb43c3e58c829bceaf0487ae382"
  },
  {
    "url": "base/javascript/event-loop.html",
    "revision": "a2ab04fba3fba663052fda413c98431d"
  },
  {
    "url": "base/javascript/module.html",
    "revision": "eb86e92f697bc923fe46841495e25787"
  },
  {
    "url": "base/javascript/prototype.html",
    "revision": "0f5c2139250f08f43edd04aafcfe6b56"
  },
  {
    "url": "base/javascript/proxy-reflect.html",
    "revision": "076025d3c3711fe92560e1b86e882838"
  },
  {
    "url": "base/javascript/reference.html",
    "revision": "5e68c94f31ac513e74468d06daa5ed5e"
  },
  {
    "url": "base/javascript/scope-chain.html",
    "revision": "ed0ca76be57ff2cef3e9050679dbb088"
  },
  {
    "url": "base/javascript/scope.html",
    "revision": "a840fda19a8a6093dd953f53f8c4d7cd"
  },
  {
    "url": "base/javascript/set-map.html",
    "revision": "4701700623fbc46fbbbd12c4d70c2c59"
  },
  {
    "url": "base/javascript/this.html",
    "revision": "c620edd5aba8b72f152e29d746e43020"
  },
  {
    "url": "base/javascript/ts.html",
    "revision": "9c1d07cbca07294873066b2cc7e583a5"
  },
  {
    "url": "base/javascript/var.html",
    "revision": "df3268f8a7f6fe55a2cfa808bb3ce464"
  },
  {
    "url": "base/javascript/VO.html",
    "revision": "478f2a2e62b054ff4b1b1afd82f5db4a"
  },
  {
    "url": "code/index.html",
    "revision": "6a88a0ea54c3cd5a9e9a9d1f43d82e0d"
  },
  {
    "url": "go/index.html",
    "revision": "6e9514469bc1f83a9f1546fba95051de"
  },
  {
    "url": "images/go/基础知识列表.jpg",
    "revision": "c319c1534e9d7a31a8c81d56dcde482b"
  },
  {
    "url": "index.html",
    "revision": "48ca9cdde2d471c7921a3c23b7608c19"
  },
  {
    "url": "logo.png",
    "revision": "f85f82780b0ebed5e2eae82a64fe3022"
  },
  {
    "url": "profile.jpg",
    "revision": "a074af8a62f3a19e43d9c70b7e924706"
  },
  {
    "url": "writeScenario/index.html",
    "revision": "b13c6ba19fa6e0f9b0f83f04b5532ba9"
  },
  {
    "url": "writeScenario/promise/promise.html",
    "revision": "fc68014e23370ace1ff135a847151c1a"
  },
  {
    "url": "writeScenario/prototype/function.html",
    "revision": "ebc19e7da8489a91d9d50a050af9a827"
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
