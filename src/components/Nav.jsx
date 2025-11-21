import React, {useState} from 'react';   
import '../styles/style.css';

function Nav() {   
    
    const [isDropdownOpen, setIsDrowdownOpen] = useState(false);

    const toggleDropdown = () =>{
        setIsDrowdownOpen(!isDropdownOpen);
    }

    return (   
        <nav className="Nav-container">   
            <ul className="Ul-container">   
                <li className="nav-item">
                    <a href="#" onClick={toggleDropdown} style={{ color: "white", textDecoration: "none" }}>Inicio</a>
                    <div className="dropdown">
                        <button className="btn Inicio">
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                                <li>
                                    <a href="#Link1" className="dropdown-link">Construccion</a>
                                </li>
                                <li>
                                    <a href="#Link2" className="dropdown-link"> Jardineria</a>
                                </li>
                                <li>
                                    <a href="#Link3" className="dropdown-link">Hogar</a>
                                </li>
                            </ul>
                        </button>
                    </div>
                <li className="li-item">
                    <a href="#" onClick={toggleDropdown}  style={{ color: "white", textDecoration: "none" }}>Acerca de Ara Maquinarias</a></li>  
                <li className="li-item">
                    <a href="#" onClick={toggleDropdown}  style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>   
            </li>
            </ul>   
        </nav>   
    );  
                     
}   
 
export default Nav;   