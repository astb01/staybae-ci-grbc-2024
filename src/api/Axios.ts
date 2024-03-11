import axios from 'axios';

const API_URL = 'http://localhost:8080/api' || import.meta.env.VITE_API_URL;

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
