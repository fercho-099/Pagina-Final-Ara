import {  Link } from 'react-router-dom';

function QuienesSomos(){

    return(
    <div className="quienessomos">

        <div className="Boton-enlaceGeneral">
                <Link to="/" className="botonEnlacesGenerales">
                    Volver al inicio
                </Link>
        </div>

        
        <p className="quienSomos">     Somos una Empresa dedicada a la venta de todo tipo de maquinaria como tambien elementos y herramientas para los distintos tipos de trabajo.
            <br></br>
                Nuestra empresa trata con mas de 20 proveedores que nos ayudan a cubrir la demanda para aquellos trabajadores que buscan calidad y buen precio.
            <br></br>
                Actualmente poseemos tres sucursales bien distribuidas y analizamos la posibilidad de nuevas sedes a futuro.
            <br></br>
            Sin mas que decir, le transmitimos un coordial saludo y lo esperamos en nuestra sucursales cuando lo desee,
            <br></br>
            ARA Maquinarias.           
        </p>
    </div>
    );
}
export default QuienesSomos;