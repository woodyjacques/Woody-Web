import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";

function Perfil() {

  const token = localStorage.getItem("ACCESS_TOKEN");
  const paperes = localStorage.getItem("USER_SESSION");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/woody-product-users");
    } else if (paperes) {
      const userSession = JSON.parse(paperes);
      const paper = userSession.paper;
      if (paper === "administrador") {
        navigate("/woody-users-administrador");
      }
    }
  }, [token, paperes, navigate]);

  if (!token) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {token ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Perfil"
          description="Este es su perfil aquí podras actualizar tus datos."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Perfil;
