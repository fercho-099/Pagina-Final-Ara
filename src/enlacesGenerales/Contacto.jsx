import {Link} from 'react-router-dom';

function Contacto(){

    return(
        
        <div className="Contacto">

            <div className="Boton-enlaceGeneral">
                <Link to="/" className="botonEnlacesGenerales">
                    Volver al inicio
                </Link>
            </div>
            <div className="Seccion-Compras">
                <pre>
            <p ClassName="TitulosGenerales">Ivo Delafuente</p>
            
            <p ClassName="TitulosGenerales">WhatsApp: </p><p>+549116968-2864</p>
            <p ClassName="TitulosGenerales">Email: </p><p>ara.maquinaria@gmail.com</p>
            <p className="TitulosGenerales">Horario: </p><p>Lunes a Viernes de 8:00 a 16:00</p>
                </pre>
            </div>
            <div className="Sedes">
                <br></br>
                    <p ClassName="TitulosGenerales"> Casa Central: </p><p>Samuel Lafone 300, Escobar, Buenos Aires, Argentina</p>
                    <br></br>
                    <p ClassName="TitulosGenerales"> Sede Pilar: </p>Princess Country Club, AV.Constitucion 1500, Del Viso, Buenos Aires, Argentina<p></p>
                    <br></br>
                    <p ClassName="TitulosGenerales"> Sede Pacheco: </p><p>A.v Hipolito Yrigoyen 280, Gral. Pacheco, Buenos Aires, Argentina</p>
                </div>
            <div className="Maps">
                <a target="_blank" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.8966171823795!2d-58.77803665012425!3d-34.34417721470144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61ad1ddf8915%3A0x70f239e49e8c37af!2sBel%C3%A9n%20de%20Escobar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773281029724!5m2!1ses!2sar" title="Abrir en Maps" arial-label="Abrir en Maps">"Abrir en Maps"</a>
            </div>
        </div>

    );
}
export default Contacto;