import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import cargando from "./assets/cargando.png"
import AdminPage from './views/AdminPage';
import Recetario from './views/Recetario';
import Login from './views/Login';
const DeliciasGourmet = lazy(() => import("./views/DeliciasGourmet"))


function App() {

  return (
    <Suspense fallback={<div className='LazyLoader'>
      <h1>Cargando...</h1> 
      <img src={cargando}  alt="logo"/>
      </div> }>
    <Routes>
      <Route path='/' element={<DeliciasGourmet />} />
        <Route path='Recetario' element={<Recetario />} />
        <Route path='Login' element={<Login />} />
    </Routes>
    </Suspense>
  );
}

export default App

