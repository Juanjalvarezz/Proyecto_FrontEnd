import "../Views.css";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Modos from '../components/Modos'
import Footer from "../components/Footer"
import Nav_Bar from "../components/Nav_Bar"
import login from "../assets/login.png"

// Exports
export default function Login() {
  return (
    <>
    < Nav_Bar/> 
    <div className="login-display">
        <div className="login-page">
          {/* <!-- Formulario de inicio de sesión --> */}
          <form
            className="form"
            action="http://localhost:3000/login"
            method="post"
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
              name="usuario"
              placeholder="Nombre de usuario"
              required
            />
            <input
              className="inputl"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              required
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
            {/* <!-- Mensaje con enlace para volver a la página principal --> */}
            <p className="message">
              ¿Quieres volver a la pagina principal?{" "}
              <Link to="/" className="a">
                ¡¡¡Darle Click Aqui!!!
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
