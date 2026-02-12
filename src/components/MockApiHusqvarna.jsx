import {useState, useEffect} from 'react';

export default function MockApiHusqvarna({enviarDatos}){
    ///const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://698624936964f10bf2559d53.mockapi.io/AraMaquinaria/ConstruccionHusqvarna")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            enviarDatos(datos);
            setCargando(false);
        })
        .catch((error) => {
            console.error("Error!", error)
            setError("No se puedieron cargar los productos");
            setCargando(false);
        });
    }, [enviarDatos]);

    if(cargando) return <p>Cargando Productos...</p>;
    if(error) return <p>{error}</p>;

    return null; /* (
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    Nombre: {producto.Nombre}
                    <br />
                    Descripcion: {producto.Descripcion}
                    <br />
                    Precio: ${producto.Precio}
                    <br />
                    <img src={producto.Imagen} alt={producto.Nombre} width="100" />
                </li>
            ))}
        </ul>
    );*/
}