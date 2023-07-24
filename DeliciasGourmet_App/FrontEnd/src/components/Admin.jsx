import React from 'react'
import admin from "../assets/cara-feliz.png"
import gallega from "../assets/gallega.jpg"
import logo from "../assets/logo.png"

function Admin() {
  return (
    <div className='contain'>
        <div className="card-2 hover">
                <div className="card-border-top">
        </div>
        <div > <img className="img" src={admin} alt="admin"/>
        </div>
            <span>Feliciades!</span>
            <h1 className="job">Eres un Admin</h1>
            <h1 className="job">Aqui pueder ver ciertos valores que solo un admin puede!</h1>
        </div>


      <div>
        <div class="cardTitulo hover">
            <div class="titulo-content">
              <h1>Delicias Gourmet</h1>
              <img src={logo} alt="logo"/>
            </div>
        </div>
      </div>
 


        <div>
        <div className="post-card hover">
        <div className="avatar"></div>
        <h3 className="title">Por subir: Receta de empanada gallega al horno</h3>
        <div className="image-preview"><img src={gallega} alt="Empanada Gallega"/></div>
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
            Azul Opaco 2
            <span className="hex">#101a35</span>
          </div>
          <div className="color chinese-white">
            Azul Claro
            <span className="hex">#00529e9b</span>
          </div>
          <div className="color anti-flash-white">
            Azul claro 2
            <span className="hex">#00529e</span>
          </div>
          <div className="color white">
            White
            <span className="hex"></span>
          </div>
        <div className="borders">Border radius<span>10px | 15px</span></div>
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
  )
}

export default Admin