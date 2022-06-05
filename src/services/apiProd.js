import axios from 'axios';

// BASE DA URL 
const apiProd = axios.create({
    baseURL: 'https://techday-carrefour-server.up.railway.app/',
    
});

export default apiProd;

