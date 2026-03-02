import {useState, useEffect} from 'react';

export default function MockApiHusqvarna({url,enviarDatos, onError, tieneDatos}){
    
    const [cargando, setCargando] = useState(true);
    const [errorLocal, setErrorLocal] = useState(null);

    useEffect(() => {
        if (!url) return;

        const controller= new AbortController();
        const {signal} = controller;

        setCargando(true);        
        setErrorLocal(null);        

        fetch(url,{signal})
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`); ///¿que es ok?
            return respuesta.json();
        })
        .then((datos) => {
            enviarDatos(datos);
            setCargando(false);
        })
        .catch((err) => {
            if(signal.aborted) return;
            console.error("Error!", err);
            const msg='No se pudieron cargar los productos';
            setErrorLocal(msg);
            setCargando(false);
            onError?.(msg);
        });
        return() => controller.abort();
    }, [url]);

    
    if(cargando && !tieneDatos)return <p>Cargando Productos...</p>; 
    
    if (errorLocal || !tieneDatos) return <p>{errorLocal}</p>;
    return null;

}