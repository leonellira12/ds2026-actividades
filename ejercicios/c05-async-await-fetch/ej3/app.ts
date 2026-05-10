const q = document.getElementById("q") as HTMLInputElement
const botonBuscar = document.getElementById("botonBuscar") as HTMLButtonElement
const resultados = document.getElementById("resultado") as HTMLElement

interface LibroOL{
    title: string, author_name?: string[], first_publish_year?: number;
}

botonBuscar.addEventListener('click', async (e:Event) =>{
    let busqueda = q.value.trim()
    if( busqueda === ""){
        resultados.innerHTML = "Error, debe ingresar un libro"
    }
    let url = "https://openlibrary.org/search.json?q="+encodeURIComponent(busqueda);
    let listaLibros = await obtenerLibros(url);
    mostrarLibros(listaLibros);
})

async function obtenerLibros(url:string):Promise<LibroOL[]>{
    try{
       const response = await fetch(url)
       if(!response.ok){
        throw new Error(`HTTP ${response.status}`);
       }
       const resultado = await response.json();
       return resultado.docs;
    }catch(error){
        alert("Error, No se pudo obtener los libros")
        return[];
    }
}

function mostrarLibros(listaLibros:LibroOL[]) {
    
    if(listaLibros.length === 0){
        resultados.innerHTML = "No se encontraron coincidentes";
    }
    const libros10 = listaLibros.slice(0,10);
    libros10.forEach(lb => {
        const card = document.createElement('card')
        const autor = lb.author_name ? lb.author_name[0] : "Autor desconocido";
        const anio = lb.first_publish_year ? lb.first_publish_year : "Año desconocido";
        card.innerHTML = `
            <h3>${lb.title}</h3>
            <p>${autor}</p>
            <p>${anio}</p>
            <hr>
        `;
        resultados.appendChild(card)
    });
}

export{}

