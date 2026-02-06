import React, {useState} from 'react';   
import '../styles/style.css';

function Nav() {   
    
    ///const [isDropdownOpen, setIsDrowdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    /* const toggleDropdown = () =>{
        setIsDrowdownOpen(!isDropdownOpen);
    }*/

    const toggleDropdown =(menuName) =>{
        setActiveDropdown(activeDropdown === menuName ? null : menuName);
    };

    return (   
        <nav className="Nav-container">   
            
                    <div className="drop-Inicio" >
                       {/* <button className="btn-Inicio" onClick={toggleDropdown}> Inicio</button> */}
                    <button className="btn-Inicio" onClick={() => toggleDropdown('inicio')}>
                        Inicio
                    </button>
                        <div className="drop-content-inicio" style={{ display: activeDropdown === 'inicio' ? 'block' : 'none' }}>  

                                    <a href="/Marcas" onClick={toggleDropdown} className="dropdown-link">Marcas</a>
                                
                                    <a href="/Quienes Somos" className="dropdown-link"> ¿Quienes somos?</a>
                                
                                    <a href="/Valores" className="dropdown-link">Valores</a>
                        </div>
                    </div>
                    <div className="drop-Construccion" >
                       {/* <button className="btn-Construccion" onClick ={toggleDropdown}>Construccion</button> */}
                    <button className = "btn-Construccion" onClick = {() => toggleDropdown('construccion')}>
                        Construccion
                    </button>   
                        {/* <div className="drop-content-construccion" style={{display:isDropdownOpen ? 'block' : 'none'}}>*/ }
                            <div className="drop-content-construccion" style={{display: activeDropdown ==='construccion' ? 'block' : 'none'}}>

                                <a href="/husqvarna" onClick={toggleDropdown} className="dropdown-link">Husqvarna</a>

                                <a href="/brigsstrattion" onClick={toggleDropdown} className="dropdown-link">Brigs & Strattion</a>

                                <a href="/niwa" onClick={toggleDropdown} className="dropdown-link">Niwa</a>

                                <a href="/villa" onClick={toggleDropdown} className="dropdown-link">Villa</a>

                                <a href="/kohler" onClick={toggleDropdown} className="dropdown-link">Kohler</a>
                            </div>
                    </div>
                    <div className="drop-Jardineria">
                    <button className="btn-Jardineria" onClick = {() => toggleDropdown('Jardineria')}>
                        Bosques y Jardineria 
                    </button>
                            <div className="drop-content-jardineria" style={{display: activeDropdown === 'Jardineria' ? 'block' : 'none'}}>

                                <a href="/CabezalesUniversales" onClick={toggleDropdown}>Cabezales Manuales Universales</a>
                                <a href="/AceitesMaquina" onClick={toggleDropdown}>Aceites para Maquinas 2T y 4T</a>
                                <a href="/Espadas" onClick={toggleDropdown}>Espadas</a>
                                <a href="/Correas" onClick={toggleDropdown}>Correas para Tractores corta cesped</a>
                                <a href="/Tanza" onClick={toggleDropdown}>Tanza</a>
                                <a href="/Cadenas" onClick={toggleDropdown}>Cadenas</a>
                    </div>
                </div> 
                <div className="drop-Ferreteria">
                <button className="btn-Ferreteria" onClick = {() => toggleDropdown('Ferreteria')}>
                    Ferreteria
                </button>
                            <div className="drop-content-ferreteria" style={{display: activeDropdown ==='Ferreteria' ? 'block' : 'none'}}>

                                <a href="/Soldadora" onClick={toggleDropdown}>Soldadoras</a>
                                <a href="/Compresores" onClick={toggleDropdown}>Compresores</a>
                                <a href="/Hidrolavadoras" onClick={toggleDropdown}>Hidrolavadoras</a>
                                <a href="/Soldadura" onClick={toggleDropdown}>Soldadura</a>
                                <a href="/Aspiradoras" onClick={toggleDropdown}>Aspiradoras</a>
                                <a href="/Hormigoneras" onClick={toggleDropdown}>Hormigoneras</a>
                                <a href="/BombasAgua" onClick={toggleDropdown}>Bombas de Agua</a>
                                <a href="/Pintureria" onClick={toggleDropdown}>Pintureria</a>
                                <a href="/Otros" onClick={toggleDropdown}>Otros</a>

                    </div>
                </div> 
        </nav>   
    );  
}   
export default Nav;   