import React from 'react';   
import {useState} from 'react';
import CarritoCompras from './CarritoCompras';

{/*function Header({carrito, onRemove}) {  
    
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const cantidadTotal = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

    return (   
        <header className = "Header-Main" >
            <div className="Logo"> Ara Maquinarias</div>
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
        </header>

    );

} export default Header;  */}

function Header(){
    return(
        <header className = "Header-Main">
            <div className="Logo"> Ara Maquinarias</div>
        </header>
    )
} export default Header;