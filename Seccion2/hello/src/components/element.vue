
<script>
export default {
    name: 'Element',
    props: [
        'type',
    ],
    render(createElement) {
        return createElement(
            this.type,                  // type of element to render
            this.$slots.default,        // rendered element's content
        )
    },
}
</script>

<style scoped>

</style>