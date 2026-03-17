import {Link} from 'react-router-dom'


function GaleriaIntereses() {  //corresponde a ¿quienes somos? Valores Y Ofertas.
  const menuAra = [
    {label:'¿Quienes somos?', to: 'QuienesSomos'},
    {label: 'Contacto', to: 'Contacto'}
  ];

  return (
    <div className="galeria-intereses">
      <ul>

          {menuAra.map((item) => (
        
            <li key={item.to}>
              <Link to={item.to}  className="interes-boton" >
                {item.label}
              </Link>
            </li>
        
      ))}
      </ul>      
    </div>
  );
}

export default GaleriaIntereses;