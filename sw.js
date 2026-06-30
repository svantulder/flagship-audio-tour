const CACHE_NAME = 'flagship-tour-v5'; // Bumped to force the browser to wipe the old cache

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json'
    // ALL MP3s AND IMAGES REMOVED FROM HERE
];

// 1. Install Event: Cache core UI assets
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Caching core UI assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 3. Fetch Event: Stale-while-revalidate for static, Cache-first for dynamic cloud assets
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Handle Supabase Storage Assets (Images & Audio) dynamically
    if (requestUrl.hostname.includes('supabase.co') && requestUrl.pathname.includes('/storage/')) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                return cachedResponse || fetch(event.request).then(networkResponse => {
                    return caches.open('flagship-dynamic-v1').then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => {
                    return new Response('', { status: 404, statusText: 'Offline' });
                });
            })
        );
        return;
    }

    // Default handler for local static files
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// 4. Message Event: Force the waiting service worker to become active
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});