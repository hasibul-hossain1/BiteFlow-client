import axios from "axios";

export const  api=axios.create({
    baseURL:'https://flowbite-ochre.vercel.app/',
    withCredentials:true
})