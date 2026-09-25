// Ce service worker ne fait plus de cache : il se désinstalle et nettoie
// tout cache précédent, pour ne plus jamais bloquer les mises à jour.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then(clientsList => clientsList.forEach(client => client.navigate(client.url)))
  );
});
