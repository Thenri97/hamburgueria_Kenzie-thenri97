import axios from "axios";  


const burgersApi = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 5000,
    
});

export {burgersApi};
