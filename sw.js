const CACHE_NAME =
  "cs-vittel-tennis-v1";


const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];


self.addEventListener(
  "install",
  function(event) {

    event.waitUntil(

      caches
        .open(CACHE_NAME)

        .then(
          function(cache) {

            return cache.addAll(
              FILES_TO_CACHE
            );

          }
        )

    );

  }
);


self.addEventListener(
  "fetch",
  function(event) {

    event.respondWith(

      fetch(
        event.request
      )

        .catch(
          function() {

            return caches.match(
              event.request
            );

          }
        )

    );

  }
);
