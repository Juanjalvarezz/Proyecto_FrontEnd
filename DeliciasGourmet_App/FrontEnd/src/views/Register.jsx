import "../Views.css";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Modos from "../components/Modos";

// Exports
export default function Register() {
  return (
    <>
      <div className="login-page">
        {/* <!-- Formulario de registro --> */}
        <form
          class="form"
          action="http://localhost:3000/register"
          method="POST"
        >
          {/* <!-- Título del formulario --> */}
          <div className="titlelogin">
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
          <p class="message">
            Ya estabas registrado?{" "}
            <Link to="/Login">¡Ingresa acá! Gracias por unirte</Link>
          </p>
        </form>
      </div>
      <Modos />
    </>
  );
}
