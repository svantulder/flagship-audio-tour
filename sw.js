// List every static asset and audio file your app needs to run offline
const CACHE_NAME = 'flagship-tour-v3'; // Must bump to v3

// Notice the dots added before every slash
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './logo.svg',
    './VOC.mp3',
    './grachtengordel.mp3',
    './houseboats.mp3',
    './dancing_houses.mp3',
    './anne_frank.mp3',
    './jordaan.mp3',
    './westerkerk.mp3',
    './leidseplein.mp3',
    './vondelpark.mp3',
    './museumplein.mp3',
    './bicycles.mp3',
    './three_crosses.mp3',
    './Damsquare.mp3'
];

// 1. Install Event: Cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache and caching assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. Activate Event: Clean up old caches if you push an update
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

// 3. Fetch Event: Intercept network requests and serve from cache first
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Return the cached file if it exists, otherwise try the network
            return response || fetch(event.request);
        })
    );
});