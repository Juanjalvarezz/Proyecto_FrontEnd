import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav_Bar() {
  const toggleButton = document.getElementById("button-menu");
  const navWrapper = document.getElementById("nav");

  return (
    <header className="main-header">
      <div className="main-logo">{<img src={logo} alt="logo" />}</div>
      <nav
        id="nav"
        className="main-nav"
        onClick={(e) => {
          if (e.target.id === "nav") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
          }
        }}
      >
        <div className="nav-links">
          <Link to="/" className="link-item active">
            Iniciar sesión
          </Link>
          <Link to="/Register" className="link-item">
            Registrarse
          </Link>
          <Link to="/Inicio" className="link-item">
          Inicio
          </Link>
          <Link to="/Recetario" className="link-item">
          Recetario
          </Link>
          <Link to="/AboutUs" className="link-item">
          About Us
          </Link>
        </div>
      </nav>
      <Outlet />
      <button
        id="button-menu"
        className="button-menu"
        onClick={() => {
          toggleButton.classList.toggle("close");
          navWrapper.classList.toggle("show");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
