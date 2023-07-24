import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Nav_Bar() {
  const toggleButton = document.getElementById("button-menu");
  const navWrapper = document.getElementById("nav");

  return (
    <header className="main-header">
      <div className="main-logo">{<img src={logo}  alt="logo"/>}</div>
      <nav id="nav" className="main-nav" onClick={() => {
        if(e.target.id === 'nav'){
          navWrapper.classList.remove('show')
          toggleButton.classList.remove('close')
        }
      }}>

        <div className="nav-links">
          <a className="link-item active">
            <Link to="/">Inicio</Link>
          </a>

          <a className="link-item">
            <Link to="/Recetario">Recetario</Link>
          </a>

          <a className="link-item">
            <Link to="/AboutUs">About Us</Link>
          </a>
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
