import {Routes, Route } from "react-router-dom";
import GaleriaIntereses from './components/GaleriaIntereses';
import QuienesSomos from './enlacesGenerales/QuienesSomos';
import Contacto from './enlacesGenerales/Contacto';
import AraLayout from "./layouts/AraLayout";
import './styles/style.css';



function App() {

         
       {/* const [seleccion, setSeleccion] = useState({menu:null, item:null});

        const handleSelect = useCallback((menu, item) => {
            setSeleccion({menu, item});
        }, []);
        */}

return (
        <>
    <Routes> 
        {/*
        <Header />  
        <Nav onSelect={handleSelect} active={seleccion}/>        
        <Main /> */}
                
        
        <Route path="/" element={<AraLayout />}>
        <Route index element={<GaleriaIntereses />} />
        <Route path="QuienesSomos" element={<QuienesSomos />} />
        <Route path="Contacto" element={<Contacto />} />
        </Route>
        

            {/*
            <Route path="/" element={<GaleriaIntereses />} />
            <Route path="enlacesGenerales/QuienesSomos" element={<QuienesSomos />} />
            <Route path="enlacesGenerales/Contacto" element={<Contacto />} /> */}


        
        {/*<EcommerceTotal seleccion = {seleccion}/> */} 
        {/*<Footer />*/}    
        
        </Routes> 
        </>
    );
}
export default App;
