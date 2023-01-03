import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componente cargado!");

    conseguirPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar esas peliculas para que elimine del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    //Actualizar estado del listado
    setListadoState(nuevo_array_pelis);

    //Actualizar los datos en el local storage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>

              {/*Aparece formulario de editar*/}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay pelis para mostrar.</h2>
      )}
    </>
  );
};