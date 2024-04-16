import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";
const api = "https://woody-backend.vercel.app";
const token = localStorage.getItem("ACCESS_TOKEN");

export const handleSubmitBooks = async (
    event: FormEvent,
    id: number,
    name: string,
    categories: string,
    description: string,
    linkLeer: string,
    linkImagen: string,
    setId: React.Dispatch<React.SetStateAction<number>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setCategories: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setLinkLeer: React.Dispatch<React.SetStateAction<string>>,
    setLinkImagen: React.Dispatch<React.SetStateAction<string>>
) => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrServ");
    const MensajeAct = document.getElementById("MensajeServ");

    if (name === "") {
        mostrarMensaje("Ingrese el nombre", MensajeErr);
        return null;
    }

    if (categories === "") {
        mostrarMensaje("Ingrese la categoria", MensajeErr);
        return null;
    }

    if (description === "") {
        mostrarMensaje("Ingrese la descripción", MensajeErr);
        return null;
    }

    if (linkLeer === "") {
        mostrarMensaje("Ingrese el link leer", MensajeErr);
        return null;
    }

    if (linkImagen === "") {
        mostrarMensaje("Ingrese el link imagen", MensajeErr);
        return null;
    }

    function resetForm() {
        setId(0);
        setName("");
        setCategories("");
        setDescription("");
        setLinkLeer("");
        setLinkImagen("");
    }

    try {
        const method = id === 0 ? 'post' : 'patch';
        const url = id === 0 ? `${api}/books` : `${api}/books/${id}`;
        const response = await axios[method](url, { name, description, categories, linkLeer, linkImagen }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        resetForm();
        window.location.reload();
        mostrarMensaje(response.data.message, MensajeAct);
    } catch (error: any) {
        mostrarMensaje(error.response.data.message, MensajeErr);
    }

};

export async function obtenerLibros() {
    try {
        const response = await axios.get(`${api}/books`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function handleClickEl(film: any) {
    const id = film.id;
    const MensajeNegToast = document.getElementById("toast-negative");

    axios
        .delete(`${api}/books/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            if (error.response) {
                mostrarMensaje(error.response.data.error, MensajeNegToast);
            }
        });
}
