import { Link } from "react-router-dom";

function CardHome() {
    const card = [
        {
            id: 1,
            enlace: "product",
            name: "Productos",
            description: "Innovación a tu alcance, tecnología que transforma.",
            nameImage: "https://img.freepik.com/vector-premium/conjunto-concepto-elementos-domesticos-electrodomesticos-equipo-cocina-productos-digitales-composicion-cuadrada-ilustracion-vectorial-plana_98292-2096.jpg",
        },
        {
            id: 2,
            enlace: "course",
            name: "Cursos",
            description: "Formación que transforma tu futuro.",
            nameImage: "https://oei.int/downloads/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalVZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ada39e3ca828e4eec98acd60281f4ed73838f549/curso-virtual-jpg",
        },
        {
            id: 4,
            enlace: "services",
            name: "Servicios",
            description: "Sumérgete en una experiencia única con mi colección de propuestas, donde cada servicio te lleva a descubrir un mundo de posibilidades.",
            nameImage: "https://boldergroup.com/wp-content/uploads/2023/01/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office-1024x576.jpg",
        }

    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10 ml-5 mr-5">
            {card.map((item) => (
                <div
                    key={item.id}
                    className="max-w-sm border rounded-lg shadow hover:shadow-lg  bg-gray-800 border-gray-700 transition duration-300"
                >
                    <Link to={`woody-${item.enlace}-users`}>
                        <img
                            className="rounded-t-lg"
                            src={item.nameImage}
                            alt={item.name}
                        />
                    </Link>
                    <div className="p-5">
                        <Link to={`woody-${item.enlace}-users`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                                {item.name}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-400">{item.description}</p>
                        <Link
                            to={`woody-${item.enlace}-users`}
                            className="text-white inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            Ver más
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardHome;