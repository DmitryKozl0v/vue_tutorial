<template>
    <div>
        <p>The current value of the counter is: {{this.$store.state.counter}}</p>
        <button @click="Increase">Increase</button>
        <button @click="Decrease">Decrease</button>
        <button @click="Restart">Restart</button>
    </div>
</template>

<script>

import { store } from '../store/store'

export default {
    name: 'Counter',
    store: store,
    methods: {
        Increase(){
            this.$store.commit('increase')
        },
        Decrease(){
            this.$store.commit('decrease')
        },
        Restart(){
            this.$store.commit('restart')
        }
    },
}
</script>

<style scoped>

</style>