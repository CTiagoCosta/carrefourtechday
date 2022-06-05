import axios from 'axios';

// BASE DA URL 
const api = axios.create({
    baseURL: 'https://techday-carrefour-server.up.railway.app/',
    
});

export default api;

  