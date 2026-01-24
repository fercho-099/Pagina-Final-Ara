function GaleriaIntereses({ menuAra }) {  //corresponde a ¿quienes somos? Valores Y Ofertas.
  function capturarClic(e) {
    /*e.target.style.backgroundColor = '#ef8009ff';
    e.target.style.color = 'white'; */   ///ver el evento para mas adelante

    ///se deberia poner la direccion para comprar los productos, cargarlo en el carrito
  }

  return (
    <div className="galeria-intereses">
      {menuAra.map((menuAra) => (
        <button
          key={menuAra} 
          className="interes-boton"
          onClick={capturarClic}
        >
          {menuAra}
        </button>
      ))}
    </div>
  );
}

export default GaleriaIntereses;