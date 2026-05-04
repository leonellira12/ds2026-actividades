const boton_agr = document.getElementById('boton_agr')
const nom_prod = document.getElementById('nom_prod')
const lista_prod = document.getElementById('lista_prod')
const ctdor = document.getElementById('ctdor')

function actualizarContador() {
    const cantidad = lista_prod.children.length;
    ctdor.textContent = `${cantidad} productos en la lista`;
}

boton_agr.addEventListener('click', (e) => {
    
    const nombre = nom_prod.value.trim();

    if (nombre === ""){
        alert('Ingrese un nombre no vacio')
        return;
    }

    const li = document.createElement('li');
    const boton_del = document.createElement('button');

    li.textContent = nombre;

    boton_del.textContent = 'Eliminar';

    boton_del.addEventListener('click', function(){

        lista_prod.removeChild(li);

        actualizarContador();

    });

    li.appendChild(boton_del)

    lista_prod.appendChild(li);
    
    actualizarContador();

});




