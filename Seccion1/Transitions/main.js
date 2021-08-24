const app = new Vue({
    el: '#main',
    data() {
        return {
            display: true,
            taskList: [
                {title: 'Task number 1', done: false},
                {title: 'Task number 2', done: false},
                {title: 'Task number 3', done: false},
                {title: 'Task number 4', done: false},
            ]
        }
    },
    methods: {
        completeTask(task){
            task.done = !task.done
        },
        showList(){
            this.display = !this.display
        }
    },
})