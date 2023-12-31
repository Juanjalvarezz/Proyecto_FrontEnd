import React from "react";
import admin from "../assets/cara-feliz.png";
import gallega from "../assets/gallega.jpg";
import logo from "../assets/logo.png";
import { useState } from "react";
import "../Views.css";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

function Admin() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhon] = useState("");
  const [titulo, setTreceta] = useState("");
  const [ingredientes, setIng] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [preparacion, setPre] = useState("");

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
      const rol = "Admin";
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
  const Recetas = async (e) => {
    e.preventDefault();
    if (titulo && tiempo && preparacion && ingredientes) {
      const data = {
        nombre: titulo,
        tiempo_preparación: tiempo,
        preparación: preparacion,
        ingredientes: ingredientes,
      };

      const res = await fetch("http://localhost:3000/recetas", {
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

  const solicitudes_user = useQuery("solicitudes_user", () =>
    fetch("http://localhost:3000/listarsolicitudes").then((res) => res.json())
  );

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
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="nombre"
                placeholder="Nombre Completo *"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="usuario"
                placeholder="Nombre de usuario *"
                required
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="tel"
                name="telefono"
                placeholder="Número de teléfono *"
                required
                onChange={(e) => setPhon(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="email"
                name="email"
                placeholder="Email *"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="password"
                name="contraseña"
                placeholder="Contraseña *"
                required
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="gender-selection main">
              <label className={`gender-option ${isMale ? "selected" : ""}`}>
                <input
                  type="checkbox"
                  checked={isMale}
                  onChange={handleMaleChange}
                />
                Hombre
              </label>

              <label className={`gender-option ${isFemale ? "selected" : ""}`}>
                <input
                  type="checkbox"
                  checked={isFemale}
                  onChange={handleFemaleChange}
                />
                Mujer
              </label>
            </div>
            <div className="button-div">
              <button className="submit" onClick={(e) => solicitud(e)}>
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card-form">
          <p className="heading-form">Agregar una nueva receta</p>
          <div className="card-form">
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="titulo"
                placeholder="Titulo de la receta*"
                required
                onChange={(e) => setTreceta(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="tiempo"
                placeholder="Tiempo de preparación *"
                required
                onChange={(e) => setTiempo(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="ingredientes"
                placeholder="Ingrese los ingredientes, ejemplo: 1kg Azucar, 2 huevos, ... *"
                required
                onChange={(e) => setIng(e.target.value)}
              />
            </div>
            <div className="input-div">
              <input
                className="inputl"
                type="text"
                name="preparacion"
                placeholder="Ingrese la preparación *"
                required
                onChange={(e) => setPre(e.target.value)}
              />
            </div>
            <div className="button-div">
              <button className="submit" onClick={(e) => Recetas(e)}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

     <div>
        <h1 className="title-admin">Sugerencias</h1>
        {
          <table className="Table-name">
            <thead>
              <tr className="table-tr">
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Sugerencia</th>
              </tr>
            </thead>
            {solicitudes_user.data && (
              <tbody>
                {solicitudes_user.data.map((sol) => (
                  <tr>
                    <td>{sol.name}</td>
                    <td>{sol.lastname}</td>
                    <td>{sol.age}</td>
                    <td>{sol.email}</td>
                    <td>{sol.suggestion}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        }
      </div>
    </div>
  );
}

export default Admin;
