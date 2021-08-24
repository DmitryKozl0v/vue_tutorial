const app = new Vue ({
    el: '#main',
    data: {
        task: null,
        taskList: [
            'Learn ES6',
            'Learn Vue.js',
            'Learn PHP',
            'Have lunch'
        ]
    },
    methods: {
        addTask(){
            this.taskList.unshift(this.task)
        }
    },
})