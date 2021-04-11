// let cacheData = 'appV1';
// this.addEventListener('install', (e)=>{
//     e.waitUntil(
//         caches.open(cacheData).then(
//             (cache) => {
//                 cache.addAll([
//                     '/static/js/bundle.js',
//                     '/static/js/vendors~main.chunk.js',
//                     '/static/js/main.chunk.js',
//                     '/static/media/moon1.a38c7ab3.svg',
//                     '/static/media/tic.54965f02.svg',
//                     '/static/media/delete.90a1fb1c.svg',
//                     '/static/media/sun.1eccdece.svg',
//                     '/favicon.ico',
//                     'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap',
//                     '/index.html',
//                     '/manifest.json',
//                     'https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYpEY6HOpWw.woff2',
//                     '/'
//                 ])
//             }
//         )
//     )
// })

// this.addEventListener('fetch', (event) => {
//     console.log('hi')
//     event.respondWith(
//         caches.match(event.request).then(
//             (resp) => {
//                 if (resp)
//                 {
//                     return resp 
//                     console.log(resp)
//                 }
//             }
//         )
//     )
// })