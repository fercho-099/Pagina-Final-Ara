import {Routes, Route, Navigate } from "react-router-dom";
import GaleriaIntereses from './components/GaleriaIntereses';
import QuienesSomos from './enlacesGenerales/QuienesSomos';
import Contacto from './enlacesGenerales/Contacto';
import AraLayout from "./layouts/AraLayout";
import ValorYContacto from "./layouts/ValorYContacto";
import './styles/style.css';



function App() {


return (
        <>
    <Routes>     
                
        
        <Route path="/" element={<AraLayout />}>
            <Route index element={<GaleriaIntereses />} />
        </Route>

        <Route path="/SobreNosotros" element={<ValorYContacto />}>
            <Route path="QuienesSomos" element={<QuienesSomos />} />
            <Route path="contacto" element={<Contacto />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
        
        </Routes> 
        </>
    );
}
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.1081593834983!2d-58.753794160762816!3d-34.37316924546967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f006c7cfe0d%3A0x7ed3b4e0efada472!2sCBC%20UBA%20-%20Sede%20Escobar!5e0!3m2!1ses!2sar!4v1776379027832!5m2!1ses!2sar"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
</iframe>

export default App;
