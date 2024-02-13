
import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";




export default function PublicLayout({children}: IChildren){

    //peticion la BD <-- LINKS DEL FRONTEND
    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Categorias', href: '/public/categorias'},
        {name: 'Proveedores', href: '/public/proveedores'},
        {name: 'Quienes somos', href: '/public/about'}
      ];


    return (
        <>
            <header>
                <h1>Header del Frontend</h1>
                {/* <Menu/> */}
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}