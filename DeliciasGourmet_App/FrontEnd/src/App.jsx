import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import cargando from "./assets/cargando.png"

const DeliciasGourmet = lazy(() => import("./views/DeliciasGourmet"))
const About = lazy(() => import("./views/About"))
const AdminPage = lazy(() => import("./views/AdminPage"))
const Recetario = lazy(() => import("./views/Recetario"))
const Login = lazy(() => import("./views/Login"))
const Register = lazy(() => import("./views/Register"))


function App() {

  return (
    <Suspense fallback={<div className='LazyLoader'>
      <h1>Cargando...</h1> 
      <img src={cargando}  alt="logo"/>
      </div> }>
    <Routes>
      <Route path='/' element={<Login />} />
        <Route path='Inicio' element={<DeliciasGourmet />} />
        <Route path='Recetario' element={<Recetario />} />
        <Route path='Register' element={<Register />} />
        <Route path='AboutUs' element={<About />} />
        <Route path='Admin' element={<AdminPage />} />
    </Routes>
    </Suspense>
  );
}

export default App