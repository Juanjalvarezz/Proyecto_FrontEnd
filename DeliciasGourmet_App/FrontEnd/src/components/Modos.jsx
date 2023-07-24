import React from 'react'
import CambiarModo from "./Logica/CambiarModo"

function Modos() {
  
  return (
    <div className="bt"> 
    <button type="button" className="btn-oscuro boton" onClick={CambiarModo}>
      <i id="icono">🌙</i>
    </button>
    </div>
  )
}

export default Modos;