"use strict";
const Listado = document.getElementById("Listado");
const Cargando = document.getElementById("Cargando");
async function obtenerUsuarios() {
    try {
        Cargando.textContent = "Cargando...";
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const Usuarios = await response.json();
        Cargando.textContent = "";
        return Usuarios;
    }
    catch (error) {
        Cargando.textContent = "Error, no se pudo obtener los Usuaios";
        Cargando.style.color = "red";
        return [];
    }
}
async function iniciarApp() {
    let listaUsuarios = await obtenerUsuarios();
    listaUsuarios.forEach(usuario => {
        let li = document.createElement('li');
        li.innerHTML = `Nombre: ${usuario.name}<br>Email: ${usuario.email}<br>`;
        Listado.appendChild(li);
    });
}
iniciarApp();
