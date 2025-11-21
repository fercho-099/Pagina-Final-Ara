import React, {useState} from 'react';   
import '../styles/style.css';

function Nav() {   
    
    const [isDropdownOpen, setIsDrowdownOpen] = useState(false);

    const toggleDropdown = () =>{
        setIsDrowdownOpen(!isDropdownOpen);
    }

    return (   
        <nav className="Nav-container">   
            
                    <div className="dropdown-Inicio">
                        <button className="btn-Inicio"> Inicio</button>
                        <div className="drop-content-inicio">                            
                               
                                    <a href="#Link1" className="dropdown-link">Construccion</a>
                                
                                    <a href="#Link2" className="dropdown-link"> Jardineria</a>
                                
                                    <a href="#Link3" className="dropdown-link">Hogar</a>
                               
                        </div>
                    </div>
                <div className="drop-acercaAra">
                    <button className="btn-Acerca-ara">
                        <a href="#" onClick={toggleDropdown}  style={{ color: "white", textDecoration: "none" }}>Acerca de Ara Maquinarias</a>
                    </button>
                </div>  
                <div className="drop-Contacto">
                    <button className="btn-Contacto">
                    <a href="#" onClick={toggleDropdown}  style={{ color: "white", textDecoration: "none" }}>Contacto</a>
                    </button>
                </div> 
           
        </nav>   
    );  
                     
}   
 
export default Nav;   