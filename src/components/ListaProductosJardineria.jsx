import React from 'react';

import '../styles/style.css';

function ListaProductosJardineria({ productosApi, agregarCarrito }) {

  const botonTexto = "Comprar";
 
  return (  
    <div className= "EquipoJardineria">    
        {productosApi.map((id, index)  => (

            <div key ={productosApi.id || index} className="ProductosAra">

              <img
              src={productosApi.Imagen}
              alt={productosApi.Nombre}              
              className="rol-imagen"
              />
              <h3 className="Nombre-Maquinaria">{productosApi.Nombre}</h3>
              <p className="Nombre-rol">{productosApi.Descripcion}</p>
              <button className="ComprarOvender" onClick={() => agregarCarrito(productosApi)}>
                {botonTexto}
              </button>
            </div>
        ))}    
    </div>
  );
}
export default ListaProductosJardineria;


