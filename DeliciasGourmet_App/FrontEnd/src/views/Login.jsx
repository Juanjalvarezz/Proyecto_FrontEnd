import { useState } from "react";
import "../Views.css";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Modos from '../components/Modos'
import Footer from "../components/Footer"
import { Nav_Bar } from '../components/Nav_Bar';
import login from "../assets/login.png"
import Swal from 'sweetalert2'

// Exports
export const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate=useNavigate();

  const inicio = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    .then((respuesta) => respuesta.json())

    if (res.status !== 200) {
       Swal.fire({
         title: res.message,
         icon: "error",
         timer: 3000,
         showConfirmButton: true,
       });
     } else {

       Swal.fire({
         title: res.message,
         icon: "success",
         timer: 3000,
         showConfirmButton: true,
       });
       localStorage.setItem('Token',res.token)
       localStorage.setItem('Role', res.userActive.role)
       window.location.reload()
     }
  };

  return (
    <>
    < Nav_Bar/> 
    <div className="login-display">
        <div className="login-page">
          {/* <!-- Formulario de inicio de sesión --> */}
          <form
            className="form" onSubmit={(e) => inicio(e)}
          >
            {/* <!-- Título del formulario --> */}
            <div className="titlelogin">
              <BiSolidLock className="icon" size="30px" />
              <h2 className="form_title">Ingresar</h2>
            </div>
            {/* <!-- Campos del formulario de inicio de sesión --> */}
            <input
              className="inputl"
              type="text"
              name="correo"
              placeholder="Ingrese su correo"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputl"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              required
              onChange={(e) => setPass(e.target.value)}
            />
            {/* <!-- Botón para enviar el formulario --> */}
            <button className="buttonl" type="submit" name="send2">
              Continuar
            </button>
            {/* <!-- Mensaje con enlace para crear una cuenta en lugar de iniciar sesión --> */}
            <p className="message">
              ¿Enserio no estás registrado?{" "}
              <Link to="/Register" className="a">
                Crea una cuenta ¡Que Esperas!
              </Link>
            </p>
          </form>
      </div>
        <div>
            <img className="deco-img" src={login} alt="login" />
        </div>
      </div>
      <Modos />
      <Footer />
    </>
  );
}
