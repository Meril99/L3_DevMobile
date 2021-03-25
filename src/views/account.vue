<template>
    <div class="home">
        <Login></Login>
        <Register></Register>
    </div>
</template>

<script>
  import Login from '@/components/Login.vue';
  import Register from '@/components/Register.vue';

  export default {
    name: 'Account',
    components: {
      Login,
      Register
    },
  }
</script>

<style src="../style/app.css"></style>
