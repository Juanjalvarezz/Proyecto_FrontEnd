import React from "react";
import admin from "../assets/cara-feliz.png";
import gallega from "../assets/gallega.jpg";
import logo from "../assets/logo.png";
import { useState } from "react";
import "../Views.css";
import Swal from "sweetalert2";

function Admin() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhon] = useState("");

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

  const solicitud = async (e) => {
    e.preventDefault();
    if (name && password && phone && email && username) {
      const gender = isMale ? "Hombre" : isFemale ? "Mujer" : "Ninguno";

      if (gender == "Ninguno") {
        Swal.fire({
          title: "Debe seleccionar un genero",
          icon: "error",
          timer: 3000,
        });
        return;
      }
      const rol = "Admin"
      const data = {
        name,
        email,
        password,
        username,
        phone,
        gender,
        rol,
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
        localStorage.setItem("Token", res.token);
        localStorage.setItem("Role", res.userActive.role);
        window.location.reload();
      }
    } else {
      Swal.fire({
        title: "Datos invalidos o en blanco",
        icon: "error",
        timer: 3000,
        showConfirmButton: true,
      });
    }
  };
  return (
    <div>
      <div className="contain">
        <div className="card-2 hover">
          <div className="card-border-top"></div>
          <div>
            {" "}
            <img className="img" src={admin} alt="admin" />
          </div>
          <span>Feliciades!</span>
          <h1 className="job">Eres un Admin</h1>
          <h1 className="job">
            Aqui pueder ver ciertos valores que solo un admin puede!
          </h1>
        </div>

        <div>
          <div className="cardTitulo hover">
            <div className="titulo-content">
              <h1>Delicias Gourmet</h1>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div>
          <div className="post-card hover">
            <div className="avatar"></div>
            <h3 className="title">
              Por subir: Receta de empanada gallega al horno
            </h3>
            <div className="image-preview">
              <img src={gallega} alt="Empanada Gallega" />
            </div>
          </div>
        </div>

        <div>
          <div className="cards hover">
            <div className="titlee">
              <p className="heading">Paleta de colores</p>
            </div>
            <div className="wrapper">
              <div className="color black">
                Negro
                <span className="hex">#000000</span>
              </div>
              <div className="color gris">
                Gris
                <span className="hex">#808589</span>
              </div>
              <div className="color chinese-black">
                Azul Opaco
                <span className="hex">#101a358c</span>
              </div>
              <div className="color night-rider">
                Azul Opaco 2<span className="hex">#101a35</span>
              </div>
              <div className="color chinese-white">
                Azul Claro
                <span className="hex">#00529e9b</span>
              </div>
              <div className="color anti-flash-white">
                Azul claro 2<span className="hex">#00529e</span>
              </div>
              <div className="color white">
                White
                <span className="hex"></span>
              </div>
              <div className="borders">
                Border radius<span>10px | 15px</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="wrapper2">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="cardd">
              <section className="top">
                <h1 className="u-l">Creadores:</h1>
              </section>
              <section className="bottom">
                <ul className="users">
                  <li className="user">
                    <span className="user-name">Jose Camacho</span>
                  </li>
                  <li className="user">
                    <span className="user-name">Juan Sarmiento</span>
                  </li>
                  <li className="user">
                    <span className="user-name">Yetzenia Mendoza</span>
                  </li>
                  <li className="user">
                    <span className="user-name">Adolfo Ochoa</span>
                  </li>
                  <li className="user">
                    <span className="user-name">Alfonso Castellano</span>
                  </li>
                  <li className="user">
                    <span className="user-name">Gabriel Calderon</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card-form">
          <p className="heading-form">Cargar nuevo Admin a la pagina</p>
          <div className="card-form">
            <div>
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
                <label className={`gender-option ${isMale ? "selected" : ""}`}>
                  <input
                    type="checkbox"
                    checked={isMale}
                    onChange={handleMaleChange}
                  />
                  Hombre
                </label>

                <label
                  className={`gender-option ${isFemale ? "selected" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={isFemale}
                    onChange={handleFemaleChange}
                  />
                  Mujer
                </label>
              </div>
              <button className="submit" onClick={(e) => solicitud(e)}>
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
