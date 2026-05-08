const filtro_nombre = document.getElementById('filtro_nombre') as HTMLButtonElement
const filtro_dispo = document.getElementById('filtro_dispo') as HTMLButtonElement
const filtro_todos = document.getElementById('filtro_todos') as HTMLButtonElement
const nombre_input = document.getElementById('nombre_input') as HTMLInputElement
const listado = document.getElementById('listado') as HTMLElement
const stats = document.getElementById('stats') as HTMLElement
const botonAgregar = document.getElementById('botonAgregar') as HTMLButtonElement
const titulo = document.getElementById('titulo') as HTMLInputElement
const autor = document.getElementById('autor') as HTMLInputElement
const genero = document.getElementById('genero') as HTMLInputElement
const precio = document.getElementById('precio') as HTMLInputElement
const disponible = document.getElementById('disponible') as HTMLInputElement
const errorForm = document.getElementById('errorForm') as HTMLInputElement


interface Libro {

    isbn: string
    titulo: string
    autor: string
    precio: number
    disponible: boolean
    genero?: string
    
};

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
       
        const boton = document.createElement('button');
        boton.innerText='Eliminar';
        boton.addEventListener('click', (e:Event)=>{
            eliminarLibro(libros[i].isbn)
        })

         listado.appendChild(li);
         li.appendChild(boton);

    
    }

    stats.innerHTML = `La cantidad de libros es: ${libros.length} <br> Precio promedio: ${precioPromedio(libros)}`

};

function agregarLibro(libro : Libro): void{
    catalogo.push(libro)
    renderizar(catalogo)
};

function eliminarLibro(isbn : string): void{

    catalogo = catalogo.filter(lb => lb.isbn != isbn);
    renderizar(catalogo);
};

function validarFormulario(): Libro | null{
    
    let t = titulo.value.trim();
    let a = autor.value.trim();
    let p = Number(autor.value.trim());
    let d = disponible.checked;
    let g = genero.value.trim();
    let i = "AUTO-" + Date.now();

    if(t === "" || a === ""){
        return null
    };

    if(p <= 0){
        return null
    };

    const libro : Libro = {
        titulo: t, autor: a, precio: p, disponible: d, genero: g, isbn: i
    };

    return libro;
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

botonAgregar.addEventListener('click', (e: Event) =>{
    
    const resultado = validarFormulario();

    if(resultado === null){
        errorForm.textContent = "Error: complete todos los campos y asegurese de que precio sea mayor a 0";
    };

    if(resultado != null){
        errorForm.textContent = "";
        agregarLibro(resultado)
    };

});

renderizar(catalogo);

export{}





