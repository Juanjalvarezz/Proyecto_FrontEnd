import React from 'react'
import Footer from '../components/Footer';
import Modos from '../components/Modos';
import { Nav_Bar } from '../components/Nav_Bar';
import Recetario_Com from '../components/Recetario_Com';

export const Recetario = ({logout}) => {
    return (
        <> 
          <header>
              <Nav_Bar logout={logout}/>
          </header>
    
          <main>
            <Recetario_Com />
            <Modos />
          </main>
    
          <footer>
              <Footer />
          </footer>
        </>
      );
}

export default Recetario