<template>
<div>
  <div v-if="user" class="box">
    <h3>data</h3>
  </div>
  <div v-if="!user" class="box">
    <h3>no data</h3>
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Data',
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
