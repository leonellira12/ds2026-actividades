const clasificar_nota = (nota) => {
    if (nota<4 && nota>0) return "Desaprobado";
    if (nota>=4 && nota<=7) return "Aprobado";
    if (nota>=8 && nota<=10) return "Promocionado";
    else return "Nota Erronea"
}

const numerodia = (dia) => {
    switch(dia){
        case 1: return "Lunes"
        case 2: return "Martes"
        case 3: return "Miercoles"
        case 4: return "Jueves"
        case 5: return "viernes"
        case 6: return "Fin de semana"
        case 7: return "Fin de semana"
        default: return "Ingrese un dia entre 1-7"
    }
}

console.log(clasificar_nota(1));
console.log(numerodia(4));
