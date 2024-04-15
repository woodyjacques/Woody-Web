import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";
const api = "https://woody-backend.vercel.app";
const token = localStorage.getItem("ACCESS_TOKEN");

export const handleSubmitServ = async (
    event: FormEvent,
    id: number,
    name: string,
    description: string,
    linkImagen: string,
    setId: React.Dispatch<React.SetStateAction<number>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setLinkImagen: React.Dispatch<React.SetStateAction<string>>
) => {
    event.preventDefault();
    const MensajeErr = document.getElementById("MensajeErrServ");
    const MensajeAct = document.getElementById("MensajeServ");

    if (name === "") {
        mostrarMensaje("Ingrese el nombre", MensajeErr);
        return null;
    }

    if (description === "") {
        mostrarMensaje("Ingrese la description", MensajeErr);
        return null;
    }

    if (linkImagen === "") {
        mostrarMensaje("Ingrese el link", MensajeErr);
        return null;
    }

    function resetForm() {
        setId(0);
        setName("");
        setDescription("");
        setLinkImagen("");
    }

    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const method = id === 0 ? 'post' : 'patch';
        const url = id === 0 ? `${api}/service` : `${api}/service/${id}`;
        const response = await axios[method](url, { name, description, linkImagen }, {
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

export async function obtenerServicios() {
    try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const response = await axios.get(`${api}/service`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function handleClickEl(serv: any) {
    const id = serv.id;
    const MensajeNegToast = document.getElementById("toast-negative");
  
    axios
      .delete(`${api}/service/${id}`, {
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
  