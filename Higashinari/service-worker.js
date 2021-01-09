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

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": ".",
    "revision": "4ef562c67c62d0e0554503791764a63a0c030d06"
  },
  {
    "url": "dist/maplat.js",
    "revision": "2da53767ac47643665c52c8909d99678"
  },
  {
    "url": "dist/maplat.css",
    "revision": "838bdfe05456a7e816ee697fff9dc28d"
  },
  {
    "url": "parts/all_right_reserved.png",
    "revision": "7a6230d181b42042b80df3c321d5198e"
  },
  {
    "url": "parts/attr.png",
    "revision": "2fd1bdc1b32fffd0d6c91fed124516eb"
  },
  {
    "url": "parts/basemap.png",
    "revision": "d6eb2a24c9db8612a9e1ebfe1e749c94"
  },
  {
    "url": "parts/blue_marker.png",
    "revision": "3f0a27365f8197ee4e28acb2b6d4c9d9"
  },
  {
    "url": "parts/bluedot_small.png",
    "revision": "86df29046e4ebed91eec8234a176ab61"
  },
  {
    "url": "parts/bluedot_transparent.png",
    "revision": "73d040fd36725ee4e8334cc94c90ca17"
  },
  {
    "url": "parts/bluedot.png",
    "revision": "fa10ac01a2b93a61c78da31c8412752d"
  },
  {
    "url": "parts/border.png",
    "revision": "0b5a096113128f9c5240ad5d591bde7e"
  },
  {
    "url": "parts/cc_by-nc-nd.png",
    "revision": "d85a33fe3f3d910f23d9033bcaa6fa33"
  },
  {
    "url": "parts/cc_by-nc-sa.png",
    "revision": "802bada55988e7bc600dd63c678a57f9"
  },
  {
    "url": "parts/cc_by-nc.png",
    "revision": "d845dfb491962a5c7f6c521fc1846f11"
  },
  {
    "url": "parts/cc_by-nd.png",
    "revision": "ab35e0d022a6c2ec119e1013d6bb7fc0"
  },
  {
    "url": "parts/cc_by-sa.png",
    "revision": "5d9c749cca3aaef6b4dfabe9a38285e9"
  },
  {
    "url": "parts/cc_by.png",
    "revision": "4e91db59fb6c2a5e5ae85b10d5a8f7df"
  },
  {
    "url": "parts/cc0.png",
    "revision": "ff44bbde2ec314d94ed1ca8c6ecbaa1e"
  },
  {
    "url": "parts/compass.png",
    "revision": "85b9e14eea575ebb6ced5d15602aea9a"
  },
  {
    "url": "parts/defaultpin_r.png",
    "revision": "95d53be757abda5d7ea3aa4ca2274f68"
  },
  {
    "url": "parts/defaultpin_selected.png",
    "revision": "5a59a47efbff1f339a8a72acf5875354"
  },
  {
    "url": "parts/defaultpin.png",
    "revision": "cdf51b3037de8662f5974bfc0afb7424"
  },
  {
    "url": "parts/favicon.png",
    "revision": "4eb6376e4ab832ca6df1f63658bd6d52"
  },
  {
    "url": "parts/fullscreen.png",
    "revision": "88642e7dfd903889494780dc7bcb4001"
  },
  {
    "url": "parts/gps.png",
    "revision": "9842984979e546ab65b5d2d3d950159e"
  },
  {
    "url": "parts/help.png",
    "revision": "1db703434e9ab71c7d60ab8762d25c07"
  },
  {
    "url": "parts/hide_marker.png",
    "revision": "733de5cdee50bd4a793ebedeca2d8090"
  },
  {
    "url": "parts/home.png",
    "revision": "afe89acbe782a01937628b1f3d18501a"
  },
  {
    "url": "parts/loading_image.png",
    "revision": "192f06bfd1c723d52c96f2b2c7515604"
  },
  {
    "url": "parts/loading.png",
    "revision": "617a6e8f8d4e2f7b1f5b8b6392d1a6fd"
  },
  {
    "url": "parts/Maplat.png",
    "revision": "3e2697d021dfcbd0a14907c135c27d50"
  },
  {
    "url": "parts/minus.png",
    "revision": "98d8bc22d4d426b44bbad4033e67e3ab"
  },
  {
    "url": "parts/no_image.png",
    "revision": "3eca7da567c5dcc0f0542e404feb6ecb"
  },
  {
    "url": "parts/overlay.png",
    "revision": "bb91fb788e85eb2f80901951fd6790cc"
  },
  {
    "url": "parts/pd.png",
    "revision": "e243e609b6cf5e588d8c3b4dc023a963"
  },
  {
    "url": "parts/plus.png",
    "revision": "38d8da7f1be1529ab555bc08e0b15ead"
  },
  {
    "url": "parts/red_marker.png",
    "revision": "7f5a919a8d17390929bb92f3dc480cee"
  },
  {
    "url": "parts/redcircle.png",
    "revision": "3bb615256d903d1c7f14e169f35ae6f9"
  },
  {
    "url": "parts/share.png",
    "revision": "b6c74c469d83558223fd13d8e921ec98"
  },
  {
    "url": "parts/slider.png",
    "revision": "31b399f580e564dca55ede0edfd014d7"
  },
  {
    "url": "locales/en/translation.json",
    "revision": "582e7ef52aa1468ff4729a506839ae33"
  },
  {
    "url": "locales/ja/translation.json",
    "revision": "e667c531c86c266c7b3c2f2c38d74d56"
  },
  {
    "url": "locales/ko/translation.json",
    "revision": "a25a3ca96e7ad486211556d5865d74d7"
  },
  {
    "url": "locales/zh-TW/translation.json",
    "revision": "1b9d0ac1a1c4f23478a2c7e8b67ccee5"
  },
  {
    "url": "locales/zh/translation.json",
    "revision": "1cb84f5bfd108637f0b44e6b8638e65f"
  },
  {
    "url": "fonts/clarenbd-webfont.eot",
    "revision": "7a3f8c05eb924cccdde0874dd522268e"
  },
  {
    "url": "fonts/clarenbd-webfont.svg",
    "revision": "877daf82b367b4f2967fa7da9d13d747"
  },
  {
    "url": "fonts/clarenbd-webfont.ttf",
    "revision": "f2d7485a4f532b7ad6bd14fc6afd55bb"
  },
  {
    "url": "fonts/clarenbd-webfont.woff",
    "revision": "98ac5855d26c334c24e50ed178ce3e39"
  },
  {
    "url": "fonts/clarenbd-webfont.woff2",
    "revision": "5537c950cd889a13c0a685c106401bd8"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(?:maps\/.+\.json|pwa\/.+|pois\/.+\.json|apps\/.+\.json|tmbs\/.+_menu\.jpg|img\/.+\.(?:png|jpg))$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"resourcesCache", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
