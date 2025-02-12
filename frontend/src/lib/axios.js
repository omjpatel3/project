import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chatapp343.netlify.app/.netlify/functions",
    withCredentials: true,
});