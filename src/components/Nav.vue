<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item" href="#">
      <img src="../assets/logo.png">
    </router-link>

    <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" role="button" class="navbar-burger" aria-label="menu" data-target="nav-menu" @click="isActive = !isActive" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="nav-menu" :class="{ 'is-active': isActive }" class="navbar-menu">
    <div class="navbar-start" v-if="!user">
      <router-link to="/login" class="navbar-item">
        Login
      </router-link>

      <router-link to="/register" class="navbar-item">
        Register
      </router-link>
    </div>
    <div class="navbar-start" v-if="user">
      <router-link to="/items" class="navbar-item">
        Data
      </router-link>
      <a href="javascript:void(0)" @click="handleClick" class="navbar-item">
        Logout
      </a>
    </div>
  </div>

</nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Nav",
  data() {
    return {
      isActive: false,
      showNavbar: true
    }
  },
  methods: {
    handleClick() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
