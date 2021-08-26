<template>
    <div>
        <h1>Actions in Vue.js</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                Name: {{user.name}}
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    name: 'Home',
    computed: {
        ...mapState(['users'])
    },
    methods: {
        ...mapActions(['getUsers'])
    },
    mounted() {
        this.getUsers()
    },
}
</script>

<style scoped>

</style>