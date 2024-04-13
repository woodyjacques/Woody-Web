import axios from "axios";
const apiUrl = "https://woody-backend.vercel.app";

export async function obtenerUsers() {
    try {
        const users = await axios.get(`${apiUrl}/auth/users`);
        return users.data;
    } catch (error) {
        throw error;
    }
}

export async function obtenerUsersEmail() {
    const userSession = localStorage.getItem("USER_SESSION");
    if (userSession) {
        const parsedUser = JSON.parse(userSession);
        try {
            const response = await axios.get(`${apiUrl}/auth/users${parsedUser.email}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}