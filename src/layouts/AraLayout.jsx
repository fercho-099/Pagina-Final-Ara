import {Outlet} from 'react-router-dom';
import {useState, useCallback, useEffect} from 'react';


import Main from'../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EcommerceTotal from '../components/EcommerceTotal';


export default function AraLayout(){

    const [seleccion, setSeleccion] = useState({menu:null, item:null});

    const [carrito, setCarrito] = useState(() => {
            const guardado = localStorage.getItem("carrito_maquinaria");
            return guardado ? JSON.parse(guardado) : [];
        });
    
        useEffect(()=>{
            localStorage.setItem("carrito_maquinaria", JSON.stringify(carrito));
        }, [carrito]);


        const handleSelect = useCallback((menu, item) => {
            setSeleccion({menu, item});
        }, []);

        const agregarCarrito = useCallback((producto) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.id === producto.id);
            if(existe) {
                return prev.map(item =>
                    item.id === producto.id ? { ...item, cantidad: (item.cantidad || 1) + 1} : item
                    );
                }
                return [...prev, {...producto, cantidad: 1 }];
            });
        }, []);

        const quitarDelCarrito = useCallback((id) => {
            setCarrito(prev => prev.filter(item => item.id !== id));
        }, []);


    return(
        <>
        <Header />
        <Nav onSelect={handleSelect} active={seleccion} carrito={carrito} onRemove={quitarDelCarrito}/>
        <Main />
        
        <EcommerceTotal seleccion = {seleccion} carrito={carrito} agregarCarrito={agregarCarrito}/>
        <Outlet />   
        <Footer />
        
        </>
    );
}