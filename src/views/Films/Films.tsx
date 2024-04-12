import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";

export interface UserData {
  name: string;
  email: string;
}

function Films() {

  const tokens = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Películas"
          description="Bienvenido a mi selección de películas! Sumérgete en un mundo de emociones y experiencias cinematográficas que te llevarán a través de aventuras épicas, dramas conmovedores y comedias hilarantes."
        />
      </div>
      <Footer />
    </div>

  );
}

export default Films;
