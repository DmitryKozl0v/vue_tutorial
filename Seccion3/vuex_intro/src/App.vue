<template>
  <div id="app">
    <!-- INTRO LESSON CODE
    <h1>Basic Vuex example</h1>
    <Counter></Counter>
    <Reader></Reader>
    -->

    <!-- MAPSTATE LESSON
    <h1>Vuex MapsState example</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    -->
    <Users></Users>
  </div>
</template>

<script>

// INTRO LESSON CODE
// import Counter from './components/counter'
// import Reader from './components/reader'

import Users from './components/users'

export default {
  name: 'App',
  components: {
    // Counter,
    // Reader
    Users
  },
  computed: {},
}
</script>

<style>

</style>
