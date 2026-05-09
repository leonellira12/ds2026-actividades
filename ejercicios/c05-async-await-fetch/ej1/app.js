"use strict";
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const Usuarios = await response.json();
        return Usuarios;
    }
    catch (error) {
        console.error('Error al obtener usuarios', error);
        return [];
    }
}
async function iniciarApp() {
    let listaUsuarios = await obtenerUsuarios();
    listaUsuarios.forEach( usuario => {
        console.log(`Nombre: ${usuario.name} Email: ${usuario.email}`);
    });
}
iniciarApp();
