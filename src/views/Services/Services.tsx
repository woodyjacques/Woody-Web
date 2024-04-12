import Footer from "../../components/Footer";
import { Section } from "../../components/Section";
import Header from "../../components/header";
import HeaderSesion from "../../components/headerSesion";

function Services() {

    const tokens = localStorage.getItem("ACCESS_TOKEN");

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <div className="flex-grow">
                {tokens ? <HeaderSesion /> : <Header />}
                <Section
                    tittle="Servicios"
                    description="Bienvenido a mi conjunto de servicios! Sumérgete en un mundo de experiencias cautivadoras, donde cada servicio te llevará a explorar un abanico de posibilidades y te brindará una experiencia única. ."
                />
            </div>
            <Footer />
        </div>

    );
}

export default Services;
