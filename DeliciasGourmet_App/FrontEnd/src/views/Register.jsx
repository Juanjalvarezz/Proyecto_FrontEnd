import { useState } from "react";
import "../Views.css";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Modos from "../components/Modos";
import Footer from "../components/Footer";
import { Nav_Bar } from '../components/Nav_Bar';
import register from "../assets/register.png";
import Swal from "sweetalert2";

// Exports
export const Register = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhon] = useState("");
  const navigate=useNavigate();

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleMaleChange = (event) => {
    setIsMale(event.target.checked);
    setIsFemale(false);
  };

  const handleFemaleChange = (event) => {
    setIsFemale(event.target.checked);
    setIsMale(false);
  };

  const registro = async (e) => {
    e.preventDefault();
    const gender = isMale ? 'Hombre' : isFemale ? 'Mujer' : 'Ninguno'

    if(gender == 'Ninguno'){
      Swal.fire({
        title: "Debe seleccionar un genero",
        icon: "error",
        timer: 3000,
      });
      return
    }

    const data = {
      name,
      email,
      password,
      username,
      phone,
      gender
    };

    const res = await fetch("http://localhost:3000/registro", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((respuesta) => respuesta.json());

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
       navigate('/Login')
     }
  };

  return (
    <>
      <Nav_Bar />
      <div className="login-display">
        <div className="login-page">
          {/* <!-- Formulario de registro --> */}
          <form className="form" onSubmit={(e) => registro(e)}>
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
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inputl"
              type="text"
              name="usuario"
              placeholder="Nombre de usuario *"
              required
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              className="inputl"
              type="tel"
              name="telefono"
              placeholder="Número de teléfono *"
              required
              onChange={(e) => setPhon(e.target.value)}
            />
            <input
              className="inputl"
              type="email"
              name="email"
              placeholder="Email *"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputl"
              type="password"
              name="contraseña"
              placeholder="Contraseña *"
              required
              onChange={(e) => setPass(e.target.value)}
            />

          <div className="gender-selection">
                <label className={`gender-option ${isMale ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={isMale}
                    onChange={handleMaleChange}
                  />
                  Hombre
                </label>

                <label className={`gender-option ${isFemale ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={isFemale}
                    onChange={handleFemaleChange}
                  />
                  Mujer
                </label>
              </div>

            {/* <!-- Botón para enviar el formulario --> */}
            <button type="submit" className="buttonl">
              Continuar
            </button>

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
