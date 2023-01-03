import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juegos de tronos", "Clean Code"];
    //const libros = [];

  return (
    <div className='segundo-componente'>
        <h1>Listado de Libros</h1>
        {libros.length >= 1 ? (
            <ul>
                {
                    libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>
                    })
                }
            </ul>
            )
            : (
            <p>No hay libros</p>
            )
        }
    </div>
  )
}
