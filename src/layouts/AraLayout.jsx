import {Outlet} from 'react-router-dom';
import {useState, useCallback} from 'react';


import Main from'../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EcommerceTotal from '../components/EcommerceTotal';


export default function AraLayout(){

    const [seleccion, setSeleccion] = useState({menu:null, item:null});

        const handleSelect = useCallback((menu, item) => {
            setSeleccion({menu, item});
        }, []);
    return(
        <>
        <Header />
        <Nav onSelect={handleSelect} active={seleccion}/>
        <Main />
        
        <EcommerceTotal seleccion = {seleccion}/>
        <Outlet />   
        <Footer />
        
        </>
    );
}