const boton = document.querySelector('#mi-boton');
const input = document.querySelector('#mi-input');
const pantalla = document.querySelector('#mi-pantalla');
let arbol = "";

boton.addEventListener('click', (e) => {
    
    const n = Number(input.value);
    
    if( input.value === "" || n<1){
        pantalla.innerHTML = `<h2> Error: ingrese un numero valido mayor a 0!</h2>`;
        return;
    }

     for (let i=0; i<=n; i++){
        arbol += "*".repeat(i) + "\n";
    }
    
    pantalla.innerHTML = arbol;

});

