function GaleriaIntereses({ menuAra }) {  //por que intereses?
  function capturarClic(e) {
    e.target.style.backgroundColor = '#ef8009ff';
    e.target.style.color = 'white';
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