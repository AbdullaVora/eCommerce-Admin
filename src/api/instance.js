import axios from 'axios';

// Set up the default base URL for our API

const apiInstance = axios.create({
    // baseURL: 'https://fur-store-api.vercel.app',
    baseURL: 'https://furstore-api.onrender.com',
})

export default apiInstance;