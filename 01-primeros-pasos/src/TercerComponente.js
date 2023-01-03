import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, apellidos, ficha}) => {


  return (
    <div className='tercer-componente'>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Fernando",
    apellidos: "Goycochea"
}
