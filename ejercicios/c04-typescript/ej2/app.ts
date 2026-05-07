const filtro_nombre = document.getElementById('filtro_nombre') as HTMLButtonElement
const filtro_dispo = document.getElementById('filtro_dispo') as HTMLButtonElement
const filtro_todos = document.getElementById('filtro_todos') as HTMLButtonElement
const nombre_input = document.getElementById('nombre_input') as HTMLInputElement
const listado = document.getElementById('listado') as HTMLElement
const stats = document.getElementById('stats') as HTMLElement


interface Libro {

    isbn: string
    titulo: string
    autor: string
    precio: number
    disponible: boolean
    genero?: string
    
}

const libro_1: Libro = {
    
    isbn: '333444', titulo:'El eternauta', autor: 'Hector German Oesterheld', precio: 600, disponible: true, genero: 'Fantasia'

};

const libro_2: Libro = {
    
    isbn: '222111', titulo: 'Meridiano de Sangre', autor:'Cormac McCarthy', precio: 900, disponible: false, genero: 'Western'
    
};

const libro_3: Libro = {
    
    isbn: '777888', titulo: 'Dune', autor: 'Frank Herbert', precio: 300, disponible: true, genero: 'Ciencia Ficción'

};

let catalogo : Libro[] = [libro_1, libro_2, libro_3];

function buscarPorAutor(nombre:string): Libro[] { 

    const libro_encontrado = catalogo.filter(lb => lb.autor === nombre);

    return libro_encontrado;
    
};

function libros_disponibles(): Libro[] {

    const libros_dispo = catalogo.filter(lb => lb.disponible === true);

    return libros_dispo;
};

function precioPromedio(libros: Libro[]): number{
    
    let prom = 0;
    for (let i = 0; i< libros.length; i++){
        prom += libros[i].precio 
    }

    prom = prom / libros.length

    return prom;
};

function renderizar(libros: Libro[]): void{

    listado.textContent = "";

    for(let i=0;i<libros.length;i++){
        
        const li = document.createElement('li');
        li.textContent = `${libros[i].titulo} escrito por ${libros[i].autor}`
        listado.appendChild(li);
    
    }

    stats.innerHTML = `La cantidad de libros es: ${libros.length} <br> Precio promedio: ${precioPromedio(libros)}`

};

filtro_nombre.addEventListener('click', (e:Event) => {
    
    let nombre_autor = nombre_input.value.trim();
    let resultado = buscarPorAutor(nombre_autor);

    if(resultado.length>0){
        renderizar(resultado);
    }

    else{
        alert('No se encuentran libros coincidentes')
    }
});

filtro_dispo.addEventListener('click', (e:Event) => {
    renderizar(libros_disponibles());
});

filtro_todos.addEventListener('click', (e:Event) => {
    renderizar(catalogo);
});

renderizar(catalogo);

