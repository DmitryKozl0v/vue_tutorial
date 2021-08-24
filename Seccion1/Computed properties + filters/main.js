const app = new Vue({
    el: '#main',
    data: {
        task: null,
        taskList: [
            {title: 'Learn ES6', done: false},
            {title: 'Learn Vue.js', done: true},
            {title: 'Learn PHP', done: false},
            {title: 'Have lunch', done: false},
        ]
    },
    methods: {
        addTask(){
            this.taskList.unshift({title: this.task, done: false})
        }
    },
    computed: {
        showCompleted() {
            return this.taskList.filter( item => item.done)
        },
        showIncomplete() {
            return this.taskList.filter( item => !item.done)
        },
        displayByTitle(){
            return this.taskList.filter( item => item.title.includes(this.task))
        }
    }
})