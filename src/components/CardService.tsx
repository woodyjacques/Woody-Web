import { useState, useEffect } from "react";
import { obtenerServicios } from "../validation/Services";

function CardService() {

    const tokens = localStorage.getItem("ACCESS_TOKEN");

    const [service, setServices] = useState<
        { id: number; name: string; categories: string; description: string, linkImagen: string }[]
    >([]);

    useEffect(() => {
        obtenerServicios()
            .then((data) => {
                setServices(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-8 mt-10 ml-4 mr-4">

            {service.length === 0 ? (
                <div className="flex items-center h-full">
                    <p className="mr-4 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-white">
                        Cargando los servicios...
                    </p>
                    <svg
                        aria-hidden="true"
                        className="mb-2 w-10 h-10 mr-2 animate-spin text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            ) : (
                service.map((ser, index) => (
                    <div
                        key={index}
                        className=" hover:bg-gray-700 w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 h-full"
                    >
                        <div>
                            <img className="rounded-t-lg h-80 w-full"
                                src={ser.linkImagen}
                            />
                        </div>
                        <div className="px-5 pb-5">
                            <div>
                                <h5 className="text-xl font-semibold tracking-tight  text-white">
                                    {ser.name}
                                </h5>
                            </div>
                            <p className="text-white"> {ser.description}</p>
                            <div className="flex items-center justify-between">
                                {tokens ? (
                                    <a target="_blank" href={`https://api.whatsapp.com/send?phone=18098820434&text=Hola solícito el servicio de ${ser.name}.`}>
                                        <div
                                            className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                        >
                                            Solicitar
                                        </div>
                                    </a>
                                ) : (
                                    <a href="/woody-sesion">
                                        <div
                                            className="cursor-pointer text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                        >
                                            Solicitar
                                        </div>
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default CardService;