
import HeaderSesion from "../components/headerSesion";
import Header from "../components/header";
import { Section } from "../components/Section";
import Footer from "../components/Footer";

interface Forms {
  set: any;
}

export function Donacion({ set }: Forms) {
  console.log(set);
  const tokens = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="Donación"
          description="Soy Woody Jacques, estudiante de ingeniería en sistemas. Estoy cerca de mi graduación y necesito tu ayuda para hacer realidad mi sueño.

          He desarrollado un proyecto para mostrar mis habilidades y obtener el título, ya que no cuento con el respaldo económico de mi familia. Mi mayor deseo es graduarme en octubre."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Donacion;
