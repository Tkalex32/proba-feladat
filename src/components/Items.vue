<template>
<div>
  <div v-if="user">
      <table id="data-table" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>id</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,i) in dataList" :key="i">
            <td>{{ data.id }}</td>
            <td>{{ data.text }}</td>
          </tr>
        </tbody>
      </table>
  </div>

  <div v-if="!user" class="box">
    <h3>Please Log In!</h3>
  </div>
</div>
</template>
<script>
import {mapGetters, mapState} from 'vuex';
import axios from 'axios';

export default {
  data () {
    return {
      info: null,
      dataList: [],
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    async fetchData() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    const response = await axios.get('data');
    this.dataList = response.data;
    }
  },
  computed: {
    ...mapGetters(['user']),
    ...mapState({
      token: "token",
    }),
  }
};
</script>
