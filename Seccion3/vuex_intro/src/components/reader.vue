<template>
    <div>
        <p>Counter = {{this.$store.state.counter}}</p>
    </div>
</template>

<script>

import { store } from '../store/store'

export default {
    name: 'Reader',
    store: store
}
</script>

<style scoped>

</style>