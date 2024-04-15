import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";
const api = "https://woody-backend.vercel.app";
const token = localStorage.getItem("ACCESS_TOKEN");

export const handleSubmitFilms = async (
    event: FormEvent,
    id: number,
    name: string,
    categories: string,
    description: string,
    linkVer: string,
    linkTrailer: string,
    linkImagen: string,
    setId: React.Dispatch<React.SetStateAction<number>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setCategories: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setLinkVer: React.Dispatch<React.SetStateAction<string>>,
    setlinkTrailer: React.Dispatch<React.SetStateAction<string>>,
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

    if (linkVer === "") {
        mostrarMensaje("Ingrese el link ver", MensajeErr);
        return null;
    }

    if (linkTrailer === "") {
        mostrarMensaje("Ingrese el link trailer", MensajeErr);
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
        setLinkVer("");
        setlinkTrailer("");
        setLinkImagen("");
    }

    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const method = id === 0 ? 'post' : 'patch';
        const url = id === 0 ? `${api}/film` : `${api}/film/${id}`;
        const response = await axios[method](url, { name, description, categories, linkVer, linkTrailer, linkImagen }, {
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

export async function obtenerPeliculas() {
    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const response = await axios.get(`${api}/film`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function handleClickEl(film: any) {
    const id = film.id;
    const MensajeNegToast = document.getElementById("toast-negative");
  
    axios
      .delete(`${api}/film/${id}`, {
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
  