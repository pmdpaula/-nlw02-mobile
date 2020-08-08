import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.28.112.77:3333'
})

export default api;