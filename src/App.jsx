import {Routes, Route } from "react-router-dom";
import {useState, useCallback} from 'react';

import Header from'./components/Header';
import Nav from './components/Nav';
import Main from'./components/Main';
import Footer from'./components/Footer';
import EcommerceTotal from './components/EcommerceTotal';
import GaleriaIntereses from './components/GaleriaIntereses';
import QuienesSomos from './enlacesGenerales/QuienesSomos';
import Contacto from './enlacesGenerales/Contacto';
///import AppLayout from "./layouts/AppLayout"; 
import './styles/style.css';



function App() {

         ///const menuAra = ['¿Quienes somos?', 'Valores', 'Ofertas'];
        const [seleccion, setSeleccion] = useState({menu:null, item:null});

        const handleSelect = useCallback((menu, item) => {
            setSeleccion({menu, item});
        }, []);

return (
        <>
        
        <Header />  
        <Nav onSelect={handleSelect} active={seleccion}/>        
        <Main /> 
        <Routes>         
        
            <Route path="/" element={<GaleriaIntereses />} />
            <Route path="enlacesGenerales/QuienesSomos" element={<QuienesSomos />} />
            <Route path="enlacesGenerales/Contacto" element={<Contacto />} />

        </Routes> 
        <EcommerceTotal seleccion = {seleccion}/>  
        <Footer />    
        
        </> 
        
    );
}
export default App;
