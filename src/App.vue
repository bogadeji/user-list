<template>
  <div id="app">
    <v-app>
    <UsersList />
    </v-app>
  </div>
</template>

<script>
import UsersList from './views/UsersList.vue'

export default {
  name: 'App',
  components: {
    UsersList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
