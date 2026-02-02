const CACHE_NAME = 'plywood-home-v1';
const RUNTIME_CACHE = 'plywood-home-runtime';
const ASSET_CACHE = 'plywood-home-assets';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.css',
  '/src/index.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName !== CACHE_NAME && 
            cacheName !== RUNTIME_CACHE && 
            cacheName !== ASSET_CACHE
          )
          .map(cacheName => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle API requests with network-first strategy
  if (url.pathname.startsWith('/api/') || url.hostname.includes('make.com') || url.hostname.includes('cloudinary.com')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const cache = request.method === 'GET' ? caches.open(RUNTIME_CACHE) : Promise.resolve(null);
            cache.then(c => c && c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then(response => {
            return response || new Response(
              JSON.stringify({ error: 'Offline' }),
              { status: 503, headers: { 'Content-Type': 'application/json' } }
            );
          });
        })
    );
    return;
  }

  // Handle image requests with cache-first strategy
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) return response;
          return fetch(request).then(response => {
            if (response.ok) {
              caches.open(ASSET_CACHE).then(cache => {
                cache.put(request, response.clone());
              });
            }
            return response;
          });
        })
        .catch(() => {
          // Return a placeholder image if offline
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="#f0f0f0" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="sans-serif">Image unavailable</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        })
    );
    return;
  }

  // Handle document requests with network-first strategy
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, response.clone());
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then(response => {
            return response || caches.match('/');
          });
        })
    );
    return;
  }

  // Default: cache-first for everything else
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) return response;
        return fetch(request).then(response => {
          if (response.ok && request.method === 'GET') {
            caches.open(RUNTIME_CACHE).then(cache => {
              cache.put(request, response.clone());
            });
          }
          return response;
        });
      })
      .catch(() => {
        return new Response('Offline - Resource not available', { status: 503 });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
