<template>
  <div id="nav">
  <router-link to="/">Home</router-link> |
<<<<<<< HEAD
  <router-link to="/todo" v-if="isLoggedIn">Todo</router-link> |
    <router-link to="/account" v-if="!isLoggedIn">Todo</router-link> |
=======
    <router-link to="/todo">Todo</router-link> |
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
    <router-link to="/account" v-if="!isLoggedIn">Login</router-link>
    <router-link to="/account" v-if="isLoggedIn" @click="logout" >Logout</router-link>
  </div>
  <h1>Bonjour {{userName}}</h1>
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
<<<<<<< HEAD
    ...mapActions("account", ['logout']),
    },
    computed: {
    ...mapGetters("account", ['isLoggedIn']),
      ...mapGetters("account", ['userName']),
=======
      ...mapActions("account", ['logout']),
    },
    computed: {
      ...mapGetters("account", ['isLoggedIn']),
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563

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
