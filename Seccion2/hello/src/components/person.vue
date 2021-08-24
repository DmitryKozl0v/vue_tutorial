<template>
    <div>
        <p>Your name is: {{name}}</p>
        <p>Your age is: {{age}}</p>
        <Child :name="name" :child="age"></Child>
    </div>
</template>

<script>

import Child from '../components/child';

export default {
    name: 'Person',
    components: {
        Child
    },
    props: ['name', 'age'],
    
}
</script>

<style scoped>

</style>