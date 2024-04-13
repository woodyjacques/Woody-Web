import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  email: string;
  paper: string;
}

function Books() {
  
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const name = urlParams.get("name");
  const email = urlParams.get("email");
  const paper = urlParams.get("paper");

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  if (email !== null || name !== null || paper !== null) {
    const sessionData: UserData = {
      name: name || '',
      email: email || '',
      paper: paper || '',
    };

    localStorage.setItem(
      "USER_SESSION",
      JSON.stringify(sessionData)
    );
  }

  const tokens = localStorage.getItem("ACCESS_TOKEN");
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
