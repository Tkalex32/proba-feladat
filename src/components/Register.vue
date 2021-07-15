<template>
  <form @submit.prevent="handleSubmit" class="box">
  <div class="field has-text-centered has-text-blue-dark mb-5 is-size-3 is-uppercase">
    <h3 class=""><i class="fa fa-lock mr-2"></i>Sign Up</h3>
  </div>
  <div class="field has-text-centered has-text-danger mb-5 is-size-5">
    <p>Soon...</p>
  </div>
  <div class="field">
    <label for="username" class="label has-text-centered">Username</label>
    <div class="control has-icons-left">
      <input disabled id="username" v-model="name" type="text" name="username" placeholder="Name" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
    </div>
  </div>
  <div class="field">
    <label for="email" class="label has-text-centered">Email</label>
    <div class="control has-icons-left">
      <input disabled id="email" v-model="email" type="email" name="email" placeholder="Email" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-at"></i></span>
    </div>
  </div>
  <div class="field">
    <label for="password" class="label has-text-centered">Password</label>
    <div class="control has-icons-left">
      <input disabled id="password" v-model="password" type="password" name="password" placeholder="Password" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
    </div>
  </div>
  <div class="field">
    <label for="password_confirm" class="label has-text-centered">Confirm Password</label>
    <div class="control has-icons-left">
      <input disabled id="password_confirm" v-model="password_confirm" type="password" name="password_confirm" placeholder="Confirm Password" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
    </div>
  </div>
  <div class="field has-text-centered">
    <button class="button has-background-primary-dark has-text-light is-rounded" disabled>Sign Up</button>
  </div>
  </form>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async handleSubmit(){
      /*const response = */await axios.post('register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });
      console.log(response);
      this.$router.push('./login');
    }
  },
}
</script>
