var url = "https://jsonplaceholder.typicode.com/todos";

fetch(url).then(response => response.json()).then(data => {
    var lista = [];

    data.forEach(element => {
        lista.push(element.id);
    });

    //Lista de todos los pendientes solo IDS
    console.log("\nLISTA DE TODOS LOS PENDIENTES (Solo IDS): \n"+ lista);

})

fetch(url).then(response => response.json()).then(data => {
    var lista_pendientes = [];
    var lista_resuelto = [];
    var lista_sin_resuelto = [];

    data.forEach(element => {
        lista_pendientes.push("IDS: "+ element.id +"Title: " +element.title);

        if (element.completed == true){
            lista_resuelto.push("IDS: "+ element.id +"Title: " +element.title);
        }
        else
        {
            lista_sin_resuelto.push("IDS: "+ element.id +"Title: " +element.title);
        }
    });

    //lista de pendientes solo IDS y TITULOS
    console.log("\nLISTA DE TODOS LOS PENDIENTES (IDS y titles): \n "+ lista_pendientes);
    
    //lista de pendientes sin resolver solo IDS y TITULOS
    console.log("\nLISTA DE TODOS LOS PENDIENTES SIN RESOLVER: (IDS y titles) \n"+ lista_sin_resuelto);
    
    //lista de pendientes resueltos solo IDS y TITULOS
    console.log("\nLISTA DE TODOS LOS PENDIENTES RESUELTOS: (IDS y titles) \n"+ lista_resuelto);


})

fetch(url).then(response => response.json()).then(data => {
    var lista_pendientes = [];
    var lista_resuelto = [];
    var lista_sin_resuelto = [];

    data.forEach(element => {
        lista_pendientes.push("IDS: "+ element.id +"userId: " +element.userId);

        if (element.completed == true){
            lista_resuelto.push("IDS: "+ element.id +"userId: " +element.userId);
        }
        else
        {
            lista_sin_resuelto.push("IDS: "+ element.id +"userId: " +element.userId);
        }
    });

    //lista de pendientes solo IDS y USERID
    console.log("\nLISTA DE TODOS LOS PENDIENTES: (IDS y UserID) \n"+ lista_pendientes);

    //lista de pendientes sin resolver solo IDS y USERID
    console.log("\nLISTA DE TODOS LOS PENDIENTES SIN RESOLVER: (IDS y UserID) \n"+ lista_sin_resuelto);

    //lista de pendientes resueltos solo IDS y USERID
    console.log("\nLISTA DE TODOS LOS PENDIENTES RESUELTOS: (IDS y UserID) \n"+ lista_resuelto);

})
