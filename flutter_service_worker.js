'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "1024.png": "ad11fce89d2b72dd25f9dfe6b6d954cd",
"version.json": "ef5cfecfa9e0c4ec3c832161e2520fb6",
"logoveci.png": "e5077cce2eee91543d1cad146f5615f4",
"index.html": "f7ec669897eab6f5a02318afebde9972",
"/": "f7ec669897eab6f5a02318afebde9972",
"styles.css": "71426e04922451f4db6f66ed398b164b",
"main.dart.js": "990af10da2f7dbcc0cd7457944d63856",
"Icon-192.png": "4c2b5ac37b8628335d07dae362731c02",
"loading.gif": "5894bc09d84783ead8d69e0a15a33572",
"favicon.png": "00ca13cfd965ed4d773f80548fdf77c4",
"manifest.json": "376b61cf2b543dde3479de7454060b9b",
"assets/locales/ESP.json": "c1a8bd56ed3f43e22ad81dc034f7bc22",
"assets/locales/SRB.json": "70a74564df7275ecdb90c98f4be05594",
"assets/locales/SLO.json": "96eabac7701ffe8983d5937f13303d11",
"assets/locales/ENG.json": "7778eec15c1f2959d75305078f6e5579",
"assets/AssetManifest.json": "a7bf19a8f5574ca6b4565d2f32d43db8",
"assets/NOTICES": "f3edb756fef9e07aa4d9b66d5cd95bff",
"assets/FontManifest.json": "e10f091b82c6989faf4af52537b99274",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logoveci.png": "e5077cce2eee91543d1cad146f5615f4",
"assets/assets/images/creative_europe.png": "d89de2e8f2c21cd8166d9eab7312d8aa",
"assets/assets/images/eu.png": "913204fd1b5392422614ba10947a2276",
"assets/assets/icons/about/about04.png": "a3fc36782e9690db47d846898f49262e",
"assets/assets/icons/about/about03.png": "0544262b40876a3e88d665a01d207135",
"assets/assets/icons/about/about02.png": "9cc958075848e4867c892549515f93ca",
"assets/assets/icons/about/about01.png": "3b22bc83f02b40f238d230dd3d518631",
"assets/assets/icons/play-8.png": "3fc6a80b5764df0c10b192fc8ef69d58",
"assets/assets/icons/left.png": "b20bc55c621536392d75e5c7e99898a9",
"assets/assets/icons/appstore-8.png": "4b85ee39ca7113fff88f9740970449a2",
"assets/assets/icons/partnership/Asset9.png": "48ce606566942e23f9d7972cfbaee778",
"assets/assets/icons/partnership/Asset8.png": "e5663f8f101d61441e6b124659f5908e",
"assets/assets/icons/partnership/Asset6.png": "246cad018f9a5e212668c0b1c00e3c37",
"assets/assets/icons/partnership/Asset7.png": "cb2ae0de2676f912963b278bcad61078",
"assets/assets/icons/partnership/Asset5.png": "ff75823222045b9d942924c65e49efae",
"assets/assets/icons/partnership/Asset4.png": "7c541f5986c2df511d4df74f56231d26",
"assets/assets/icons/partnership/Asset1.png": "f6ad5a1eb954ec4176cb2bc02baf671b",
"assets/assets/icons/partnership/Asset3.png": "ff9b430d0118baa3d9f6e5d5c9309ac3",
"assets/assets/icons/partnership/Asset2.png": "970b9d6bef17fe57ec4f1ccf5a11f23a",
"assets/assets/icons/right.png": "c10fda17098853f95a8314e1fb279423",
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
