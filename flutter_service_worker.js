'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "1024.png": "ad11fce89d2b72dd25f9dfe6b6d954cd",
"logoveci-black.png": "a5ea6afdb26a7f4f2c749ea789595729",
"version.json": "36b25ac81298500e94e3c8bb8b25538d",
"logoveci.png": "e5077cce2eee91543d1cad146f5615f4",
"index.html": "b1e609025df04c3cc8f15af9bf3ce7ba",
"/": "b1e609025df04c3cc8f15af9bf3ce7ba",
"styles.css": "15b35af7d7525ea50fc58634e9eec3f8",
"main.dart.js": "c049d20ef948e4182c74299d8ff2088e",
"Icon-192.png": "4c2b5ac37b8628335d07dae362731c02",
"loading.gif": "5894bc09d84783ead8d69e0a15a33572",
"favicon.png": "00ca13cfd965ed4d773f80548fdf77c4",
"manifest.json": "376b61cf2b543dde3479de7454060b9b",
"assets/locales/ESP.json": "f9dc5f58b48b8589485d4d3a5c7a1a70",
"assets/locales/SRB.json": "84a213ac10cb0ba37d8d1586f7414e19",
"assets/locales/bkp/ESP.json": "dbf4d421ca59242e30a8da84feb36ce3",
"assets/locales/bkp/SRB.json": "1711f44be4d5cf0bd5ff96ab9173e1d9",
"assets/locales/bkp/SLO.json": "7a1857c884bce9022c789b426118d979",
"assets/locales/desc.json": "cc27a2034c7201abac870c4a9e97b939",
"assets/locales/SLO.json": "2d1d5495f3283eea874b69ceab64378b",
"assets/locales/ENG.json": "55d7e661136347b0d92c4d9002df91fb",
"assets/AssetManifest.json": "b44d0d13e9ac73a091a67b628f92c3fb",
"assets/NOTICES": "11db173d00c5b86de07bac027a88afc6",
"assets/FontManifest.json": "06e75cb3893f4530e71f4d87bce4fa0b",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logoveci-black.png": "a5ea6afdb26a7f4f2c749ea789595729",
"assets/assets/images/logoveci.png": "4bcebee794f7c6fead39294f93066278",
"assets/assets/images/creative_europe_right.png": "513beefc778765a9475efe1d32e8da77",
"assets/assets/images/creative_europe_right_monochrome.png": "7aedd8977c9c78a2ffa2224219601a0c",
"assets/assets/images/knowledge-img/strana%252045a.jpeg": "eb3516af0342c5fae8a5c3905790694a",
"assets/assets/images/knowledge-img/strana%252024-min.png": "281c8543cda585ffb84c211ad97fdee6",
"assets/assets/images/knowledge-img/strana%252049b.jpeg": "3592bcecd2cd72ead60d24e51447c335",
"assets/assets/images/knowledge-img/strana%252012-min.jpg": "42c184675abcfef810e77a27f1bfbc57",
"assets/assets/images/knowledge-img/strana%252033b.jpeg": "b7add55fea2bf746d9e78fe8b03ba661",
"assets/assets/images/knowledge-img/strana%252041.jpeg": "eaa4156d4133aef84d0c969c9f63d6f7",
"assets/assets/images/knowledge-img/strana%252047a.jpeg": "3e93d58a546d40048a0c0b21ec121791",
"assets/assets/images/knowledge-img/strana%252043a.jpeg": "aaafb254f316506c0e4270f8513bdce5",
"assets/assets/images/knowledge-img/strana%252013-min.jpg": "23174aee216bf01a92a301363a276add",
"assets/assets/images/knowledge-img/strana%252049c.jpeg": "663d8e1d80e65cc54b35bb91091164b5",
"assets/assets/images/knowledge-img/strana%252025-min.jpg": "0e9ff882d386234773c0ab74e37d89c1",
"assets/assets/images/knowledge-img/strana%252037.jpeg": "56e0da090ab47408bddb58e884e9acb8",
"assets/assets/images/knowledge-img/strana%252011-min.jpg": "fc65a16512be981bf717ecc1b8798366",
"assets/assets/images/knowledge-img/CABMGoodbyeSlo.png": "de9e42660dfdeff2a29546a457ff1ae3",
"assets/assets/images/knowledge-img/strana%252046a.jpeg": "d386e8c11a49e772e16aee178978a41b",
"assets/assets/images/knowledge-img/strana%252043f.jpeg": "2fd190f76fec6d4826d8b0365dbaefa6",
"assets/assets/images/knowledge-img/strana%252044a.jpeg": "2fd1017eb1f42e1cfe935aeccc6602a3",
"assets/assets/images/knowledge-img/strana%252018-min.jpg": "ae37f5c56131f16a071ae25bfed0a0ef",
"assets/assets/images/knowledge-img/strana%252048b.jpeg": "51e59438a6688c72cd962ec87a8300dc",
"assets/assets/images/knowledge-img/strana%252027-min.jpg": "edb77a87965c0ddd88aa61cd5077a644",
"assets/assets/images/knowledge-img/strana%252049d.jpeg": "3466d34c9b522cf07b5327f966b430ab",
"assets/assets/images/knowledge-img/strana%252019-min.jpg": "1ee6c01c88fb4c8fe34a6d8210fc2f34",
"assets/assets/images/knowledge-img/strana%252034b.jpeg": "eae8939b7a0de7be10d5760f9511ddc6",
"assets/assets/images/knowledge-img/strana%252009-min.png": "bf968bf670e5ae6f8347c7b9497c1a38",
"assets/assets/images/knowledge-img/strana%252012a-min.jpg": "7dde0537d829df8b137da00b609151ad",
"assets/assets/images/knowledge-img/strana%252026-min.png": "322d16678f2203b7f4f9ee1951b4f6f7",
"assets/assets/images/knowledge-img/CABMGoodbyeEsp.png": "fbe6b4bad2e9b76677ed9b98811ad712",
"assets/assets/images/knowledge-img/strana%252010-min.jpg": "131fcf89c96ea9515bc61b5964d9c7e7",
"assets/assets/images/knowledge-img/strana%252042a.jpeg": "0328583156802b18d3de26eef29dc2ec",
"assets/assets/images/knowledge-img/strana%252036b.jpeg": "0a18d644e477fe6653bce36768745d4b",
"assets/assets/images/knowledge-img/strana%252042b.jpeg": "078ed26bcce39970418694bf5c220c22",
"assets/assets/images/knowledge-img/strana%252043d.jpeg": "b9f9626f4acc3ed9f6dc59b109e9864c",
"assets/assets/images/knowledge-img/strana%252036a.jpeg": "403e633ea69737ad0abf279e4c49d70e",
"assets/assets/images/knowledge-img/strana%252005-min.jpg": "f24481af921e814a14bead78e1b6cc23",
"assets/assets/images/knowledge-img/strana%252015-min.jpg": "7f95740ac3097b51e93f498591bfa78c",
"assets/assets/images/knowledge-img/strana%252034a.jpeg": "3f0881e3872532b0d0afad81c8cce696",
"assets/assets/images/knowledge-img/strana%252044c.jpeg": "14746fffe0165fe792f5b25c0735b711",
"assets/assets/images/knowledge-img/strana%252022-min.jpg": "b31e16c88cdd70c39bd7e195dfcf214e",
"assets/assets/images/knowledge-img/strana%252044b.jpeg": "634b78114c216a83fee4f009d8061137",
"assets/assets/images/knowledge-img/strana%252048a.jpeg": "1667d7b8f4bf99701326eecd40b7760f",
"assets/assets/images/knowledge-img/strana%252014-min.png": "319d96ce0585bdd9005952f6294d722e",
"assets/assets/images/knowledge-img/strana%252046b.jpeg": "0cc1a4083ef7429858cc28cf5e095291",
"assets/assets/images/knowledge-img/strana%252043e.jpeg": "4898f894e95c6dba6b92c5cc248894e6",
"assets/assets/images/knowledge-img/strana%252004-min.jpg": "ce20b952199e07e419db70b41de21c77",
"assets/assets/images/knowledge-img/strana%252042c.jpeg": "8457735a8830214e7e6143033bb9022a",
"assets/assets/images/knowledge-img/strana%252020-min.jpg": "68ce11d02817a6adaf9d2eabf3055819",
"assets/assets/images/knowledge-img/strana%252030-min.jpg": "2812eebd855e20d6d07a87751ae7e552",
"assets/assets/images/knowledge-img/CABMGoodbyeSrb.png": "456144aa9a7db60133fc505992d95d0a",
"assets/assets/images/knowledge-img/help.txt": "bfe7f0c169a40c275d051dc8cd654a25",
"assets/assets/images/knowledge-img/strana%252042d.jpeg": "f9c3e8d3538ac4e877c3da29bbaaa232",
"assets/assets/images/knowledge-img/strana%252043b.jpeg": "ec30b193a3a5378cf6fbab60c536ae71",
"assets/assets/images/knowledge-img/strana%252029-min.jpg": "8d6af586a9261654ba450328059e8cc4",
"assets/assets/images/knowledge-img/strana%252038.jpeg": "1563c36602661d144be8c8c1416bfe29",
"assets/assets/images/knowledge-img/strana%252006-min.jpg": "5116179c61cd323404c36a71ae01daf0",
"assets/assets/images/knowledge-img/strana%252016-min.jpg": "8ce50318468ca76bf422902f700f64de",
"assets/assets/images/knowledge-img/strana%252033a.jpeg": "95eaf87833cccb0533a1281293d3c180",
"assets/assets/images/knowledge-img/strana%252028-min.jpg": "fae6de6d9d980d9d306c754e93f33f85",
"assets/assets/images/knowledge-img/strana%252043c.jpeg": "8b534c04528713c8aa0b6fb3c1c455cf",
"assets/assets/images/knowledge-img/CABMGoodbyeEng.png": "8228e009f2e27a02c7cc579cb42b4aaf",
"assets/assets/images/knowledge-img/strana%252047b.jpeg": "6f516725dfda6299b6cccf25f9215d87",
"assets/assets/images/knowledge-img/strana%252007-min.png": "f1bec74d7e5fe3e11e868e71a4d4c8d6",
"assets/assets/images/knowledge-img/strana%252017-min.png": "7db452a281e75fcd9e4daccac44cd52f",
"assets/assets/images/knowledge-img/strana%252031-min.jpg": "0aad67fd9c221792082e6a517c604b31",
"assets/assets/images/knowledge-img/strana%252045b.jpeg": "55bd0c1f43a53e7be1842e9329ae1ece",
"assets/assets/images/knowledge-img/strana%252049a.jpeg": "2727447f74e83902c73c2df057debf13",
"assets/assets/images/creative_europe.png": "d89de2e8f2c21cd8166d9eab7312d8aa",
"assets/assets/images/eu.png": "913204fd1b5392422614ba10947a2276",
"assets/assets/icons/partnership2/kglu.png": "fe816a071c6ff68511816e9a2b7b630d",
"assets/assets/icons/partnership2/msu.png": "f7be0b83be60add9906f4c0059b95ed4",
"assets/assets/icons/partnership2/kucalegata.png": "c1b8a67668080366670261da19d01cf1",
"assets/assets/icons/partnership2/zelenaljubljana.png": "14f6ac5fc2179001c684b41a8871abf9",
"assets/assets/icons/partnership2/srbijakultura.png": "0d7b377be9d64f92e7d10b02901e9575",
"assets/assets/icons/partnership2/espana.png": "c1b1ae9df012f422dbe930d3c8f24374",
"assets/assets/icons/partnership2/ljubljanakultura.png": "269ab303eb342b37ac2674abc6978e65",
"assets/assets/icons/partnership2/cccc.png": "f0089b4a272282d6eca2fe7ad1dc9657",
"assets/assets/icons/partnership2/ljubljana.png": "a58306c1bd2057259202ed90412f1096",
"assets/assets/icons/partnership2/france.png": "bec1ccae4d0734f7971da546a022ee0d",
"assets/assets/icons/partnership2/ljubljana2025.png": "203e32fec2f7171bbdecc22b431ade14",
"assets/assets/icons/partnership2/kresija.png": "d33360a2d5529a04cc28b77810dbb87f",
"assets/assets/icons/partnership2/slovenia.png": "6ad92bf4ca190fe1a02ed8bb8a9b2842",
"assets/assets/icons/about/about04.png": "a71ba122aa14d213095528803c95fd4f",
"assets/assets/icons/about/about03.png": "b67f1c8fd17fe50e6780cc92a7ebfd97",
"assets/assets/icons/about/about02.png": "c0a78e1f5b1804230e6efc92151a6af7",
"assets/assets/icons/about/about01.png": "f23eea5d63316fb2eaa2be3038dd5333",
"assets/assets/icons/play-8.png": "3fc6a80b5764df0c10b192fc8ef69d58",
"assets/assets/icons/left.png": "b20bc55c621536392d75e5c7e99898a9",
"assets/assets/icons/appstore-8.png": "4b85ee39ca7113fff88f9740970449a2",
"assets/assets/icons/partnership/Asset9.png": "7e27cda7884b373ae5c5edc3efe1e4f8",
"assets/assets/icons/partnership/Asset8.png": "e2d07e67b2ab6e216e7d7d0bbccf0a45",
"assets/assets/icons/partnership/Asset6.png": "718a74623c0e7c0f3618a22e367bb0a7",
"assets/assets/icons/partnership/Asset10.png": "8806fa6b7fa77cd45c3a89ba0183161c",
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
"Icon-512.png": "ad11fce89d2b72dd25f9dfe6b6d954cd",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
