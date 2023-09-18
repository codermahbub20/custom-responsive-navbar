import { useState } from "react";
import Nav from "./Nav";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav>
            <div className="md:hidden " onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineMenu className="text-3xl "></AiOutlineMenu> :
                        <AiOutlineClose className="text-3xl"></AiOutlineClose>
                }
            </div>

            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'}  bg-green-400 px-6 py-5`}>
                {
                    routes.map(route => <Nav key={routes.id} route={route}></Nav>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;