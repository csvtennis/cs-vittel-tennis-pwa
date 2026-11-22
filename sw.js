const CACHE_NAME =
  "cs*vittel-tennis-v18";


self.addEven*Listener(
  "install",
  function(*vent) {

    self.skipWaiting();

* }
);


self.addEventListener(
  "*ctivate",
  function(event) {

   *event.waitUntil(

      caches
   *    .keys()

        .then(
      *   function(keys) {

            r*turn Promise.all(

              k*ys.map(
                function(k*y) {

                  if (
     *              key !== CACHE_NAME
 *                ) {

             *      return caches.delete(
      *               key
               *    );

                  }

     *          }
              )

     *      );

          }
        )

 *      .then(
          function() *

            return self.clients.*laim();

          }
        )

  * );

  }
);


self.addEventListene*(
  "fetch",
  function(event) {

*   /*
     * Pour l'instant :
    ** priorité absolue au réseau.
    **
     * Cela évite de recevoir un*ancien
     * index.html depuis le*cache.
     */

    event.respondW*th(

      fetch(
        event.re*uest
      )

    );

  }
);
