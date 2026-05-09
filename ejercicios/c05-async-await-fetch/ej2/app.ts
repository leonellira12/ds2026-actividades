const Listado = document.getElementById("Listado") as HTMLElement
const Cargando = document.getElementById("Cargando") as HTMLElement

interface Usuario{
    id: number, name: string, email: string, phone: string
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try{
        Cargando.textContent = "Cargando..."
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`); 
        }
        const Usuarios = await response.json();
        Cargando.textContent = "";
        return Usuarios;
    }catch(error){
        Cargando.textContent = "Error, mo se pudo obtener los Usuaios"
        Cargando.style.color = "red";
        return[];
    }   
}

async function iniciarApp(){
    let listaUsuarios = await obtenerUsuarios();
    listaUsuarios.forEach( usuario => {
       let li = document.createElement('li');
       li.innerHTML = `Nombre: ${usuario.name}<br>Email: ${usuario.email}`
       Listado.appendChild(li)
    }) 
}

iniciarApp();

export{};