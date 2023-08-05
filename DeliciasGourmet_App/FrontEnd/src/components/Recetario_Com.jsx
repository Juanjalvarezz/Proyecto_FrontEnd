import React from "react";
import "../Views.css";
import galletas from "../assets/galletas.jpg";
import PostreSaludable from "../assets/postreSaludable.jpg";
import BajaCalorias from "../assets/bajaCalorias.jpg";
import Fit from "../assets/fit.jpg";
import cerdo from "../assets/cerdo.jpg";
import carne from "../assets/carne.jpg";
import pollo from "../assets/pollo.jpg";
import pescado from "../assets/pescado.jpg";
import vino from "../assets/vino.jpg";
import air from "../assets/air.jpg";
import frita from "../assets/frita.jpg";
import { useQuery } from "react-query";

function Recetario_Com() {
  const recetas = useQuery("recetas", () =>
    fetch("http://localhost:3000/listarrecetas").then((res) => res.json())
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
    <section>
      <div>
        <div className="info">
          <div className="border">
            <img src={vino} alt="vino" />
            <h2>Vino para la salud</h2>
            <h3>
              El vino, en cantidades moderadas, puede tener beneficios para la
              salud. Contiene antioxidantes, como el resveratrol, que pueden
              ayudar a proteger el corazón.
            </h3>
          </div>

          <div className="border">
            <img src={air} alt="airfryer" />
            <h2>Beneficios del Airfryer</h2>
            <h3>
              El Airfryer es una opción saludable para cocinar alimentos, ya que
              requiere menos aceite que las frituras tradicionales, reduciendo
              la grasa y las calorías.{" "}
            </h3>
          </div>

          <div className="border">
            <img src={frita} alt="frito vs horneado" />
            <h2>Frito vs Horneado</h2>
            <h3>
              La comida frita es mas crujiente y sabrosa, pero alta en grasas y
              calorías, mientras que la comida horneada es más saludable, menos
              aceite y textura menos crujiente.
            </h3>
          </div>
        </div>
      </div>

      <div className="align">
        <div className="cont">
          <div>
            <div className="conta">
              <img src={pollo} alt="Pollo " />
              <div className="content">
                <a href="#Pollo">Recetas con Pollo</a>
              </div>
            </div>

            <div className="conta">
              <img src={carne} alt="Carne " />
              <div className="content">
                <a href="#Carne">Recetas con Carne</a>
              </div>
            </div>
          </div>

          <div>
            <div className="conta">
              <img src={pescado} alt="Pescado " />
              <div className="content">
                <a href="#Pescado">Recetas con Pescado</a>
              </div>
            </div>

            <div className="conta">
              <img src={cerdo} alt="Cerdo " />
              <div className="content">
                <a href="#Cerdo">Recetas con Cochino</a>
              </div>
            </div>
          </div>
        </div>

        <div className="cont">
          <div>
            <div className="conta">
              <img src={Fit} alt="Fit " />
              <div className="content">
                <a href="#Fit">Recetas Fit</a>
              </div>
            </div>

            <div className="conta">
              <img src={BajaCalorias} alt="Caloria " />
              <div className="content">
                <a href="#Calorias">Recetas baja en calorias</a>
              </div>
            </div>
          </div>

          <div>
            <div className="conta">
              <img src={galletas} alt="Postres " />
              <div className="content">
                <a href="#Postres">Postres</a>
              </div>
            </div>

            <div className="conta">
              <img src={PostreSaludable} alt="Postres Saludables " />
              <div className="content">
                <a href="#Saludables">Postres Saludables</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="alineacion-recetas">
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
    </section>
  );
}
export default Recetario_Com;
