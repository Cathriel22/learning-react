import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [errores, setErrores] = useState("");

  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
    ]);
  };

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAW = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();

        //console.log(data);
        setUsuarios(data);
        setCargando(false);
      } catch (error) {
        console.log(error.message);
        setErrores(error.message);
      }
    }, 1000);
  };

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);

  if(errores !== ""){
    return <div className="cargando">No se pudo obtener datos.</div>;
  }
  else if (cargando === true) {
    //Cuando esta todo cargando
    return <div className="cargando">Cargando datos...</div>;
  } 
  else if (cargando === false && errores === "") {
    //Cuando todo ha salido bien
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ul className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width="20" alt={usuario.first_name} />
                &nbsp;
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
