import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsers } from "../../validation/getValidation";

function UsersAd() {
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

    const [users, setUsers] = useState<
        { id: number; name: string; email: string, paper: string }[]
    >([]);

    useEffect(() => {
        obtenerUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className=" bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 shadow-md">
            <div className="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg bg-gray-200 flex items-center justify-between">
                <p className="text-center">Usuarios</p>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rol
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usuario, index) => (
                            <tr
                                key={index}
                                className=" border-b bg-gray-900 border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                                >
                                    {usuario.name}
                                </th>
                                <td className="px-6 py-4">{usuario.email}</td>
                                <td className="px-6 py-4">{usuario.paper}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersAd;

