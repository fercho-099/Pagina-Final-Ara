import {useState} from 'react';
import CarritoCompras from './CarritoCompras';
import '../styles/style.css';

function Nav({onSelect, active, carrito, onRemove}) {   
    

    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown =(menuName) =>{
        setActiveDropdown(activeDropdown === menuName ? null : menuName);
    };

    const handlePick = (menu, item) => {
        onSelect(menu, item);
        setActiveDropdown(null);
    };

    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const cantidadTotal = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

    return (   
        <nav className="Nav-container">   
            
                    <div className="drop-Inicio" >
    
                    <button className="btn-Inicio" onClick={() => toggleDropdown('inicio')}>
                        Inicio
                    </button>
                        <div className="drop-content-inicio" style={{ display: activeDropdown === 'inicio' ? 'block' : 'none' }}>  

                                    < button type="button" onClick={() =>handlePick('inicio' , 'marcas')} className="dropdown-link">Marcas</button>
                                
                                    < button type="button" onClick={() => handlePick('inicio', 'quienes-somos')}className="dropdown-link"> ¿Quienes somos?</button>
                                
                                    < button type="button" onClick={() => handlePick('inicio', 'valores')} className="dropdown-link">Valores</button>
                        </div>
                    </div>
                    <div className="drop-Construccion" >
            
                    <button className = "btn-Construccion" onClick = {() => toggleDropdown('construccion')}>
                        Construccion
                    </button>   
                        
                            <div className="drop-content-construccion" style={{display: activeDropdown ==='construccion' ? 'block' : 'none'}}>

                                < button type="button" onClick={() =>handlePick('construccion', 'husqvarna')} className="dropdown-link">Husqvarna</button>

                                < button type="button" onClick={() =>handlePick('construccion', 'brigsStration')} className="dropdown-link">Brigs & Strattion</button>

                                < button type="button" onClick={() =>handlePick('construccion', 'niwa')} className="dropdown-link">Niwa</button>

                                < button type="button" onClick={() =>handlePick('construccion', 'villa')} className="dropdown-link">Villa</button>

                                < button type="button" onClick={() => handlePick('construccion' , 'Kohler')} className="dropdown-link">Kohler</button>
                            </div>
                    </div>
                    <div className="drop-Jardineria">
                    <button className="btn-Jardineria" onClick = {() => toggleDropdown('jardineria')}>
                        Bosques y Jardineria 
                    </button>
                            <div className="drop-content-jardineria" style={{display: activeDropdown === 'jardineria' ? 'block' : 'none'}}>

                                < button type="button" onClick={() => handlePick('jardineria','cabezales')} className='dropdown-link'>Cabezales Manuales Universales</button>
                                < button type="button" onClick={() => handlePick('jardineria', 'aceites')} className='dropdown-link'>Aceites para Maquinas 2T y 4T</button>
                                < button type="button" onClick={() => handlePick('jardineria', 'espadas')} className='dropdown-link'>Espadas</button>
                                < button type="button" onClick={() => handlePick('jardineria', 'correas')} className='dropdown-link'>Correas para Tractores corta cesped</button>
                                < button type="button" onClick={() => handlePick('jardineria', 'tanza')} className='dropdown-link'>Tanza</button>
                                < button type="button" onClick={()=> handlePick('jardineria', 'cadenas')} className='dropdown-link'>Cadenas</button>
                    </div>
                </div> 
                <div className="drop-Ferreteria">
                <button className="btn-Ferreteria" onClick = {() => toggleDropdown('ferreteria')}>
                    Ferreteria
                </button>
                            <div className="drop-content-ferreteria" style={{display: activeDropdown ==='ferreteria' ? 'block' : 'none'}}>

                                < button type="button" onClick={()=> handlePick('ferreteria', 'soldadoras')} className='dropdown-link'>Soldadoras</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'compresores')} className='dropdown-link'>Compresores</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'hidros')} className='dropdown-link'>Hidrolavadoras</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'soldadura')} className='dropdown-link'>Soldadura</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'aspiradoras')} className='dropdown-link'>Aspiradoras</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'hormigoneras')} className='dropdown-link'>Hormigoneras</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'bombas')} className='dropdown-link'>Bombas de Agua</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'pintureria')} className='dropdown-link'>Pintureria</button>
                                < button type="button" onClick={()=> handlePick('ferreteria', 'otros')} className='dropdown-link'>Otros</button>

                    </div>
                </div> 

                <div className="Cart-Wrapper" style={{ position: 'relative' }}>
                    <button className="Cart-Icon-Btn" onClick={() => setMostrarCarrito(!mostrarCarrito)}>
                        <span className="Badge">{cantidadTotal}</span>
                    </button>
                    {mostrarCarrito && (
                    <div className="Cart-Dropdown">
                        <CarritoCompras items={carrito} onRemove={onRemove} />
                    </div>
                    )}
                </div>
        </nav>   
    );  
}   
export default Nav;   