<template>
    <div>
        <h1 style="color: red">  
            <slot>
                Hello from the slotComponent component
            </slot>
        </h1>
        <hr>
        <h2>
            <slot name="slot2">
                Hello from the slotComponent component 2
            </slot>
        </h2>
        <hr>
        <h2 style="color: blue">
            <slot name="slot3">
                Hello from the slotComponent component 3
            </slot>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'SlotComponent'
}
</script>

<style scoped>

</style>