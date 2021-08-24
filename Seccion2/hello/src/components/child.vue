<template>
    <div>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: ['name', 'age']
}
</script>

<style scoped>

</style>