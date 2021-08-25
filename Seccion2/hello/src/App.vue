<template>
  <div id="app"> 
  <!--  AXION LESSON CODE
    <div v-if="loading" class="loader"></div>
    <Users 
        v-show="!loading"
        v-for="user in users"
        v-bind:key="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
      >
      </Users>
  -->
  </div>
</template>

<script>
// AXION LESSON CODE
// import Users from './components/users'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    // Users
  },
  data() {
    return {
      // AXION LESSON CODE
      // loading: false,
      // users: []
    }
  },
  // AXION LESSON CODE
  // methods: {
  //   async getUsers(){
  //     this.loading = true
  //     const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     this.users = resp.data
  //     setTimeout(() => {this.loading = false}, 2000) // fake delay, just to see the spinner happen
  //   }
  // },
  // mounted() {
  //   this.getUsers()
  // },
}
</script>

<style scoped>
  /*  AXION LESSON CODE
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    animation: spin 2s linear infinite;
    align: center;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  */
</style>
