'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01b6b6f6ebd57a4149f2687ba00e7894",
"index.html": "ed14a530f9a043770c09e57f07318290",
"/": "ed14a530f9a043770c09e57f07318290",
"main.dart.js": "71ffb6b31c0efe224ea93600e9d74db3",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16aaf74b4b82794cf07c385cfae9376a",
"assets/AssetManifest.json": "1a3e645c4466ed380a3ad0ec84d74271",
"assets/NOTICES": "649a484004688e9af81af51a71def49a",
"assets/FontManifest.json": "0813ef4bf39677171c938a295f4a69ac",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/res/buttons/btn_stepper_minus_normal.svg": "17623c7b9666905a656d0ae11743e5bb",
"assets/assets/res/buttons/btn_stepper_minus_pressed.svg": "2df45f17a3979be0d2745112261ffa1f",
"assets/assets/res/buttons/btn_stepper_plus_pressed.svg": "46c8ce27f4493d22cd3b802215b46111",
"assets/assets/res/buttons/btn_main_list_cart.svg": "0695ebb057fe6999b1329390d6071840",
"assets/assets/res/buttons/btn_stepper_plus_disabled.svg": "110583fd40b9aa16da6b9d9155704959",
"assets/assets/res/buttons/btn_stepper_plus_normal.svg": "d05eb54a7f4bb7b8e639b3b15b1034be",
"assets/assets/res/buttons/btn_stepper_minus_disabled.svg": "ec017151abf3d0336edbda695ebe0362",
"assets/assets/res/icons/ic_list_plus.svg": "fe3114f056c476c19633b71ffffa76e7",
"assets/assets/res/icons/ic_function_menu_delete.svg": "6e1fb231d08828965ff22a61558e48e4",
"assets/assets/res/icons/ic_list_cart.svg": "4ee698d350730a5eaab08579bc4a10c8",
"assets/assets/res/icons/ic_title_clerk_call.svg": "dd55624d80ade5663f51d3545a3057f3",
"assets/assets/res/icons/ic_function_input_remove.svg": "1b80ba1abd987d53a4feffd2e4f10efc",
"assets/assets/res/icons/ic_function_list_close.svg": "9a7f2d513e67fb0b5d4f9a546edb81cc",
"assets/assets/res/icons/ic_popup_tissue.svg": "cd1580fac9bb56894d753eb113edf938",
"assets/assets/res/icons/ic_list_minus.svg": "0cf63ed84f4ef74dea73fe2ea9c6eb57",
"assets/assets/res/icons/ic_title_shop_info.svg": "f42ee6dca99374103e8485be35f51094",
"assets/assets/res/icons/ic_function_bottom_sheet_close.svg": "7f486af2fd822ed45617ee43bc4b8fd0",
"assets/assets/res/icons/ic_list_special_menu.svg": "fae30998170e95dec633cd967a49f5f4",
"assets/assets/res/icons/ic_popup_side_dish.svg": "a1a00383504f2661a013510eb7da4d8d",
"assets/assets/res/icons/ic_popup_custom.svg": "ba35c10e739be20bf68d249ae57faedf",
"assets/assets/res/icons/ic_function_list_open.svg": "578d54d203c2b9682002df11a0a3d5b2",
"assets/assets/res/icons/ic_popup_clerk_call.svg": "5fc9462ba8333334558056a4c941d995",
"assets/assets/res/icons/ic_title_back.svg": "980e7dd3886d4f2a9c7f1a5ddf137d30",
"assets/assets/res/icons/ic_list_popular_menu.svg": "47475463fdfbc3fdf5dbaedeeca6e530",
"assets/assets/res/icons/ic_popup_apron.svg": "8e825f16bc78e1396ca5ac4c9a64a85b",
"assets/assets/res/icons/ic_popup_chopsticks.svg": "c271b529ebba922d27c847c6b8421e12",
"assets/assets/res/icons/ic_popup_water.svg": "d6aa1402c9c6412013696ab13646310d",
"assets/assets/web/game.html": "168e411ced5ca5f01e8a1459406b55e8",
"assets/assets/web/pay_init.html": "6bfea5fcec29f591988014f39c17650b",
"assets/assets/img/thumbnail_game.png": "a67da63584b787be9b26ede1e6aafac4",
"assets/assets/img/logo.png": "91617eda733ebd6d85cd98e3a0790812",
"assets/assets/img/thumbnail_memo.png": "53b2ec0bdd7a0cd126dec7b7bb527168",
"assets/assets/fonts/NanumSquareRoundOTFB.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/assets/fonts/NanumSquareRoundOTFR.otf": "30caed9c2deb38480396e8ed892dc3cc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
