<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Vue AuthService App</h1>
    </header>
    <main>
      <UserComponent />
    </main>
  </div>
</template>

<script>
import UserComponent from '@/components/UserComponent.vue';

export default {
  components: {
    UserComponent,
  },
};
</script>

<style>
/* Agrega estilos globales si es necesario */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  text-align: center;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

main {
  margin-top: 20px;
}
</style>
