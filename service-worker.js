const CACHE_NAME = "diagnosztikai-checklist-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css"
];

// Telepítés
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Kérés kezelése
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
