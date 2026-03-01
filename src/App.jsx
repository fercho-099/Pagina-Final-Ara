 import {useState, useCallback} from 'react';
import GaleriaIntereses from './components/GaleriaIntereses';
import Header from'./components/Header';
import Nav from './components/Nav';
import Main from'./components/Main';
import Footer from'./components/Footer';
import EcommerceTotal from './components/EcommerceTotal';
import './styles/style.css';



function App() {

        const menuAra = ['¿Quienes somos?', 'Valores', 'Ofertas'];
        const [seleccion, setSeleccion] = useState({menu:null, item:null});

        const handleSelect = useCallback((menu, item) => {
            setSeleccion({menu, item});
        }, []);

return (
        <>
        <Header />  
        <Nav onSelect={handleSelect} active={seleccion}/>        
        <Main />            
            <GaleriaIntereses menuAra= {menuAra} />   
        <EcommerceTotal seleccion = {seleccion}/>  
        <Footer />
        </>
        
    );
}
export default App;
