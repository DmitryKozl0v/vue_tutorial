<template>
  <div id="app">
    <Person name="Gonza" age="24"></Person>
    <hr>
    <Person name="Sofia" age="25"></Person>

  </div>
</template>

<script>

import Person from './components/person';

export default {
  name: 'App',
  components: {
    Person,
  }
}
</script>

<style>

</style>
