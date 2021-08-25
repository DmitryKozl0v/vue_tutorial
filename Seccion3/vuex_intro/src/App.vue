<template>
  <div id="app">
    <h1>Basic Vuex example</h1>
    <Counter></Counter>
    <Reader></Reader>
  </div>
</template>

<script>

import Counter from './components/counter'
import Reader from './components/reader'


export default {
  name: 'App',
  components: {
    Counter,
    Reader
  }
}
</script>

<style>

</style>
