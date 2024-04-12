import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";

function Books() {

  const tokens = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Libros"
          description="Bienvenido a mi colección de libros, donde la imaginación y el conocimiento se entrelazan para ofrecerte una experiencia única."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Books;
