
import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";


export default function AdminLayout({children}: IChildren){

    const links:ILink[] = [
        {name: 'Insertar', href: '/admin/insertar'},
        {name: 'Borrar', href: '/admin/borrar'},
        {name: 'Actualizar', href: '/admin/actualizar'},
        {name: 'Listar', href: '/admin/listar'}
      ];


    return (
        <>
            <header>
                <h1>Header del Backend</h1>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}