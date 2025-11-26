import React, {useState} from 'react';   
import '../styles/style.css';

function Nav() {   
    
    const [isDropdownOpen, setIsDrowdownOpen] = useState(false);

    const toggleDropdown = () =>{
        setIsDrowdownOpen(!isDropdownOpen);
    }

    return (   
        <nav className="Nav-container">   
            
                    <div className="drop-Inicio" >
                        <button className="btn-Inicio" onClick={toggleDropdown}> Inicio</button>
                        <div className="drop-content-inicio" style={{ display: isDropdownOpen ? 'block' : 'none' }}>                            
                                    <a href="Construccion" onClick={toggleDropdown} className="dropdown-link">Construccion</a>
                                
                                    <a href="Jardineria" className="dropdown-link"> Jardineria</a>
                                
                                    <a href="Hogar" className="dropdown-link">Hogar</a>
                        </div>
                    </div>
                <div className="drop-Construccion">
                    <button className="btn-Construccion">
                        <a href="Construccion" onClick={toggleDropdown}>Construccion</a>
                    </button>
                </div>  
                <div className="drop-Jardineria">
                    <button className="btn-Jardineria">
                    <a href="Jardineria" onClick={toggleDropdown}>Jardineria</a>
                    </button>
                </div> 
                <div className="drop-Hogar">
                    <button className="btn-Hogar">
                    <a href="Hogar" onClick={toggleDropdown}>Hogar</a>
                    </button>
                </div> 
        </nav>   
    );  
}   
export default Nav;   