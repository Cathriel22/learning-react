import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Ejercicio = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const evento = (e,type) =>{
        if(type == 1)
            setYearNow(yearNow+1);
        else
            setYearNow(yearNow-1);
    }

    const changeYear = e => {
        let dato = e.target.value;

        setYearNow(dato);
    }

  return (
    <div>
        <h3>Primer Ejercicio del Curso de React</h3>
        <strong className='label-year'>
            {yearNow}
        </strong>

        <p>
            <button onClick={e => evento(e,1)}>SIGUIENTE</button>
            &nbsp;
            <button onClick={e => evento(e,2)}>ANTERIOR</button>
        </p>
        <p>Cambiar año:
            &nbsp;
            <input type="number" placeholder='Cambia el año' onChange={changeYear}></input>
        </p>
    </div>
  )
}

Ejercicio.propTypes = {
    year: PropTypes.number.isRequired
}
