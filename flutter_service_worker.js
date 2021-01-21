'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "1024.png": "ad11fce89d2b72dd25f9dfe6b6d954cd",
"version.json": "ef5cfecfa9e0c4ec3c832161e2520fb6",
"logoveci.png": "e5077cce2eee91543d1cad146f5615f4",
"index.html": "2da24b169adbdb0c38f3cd65fd3e02af",
"/": "2da24b169adbdb0c38f3cd65fd3e02af",
"styles.css": "71426e04922451f4db6f66ed398b164b",
"main.dart.js": "f78530dcc7761f83a9bf6bc513f0d52b",
"Icon-192.png": "4c2b5ac37b8628335d07dae362731c02",
"loading.gif": "5894bc09d84783ead8d69e0a15a33572",
"favicon.png": "00ca13cfd965ed4d773f80548fdf77c4",
"manifest.json": "376b61cf2b543dde3479de7454060b9b",
"assets/locales/ESP.json": "6cc006086c04632df698ec79a4a95d73",
"assets/locales/SRB.json": "8c3e9f8a6ea647c348d5cdc99316f107",
"assets/locales/SLO.json": "7f23056bda09f6f6792fcf45629ac62f",
"assets/locales/ENG.json": "35ade50f22a0a6602654936dcbb300e4",
"assets/AssetManifest.json": "f591c0628a76a7cded8ca0ac2ea9a7da",
"assets/NOTICES": "9a200f5da86ccd7d5c71616e110d2edd",
"assets/FontManifest.json": "cbf46815b3f8be10fbfa84e2b7e7cc91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logoveci.png": "4bcebee794f7c6fead39294f93066278",
"assets/assets/images/creative_europe_right.png": "513beefc778765a9475efe1d32e8da77",
"assets/assets/images/creative_europe_right_monochrome.png": "7aedd8977c9c78a2ffa2224219601a0c",
"assets/assets/images/creative_europe.png": "d89de2e8f2c21cd8166d9eab7312d8aa",
"assets/assets/images/eu.png": "913204fd1b5392422614ba10947a2276",
"assets/assets/icons/about/about04.png": "a3fc36782e9690db47d846898f49262e",
"assets/assets/icons/about/about03.png": "0544262b40876a3e88d665a01d207135",
"assets/assets/icons/about/about02.png": "9cc958075848e4867c892549515f93ca",
"assets/assets/icons/about/about01.png": "3b22bc83f02b40f238d230dd3d518631",
"assets/assets/icons/play-8.png": "3fc6a80b5764df0c10b192fc8ef69d58",
"assets/assets/icons/left.png": "b20bc55c621536392d75e5c7e99898a9",
"assets/assets/icons/appstore-8.png": "4b85ee39ca7113fff88f9740970449a2",
"assets/assets/icons/partnership/Asset9.png": "7e27cda7884b373ae5c5edc3efe1e4f8",
"assets/assets/icons/partnership/Asset8.png": "e2d07e67b2ab6e216e7d7d0bbccf0a45",
"assets/assets/icons/partnership/Asset6.png": "718a74623c0e7c0f3618a22e367bb0a7",
"assets/assets/icons/partnership/Asset7.png": "60af1b5c63e4d06b4c0192f9bd3b3465",
"assets/assets/icons/partnership/Asset5.png": "51d649e2ae748175c3a84f2be1861009",
"assets/assets/icons/partnership/Asset4.png": "f4eef273c69226e01704e805c64453af",
"assets/assets/icons/partnership/Asset1.png": "017f9f487952ed9b8b779ae124d0dbfe",
"assets/assets/icons/partnership/Asset3.png": "adbf9cb00b5827ebbc2e66fc83831cb9",
"assets/assets/icons/partnership/Asset2.png": "2b50d103bef5774263112e5f5b7bd635",
"assets/assets/icons/right.png": "c10fda17098853f95a8314e1fb279423",
"assets/assets/icons/share/instagram.png": "0154c2b4481588fb11b86cc99a3865cc",
"assets/assets/icons/share/pintrest.png": "851ef1877391f1869370d3389aa1ccc9",
"assets/assets/icons/share/twitter.png": "7d1c662aec96576df6739d401046c25f",
"assets/assets/icons/share/linkedin.png": "dc79c5bf6810763b8a6ebd481858e318",
"assets/assets/icons/share/share.png": "de213d90d8e377785adebe35e4bcfe81",
"assets/assets/icons/share/facebook.png": "0b7f2a4c35c6eb1ac382d4b3680adace",
"assets/assets/font/montserrat/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/font/montserrat/Montserrat-BlackItalic.otf": "3da12a02bb360cd21abc432517b546d2",
"assets/assets/font/montserrat/Montserrat-Light.otf": "d4a8834fa8f57f0929b9f4ef89584361",
"assets/assets/font/montserrat/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/font/montserrat/Montserrat-Black.otf": "561246a3549d3b797b4b611652a79d7c",
"Icon-512.png": "ad11fce89d2b72dd25f9dfe6b6d954cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
