import React, { useState } from "react";

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value,
      enviar: datos.enviar.value
    };

    setUsuario(usuario);

    console.log(usuario);
  };

  const cambiarDatos = (e) => {
    let name_del_input = e.target.name;
    //let usuario_para_modificar = usuario;

    //usuario_para_modificar[name_del_input] = e.target.value;

    setUsuario(estado_previo => {
        return {
            ...estado_previo,
            [name_del_input]: e.target.value
        }
    });
  };
  return (
    <div>
      <h1>Formularios con React</h1>
      {usuario.enviar && (
        <div className="infor_usuario label label-gray">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su bio es{" "}
          {usuario.biografia}
        </div>
      )}
      <form onSubmit={conseguirDatosFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={cambiarDatos}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          placeholder="Biografia"
          name="biografia"
          onChange={cambiarDatos}
        ></textarea>

        <input type="submit" value="Enviar" name="enviar"/>
      </form>
    </div>
  );
};
