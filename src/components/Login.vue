<template>
  <div class="sign-form">
    <h2 class="sign-heading">Login</h2>
    <form action="#" @submit.prevent="logIn">

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="sign-input" v-model="email">
      </div>
      <br/>
      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="sign-input" v-model="password">
      </div>
      <br/>
      <div class="form-control">
        <button type="submit" class="btn-submit">Login</button>
      </div>

    </form>
<<<<<<< HEAD
=======
    {{token}}
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
  </div>
</template>

<script>
  import { mapActions, mapGetters} from "vuex";

  export default {
    name: 'login',
      data() {
        return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions("account", ['login']),
      logIn (){
        this.login({email: this.email, password : this.password})
        .then(() => this.$router.push("/"));
      },
    },
    computed: {
      ...mapGetters("account", ['token']),

    }
  }
</script>
