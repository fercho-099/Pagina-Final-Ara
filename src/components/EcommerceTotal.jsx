import {useMemo,useState, useCallback, useEffect} from 'react';
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


function EcommerceTotal({ seleccion, carrito, agregarCarrito, quitarDelCarrito }){

    const [productos,setProductos] = useState([]);  
    
    const [error, setError] = useState(null);

    const url= useMemo(() => resolveUrl(seleccion), [seleccion]);  

    const handleEnviarDatos = useCallback((datos) =>{
        setProductos(datos || []);
        setError(null);
    } , []);

    const handleError = useCallback((msg) => {
        setError(msg);
    } , []);

    return(
        
            <section className="EcommerceTotal">
            
            <MockApiHusqvarna url={url} enviarDatos={handleEnviarDatos} onError={handleError}  tieneDatos={productos.length > 0}/>
            {error ? (<p className="error">{error}</p>) : (
            <>
            <ListaProductosJardineria productosApi = {productos} agregarCarrito = {agregarCarrito}   />
            
            <Carrito items= {carrito}  onRemove={quitarDelCarrito} />
            </>
        )}
    </section>
    );
}
export default EcommerceTotal;