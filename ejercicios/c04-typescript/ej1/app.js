"use strict";
const boton = document.querySelector('#mi-boton');
const input = document.querySelector('#mi-input');
const pantalla = document.querySelector('#mi-pantalla');
function generarAstericos(n) {
    let arbol = "";
    for (let i = 1; i <= n; i++) {
        arbol += "*".repeat(i) + "<br>";
    }
    return arbol;
}
boton.addEventListener('click', (e) => {
    const n = Number(input.value);
    if (input.value === "" || n < 1) {
        pantalla.innerHTML = `<h2> Error: ingrese un numero valido mayor a 0!</h2>`;
        return;
    }
    pantalla.innerHTML = generarAstericos(n);
});
