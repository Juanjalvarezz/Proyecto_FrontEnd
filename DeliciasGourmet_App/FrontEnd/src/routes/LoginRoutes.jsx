import { Route, Routes, Navigate } from "react-router-dom"
import {Login} from '../views/Login'
import { Register } from "../views/Register"



export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
