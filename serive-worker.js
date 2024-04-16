self.addEventListener('fetch', function (event) {
    if (event.request.url.includes('articles-api.com/articles')) {
        event, respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    return caches.open('mon-cache-api').then(function (cache) {
                        caches.put(event.request, response.clone())
                        return response;
                    })
                })
            })
        )
    }
});