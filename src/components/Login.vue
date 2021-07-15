<template>
<form @submit.prevent="handleSubbmit" class="box">
  <div class="field has-text-centered has-text-blue-dark mb-5 is-size-3 is-uppercase">
    <h3 class=""><i class="fa fa-lock mr-2"></i>Login</h3>
  </div>
  <error v-if="error" :error="error" />
  <div class="field">
    <label for="username" class="label has-text-centered">Username</label>
    <div class="control has-icons-left">
      <input id="username" v-model="name" type="text" name="username" placeholder="Name" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
    </div>
  </div>
  <div class="field">
    <label for="password" class="label has-text-centered">Password</label>
    <div class="control has-icons-left">
      <input id="password" v-model="password" type="password" name="password" placeholder="Password" class="input is-rounded" required>
      <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
    </div>
  </div>
  <div class="field has-text-centered">
    <button class="button has-background-primary-dark has-text-light is-rounded">Login</button>
  </div>
</form>
            
</template>
<script>
import axios from 'axios';
import Error from './Error.vue';

export default {
  name: "Login",
  components: {
    Error
  },
  data() {
    return {
      name: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleSubbmit(){
      try {
      const response = await axios.post('login', {
        name: this.name,
        password: this.password,
      });
      localStorage.setItem('token', response.data.token);
      this.$store.dispatch('user', response.data.user);
      this.$router.push('/');
      } catch (e) {
        this.error = 'Invalid login information'
      }
    }
  }
};
</script>
