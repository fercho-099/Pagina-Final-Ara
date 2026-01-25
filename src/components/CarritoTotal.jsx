import {useState} from 'react';

function Layout({children}){

    return(
        <div id="carro">
        <header>
        <h1>Tus Compras</h1>
        </header>
        <main>{children}</main>
        </div>
    );
}

function ProductList ({productosAMostrar ,agregarCarrito}){
       /* const Jardinerias = [{id: 1, nombre: 'Automower 305', precio: 25.000, rol:'Jardineria', description: 'Nueva cortadora de cesped automatica para que no tengas que cortar pasto vos mismo',imagen: 'https://acdn-us.mitiendanube.com/stores/884/906/products/849188-mla28026852731_082018-o-ebe2f158828d29678615447167173809-640-0.jpg'
            },
            {id: 2, nombre:'Corta cesped profesional Giro cero', precio: 15.000, rol:'Jardineria', description:'Esta cortadora decesped es tope gama alta para uso de todos los dias', imagen:'https://cdn.rumbosrl.com.ar/uploads/products/images/large/7678901.png'
            },
            {id: 3, nombre:'Desbrozadora 226R', rol:'Jardineria', precio: 78.000, description:'La mas completa de las Desbrozadoras del mercado', imagen: 'https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/brushcutters/photos/studio/h210-0380.webp?v=e18e5774fac9dd3e&format=SCHEMA_ORG_4_3'
            },
        ];*/

        return(
            <div>
                <h2>Produtos Disponibles</h2>
                {productosAMostrar.map((producto, index) => (
                    <div key= {index}>
                    <span>{producto.nombre} - {producto.descripcion} - {producto.precio}</span>
                    <button 
                        onClick={() => agregarCarrito(producto)}
                    > 
                        Agregar
                    </button>
                </div>
            ))}
        </div>
    );
}
function Carrito({carrito, vaciarCarrito}){

    const total = carrito.reduce ((sum,item) => sum + item.precio, 0);

    return(
        <div>
            <h2>Productos</h2>
            {carrito.length === 0 ? (
                <p>No hay Productos Seleccionados</p>
            )   : (
                <>
                    {carrito.map((item) => (
                        <div>
                            {item.nombre} - ${item.precio.toFixed(3)}
                        </div>
                    ))}
                    <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
                        Total: ${total.toFixed(3)}
                    </div>
                    <button
                        onClick = {vaciarCarrito}
                        style = {{marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
                        > 
                        Vaciar Productos
                        </button>
                    </>
                )}
        </div>
    );
}


function EcommerceTotal({Jardinerias}){

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return(
        <Layout>
                
                <ProductList productosAMostrar = {Jardinerias} agregarCarrito = {agregarCarrito} />
                <Carrito carrito = {carrito} vaciarCarrito = {vaciarCarrito} />
                
        </Layout>
    );
}
export default EcommerceTotal;