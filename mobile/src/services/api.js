import axios from 'axios';

const api = axios.create({
  baseURL: 'https://clima-api.mybluemix.net',
});

export default api;