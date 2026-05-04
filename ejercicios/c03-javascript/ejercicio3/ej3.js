const calcularPrecioFinal = (monto, medio) => {
    
    if (monto<200){
        console.log(`monto: ${monto} | pago: ${medio} | final: ${monto}`)
    } 
    
    else if (monto>=200 && monto<=400){
    
       if(medio === "E"){
            let final = monto - monto * 0.3;
            console.log(`monto: ${monto} | pago: ${medio} | final: ${final}`);
        }
        
        else if(medio === "D"){
            let final = monto - monto * 0.2;
            console.log(`monto: ${monto} | pago: ${medio} | final: ${final}`);
        } 
        
        else if(medio === "C" ){
            let final = monto - monto * 0.1;
            console.log(`monto: ${monto} | pago: ${medio} | final: ${final}`);
        }
        
        else return "Medio debe ser E, D o C";
    }
    
    else  if(monto>400){ 
    let final = monto - monto * 0.4;
    console.log(`monto: ${monto} | pago: ${medio} | final: ${final}`)
    }
}

console.log(calcularPrecioFinal(200, "E"))