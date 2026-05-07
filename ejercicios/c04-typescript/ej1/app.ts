const boton = document.querySelector('#mi-boton') as HTMLButtonElement
const input = document.querySelector('#mi-input') as HTMLInputElement
const pantalla = document.querySelector('#mi-pantalla') as HTMLElement

function generarAstericos(n: number): string { 
    
    let arbol= ""; 
    
    for ( let i = 1 ; i<=n ; i++){
        arbol+="*".repeat(i) + "<br>";
    }

    return arbol;

}

boton.addEventListener('click', (e: Event) => {
    
    const n = Number(input.value);
    
    if( input.value === "" || n<1){
        pantalla.innerHTML = `<h2> Error: ingrese un numero valido mayor a 0!</h2>`;
        return;
    }
    
    pantalla.innerHTML = generarAstericos(n);

});



