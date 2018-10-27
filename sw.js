const resourcesToCache = [
'./',
'./css/styles.css',
'./data/restaurants.json',
'./js/dbhelper.js',
'./js/main.js',
'./js/restaurant_info.js',
'index.html',
'restaurant.html',
'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
'https://api.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.js',
'https://api.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css',
'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
], myCache = 'restaurantreview-v1';


for(let i = 1; i <= 10; i++){
	resourcesToCache.push(`./img/${i}.jpg`);
}

self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open(myCache).then(function(cache) {
      return cache.addAll(resourcesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurantreview-') &&
                 cacheName != myCache;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request).then(function(response) {

      return response || fetch(event.request);
    })
  );
});

self.addEventListener('message', function(event) {
  if (event.data.updateServiceWorker === true) {
    self.skipWaiting();
  }
});
