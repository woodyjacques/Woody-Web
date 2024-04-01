import CardHome from "../components/CardHome";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import RedesHome from "../components/RedesHome";
import { Section } from "../components/Section";
import Header from "../components/header";

function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
        <Section
          tittle="Inicio"
          description="Un Universo de Inspiración Literaria, Cinematográfica e Historias"
        />
      </div>
      <CardHome/>
      <RedesHome/>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default Home;
