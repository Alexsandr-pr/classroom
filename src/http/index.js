

import axios from "axios";

export const _API_URL = "https://classroom-server-k5yv.onrender.com/api";

const $api = axios.create({
    withCredentials:true,
    baseURL: _API_URL
})

$api.interceptors.request.use((config) => {
    
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    
    return config
})


export default $api;
