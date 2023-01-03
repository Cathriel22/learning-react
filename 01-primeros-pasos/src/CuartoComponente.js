import React from 'react'

export const CuartoComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado al click al botón!!"+nombre);
    }

    function hasDadoDobleClick(e){
        alert("Has dado doble click!!");
    }

    const evento = (e, accion) => {
        if(accion == 1)
            console.log("Has entrado a la caja con el mouse.");
        else
            console.log("Has salido a la caja con el mouse.");
    }

    const estasDentro = e => {
        console.log("Estas dentro del input, ingresa tu nombre!!");
    }
    
    const estasFuera = e => {
        console.log("Estas fuera del input, chaooo!!");
    }

  return (
    <div className='cuarto-componente'>
        <h1>Eventos en React</h1>
        <p>
            {/* Evento Click */}
            <button onClick={ e => hasDadoClick(e, "Lucho") }>Dame Click!</button>
        </p>
        <p>    
            {/* Evento Doble Click */}
            <button onDoubleClick={ hasDadoDobleClick }>Dame Doble Click!</button>
        </p>

        <div id='caja' onMouseEnter={e => evento(e,1)} onMouseLeave={e => evento(e,2)}>
            Pasa por encima
        </div>

        <p>
            <input type="text" onFocus={estasDentro} onBlur={estasFuera} placeholder="Introduce tu nombre..."/>
        </p>
    </div>
  )
}
