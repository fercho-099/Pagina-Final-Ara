import React from 'react';


export default function CarritoCompras({ items, onRemove }) { ///ver donde se llama carrito de compras para que cumplacon los tres items

    const total = items.reduce((acc, p) => {
        const precio = Number(p.Precio ?? p.precio ?? 0);
        const cant = p.cantidad || 1;
        return acc + (precio * cant);
    },0 );

    return (
            <aside className="Carrito-Detalle"> 
                <h3>Tu pedido</h3>
                {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
    ) : (
        <ul className="Carrito-lista">
        {items.map((p) => {
            const precioUnitario = Number(p.Precio ?? p.precio ?? 0);
            const cantidad = p.cantidad || 1;
            return (
            <li key={p.id} className="Carrito-item">
                <div className="info">
                    <strong>{p.Nombre}</strong>
                    <p className="desc-corta">{p.Descripcion}</p>
                    <span className="cantidad-badge">Cant: {cantidad}</span>
                    </div>
                    </li>
            );
        })}
        </ul>
    )}
    <div className="Carrito-total">
        <strong>Total: ${total.toFixed(2)}</strong>
    </div>
    </aside>
    );
}
