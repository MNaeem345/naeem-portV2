import React from "react";
import '../components/Navbar.css';

function Navbar(){
    return (
        <nav className="nav">
            
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