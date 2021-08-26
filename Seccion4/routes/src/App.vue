<template>
  <div id="app">
    <h1>Root page</h1>
    <router-link to="/componentOne">Component One</router-link>
    <router-link to="/componentTwo">Component Two</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
