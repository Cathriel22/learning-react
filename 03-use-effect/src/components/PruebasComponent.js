import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Lucho Vasquez");
    const [fecha, setFecha] = useState("01-01-2022");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now);
    }

    //Se ejecuta solo al cargar
    useEffect(() => {
        console.log("Se ha cargado el componente, PruebasComponent");
    }, []);

    //Se ejecuta cuando cambia algo
    useEffect(() => {
        //console.log("Se ha cambiado el componente, PruebasComponent");

        setContador(contador+1);

        console.log("Se ha modificado el usuario: "+contador);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario, fecha]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>

        <strong className={contador >= 10? 'label label-green' : 'label'}>{usuario}</strong>
        <strong className={contador >= 10? 'label label-green' : 'label'}>{fecha}</strong>

        &nbsp;
        <p>
            <input type="text" onChange={modUsuario} placeholder="Cambia el nombre" />

            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>

        {usuario === "LUIS" && <AvisoComponent/>}
        
    </div>
  )
}
