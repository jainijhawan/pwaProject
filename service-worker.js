
self.addEventListener('install', (event) => {
    console.log('[SW] Install!:', event);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activate:', event);
    event.waitUntil(clients.claim());
});

self. addEventListener ('fetch', () => {
    return;
});