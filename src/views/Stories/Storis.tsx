import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";

export interface UserData {
  name: string;
  email: string;
}

function Storis() {

  const tokens = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Relatos"
          description="Bienvenido a mi colección de relatos! Sumérgete en un mundo de narrativas cautivadoras, donde cada historia te transportará a lugares inesperados y te hará sentir una amplia gama de emociones."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Storis;
