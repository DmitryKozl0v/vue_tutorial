const person = {
    name: 'Gonza'
}

new Vue({
    el: '#app1',
    data() {
        return {
            person: {
                name: person.name
            }
        }
    },
    methods: {
    },
})

new Vue({
    el: '#app2',
    data() {
        return {
            person: {
                name: person.name
            }
        }
    },
    methods: {
    },
})