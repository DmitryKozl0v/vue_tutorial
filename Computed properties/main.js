const app = new Vue({
    el: '#main',
    data: {
        task: null,
        taskList: [
            {title: 'Learn ES6', done: false},
            {title: 'Learn Vue.js', done: false},
            {title: 'Learn PHP', done: false},
            {title: 'Have lunch', done: false},
        ]
    },
    methods: {
        addTask(){
            this.taskList.unshift({title: this.task, done: false})
        }
    },
})