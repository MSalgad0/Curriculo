self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('airhorner').then(cache => {
            return cache.addAll([
                '/',
                './index.html',
                './manifest/appstore.png',
                './manifest/playstore.png',
                './manifest/logo.png'
                
            ])
                .then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});