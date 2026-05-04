const num = [8,2,0,4,12,6,7,9];
let suma = 0;
let mayor = 0;
let menor = num[0];
let mensaje = "";

for (let i=0; i < num.length; i++){
    
    suma = suma + num[i];
    
    if ( num[i] >= mayor){
        mayor = num[i]; 
    } 

    if ( num[i] <= menor ){
        menor = num[i];
    }

}

const prom = suma / num.length;
console.log(`suma: ${suma} | numero mayor: ${mayor} | numero menor: ${menor} | promedio: ${prom}`);

const generarAsteriscos = (n) => {
    
    for (let i=0; i<n; i++){
        mensaje = mensaje + "*";
    }

    return mensaje;
}

console.log(generarAsteriscos(5)); 