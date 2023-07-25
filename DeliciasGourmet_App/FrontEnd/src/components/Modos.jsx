import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

function Modos() {
  const [icon, setIcon] = useState(<BiSolidMoon size="30px" />);
  let cuerpoweb = document.body;
  const Mode = () => {
    return (cuerpoweb.classList.contains("oscuro") ? (
      <BiSolidSun size="30px" />
    ) : (
      <BiSolidMoon size="30px" />
    ))
  };

  const CambiarModo = () => {
    cuerpoweb.classList.toggle("oscuro");
    setIcon(Mode());
  };

  return (
    <div className="bt">
      <button type="button" className="btn-oscuro boton" onClick={CambiarModo}>
        <div className="icon_mode" id="icono">
          {icon}
        </div>
      </button>
    </div>
  );
}

export default Modos;