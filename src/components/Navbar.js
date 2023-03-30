import React, {useEffect, useState} from "react";
import '../components/Navbar.css';



function Navbar(){
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false)
        } else {
            setShow(true)
        }
        setLastScrollY(window.scrollY); 
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])
    return (
        <nav className={`nav__blue ${show && 'nav'}`}>
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
            

        </nav>
    )
}

export default Navbar;

/*<nav className='nav'>
            
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
        </nav>*/