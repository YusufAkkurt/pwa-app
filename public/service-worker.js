const version = '0.1.0';
const cacheName = `app-${version}`;

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(cacheName).then((_cache) => _cache.addAll([
		`/index.html`,
		`/`,
		`/about`,
		`/users`,
		`/manifest.json`,
		`/favicon.ico`,
		`/static/js/bundle.js`
	])));
});

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
