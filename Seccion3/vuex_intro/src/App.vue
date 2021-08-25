<template>
  <div id="app">
    <!-- INTRO LESSON CODE
    <h1>Basic Vuex example</h1>
    <Counter></Counter>
    <Reader></Reader>
    -->

    <h1>Vuex MapsState example</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>

<script>

// INTRO LESSON CODE
// import Counter from './components/counter'
// import Reader from './components/reader'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    // Counter,
    // Reader
  },
  computed: mapState(['name', 'age']),
}
</script>

<style>

</style>
