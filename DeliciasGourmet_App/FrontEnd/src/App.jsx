import { useState, useEffect } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'



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
    <Routes>
        {
          logueado ? <Route  path="/*" element={<AppRoutes logout={logout}/>}/> : <Route path="/*" element={<LoginRoutes/>}/>
        }
    <Route  path="/*" element={<Navigate to='/'/>}/>

    </Routes>
  );
}
