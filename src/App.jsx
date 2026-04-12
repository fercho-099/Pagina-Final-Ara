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
                
        
        <Route path="/" element={<AraLayout />} >

            <Route index element={<GaleriaIntereses />} />
        
            <Route path="SobreNosotros" element={<ValorYContacto />}>
                <Route index element={<QuienesSomos />} />
                <Route path="QuienesSomos" element={<QuienesSomos /> }  />
                <Route path="contacto" element={<Contacto />} />
            </Route>

        </Route>

        
        <Route path="*" element={<Navigate to="/" replace />} />
        
        </Routes> 
        </>
    );
}
export default App;
