const app = new Vue({
    el: '#main',
    data() {
        return {
            people: [],

        }
    },
    methods: {
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(( resp ) =>{
                // console.log(resp.data)
                this.people = resp.data
            })
    },
})