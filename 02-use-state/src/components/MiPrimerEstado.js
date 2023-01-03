import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    /*
    let nombre = "Victor Robles";

    const cambiarNombre = e => {
        nombre = "Test";
    }
    */

    const [nombre, setNombre] = useState("Lucho V.");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e,"Francisco")}>Cambiar nombre por Fran</button>

        &nbsp;
        <input type="text" placeholder='Cambia el nombre' onChange={e => cambiarNombre(e,e.target.value)}></input>
    </div>
  )
}
