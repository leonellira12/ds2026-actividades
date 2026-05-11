"use strict";

const q = document.getElementById("q");
const botonBuscar = document.getElementById("botonBuscar");
const resultados = document.getElementById("resultado");
const estadoBusqueda = document.getElementById("estadoBusqueda"); 

if (botonBuscar && q && resultados) {
    
    botonBuscar.addEventListener('click', async (e) => {
        let busqueda = q.value.trim();
        
        estadoBusqueda.innerHTML = ""; 
        resultados.innerHTML = "";

        if (busqueda === "") {
            estadoBusqueda.innerHTML = "Error, debe ingresar un libro";
            return;
        }
        
        estadoBusqueda.innerHTML = "<span class='text-danger'>Buscando libros...</span>"; 
        
        let url = "https://openlibrary.org/search.json?q=" + encodeURIComponent(busqueda);
        let listaLibros = await obtenerLibros(url);
        
        estadoBusqueda.innerHTML = "";
        mostrarLibros(listaLibros);
    });
}

async function obtenerLibros(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const resultado = await response.json();
        return resultado.docs;
    }
    catch (error) {
        estadoBusqueda.innerHTML = "Error, No se pudo conectarse al servidor.";
        return [];
    }
}

function mostrarLibros(listaLibros) {
    if (listaLibros.length === 0) {
        estadoBusqueda.innerHTML = "No se encontraron coincidentes";
        return;
    }
    
    const libros10 = listaLibros.slice(0, 10);
    
    libros10.forEach(lb => {
    
        const autor = lb.author_name ? lb.author_name[0] : "Autor desconocido";
        const anio = lb.first_publish_year ? lb.first_publish_year : "Año desconocido";
        
        const imagenUrl = lb.cover_edition_key 
            ? `https://covers.openlibrary.org/b/olid/${lb.cover_edition_key}-M.jpg` 
            : `https://via.placeholder.com/300x450/cccccc/000000/?text=Sin+Portada`;

    
        const columna = document.createElement('div');
        columna.className = "col";
    
        columna.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${imagenUrl}" class="card-img-top" alt="${lb.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${lb.title}</h5>
                    <p class="card-text text-muted mb-1"><small>Por ${autor}</small></p>
                    <p class="card-text"><small><strong>Año:</strong> ${anio}</small></p>
                    <a href="libro.html" class="btn btn-outline-primary mt-auto">Ver más</a>
                </div>
            </div>
        `;
        
        resultados.appendChild(columna);
    });
}