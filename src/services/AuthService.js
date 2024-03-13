// src/services/AuthService.js
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com'; // URL de JSONPlaceholder

const instance = axios.create({
  baseURL: apiUrl,
});

export default {
  getUser(email) {
    return instance.get(`/users`, { params: { email } });
  },
  getUsers() {
    return instance.get('/users');
  },
  registerUser(data) {
    // Utilizamos /users en lugar de /posts para simular la creación de un nuevo usuario
    return instance.post('/users', data);
  },
};
