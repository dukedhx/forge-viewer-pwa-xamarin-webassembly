const CACHE_NAME = 'FORGE_PWA_VIEWER_CACHE';
const urlsToCache = [
    'index.html',
    'service-worker.js',
    'https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.7/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'mono.js',
    'mono.wasm',
    'api/forge/dictionary/config?type=js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
               return cache.addAll(urlsToCache)
            })
   )
});

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
               console.log('Opened cache');
               return cache.addAll(urlsToCache)
            })
   )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
           .then(function (response) {
              if (response) {
                  return response;
          }
          return fetch(event.request);
        })
  )
})
