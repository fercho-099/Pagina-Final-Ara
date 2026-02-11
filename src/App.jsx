 
import GaleriaIntereses from './components/GaleriaIntereses';
import Header from'./components/Header';
import Nav from './components/Nav';
import Main from'./components/Main';
import Footer from'./components/Footer';
import EcommerceTotal from './components/EcommerceTotal';
import './styles/style.css';



function App() {

        const menuAra = ['¿Quienes somos?', 'Valores', 'Ofertas'];
        

return (
        <>
        <Header />  
        <Nav />        
        <Main />            
            <GaleriaIntereses menuAra= {menuAra} />   
        <EcommerceTotal />  
        <Footer />
        </>
        
    );
}

export default App
