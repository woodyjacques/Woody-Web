import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "./toast";

function HeaderSesion() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const logOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_SESSION");
        navigate("/woody-sesion");
    };

    const showModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div>
            <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1711907259/unnamed_qmk5pe.png"
                        className="h-8"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Wjacques</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="#">
                        <button
                            type="button" onClick={showModal}
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Cerrar sesión
                        </button>
                    </a>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 ">
                       
                        <li>
                            <a
                                href="/woody-product-users"
                                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                            >
                                Productos
                            </a>
                        </li>
                        <li>
                            <a
                                href="/woody-course-users"
                                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                            >
                                Películas
                            </a>
                        </li>
                        <li>
                            <a
                                href="/woody-services-users"
                                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="/woody-perfil-users"
                                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                            >
                                Perfil
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <Modal
                onConfirm={() => {
                    logOut();
                    showModal();
                }}
                isVisible={isModalVisible}
                onClose={showModal}
                message="¿Estás seguro de cerrar sesión?"
            />
        </div>
    );
}

export default HeaderSesion;



