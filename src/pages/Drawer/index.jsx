import { useState } from 'react'
import { Drawer } from '../../components/Drawer'

export const DrawerPage = () => {
    const [open, setOpen] = useState(false)

    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    const routes = [
        {
            name: 'Página 1',
            path: '/drawer',
        },
        {
            name: 'Página 2',
            path: '/drawer/page-2',
        },
    ]

    return (
        <div className='container'>
            <button className='button' onClick={openDrawer}>
                Abrir drawer
            </button>
            <Drawer.Root isOpen={open} onClose={closeDrawer}>
                <Drawer.List>
                    {routes.map((route, i) => (
                        <Drawer.Item selected={window.location.pathname == route.path} href={route.path} key={i}>
                            {route.name}
                        </Drawer.Item>
                    ))}
                </Drawer.List>
            </Drawer.Root>
        </div>
    )
}
