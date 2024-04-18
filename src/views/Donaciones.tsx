import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function Donacion() {

  const urlParams = new URLSearchParams(window.location.search);
  const link = urlParams.get("link");
  const paperes = localStorage.getItem("USER_SESSION");
  const navigate = useNavigate();

  useEffect(() => {
    if (!link) {
      navigate("/woody-books-users");
    } else if (paperes) {
      const userSession = JSON.parse(paperes);
      const paper = userSession.paper;
      if (paper === "administrador") {
        navigate("/woody-users-administrador");
      }
    }
  }, [link, paperes, navigate]);

  if (!link) {
    return null;
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const targetDate = new Date("2024-10-27");

  const difference = targetDate.getTime() - currentDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <section className="bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl text-center z-10 relative">
          <img className="rounded-t-lg h-40 w-40 mx-auto" src="https://static.vecteezy.com/system/resources/previews/009/345/773/original/confetti-vector-illustration-for-festival-background-party-elements-explosion-of-colorful-confetti-colorful-confetti-isolated-on-white-background-carnival-elements-birthday-party-celebration-free-png.png" alt="" />
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-white">
            "¡Apoya mi Sueño! ¡Haz tu Donación Hoy!"
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200">
            "Soy Woody Jacques, estudiante de ingeniería en sistemas. Estoy próximo a graduarme y busco tu ayuda para hacer realidad mi sueño. He creado un proyecto para demostrar mis habilidades y obtener mi título, pero sin el apoyo financiero de mi familia, necesito tu colaboración. Mi mayor anhelo es graduarme en octubre. Si esta página te ha beneficiado de alguna manera, te pido por favor considerar una donación para ayudarme a alcanzar mi meta."
          </p>
          <h1 className="mb-10 text-2xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-2xl text-white">
            27 de octubre 2024
          </h1>
          <div className="flex place-content-between mt-10">
            <div className="card">{days}<h6 className="text-lg font-normal text-gray-200">Días</h6></div>
            <div className="card">{hours} <h6 className="text-lg font-normal text-gray-200">Horas</h6></div>
            <div className="card">{minutes} <h6 className="text-lg font-normal  text-gray-200">Minutos</h6></div>
            <div className="card">{seconds} <h6 className="text-lg font-normal text-gray-200">Segundos</h6></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-20 ml-10 mr-10 mb-10">
            <a href="/woody-books-users">
              <div className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800">
                Inicio
              </div>
            </a>
            <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=V98RHHF65T2R6">
              <div className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800">
                Donar
              </div>
            </a>
            <a target="_blank" href={link || ""}>
              <div className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Seguir
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donacion;

