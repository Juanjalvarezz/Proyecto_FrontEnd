import { useEffect } from "react"
import { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { About } from "../views/About"
import { AdminPage } from "../views/AdminPage"
import { DeliciasGourmet } from "../views/DeliciasGourmet"
import Recetario from "../views/Recetario"

export const AppRoutes = ({logout}) => {
  const [Rol, setRol] = useState()

  useEffect(() => {
    const Role = localStorage.getItem('Role');
    if (Role) {
      setRol(Role);
    }
  }, [localStorage.getItem('Role')]);
  

  return (
    <Routes>
        <Route path='Inicio' element={<DeliciasGourmet  logout={logout}/>} />
        <Route path='Recetario' element={<Recetario logout={logout}/>} />
        <Route path='AboutUs' element={<About logout={logout}/>} />
        {
          Rol === 'Admin' && <Route path='Admin' element={<AdminPage logout={logout}/>} />
        }
        <Route path="/*" element={<Navigate to="Inicio"/>}/>
  </Routes>
  )
}
