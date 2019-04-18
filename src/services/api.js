import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dropfile-backend.herokuapp.com'
});

export default api;