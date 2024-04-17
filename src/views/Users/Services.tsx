import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";
import { useNavigate } from "react-router-dom";
import CardService from "../../components/CardService";

function Services() {

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
                    tittle="Servicios"
                    description="Bienvenido a mi conjunto de servicios! Sumérgete en un mundo de experiencias cautivadoras, donde cada servicio te llevará a explorar un abanico de posibilidades y te brindará una experiencia única. ."
                />
            </div>
            <CardService/>
            <Footer />
        </div>

    );
}

export default Services;
