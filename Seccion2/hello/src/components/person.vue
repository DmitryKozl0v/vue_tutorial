<template>
    <div>
        <Button @click="display = true">Display child comp</Button>
        <Child  @close="display = false" v-show="display"></Child>
    </div>
</template>

<script>

import Child from '../components/child';

export default {
    name: 'Person',
    components: {
        Child
    },
    data() {
        return {
            display: false
        }
    },
}
</script>

<style scoped>

</style>