<template>
  <div id="app">
  <Nav />
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Nav,
  },
  async created() {
    const response = await axios.get('user');
    //this.user = response.data.userData;
    this.$store.dispatch('user', response.data.userData);
  }
};
</script>

<style>

</style>
