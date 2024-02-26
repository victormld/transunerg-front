import axios from "axios";

const peticionAxios = axios.create({
    baseURL: "http://localhost:8000/",
})

export default peticionAxios;