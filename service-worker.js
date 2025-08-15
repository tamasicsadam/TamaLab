const CACHE_NAME = "diagnosztikai-checklist-v1";
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(['./','./index.html','./style.css','./script.js','./manifest.json'])));});
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));});