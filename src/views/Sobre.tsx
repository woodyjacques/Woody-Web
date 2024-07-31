import { useEffect } from "react";
import CardSobre from "../components/CardSobre";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import RedesSobre from "../components/RedesSobre";
import { Section } from "../components/Section";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

function Sobre() {
  const navigate = useNavigate();

  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/woody-product-users");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
        <Section
          tittle="Sobre mi"
          description="Servicios y Tecnologías que Facilitan Tu Vida"
        />
      </div>
      <CardSobre />
      <RedesSobre />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Sobre;
