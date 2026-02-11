import React from 'react';

export default function Carrito({carrito, setCarrito}){


    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const total = carrito.reduce ((sum,item) => sum + (item.Precio || 0), 0);

    return(
        <div>
            <h2>Productos en carrito </h2>
            {carrito.length === 0 ? (
                <p>No hay Productos Seleccionados</p>
            )   : (
                <>
                    {carrito.map((item, index) => (
                        <div key={item.id || index}>
                            {item.Nombre} - ${item.Precio.toLocaleString()}
                        </div>
                    ))}
                    <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
                        Total: ${total.toLocaleString()}
                    </div>
                    <button
                        onClick = {vaciarCarrito} ///aca iria vaciar pero con el estilo de ListaProductosJardineria
                        style = {{marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
                        > 
                        Vaciar Productos
                        </button>
                    </>
                )}
        </div>
    );
}
