const CACHE_NAME = 'FORGE_PWA_XAMARIN_CACHE';
const fetches = [];
const urlsToCache = [
    'forge_viewer.html',
    'forge_viewer_worker.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/6.*/style.min.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
               return cache.addAll(urlsToCache)
            })
   )
});

self.addEventListener('fetch',  event => {
    event.respondWith(
        caches.match(event.request)
          .then(async response => {
            if (response) return response;

            if (event.request.url.endsWith('/api/token')) {
                const response = await fetch(event.request);
                fetchOptions.headers = { 'Authorization': 'Bearer ' + response.access_token }
                return response
            } else fetches.push(event.request.url);
            return fetch(event.request)
      })
    )
});


self.addEventListener('message', async event => {
    switch (event.data.operation) {
        case 'EXECUTE_CACHE':
          await caches.open(CACHE_NAME).then(async cache => await Promise.all(fetches.map(url=>fetch(url, fetchOptions).then(resp => cache.put(url, resp)))));
          event.ports[0].postMessage({ status: 'ok', fetches });
          break
    }
});
