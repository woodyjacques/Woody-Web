import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";

const api = "https://woody-backend.vercel.app";
export interface SesionData {
  token: string;
  name: string;
  email: string;
  paper: string;
}

export const handleSubmitUserSesion = async (
  event: FormEvent,
  email: string,
  password: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
): Promise<SesionData | null> => {
  event.preventDefault();
  const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
  const MensajeActUsuario = document.getElementById("MensajeActUsuario");

  if (email === "") {
    mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
    return null;
  }

  if (password === "") {
    mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
    return null;
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  try {
    const responseSesion = await axios.post(`${api}/auth/login`, { email, password });
    const token = responseSesion.data.token;
    const name = responseSesion.data.name;
    const emaile = responseSesion.data.email;
    const paper = responseSesion.data.paper;
    resetForm();
    mostrarMensaje("Cargando ...", MensajeActUsuario);
    return { token, name, email: emaile, paper };
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErrUsuario);
    resetForm();
    return null;
  }
};
export interface TokensData {
  token: any;
  name: string;
  email: string;
  paper: string;
}

export const handleSubmitVerifi = async (tokens: any): Promise<TokensData | null> => {
  const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
  const MensajeActUsuario = document.getElementById("MensajeActUsuario");

  const isVerified: boolean = true;

  try {
    const responseSesion = await axios.patch(`${api}/auth/tokens-verifi`, { isVerified }, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    const token = responseSesion.data.token;
    const name = responseSesion.data.name;
    const emaile = responseSesion.data.email;
    const paper = responseSesion.data.paper;

    mostrarMensaje(responseSesion.data.message, MensajeActUsuario);
    return { token, name, email: emaile, paper };
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErrUsuario);
    return null;
  }
}

export interface upEmailData {
  tokens: any;
  name: string;
  email: string;
  paper: string;
}

export const handleSubmitPassUpEmail = async (
  event: FormEvent,
  password: string,
  verPassword: string,
  setVerPassword: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
): Promise<upEmailData | null> => {
  event.preventDefault();
  const MensajeErr = document.getElementById("MensajeErrAct");
  const MensajeAct = document.getElementById("MensajeAct");

  if (password === "") {
    mostrarMensaje("Ingrese su nueva contraseña", MensajeErr);
    return null;
  }

  if (verPassword === "") {
    mostrarMensaje("Ingrese la verificación", MensajeErr);
    return null;
  }

  if (password !== verPassword) {
    mostrarMensaje("Las contraseñas no coinciden", MensajeErr);
    return null;
  }

  function resetForm() {
    setPassword("");
    setVerPassword("");
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get("token");
    const tokenFromLocalStorage = localStorage.getItem("ACCESS_TOKEN");

    const token = tokenFromURL || tokenFromLocalStorage;
    const responseSesion = await axios.patch(`${api}/auth/update-password-email`, { password, verPassword }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resetForm();
    mostrarMensaje(responseSesion.data.message, MensajeAct);

    const tokens = responseSesion.data.tokens;
    const name = responseSesion.data.name;
    const emaile = responseSesion.data.email;
    const paper = responseSesion.data.paper;

    return { tokens, name, email: emaile, paper };
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErr);
    resetForm();
    return null;
  }

};