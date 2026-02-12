import {useState, useEffect} from 'react';
import ListaProductosJardineria from './ListaProductosJardineria';
import Carrito from './CarritoCompras';
import MockApiHusqvarna from './MockApiHusqvarna';

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

function EcommerceTotal(){

    /*const [productosApi, setProductosApi] = useState([]);
    
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("https://698624936964f10bf2559d53.mockapi.io/AraMaquinaria/ConstruccionHusqvarna")
            .then((res) => res.json())
            .then((datos) => {
                setProductosApi(datos);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error al cargar:", error);
                setCargando(false);
            });
    }, []);


    const vaciarCarrito = () => {
        setCarrito([]);
    }; 

    if(cargando){
        return(
            <Layout>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <h2>Cargando Productos...</h2>
                </div>
            </Layout>
        );
    }*/
    const [productosApi, setProductosApi] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };
    return(
        
            <Layout>  
            <MockApiHusqvarna enviarDatos={setProductosApi} />
            <ListaProductosJardineria productosApi = {productosApi} agregarCarrito = {agregarCarrito}   />
            
            <hr />
            <Carrito carrito= {carrito} setCarrito={setCarrito}   />
            </Layout>
        
    
    );
}
export default EcommerceTotal;