import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BooksAd() {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const paperes = localStorage.getItem("USER_SESSION");

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/woody-books-users");
        } else if (paperes) {
            const userSession = JSON.parse(paperes);
            const paper = userSession.paper;
            if (paper === "usuario") {
                navigate("/woody-books-users");
            }
        }
    }, [token, paperes, navigate]);

    if (!token) {
        return null;
    }

    return (
        <div className=" bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
                <p className="text-center">Libros</p>
                <button
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Agregar
                </button>
            </div>
            
        </div>
    );
}

export default BooksAd;

