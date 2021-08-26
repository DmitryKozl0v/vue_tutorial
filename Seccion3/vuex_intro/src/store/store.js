import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// INTRO LESSON CODE
// export const store = new Vuex.Store({
//     state: {
//         counter: 0
//     },
//     mutations:{
//         increase(state){
//             state.counter++
//         },
//         decrease(state){
//             state.counter--
//         },
//         restart(state){
//             state.counter = 0
//         }
//     }
// })


// MAPGETTERS LESSON CODE
// export const store = new Vuex.Store({
//     state: {
//         users: 
//         [
//             {
//                 name: 'Gonza',
//                 age: 24,
//                 active: true
//             },
//             {
//                 name: 'Sofia',
//                 age: 25,
//                 active: false
//             },
//             {
//                 name: 'Matias',
//                 age: 23,
//                 active: false
//             }
//         ],
//     },
//     getters:{
//         getActiveUsersList: state => state.users.filter( user => user.active).length,

//         getUsers: state => state.users

//     }
// })

export const store = new Vuex.Store({
    state: {

        users: [
        {
            name: 'Gonza',
            age: '24',
            active: true,
        },
        {
            name: 'Sofia',
            age: '25',
            active: false,
        },
        {
            name: 'Matias',
            age: '23',
            active: false,
        },        
        ]
    },
    getters:{
        activeUsersCount: state => {
            return state.users.filter(users => users.active).length
        },
        getUsers: state => {
            return state.users
        }
    }
})