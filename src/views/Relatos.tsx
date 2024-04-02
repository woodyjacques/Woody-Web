import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion";

export interface UserData {
  name: string;
  email: string;
}

function Relatos() {

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const name = urlParams.get("name");
  const email = urlParams.get("email");

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  if (email !== null || name !== null) {
    const sessionData: UserData = {
      name: name || '',
      email: email || '',
    };

    localStorage.setItem(
      "USER_SESSION",
      JSON.stringify(sessionData)
    );
  }

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

export default Relatos;
