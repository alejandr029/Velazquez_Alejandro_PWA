var url = "https://jsonplaceholder.typicode.com/todos";

fetch(url).then(response => response.json()).then(data => {
    data.forEach(element => {
        console.log("ID: " + element.id);
    }) } )
