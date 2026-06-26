/* Montage service worker — cache-first for app shell & assets. */
const CACHE = 'montage-v1';
const BASE = '/Montage/';
const PRECACHE = [
  BASE,
  BASE + 'index.html',
  BASE + 'mathematics.html',
  BASE + 'physics.html',
  BASE + 'engineering.html',
  BASE + 'cs-ai-ml.html',
  BASE + 'personal-dev.html',
  BASE + 'career-finance.html',
  BASE + '404.html',
  BASE + 'manifest.json',
  BASE + 'assets/css/main.css',
  BASE + 'assets/js/app.js',
  BASE + 'assets/js/landing.js',
  BASE + 'assets/js/renderer.js',
  BASE + 'assets/js/search.js',
  BASE + 'assets/js/bookmarks.js',
  BASE + 'assets/js/quiz.js',
  BASE + 'assets/js/utils.js',
  BASE + 'assets/data/index.js',
  BASE + 'assets/data/mathematics.js',
  BASE + 'assets/data/physics.js',
  BASE + 'assets/data/engineering.js',
  BASE + 'assets/data/cs-ai-ml.js',
  BASE + 'assets/data/personal-dev.js',
  BASE + 'assets/data/career-finance.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // cache same-origin and CDN GET responses opportunistically
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy).catch(() => {}));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
