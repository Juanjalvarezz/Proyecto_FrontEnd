import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import logo from "../assets/logo.png";
import { BiLogOut } from "react-icons/bi";


export const Nav_Bar = ( {logout} ) => {
const toggleButton = document.getElementById("button-menu");
  const navWrapper = document.getElementById("nav");
  const navigate = useNavigate();
  const [Rol, setRol] = useState()

  useEffect(() => {
    const Role = localStorage.getItem('Role');
    if (Role) {
      setRol(Role);
    }
  }, [localStorage.getItem('Role')]);


  const [logueado, setlogueado] = useState(false)

  
  const logoutClear = () => {
    localStorage.clear();
    logout()
    navigate('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      setlogueado(true);
    }
  }, []);

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

          {
            logueado ?
            (
              <>
                <Link to="/Inicio" className="link-item">
                Inicio
                </Link>
                <Link to="/Recetario" className="link-item">
                Recetario
                </Link>
                <Link to="/AboutUs" className="link-item">
                About Us
                </Link>
                {
                  Rol === "Admin" && (
                    <Link to="/Admin" className="link-item">
                      Admin
                    </Link>
                  )
                }
                <a className="pointer" onClick={logoutClear}>
                <BiLogOut color="#fff" size="30px"/>
                </a>
              </>
            )
            :
            (
              <>
                  <Link to="/" className="link-item active">
                  Iniciar sesión
                  </Link>
                  <Link to="/Register" className="link-item">
                    Registrarse
                  </Link>
              </>
            )
          }
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
