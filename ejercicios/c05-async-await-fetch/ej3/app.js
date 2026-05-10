"use strict";
const q = document.getElementById("q");
const botonBuscar = document.getElementById("botonBuscar");
const resultados = document.getElementById("resultado");
botonBuscar.addEventListener('click', async (e) => {
    let busqueda = q.value.trim();
    if (busqueda === "") {
        resultados.innerHTML = "Error, debe ingresar un libro";
        return;
    }
    let url = "https://openlibrary.org/search.json?q=" + encodeURIComponent(busqueda);
    let listaLibros = await obtenerLibros(url);
    mostrarLibros(listaLibros);
});
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
        alert("Error, No se pudo obtener los libros");
        return [];
    }
}
function mostrarLibros(listaLibros) {
    resultados.innerHTML = "";
    if (listaLibros.length === 0) {
        resultados.innerHTML = "No se encontraron coincidentes";
        return;
    }
    const libros10 = listaLibros.slice(0, 10);
    libros10.forEach(lb => {
        const card = document.createElement('div');
        const autor = lb.author_name ? lb.author_name[0] : "Autor desconocido";
        const anio = lb.first_publish_year ? lb.first_publish_year : "Año desconocido";
        card.innerHTML = `
            <h3>${lb.title}</h3>
            <p>${autor}</p>
            <p>${anio}</p>
            <hr>
        `;
        resultados.appendChild(card);
    });
}
