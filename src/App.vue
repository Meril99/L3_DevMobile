<template>
  <div id="nav">
  <router-link to="/">Home</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/account" v-if="!isLoggedIn">Login</router-link>
    <router-link to="/account" v-if="isLoggedIn" @click="logout" >Logout</router-link>
  </div>
  <h1>Todos</h1>
  <router-view/>

</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
    data() {
      return {

      }
    },
    methods: {
      ...mapActions("account", ['logout']),
    },
    computed: {
      ...mapGetters("account", ['isLoggedIn']),

    }
}
</script>

<style scooped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
