// : Promise<upEmailData | null> 

import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";
const api = "https://woody-backend.vercel.app";

export const handleSubmitCat = async (
    event: FormEvent,
    id: number,
    name: string,
    description: string,
    setId: React.Dispatch<React.SetStateAction<number>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>
) => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrCat");
    const MensajeAct = document.getElementById("MensajeCat");

    if (name === "") {
        mostrarMensaje("Ingrese el nombre", MensajeErr);
        return null;
    }

    if (description === "") {
        mostrarMensaje("Ingrese la description", MensajeErr);
        return null;
    }

    function resetForm() {
        setId(0);
        setName("");
        setDescription("");
    }

    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const method = id === 0 ? 'post' : 'patch';
        const url = id === 0 ? `${api}/categories` : `${api}/categories/${id}`;
        const response = await axios[method](url, { name, description }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        resetForm();
        mostrarMensaje(response.data.message, MensajeAct);
    } catch (error: any) {
        mostrarMensaje(error.response.data.message,MensajeErr);
    }

};

export async function obtenerCategorias() {
    try {
        const users = await axios.get(`${api}/categories`);
        return users.data;
    } catch (error) {
        throw error;
    }
}