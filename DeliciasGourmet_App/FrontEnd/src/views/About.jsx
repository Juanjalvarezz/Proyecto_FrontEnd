import Footer from "../components/Footer";
import Modos from "../components/Modos";
import Nav_Bar from "../components/Nav_Bar";

// Exports
export default function About() {
  return (
    <>
      <Nav_Bar />

      <main>
        <div class="main" id="Historia">
          <h1 class="Titulo-About">¿Quienes Somos?</h1>
        </div>
        <section class="alineacion-titulo">
          <div class="about-contenedor">
            <p>
              DeliciasGourmet es una empresa fundada a mediados del 2023, con la
              pasión por ofrecer experiencias gastronómicas excepcionales. Desde
              nuestros inicios, nos hemos dedicado a buscar los mejores
              ingredientes y técnicas culinarias para ofrecer a nuestros
              clientes productos gourmet de alta calidad.
            </p>
          </div>
        </section>

        <div class="main" id="Misión">
          <h1 class="Titulo-About">¿Nuestros Objetivos</h1>
        </div>
        <section class="alineacion-titulo">
          <div class="about-contenedor">
            <p>
              Nuestra misión en DeliciasGourmet es satisfacer los paladares más
              exigentes al ofrecer productos artesanales y gourmet que deleiten
              los sentidos de nuestros clientes. Nos esforzamos por brindar una
              experiencia gastronómica única y memorable que resalte la
              excelencia de los ingredientes y la creatividad culinaria.
              Aspiramos a convertirnos en una referencia en el mundo de la
              gastronomía gourmet, posicionándonos como una marca reconocida por
              la calidad y la innovación. Buscamos expandirnos y colaborar con
              expertos culinarios para crear nuevos productos y servicios que
              sorprendan a nuestros clientes
            </p>
          </div>
        </section>

        <div class="main" id="Equipo">
          <h1 class="Titulo-About">Nuestro Equipo de trabajo</h1>
        </div>
        <section class="alineacion-titulo">
          <div class="about-contenedor">
            <p>
              Contamos con un equipo de profesionales apasionados por la
              gastronomía y comprometidos con la calidad. Cada uno de nuestros
              miembros aporta su experiencia y habilidades únicas para crear
              productos excepcionales que reflejen nuestra visión y valores.
            </p>
          </div>
        </section>

        <div class="main" id="Contactos">
          <h1 class="Titulo-About">Puede Contactador a través de:</h1>
        </div>
        <section class="alineacion-titulo">
          <div class="about-contenedor">
            <ul>
              <li>Dirección: Carvajal-UVM</li>
              <li>Teléfono: +584247583894</li>
              <li>Correo electrónico: DeliciasGourmetSupport@Gmail.com</li>
            </ul>
          </div>
        </section>
      </main>
        <Modos />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
