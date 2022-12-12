import axios from "axios";

const api = axios.create({
    baseURL: 'http://www.omdbapi.com',
    params: {
        apikey: 'db009a78'
    }
})

export default api;
