<template>
    <div>
        <h1>MapGetters example</h1>
        <ul>
            <li v-bind:key="user.name" v-for="user in getUsers">
                Name: {{user.name}} - Age: {{user.age}}
            </li>
        </ul>
        <p>Active user count: {{activeUsersCount}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Users',
    computed: {
        ...mapGetters([
            'activeUsersCount',
            'getUsers'
        ])
    }
}
</script>

<style scoped>

</style>