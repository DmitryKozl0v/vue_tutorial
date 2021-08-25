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

  <!-- SLOTS LESSON CODE
  <SlotComponent>
    Hello from the slot
    <template slot="slot2">
      Hello from the slot 2
    </template>
    <template slot="slot3">
      Hello from the slot 3
    </template>
  </SlotComponent>
  -->

  <!-- EVENTS LESSON CODE
  <Person></Person>
  -->

  <!-- RENDER LESSON CODE
  <Element type="h1">Element's text</Element>
  <Element type="h2">Element's text</Element>
  <Element type="h3">Element's text</Element>
  <Element type="aside">Element's text</Element>
  <Element type="hr">Element's text</Element>
  <Element type="p">Element's text</Element>
  -->

  <!-- SCOPED CSS LESSON CODE
  <h1 >Parent component</h1>
  -->
  </div>
</template>

<script>
// AXION LESSON CODE
// import Users from './components/users'
// import axios from 'axios'

// SLOTS LESSON CODE
// import SlotComponent from './components/slotComponent'

// EVENTS LESSON CODE
// import Person from './components/person'

// RENDER LESSON CODE
// import Element from './components/element'

export default {
  name: 'App',
  components: {
    // SlotComponent
    // Person
    // Users
    // Element
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
