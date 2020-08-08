import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.50.20:3333'
  // baseURL: 'http://192.168.15.2:3333'
})

export default api;