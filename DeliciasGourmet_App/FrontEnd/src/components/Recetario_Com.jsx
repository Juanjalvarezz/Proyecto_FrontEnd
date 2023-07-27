import React from 'react'
import "../Views.css"
import galletas from "../assets/galletas.jpg"
import PostreSaludable from "../assets/postreSaludable.jpg"
import BajaCalorias from "../assets/bajaCalorias.jpg"
import Fit from "../assets/fit.jpg"
import cerdo from "../assets/cerdo.jpg"
import carne from "../assets/carne.jpg"
import pollo from "../assets/pollo.jpg"
import pescado from "../assets/pescado.jpg"
import polloMiel  from "../assets/polloMiel.jpg"
import polloHierbas from "../assets/polloHierbas.jpg"
import albondiga from "../assets/albondiga.jpg"
import tacos from "../assets/tacos.jpg"
import ceviche from "../assets/ceviche.jpg"
import salmon from "../assets/salmonParrilla.jpg"
import pastor from "../assets/pastor.jpg"
import costillas from "../assets/costillas.jpg"
import batido from "../assets/batido.jpg"
import ensalada from "../assets/ensalada.jpg"
import ensaladaFrutas from "../assets/ensaladafrutas.jpg"
import yogur from "../assets/yogur.jpg"
import mousse from "../assets/mosse.jpg"
import flan from "../assets/flan.jpg"
import aguacate from "../assets/aguacate.jpg"
import platano from "../assets/platano.jpg"
import vino from "../assets/vino.jpg"
import air from "../assets/air.jpg"
import frita from "../assets/frita.jpg"

function Recetario_Com() {
  return (
    <section>

<div>
    <div className='info'>
        <div className='border'>
        <img src={vino} alt="vino"/>
        <h2>Vino para la salud</h2>
        <h3>El vino, en cantidades moderadas, puede tener beneficios para la salud. Contiene antioxidantes, como el resveratrol, que pueden ayudar a proteger el corazón.</h3>
        </div>

        <div className='border'>
        <img src={air} alt="airfryer"/>
        <h2>Beneficios del Airfryer</h2>
        <h3>El Airfryer es una opción saludable para cocinar alimentos, ya que requiere menos aceite que las frituras tradicionales, reduciendo la grasa y las calorías. </h3>
        </div>

        <div className='border'>
        <img src={frita} alt="frito vs horneado"/>
        <h2>Frito vs Horneado</h2>
        <h3>La comida frita es mas crujiente y sabrosa, pero alta en grasas y calorías, mientras que la comida horneada es más saludable, menos aceite y textura menos crujiente.</h3>
        </div>
    </div>
  </div>

      <div className='align'>
        <div className='cont'>
            <div>
            <div className='conta'>
                  <img src={pollo}  alt="Pollo "/>
              <div className='content'>
                  <a href="#Pollo">Recetas con Pollo</a>
              </div>
              </div>

              <div className='conta'>
                  <img src={carne}  alt="Carne "/>
              <div className='content'>
                  <a href="#Carne">Recetas con Carne</a>
              </div>
              </div>
            </div>
            
            <div>
            <div className='conta'>
                  <img src={pescado}  alt="Pescado "/>
              <div className='content'>
                  <a href="#Pescado">Recetas con Pescado</a>
              </div>
              </div>

              <div className='conta'>
                  <img src={cerdo}  alt="Cerdo "/>
              <div className='content'>
                  <a href="#Cerdo">Recetas con Cochino</a>
              </div>
              </div>
            </div>
        </div>

        <div className='cont'>
            <div>
            <div className='conta'>
                  <img src={Fit}  alt="Fit "/>
              <div className='content'>
                  <a href="#Fit">Recetas Fit</a>
              </div>
              </div>

              <div className='conta'>
                  <img src={BajaCalorias}  alt="Caloria "/>
              <div className='content'>
                  <a href="#Calorias">Recetas baja en calorias</a>
              </div>
              </div>
            </div>

            <div>
              <div className='conta'>
                  <img src={galletas}  alt="Postres "/>
              <div className='content'>
                  <a href="#Postres">Postres</a>
              </div>
              </div>

              <div className='conta'>
                  <img src={PostreSaludable}  alt="Postres Saludables "/>
              <div className='content'>
                  <a href="#Saludables">Postres Saludables</a>
              </div>
              </div>
          </div>
      </div >
  </div>
      
  <div>

  <div id='Pollo' className='main'>
      <h1 className='Titulo-Recetas'>Recetas con Pollo</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={polloHierbas}  alt="Pollo con limón y hierbas"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Pollo con limón y hierbas</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>4 pechugas de pollo</li>
                            <li>Jugo de 2 limones</li>
                            <li>2 cucharadas de aceite de oliva</li>
                            <li>Sal y pimienta al gusto</li>
                            <li>Hierbas frescas</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> Precalienta la parrilla a fuego medio-alto. En un tazón, mezcla el jugo de limón, el aceite de oliva, sal y pimienta.
                    Coloca las pechugas de pollo en la parrilla y cepíllalas con la mezcla de limón y hierbas.
                    Cocina durante aproximadamente 6-8 minutos por cada lado, o hasta que estén bien cocidas.
                    Sirve caliente y decora con hierbas frescas.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={polloMiel}  alt="Pollo con mostaza y miel"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'> Pollo con mostaza y miel</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>4 muslos de pollo</li>
                            <li>3 cucharadas de mostaza dijon</li>
                            <li>2 cucharadas de miel</li>
                            <li>Sal y pimienta al gusto</li>
                            <li>Perejil picado para decorar</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Precalienta el horno a 200°C.En un tazón pequeño, mezcla la mostaza dijon, la miel, sal y pimienta.
                    Coloca los muslos de pollo en una bandeja para hornear y cubre cada uno con la mezcla de mostaza y miel.
                    Hornea durante aproximadamente 25-30 minutos, o hasta que el pollo esté dorado y bien cocido.
                    Espolvorea con perejil picado antes de servir.
                    </p>
                </div>
            </div>
    </section>

    <div id='Carne' className='main'>
      <h1 className='Titulo-Recetas'>Recetas con Carne</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={tacos}  alt="Tacos de carne asada"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Tacos de carne asada</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Carne asada en tiras</li>
                            <li>Tortillas de maíz</li>
                            <li>Cebolla picada</li>
                            <li>Cilantro picado</li>
                            <li>Limón</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> Cocina la carne asada en una sartén caliente hasta que esté dorada.Calienta las tortillas en un comal o sartén.
                        Rellena las tortillas con la carne asada, cebolla y cilantro picados.Exprime un poco de limón sobre los tacos y sirve.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={albondiga}  alt="Albóndigas"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Albóndigas en salsa</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Carne molida</li>
                            <li>Pan rallado</li>
                            <li>Huevo</li>
                            <li>Salsa de tomate</li>
                            <li>Sal y pimienta al gusto</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Mezcla la carne molida, el pan rallado, el huevo, sal y pimienta en un tazón hasta obtener una masa homogénea. Forma pequeñas albóndigas con la masa.
                    En una sartén caliente, cocina las albóndigas hasta que estén doradas por todos lados.
                    Agrega la salsa de tomate a la sartén y cocina a fuego medio durante unos minutos hasta que las albóndigas estén cocidas por completo.
                    </p>
                </div>
            </div>
    </section>

    <div id='Pescado' className='main'>
      <h1 className='Titulo-Recetas'>Recetas con Pescado</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={ceviche}  alt="Ceviche de camarones"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Ceviche de camarones</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Camarones cocidos</li>
                            <li>Jugo de limón</li>
                            <li>Cebolla morada</li>
                            <li>Cilantro</li>
                            <li>Sal</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> En un recipiente, mezcla los camarones cocidos con el jugo de limón y déjalos marinar durante 10 minutos. 
                        Agrega la cebolla morada picada, el cilantro fresco picado y sazona con sal al gusto. Mezcla bien todos los ingredientes y sirve frío.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={salmon}  alt="Salmón a la parrilla"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Salmón a la parrilla</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Filete de salmón</li>
                            <li>Jugo de limón</li>
                            <li>Eneldo fresco</li>
                            <li>Sal</li>
                            <li>Pimienta</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> Precalienta la parrilla a fuego medio-alto. Sazona el filete de salmón con sal y pimienta al gusto. 
                        Coloca el salmón en la parrilla caliente y cocínalo durante 4-5 minutos por cada lado. Exprime el jugo de limón sobre el salmón y espolvorea con eneldo fresco antes de servir.
                    </p>
                </div>
            </div>
    </section>

    <div id='Cerdo' className='main'>
      <h1 className='Titulo-Recetas'>Recetas con Cochino</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={pastor}  alt="Tacos de cerdo al pastor"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Tacos de cerdo al pastor</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>500gr de carne de cerdo</li>
                            <li>1 cucharada de adobo</li>
                            <li>Tortillas para tacos</li>
                            <li>Cilantro</li>
                            <li>Cebolla</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>En un tazón, mezcla la carne de cerdo con el adobo para tacos al pastor, asegurándote de que todos los trozos estén bien cubiertos. Calienta una sartén grande a fuego medio-alto y agrega la carne marinada.
                    Cocina la carne durante unos 8-10 minutos, revolviendo ocasionalmente, hasta que esté bien cocida y dorada. Calienta las tortillas en una sartén aparte o en el microondas.
                    Rellena cada tortilla con la carne al pastor y decora con cebolla picada y cilantro. ¡Sirve caliente!
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={costillas}  alt="Costillas de cerdo a la barbacoa"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Costillas de cerdo</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 rack de costillas de cerdo</li>
                            <li>Sal y pimienta al gusto</li>
                            <li>Salsa barbacoa</li>
                            <li>Aceite vegetal</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Precalienta el horno a 180°C. Sazona las costillas de cerdo con sal y pimienta al gusto.
                    En una bandeja para hornear, coloca las costillas con el hueso hacia abajo y úntalas con un poco de aceite vegetal. Cubre las costillas con papel de aluminio y hornea durante aproximadamente 1 hora.
                    Retira el papel de aluminio, cepilla generosamente las costillas con salsa barbacoa y vuelve a hornear sin cubrir durante otros 15-20 minutos, o hasta que estén tiernas y caramelizadas. Corta las costillas en porciones individuales antes de servir.
                    </p>
                </div>
            </div>
    </section>

    <div id='Fit' className='main'>
      <h1 className='Titulo-Recetas'>Recetas Fit</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={ensalada}  alt="Ensalada de pollo y aguacate"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Ensalada de pollo</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 pechuga de pollo</li>
                            <li>1 aguacate maduro</li>
                            <li>1 tomate</li>
                            <li>Jugo de medio limón</li>
                            <li>Sal y pimienta al gusto</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>En un tazón, mezcla el pollo desmenuzado, el aguacate y el tomate. Exprime el jugo de limón sobre la mezcla y sazona con sal y pimienta al gusto.
                    Mezcla bien todos los ingredientes y sirve como ensalada o relleno para wraps o tacos.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={batido}  alt="Batido verde energizante"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Batido verde energizante</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 plátano maduro</li>
                            <li>1 taza de espinacas frescas</li>
                            <li>1 taza de leche vegetal</li>
                            <li>1 Cda de mantequilla de almendras</li>
                            <li>1 Cda de miel</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>En una licuadora, agrega el plátano, las espinacas, la leche vegetal y la mantequilla de almendras. Licúa hasta obtener una mezcla suave y homogénea. 
                    Si deseas endulzarlo, añade la miel o el sirope de agave y vuelve a licuar por unos segundos. Sirve inmediatamente y disfruta de este batido verde lleno de nutrientes.

                    </p>
                </div>
            </div>
    </section>

    <div id='Calorias' className='main'>
      <h1 className='Titulo-Recetas'>Recetas Bajas en Calorias</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={ensaladaFrutas}  alt="Ensalada de espinacas y fresas"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Ensalada de frutas</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>2 tazas de espinacas</li>
                            <li>1 taza de fresas</li>
                            <li>1/4 de taza de nueces</li>
                            <li>2 Cdas de vinagre balsámico</li>
                            <li>Sal y pimienta al gusto</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Mezcla las espinacas, las fresas y las nueces en un tazón. Aliña con el vinagre balsámico y sazona con sal y pimienta al gusto.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={yogur}  alt="Yogur griego con frutas"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Yogur griego con frutas</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 taza de yogur griego</li>
                            <li>1/2 taza de arándanos</li>
                            <li>1 cucharada de miel</li>
                            <li>2 cucharadas de granola</li>
                            <li>1 cucharada de semillas de chía</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>En un tazón, mezcla el yogur griego con los arándanos y la miel. Espolvorea la granola y las semillas de chía por encima. 
                    </p>
                </div>
            </div>
    </section>

    <div id='Postres' className='main'>
      <h1 className='Titulo-Recetas'>Postres</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={mousse}  alt=" Mousse de chocolate"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'> Mousse de chocolate</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Chocolate derretido</li>
                            <li>Crema batida</li>
                            <li>Azúcar</li>
                            <li>Huevos</li>
                            <li>Extracto de vainilla</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> Derrite 200 gramos de chocolate negro y mézclalo con 4 claras de huevo batidas a punto de nieve. Refrigera durante 2 horas antes de servir.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={flan}  alt="Flan de caramelo"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Flan de caramelo</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Leche condensada</li>
                            <li>Huevos</li>
                            <li>Leche</li>
                            <li>Azúcar</li>
                            <li>Caramelo líquido</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Mezcla en un bol 1 lata de leche condensada, 4 huevos y esencia de vainilla al gusto. Vierte la mezcla en un molde caramelizado y hornea a baño maría a 180°C durante 40 minutos.
                    </p>
                </div>
            </div>
    </section>

    <div id='Saludables' className='main'>
      <h1 className='Titulo-Recetas'>Postres Saludables</h1>
  </div>

  <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={platano}  alt="Helado de plátano"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Helado de plátano</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Bananas congeladas</li>
                            <li>Leche de almendras</li>
                            <li>Canela</li>
                            <li>Nueces picadas</li>
                            <li>Extracto de vainilla</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p> Congela rodajas de plátano maduro y luego licúa hasta obtener una textura cremosa. Puedes agregar otros ingredientes como vainilla, canela o trozos de chocolate negro para darle más sabor.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={aguacate}  alt="Mousse de aguacate"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Mousse de aguacate</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Aguacate maduro</li>
                            <li>Leche de coco</li>
                            <li>Miel</li>
                            <li>Jugo de limón</li>
                            <li>Cacao en polvo</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Tritura un aguacate maduro con cacao en polvo sin azúcar y endulzante al gusto (como stevia o miel). Refrigera por unos minutos antes de servir.
                    </p>
                </div>
            </div>
    </section>
  </div>
</section>
  )
}

export default Recetario_Com