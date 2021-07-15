<template>
  <div class="box">
    <h3 v-if="user">Welcome {{ user.name }}!</h3>
    <h3 v-if="!user">Please Log In!</h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
