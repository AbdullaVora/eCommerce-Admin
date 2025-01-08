import axios from 'axios';

// Set up the default base URL for our API

const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export default apiInstance;