import React from 'react'
import Uno from "../assets/1.jpg"
import Dos from "../assets/2.jpg"
import Tres from "../assets/3.jpg"
import Cuatro from "../assets/4.jpg"

function Slider() {
  return (
    <div>
        <div className="main">
        <div className="slider">
            <input type="radio" name="slider"/>
            <div className="imgBox">
            <img src={Uno}/>
                    <div className="contenido">
                        <h1>Comida Oriental</h1>
                </div>
            </div>

            <input type="radio" name="slider"/>
            <div className="imgBox">
                <img src={Dos}/>
                    <div className="contenido">
                        <h1>Comida Mediterranea</h1>
                </div>
            </div>

            <input type="radio" name="slider"/>
            <div className="imgBox">
            <img src={Tres}/>
                    <div className="contenido">
                        <h1>Desayunos</h1>
                </div>
            </div>

            <input type="radio" name="slider"/>
            <div className="imgBox">
            <img src={Cuatro}/>
                    <div className="contenido">
                        <h1>Postres</h1>
                </div>
            </div>
        </div> 
    </div>
</div>
  )
}

export default Slider;