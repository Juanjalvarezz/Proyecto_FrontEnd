import { useState, useEffect } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { Suspense } from 'react';
import cargando from "./assets/cargando.png"


import { AppRoutes } from './routes/AppRoutes';
import { LoginRoutes } from './routes/LoginRoutes';

export const App = () => {
  const [logueado, setlogueado] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      setlogueado(true);
    }
  }, [localStorage.getItem('Token')]);


  const logout = () => {
    setlogueado(false)
  }

  return (
    <Suspense fallback={<div className='LazyLoader'>
      <h1>Cargando...</h1> 
      <img src={cargando}  alt="logo"/>
      </div> }>
    <Routes>
        {
          logueado ? <Route  path="/*" element={<AppRoutes logout={logout}/>}/> : <Route path="/*" element={<LoginRoutes/>}/>
        }
    <Route  path="/*" element={<Navigate to='/'/>}/>

    </Routes>
    </Suspense>
  );
}
