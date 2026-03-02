import React from 'react';

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
                <br />
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
