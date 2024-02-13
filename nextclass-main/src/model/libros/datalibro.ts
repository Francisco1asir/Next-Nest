export async function getLibros(){
    try{
        const res = await fetch('http://localhost:3001/api/libros/listar', { cache: 'no-store' })
        return res.json()
    }catch(error){
        throw new Error('Fallo')
    }
}