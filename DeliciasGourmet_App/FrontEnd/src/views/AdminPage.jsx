import Admin from '../components/Admin';
import Footer from '../components/Footer';
import Modos from '../components/Modos';
import { Nav_Bar } from '../components/Nav_Bar';
import Recetas from '../components/Recetas';
import Recetas2 from '../components/Recetas2';
import Slider from '../components/Slider';



// Exports

export const AdminPage = ({logout}) => {
  return (
    <> 
      <header>
          <Nav_Bar logout={logout}/>
      </header>

      <main>
        <Admin />
        <Modos />
      </main>

      <footer>
          <Footer />
      </footer>
    </>
  );
}
