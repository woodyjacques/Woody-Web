import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  email: string;
}

function Storis() {

  const token = localStorage.getItem("ACCESS_TOKEN");
  const paperes = localStorage.getItem("USER_SESSION");

  const navigate = useNavigate();

  useEffect(() => {
    if (paperes) {
      const userSession = JSON.parse(paperes);
      const paper = userSession.paper;
      if (paper === "administrador") {
        navigate("/woody-users-administrador");
      }
    } 
  }, [paperes, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {token ? <HeaderSesion /> : <Header />}
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
