const cacheName = 'cacheAssets-v7'


self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('[SW] Install!:', event);
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                console.log('Cache:', cache);
                cache.addAll
                cache.add('/')
                cache.addAll([
                    '/',
                    '/index.html',
                    '/script.js',
                    '/style.css',
                    '/registerServiceWorker.js',
                    '/music.jpg',
                    '/manifest.json',
                    '/icons/android-chrome-192x192.png'
                ])
            })
            .catch((error) => {
                console.log('Cache failed:', error);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activate:', event);
    event.waitUntil(clients.claim());

    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames
            .filter(item => item !== cacheName)
            .map(item => caches.delete(item))
            );
    }))
});

self.addEventListener('fetch', (event) => {

    event.respondWith(
        caches.open(cacheName)
            .then((cache) => {
                return cache.match(event.request)
                    .then((response) => {
                        return response || fetch(event.request);
                    })
            })
    );
});