import React from 'react';

import '../styles/style.css';

function ListaProductosJardineria({ productosApi, agregarCarrito }) {

  const botonTexto = "Comprar";

  return (  
    <div className= "EquipoJardineria">    
        {productosApi.map((producto)  => (

            <div key ={producto.id || index} className="ProductosAra">

              <img
              src={producto.Imagen}
              alt={producto.Nombre}              
              className="rol-imagen"
              />
              <h3 className="Nombre-Maquinaria">{producto.Nombre}</h3>
              <p className="Nombre-rol">{producto.Descripcion}</p>
              <button className="ComprarOvender" onClick={() => agregarCarrito(producto)}>
                {botonTexto}
              </button>
            </div>
        ))}    
    </div>
  );
}
export default ListaProductosJardineria;


