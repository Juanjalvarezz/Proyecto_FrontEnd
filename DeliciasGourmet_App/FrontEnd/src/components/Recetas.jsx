import React from 'react'
import { useQuery } from "react-query";


function Recetas() {
    const recetas = useQuery("recetas", () =>
    fetch("http://localhost:3000/filtrarrecetas").then((res) => res.json())
  );

  const separacion = (ingredientes) => {
    const lista = ingredientes.split(",");
    return (
      <>
        {lista.map((ingrediente) => (
          <li>{ingrediente}</li>
        ))}
      </>
    );
  };
  return (
    <div >
        <div  className='main'>
            <h1 className='Titulo-Recetas'>Top 5 Recetas Añadidas Recientemente</h1>
        </div>

        <section className='alineacion-recetas'>
            {
          <>
            {recetas.data && (
              <>
                {recetas.data.map((receta) => (
                  <>
                    <div className="recetas-contenedor">
                      <div className="Contenidos-1">
                        <h2 className="nombre">{receta.nombre}</h2>
                        <h3>
                          <b>Ingredientes:</b>
                        </h3>
                        <ul>
                          <li>
                            Tiempo de Preparación: {receta.tiempo_preparación}
                          </li>
                          {separacion(receta.ingredientes)}
                        </ul>
                      </div>
                      <div className="Contenidos-2">
                        <h1>Preparacion</h1>
                        <p>{receta.preparación}</p>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </>
        }
        </section>
    </div>

  )
}

export default Recetas;
