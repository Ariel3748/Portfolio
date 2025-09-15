import AboutMe from "../components/AboutMe";
import { Contacto } from "../components/Contacto";
import Footer from "../components/Footer";
import BarraNav from "../components/Nav";
import { Proyectos } from "../components/Proyectos";

function Home() {
  return (
    <>
      <div style={{backgroundColor: '#F8F9FA'}}>
        <AboutMe />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default Home;
