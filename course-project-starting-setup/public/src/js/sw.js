self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('second-app')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/src/css/app.css',
                    '/src/js/app.js'
                ])
            })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                return res;
            })
    );
});
self.addEventListener("install", event => {
    console.log("Service Workers installing... ", event);
});
self.addEventListener("activate", event => {
    console.log("Activating Service Workers ", event);
    return self.clients.claim()
});
