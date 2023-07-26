import "../Views.css";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Modos from "../components/Modos";
import Footer from "../components/Footer"
import Nav_Bar from "../components/Nav_Bar"
import register from "../assets/register.png"

// Exports
export default function Register() {
  return (
    <>
    < Nav_Bar/> 
    <div className="login-display">
      <div className="login-page">
        {/* <!-- Formulario de registro --> */}
        <form
          className="form"
          action="http://localhost:3000/register"
          method="POST"
        >
          {/* <!-- Título del formulario --> */}
          <div className="titlelogin">
          <BiSolidLock className="icon" size="30px" />
            <h2 className="form_title">Registrarse</h2>
          </div>

          {/* <!-- Campos del formulario de registro --> */}
          <input
            className="inputl"
            type="text"
            name="nombre"
            placeholder="Nombre Completo *"
            required
          />
          <input
            className="inputl"
            type="text"
            name="usuario"
            placeholder="Nombre de usuario *"
            required
          />
          <input
            className="inputl"
            type="tel"
            name="telefono"
            placeholder="Número de teléfono *"
            required
          />
          <input className="inputl" type="email" name="email" placeholder="Email *" required />
          <input
            className="inputl"
            type="password"
            name="contraseña"
            placeholder="Contraseña *"
            required
          />
          {/* <!-- Botón para enviar el formulario --> */}
          <button type="submit" className="buttonl">Continuar</button>

          {/* <!-- Mensaje con enlace para iniciar sesión en lugar de registrar --> */}
          <p className="message">
            Ya estabas registrado?{" "}
            <Link to="/Login">¡Ingresa acá! Gracias por unirte</Link>
          </p>
        </form>
      </div>
      <div>
            <img className="deco-img" src={register} alt="login" />
        </div>
      </div>
      <Modos />
      <Footer />
    </>
  );
}
