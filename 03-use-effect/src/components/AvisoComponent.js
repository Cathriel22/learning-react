import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando se monta
        alert("El componente AvisoComponent ha sido montado");

        //Cuando se desmonta
        return () => {
            alert("COMPONENTE DESMONTADO!!!");
        }
    }, []);//Se ejecuta una vez

  return (
    <div>
        <hr/>
        <h3>Hola LUIS</h3>
        <button onClick={e => {
            alert("Bienvenue")
        }}>Mostrar alerta</button>
    </div>
  )
}
