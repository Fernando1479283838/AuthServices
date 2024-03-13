<!-- src/components/UserComponent.vue -->
<template>
    <div class="user-component">
      <h2>User Component</h2>
  
      <div class="register-user">
        <h3>Register New User:</h3>
        <form @submit.prevent="registerNewUser">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="newUserData.name" type="text" id="name" required>
          </div>
  
          <div class="form-group">
            <label for="email">Email:</label>
            <input v-model="newUserData.email" type="email" id="email" required>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input v-model="newUserData.password" type="password" id="password" required>
          </div>
  
          <button type="submit">Register</button>
        </form>
      </div>
  
      <div class="user-info" v-if="userByEmail">
        <h3>User by Email:</h3>
        <pre>{{ userByEmail }}</pre>
      </div>
  
      <div class="all-users" v-if="allUsers">
        <h3>All Users:</h3>
        <pre>{{ allUsers }}</pre>
      </div>
  
      <div class="registration-response" v-if="registrationResponse">
        <h3>Registration Response:</h3>
        <pre>{{ registrationResponse }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import AuthService from '@/services/AuthService';
  
  export default {
    data() {
      return {
        newUserData: {
          name: '',
          email: '',
          password: '',
        },
        userByEmail: null,
        allUsers: null,
        registrationResponse: null,
      };
    },
    methods: {
      async registerNewUser() {
        try {
          const response = await AuthService.registerUser(this.newUserData);
          this.registrationResponse = response.data;
          // Actualizamos la lista de todos los usuarios después del registro (opcional)
          this.getAllUsers();
        } catch (error) {
          console.error(error);
        }
      },
      async getUserByEmail() {
        // Método getUserByEmail sigue igual
      },
      async getAllUsers() {
        try {
          const response = await AuthService.getUsers();
          this.allUsers = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-component {
    max-width: 600px;
    margin: auto;
  }
  
  .register-user {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  button {
    padding: 8px 12px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .user-info,
  .all-users,
  .registration-response {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  </style>
  