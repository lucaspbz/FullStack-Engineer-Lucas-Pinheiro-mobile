import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testefb-lucas.herokuapp.com',
});

export default api;
