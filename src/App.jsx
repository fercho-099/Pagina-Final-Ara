
import ListaProductosJardineria from './components/ListaProductosJardineria';
import GaleriaIntereses from './components/GaleriaIntereses';
import Header from'./components/Header';
import Nav from './components/Nav';
import Main from'./components/Main';
import Footer from'./components/Footer';
import './styles/style.css';



function App() {
  
 const Jardinerias = [{nombre: 'Automower 305', rol:'Jardineria', description: 'Nueva cortadora de cesped automatica para que no tengas que cortar pasto vos mismo',imagen: 'https://acdn-us.mitiendanube.com/stores/884/906/products/849188-mla28026852731_082018-o-ebe2f158828d29678615447167173809-640-0.jpg'
            },
            {nombre:'Corta cesped profesional Giro cero', rol:'Jardineria', description:'Esta cortadora decesped es tope gama alta para uso de todos los dias', imagen:'https://cdn.rumbosrl.com.ar/uploads/products/images/large/7678901.png'
            },
            {nombre:'Desbrozadora 226R', rol:'Jardineria', description:'La mas completa de las Desbrozadoras del mercado', imagen: 'https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/brushcutters/photos/studio/h210-0380.webp?v=e18e5774fac9dd3e&format=SCHEMA_ORG_4_3'
            },
        ];
        const menuAra = ['¿Quienes somos?', 'Valores', 'Ofertas'];
        

  return (
        <>
        <Header />  
        <Nav />        
        <Main />
            <ListaProductosJardineria Jardinerias={Jardinerias}/>
            <GaleriaIntereses menuAra= {menuAra} />   
        <Footer />
        </>
        
  );
}

export default App
