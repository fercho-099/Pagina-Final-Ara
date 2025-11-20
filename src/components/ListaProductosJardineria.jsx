import React from 'react';
import '../styles/style.css';

function Presionado(){
  
  
}

function ListaProductosJardineria({ Jardinerias }) {

  const botonTexto = ['Comprar'];

   return (  
    <div className= "EquipoJardineria">    
        {Jardinerias.map((id, index)  => (

            <div key ={index} className="ProductosAra">

              <img
              src={id.imagen}
              alt={id.nombre}              
              className="rol-imagen"
              />
              <h3 className="Nombre-Maquinaria">{id.nombre}</h3>
              <p className="Nombre-rol">{id.description}</p>
              <button className="ComprarOvender" onClick={Presionado}>
                {botonTexto}
              </button>
            </div>
        ))}    
    </div>
  );
}
export default ListaProductosJardineria;
/* esta segunda funcion es para pasarla como prop. vcer App.jsxa linea 29*/
/* linea 47 se le va a agregar stilos, por eso se usa el classname. Tampoco se usa <> </> por que devuelve un solo elemento.*/

///https://youtu.be/d71OfnLt1Cg?list=PLEB5IwS0LzBJsA6sGNpUM5rSLc3Aw1z0u&t=2432
/// concepto de layout https://youtu.be/d71OfnLt1Cg?list=PLEB5IwS0LzBJsA6sGNpUM5rSLc3Aw1z0u&t=4587

/*function ListaProductosJardineria() { /*En la linea 28 de app.jsx iria <ListaProductosJardineria /> para que funcione esta fuction de arriba

    const Jardinerias = [
            {id: 1, nombre: 'Automower 305', rol:'Jardineria', imagen: 'https://acdn-us.mitiendanube.com/stores/884/906/products/849188-mla28026852731_082018-o-ebe2f158828d29678615447167173809-640-0.jpg'
            },
            {id: 2 , nombre:'Corta cesped profesional Giro cero', rol:'Jardineria', imagen:'https://cdn.rumbosrl.com.ar/uploads/products/images/large/7678901.png'
            },
            {id: 3, nombre:'Desbrozadora 226R', rol:'Jardineria', imagen: 'https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/brushcutters/photos/studio/h210-0380.webp?v=e18e5774fac9dd3e&format=SCHEMA_ORG_4_3'

            }
        ];
  return (
    <>
    <div>ListaProductosJardineria</div>
    <ul>

        {Jardinerias.map(Jardineria => (

            <li key ={Jardineria.id}>  23

              <b>{Jardineria.nombre}</b> <br></br> 24
              {Jardineria.rol} 

            </li>
        ))}

    </ul>
    
</>
  )
}*/

///export default ListaProductosJardineria
/**  Linea 23 y 24 se puede agregar cualquier propiedad que se detalla en  el vector jardinerias (rol, nombre, etc) */

/* es.javascript.info   es para poner funcionamiento dentro del jsx */
/* renderizar una lista como PROP  https://youtu.be/d71OfnLt1Cg?list=PLEB5IwS0LzBJsA6sGNpUM5rSLc3Aw1z0u&t=4326   */

