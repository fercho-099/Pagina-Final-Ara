import React from 'react';

/*export default function Carrito({items, total, onRemove}){


    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const total = carrito.reduce((sum, item) => sum + Number(item.Precio), 0);
    const monedaArg = (valor) =>{
        return new Intl.NumberFormat('es-AR' , {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3
        }).format(valor);
    }; 

    return(
        <div>
            <h2>Productos en carrito </h2>
            {carrito.length === 0 ? (
                <p>No hay Productos Seleccionados</p>
            )   : (
                <>
                    {carrito.map((item) => (
                        <div key={item.id}>
                            {item.Nombre} - ${monedaArg(item.Precio)}
                        </div>
                    ))}
                    <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
                        Total: ${monedaArg(total)}
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
*/


export default function CarritoCompras({ items, total, onRemove }) { ///ver donde se llama carrito de compras para que cumplacon los tres items
    return (
    <aside className="Carrito">  {/*por que asside*/}
    <h3>Carrito</h3>
    {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
    ) : (
        <ul className="Carrito-lista">
        {items.map((p, idx) => {
            const id = p.id ?? idx;
            const precio = Number(p.Precio ?? p.precio ?? 0);
            return (
            <li key={id} className="Carrito-item">
                <span>{p.Nombre}</span>
                <span>${isNaN(precio) ? '—' : precio.toFixed(2)}</span>
                <button onClick={() => onRemove(id)}>Quitar</button>
            </li>
            );
        })}
        </ul>
    )}
    <div className="Carrito-total">
        <strong>Total:</strong> ${total.toFixed(2)}
    </div>
    </aside>
    );
}
