const CACHE_NAME =
  "cs-vittel-tennis-v3";


const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./Icons/icon-192.png",
  "./Icons/icon-512.png",
  "./Icons/apple-touch-icon.png"
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
