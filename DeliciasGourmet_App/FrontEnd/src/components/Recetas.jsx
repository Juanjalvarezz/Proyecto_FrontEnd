import React from 'react'
import cremaCalabaza  from "../assets/cremaCalabaza.jpg"
import SalmonHorno  from "../assets/salmonHorno.jpg"
import TartaletasManzana  from "../assets/tartaletasManzana.jpg"
import TostadaQueso  from "../assets/tostadaQueso.jpg"
import ColiflorHorno  from "../assets/coliflorHorno.png"

function Recetas() {
  return (
    <div >
        <div  className='main'>
            <h1 className='Titulo-Recetas'>Top 5 Recetas de la Semana</h1>
        </div>

        <section className='alineacion-recetas'>
            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={cremaCalabaza}  alt="Crema de Calabaza"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Crema de calabaza</h2>
                    <p>- Tiempo de duracion:<b> 30 Minutos</b></p>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 calabaza</li>
                            <li>2 cebollas</li>
                            <li>2 dientes de ajo</li>
                            <li>1 cucharada de mantequilla</li>
                            <li>Almendras laminadas para decorar</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Primero cortar la calabaza en trozos y salpimentar, luego
                        hornear la calabaza a 180º C hasta que esté blanda.
                        Procedemos a caramelizar las cebollas a fuego lento con la mantequillay freir los ajos previamente troceados.
                        Finalmente licuar la calabaza con el ajo y la cebolla, añadir un poco de agua si es necesario, para que quede la consistencia de crema y
                        decorar con las almendras laminadas.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={SalmonHorno}  alt="Salmón al horno"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Salmón al horno</h2>
                    <p>- Tiempo de duracion:<b> 25 Minutos</b></p>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>500 g. de salmón</li>
                            <li>1 limón</li>
                            <li>1 cucharadita de eneldo</li>
                            <li>1 cucharadita de pimienta</li>
                            <li>Alcaparras al gusto</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Primero que todo engrasar un fuente de horno y colocar el salmón con la piel hacia abajo, Ahora
                        toca salpimentar y añadir el eneldo y la ralladura del limón. Luego
                        hornear a 180º C durante 15 minutos y por ultimo
                        añadir las alcaparras antes de servir.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={TartaletasManzana}  alt="Tartaletas de manzana"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Tartaletas de manzana</h2>
                    <p>- Tiempo de duracion:<b> 35 Minutos</b></p>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>3 manzanas</li>
                            <li>250 g. de hojaldre</li>
                            <li>2 cucharadas de mantequilla</li>
                            <li>1 cucharada de azúcar moreno</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Primero que todo cortar las manzanas peladas en láminas finas, luego
                        estirar el hojaldre, pintar con mantequilla y espolvorear azúcar moreno. Ahora toca
                        colocar la manzana sobre el hojaldre hecho tiras, y enrollar para que quede forma de flor y finalmente
                        hornear a 180º C hasta que el hojaldre se dore.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={TostadaQueso}  alt="Tostada de queso"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Tostada de queso Brie</h2>
                    <p>- Tiempo de duracion:<b> 15 Minutos</b></p>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 cebolla grande</li>
                            <li>1 cucharada de mantequilla</li>
                            <li>Pan cortado en rebanadas</li>
                            <li>Queso brie</li>
                            <li>Rodajas de tomate</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Primero hay que partir la cebolla en tiras finas, luego
                    poner la mantequilla en una sartén y cuando esté derretida añadir la cebolla. Se va a
                    cocinar a fuego muy lento para que la cebolla no se deshidrate, finalmente
                    tostar el pan, añadir el queso brie y encima la cebolla cocinada y unas rodajas de tomate.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor'>
                    <img className='alineacion-imagen' src={ColiflorHorno}  alt="Coliflor al horno"/>
                <div className='Contenidos-1'>
                    <h2 className='nombre'>Coliflor al horno</h2>
                    <p>- Tiempo de duracion:<b> 25 Minutos</b></p>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>1 coliflor</li>
                            <li>1 cebolleta</li>
                            <li>1 huevo grande</li>
                            <li>300 g. pan rallado</li>
                            <li>Queso parmesano</li>
                        </ul>
                </div>
                <div className='Contenidos-2'>
                    <h1>Preparacion</h1>
                    <p>Primero que todo, cocer la coliflor durante 10 minutos, luego
                    meter en una picadora la coliflor cocida y la cebolleta.
                    Añadir el huevo, el pan rallado y el queso, y mezclar bien hasta formar una masa., finalmente
                    hacer bolitas con la masa y hornear a 180º C durante 15 minutos.
                    </p>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Recetas;