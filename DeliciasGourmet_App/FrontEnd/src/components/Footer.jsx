import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div>
         <div className="footer">
         <img src={logo} alt="logo"/>
            <p>¡Descubre el sabor de la cocina en línea! Explora nuestro recetario virtual y déjate inspirar por deliciosas recetas para cada ocasión.</p>
        </div>
        <div className="footer-2">
            <h1>2023 Delicias Gourmet - Todos los derechos reservados</h1>
        </div>
    </div>
  )
}

export default Footer