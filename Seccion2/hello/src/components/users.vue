<template>
    <div>
        <p>Name: {{name}}</p>
        <p>Email: {{email}}</p>
        <p>Phone: {{phone}}</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Users',
    props: {
        'name' : String,
        'email': String, 
        'phone': String
    }
}
</script>

<style scoped>

</style>