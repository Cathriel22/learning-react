import React, { Fragment } from "react";

const MiComponente = () =>{

    let nombre = "Luis";
    let web = "Cathriel.ez"

    let usuario = {
        nombre: "Lucho",
        apellidos: "Vasquez Solis",
        web: "steam.cathriel.es"
    };

    //console.log(usuario);

    return (
        <div className="mi-componente">
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre} {usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Estes es mi primer componente</p>
            <ul>
                <li>
                    React  
                </li>
                <li>
                    Angular
                </li>
            </ul>
        </div>
    );
}

export default MiComponente;