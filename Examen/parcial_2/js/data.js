
function Buscar() {
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    // Once data is fetched, do something with it
    document.getElementById('select-option').addEventListener('change', function() {
        displayData(data, parseInt(this.value));
    });
    displayData(data, 1);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
}

function displayData(data, option) {
    // Get the container element
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
    
     // Create table element
     const table = document.createElement('table');
     table.classList.add('min-w-full', 'bg-white', 'border', 'divide-y', 'divide-gray-200');

     // Create table head
     const thead = document.createElement('thead');
     thead.classList.add('bg-gray-50');

     const th = document.createElement('th');
     th.classList.add('px-6', 'py-3', 'text-center', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider');
     th.textContent = 'NFL pendientes';
     
     thead.appendChild(th);
     table.appendChild(thead);

     // Create table body
     const tbody = document.createElement('tbody');
     data.forEach(item => {
         const tr = document.createElement('tr');
         const td = document.createElement('td');
         const img = document.createElement('img');

        img.classList.add('h-[15%]', 'w-[15%]','mx-auto');
        td.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'font-medium', 'text-gray-900','mx-auto');

         let text = '';
         let image = '';
         switch(option) {
             case 1:
                 text = `ID: ${item.id}`;
                 img.src = item.imageUrl; // Set image source
                img.alt = 'Completed Image';
                 break;
             case 2:
                 text = `ID: ${item.id}, Title: ${item.title}`;
                 img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             case 3:
                 if (item.completed)
                     text = `ID: ${item.id}, Title: ${item.title} (Completed: True)`;
                    img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             case 4:
                 if (!item.completed)
                     text = `ID: ${item.id}, Title: ${item.title} (Completed: False)`;
                    img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             case 5:
                 text = `ID: ${item.id}, UserID: ${item.userId}`;
                 img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             case 6:
                 if (item.completed)
                     text = `ID: ${item.id}, UserID: ${item.userId} (Completed: True)`;
                    img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             case 7:
                 if (!item.completed)
                     text = `ID: ${item.id}, UserID: ${item.userId} (Completed: False)`;
                    img.src = item.imageUrl; // Set image source
                    img.alt = 'Completed Image';
                 break;
             default:
                 text = '';
                 img.src = ' '; // Set image source
                img.alt = 'Completed Image'; // Do nothing for default option
         }
         if (text !== '') {
             td.textContent = text;
             td.appendChild(img);
             tr.appendChild(td);
             tbody.appendChild(tr);
         }
     });
     table.appendChild(tbody);
     container.appendChild(table);
}
