<template>
  <div id="app">
    <!-- INTRO LESSON CODE
    <h1>Basic Vuex example</h1>
    <Counter></Counter>
    <Reader></Reader>
    -->

    <!-- MAPSTATE LESSON CODE
    <h1>Vuex MapsState example</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    -->

    <!-- MAPGETTERS LESSON CODE
     -->

     <!-- MUTATIONS LESSON CODE
    <Users></Users>
    -->

    <Home></Home>
  </div>
</template>

<script>

// INTRO LESSON CODE
// import Reader from './components/reader'

// MAPSTATE LESSON CODE
// import { mapState } from 'vuex'

// MUTATIONS LESSON CODE
// import Users from './components/users'

import Home from './components/home'

export default {
  name: 'App',
  components: {
    // Counter,
    // Reader
    // Users
    Home
  },
}
</script>

<style>

</style>
