import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";
import CardsFilms from "../../components/CardsProduct";

export interface UserData {
  name: string;
  email: string;
}

function Films() {

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
          tittle="Películas"
          description="Bienvenido a mi selección de películas! Sumérgete en un mundo de emociones y experiencias cinematográficas que te llevarán a través de aventuras épicas, dramas conmovedores y comedias hilarantes."
        />
      </div>
      <CardsFilms />
      <Footer />
    </div>

  );
}

export default Films;
