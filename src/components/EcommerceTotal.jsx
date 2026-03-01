import {useMemo,useState, useCallback} from 'react';
import ListaProductosJardineria from './ListaProductosJardineria';
import Carrito from './CarritoCompras';
import MockApiHusqvarna from './MockApiHusqvarna';


import '../styles/style.css';
const API_BASE= 'https://698624936964f10bf2559d53.mockapi.io/AraMaquinaria';

const ENDPOINTS = {
    construccion: {
        husqvarna:        `${API_BASE}/ConstruccionHusqvarna`,        
        brigsStration:    `${API_BASE}/ConstruccionBrigsStration`,
        villa:            `${API_BASE}/ConstruccionVilla`,          
        kohler:           `${API_BASE}/ConstruccionKohler`,         
        niwa:             `${API_BASE}/ConstruccionNiwa`,           
},
    
    jardineria: {
    cabezales:            `${API_BASE}/JardineriaCabezales`,    
    aceites:              `${API_BASE}/JardineriaAceites`,      
    espadas:              `${API_BASE}/JardineriaEspadas`,      
    correas:              `${API_BASE}/JardineriaCorreas`,      
    tanza:                `${API_BASE}/JardineriaTanza`,        
    cadenas:              `${API_BASE}/JardineriaCadenas`,      
},
    ferreteria: {
    soldadoras:      `${API_BASE}/FerreteriaSoldadoras`,         
    compresores:    `${API_BASE}/FerreteriaCompresores`,        
    hidros:         `${API_BASE}/FerreteriaHidrolavadoras`,     
    soldadura:      `${API_BASE}/FerreteriaSoldadura`,          
    aspiradoras:    `${API_BASE}/FerreteriaAspiradoras`,        
    hormigoneras:   `${API_BASE}/FerreteriaHormigoneras`,       
    bombas:         `${API_BASE}/FerreteriaBombasAgua`,         
    otros:          `${API_BASE}/FerreteriaOtros`,              
    pintureria:     `${API_BASE}/FerreteriaPintureria`,         
    },

};


function resolveUrl(selection) {
    if (!selection?.menu || !selection?.item) return null;
    const group = ENDPOINTS[selection.menu];
    if (!group) return null;
    return group[selection.item] ?? null;
}


function EcommerceTotal({seleccion}){

    const [productos,setProductos] = useState([]);
    ///const [productosApi, setProductosApi] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [error, setError] = useState(null);

    const url= useMemo(() => resolveUrl(seleccion), [seleccion]);

    const agregarCarrito = useCallback((producto) => {
        setCarrito([...carrito, producto]);
    }, []);

    
    const quitarDelCarrito = useCallback((id) => {
    setCarrito((prev) => prev.filter((p, idx) => (p.id ?? idx) !== id)); ///prev responde  a ...carrito linea 60?
    }, []);


    
    const total = useMemo(
    () =>
    carrito.reduce((acc, p) => {
        const precio = Number(p.Precio ?? p.precio ?? 0);
        return acc + (isNaN(precio) ? 0 : precio);
    }, 0),
    [carrito]
    );


    return(
        
            <section className="EcommerceTotal">
            
            <MockApiHusqvarna url={url} enviarDatos={(datos)=> { setProductos(datos || []); setError(null);}} onError={(msg)=> setError(msg)}/>
            {error ? (<p className="error">{error}</p>) : (
                <>
            <ListaProductosJardineria productosApi = {productos} agregarCarrito = {agregarCarrito}   />
            
            <Carrito items= {carrito} total={total}  onRemove={quitarDelCarrito} />
            </>
        )}
    </section>
    );
}
export default EcommerceTotal;