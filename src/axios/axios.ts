import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9191/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:9191/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
