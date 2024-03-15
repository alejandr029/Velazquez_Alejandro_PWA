self.addEventListener('install', event => {
    console.log('Service Worker installing.');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("SW: Instalacion Finalizada");
            self.skipWaiting();
            resolve();
        }, 1000);
    });
    event.waitUntil(instalacion);
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {

    const requestUrl = new URL(event.request.url);

    if (requestUrl.href === 'https://jsonplaceholder.typicode.com/todos') {
        event.respondWith(interceptarAPI(event.request));
    }

});


async function interceptarAPI(request) {
    const response = await fetch(request);

    if (request.url === 'https://jsonplaceholder.typicode.com/todos') {
        const data = await response.json();

        const modifiedData = data.map(todo => {
            const modifiedTodo = {
                id: todo.id,
                userId: todo.userId,
                title: todo.title,
                completed: todo.completed
            };

            if (todo.completed) {
                modifiedTodo.imageUrl = './img/NFL.webp';
            }
            else{
                if(todo.userId % 2 === 0){
                    modifiedTodo.imageUrl = './img/patriots.png';
                }else{
                    modifiedTodo.imageUrl = './img/sf.png';

                }
            }

            
            return modifiedTodo;
        });
        
        const modifiedResponse = new Response(JSON.stringify(modifiedData), {
            headers: { 'Content-Type': 'application/json' }
        });
        
        return modifiedResponse;
    }

    return response;
}
