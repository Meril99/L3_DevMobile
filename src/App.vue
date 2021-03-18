<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Login">Login</router-link>
  </div>
  <h1>Todos</h1>
  <router-view/>

</template>

<script>


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
