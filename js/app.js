const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })  // end of fetch

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generarImagen(data){
    const html = `
    <img src='${data}' alt>
        <p>Click para ver imagenes de ${select.value}s</p>
        `;	
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

