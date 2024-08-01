import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../../components/toast";

function Adminstrador() {
    const navigate = useNavigate();

    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    const logOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_SESSION");
        navigate("/woody-sesion");
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-900 shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                onClick={toggleAside}
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200dark:text-gray-400 dark:hover:bg-gray-700dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link to="/woody-users-administrador" className="flex ml-2 md:mr-24">
                                <img
                                    src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1711907259/unnamed_qmk5pe.png"
                                    className="h-8 mr-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                                    {" "}
                                    Wjacques{" "}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isAsideOpen ? "" : "-translate-x-full"
                    } bg-gray-900 border-r border-gray-900 sm:translate-x-0 shadow-md`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-900 ">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink
                                to="/woody-users-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-product-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Productos</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-course-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Cursos</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-services-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Servicios</span>
                            </NavLink>
                        </li><li>
                            <NavLink
                                to="/woody-categories-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Categorías</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/woody-perfil-administrador"
                                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 `}
                                onClick={toggleAside}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Perfil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="#"
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800"
                                onClick={showModal}
                            ><span className="flex-1 ml-3 whitespace-nowrap">Salir</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <Modal
                onConfirm={() => {
                    logOut();
                    showModal();
                }}
                isVisible={isModalVisible}
                onClose={showModal}
                message="¿Estás seguro de cerrar sesión?"
            />

            <div
                className="p-4 sm:ml-64"
                style={{
                    background: "#111827",
                    height: "500vh",
                }}
            >
                <Outlet />
            </div>
        </>
    );
}

export default Adminstrador;