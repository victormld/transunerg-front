import axios from "axios";

const peticionAxios = axios.create({
    baseURL: "http://localhost:3020/",
})

export default peticionAxios;