<template>
    <div>
        <h2>I'm the Child component</h2>
        <Button @click="emitEvent">Close Child</Button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: ['name', 'age'],
    methods: {
        emitEvent(){
            this.$emit('close')
        }
    },
}
</script>

<style scoped>

</style>