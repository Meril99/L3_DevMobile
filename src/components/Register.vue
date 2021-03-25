<template>
  <div class="sign-form">
    <h2 class="sign-heading">register</h2>
    <form action="#" @submit.prevent="save">

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="sign-input" v-model="name">
      </div>
      <br/>
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
        <button type="submit" class="btn-submit">Create Account</button>
      </div>

    </form>

  </div>
</template>

<script>
  import { mapActions} from "vuex";

  export default {
    name: 'Register',

    data() {
      return {
        name: '',
        email: '',
        password: '',
      }
    },

    methods: {
      ...mapActions("account", ['register']),
      save (){
        this.register({name : this.name, email : this.email, password : this.password})
        .then(() => this.$router.push("/account"));
      },
    }
  }
</script>
