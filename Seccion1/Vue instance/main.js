const bridge = new Vue ({
    data: {
        genericInfo: 'This string is shared with other instances'
    }
})

const app = new Vue({
    el: '#main',
    data: {
        title: 'Instance number 1'
    }
})

const app2 = new Vue({
    el: '#app2',
    data: {
        title: app.title,
        genericInfo: bridge.genericInfo
    }
})