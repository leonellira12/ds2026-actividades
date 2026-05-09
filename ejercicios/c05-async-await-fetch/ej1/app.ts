
interface Usuario{
    id: number, name: string, email: string, phone: string
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`); 
        }
        const Usuarios = await response.json();
        return Usuarios;
    }catch(error){
        console.error('Error al obtener usuarios', error);
        return[];
    }   
}

async function iniciarApp(){
    let listaUsuarios = await obtenerUsuarios();
    
    listaUsuarios.forEach( usuario => {
        console.log(`Nombre: ${usuario.name} Email: ${usuario.email}`);
    }) 
    
}

iniciarApp();

export{}