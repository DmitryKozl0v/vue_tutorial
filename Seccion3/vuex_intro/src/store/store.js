import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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

// MUTATIONS LESSON CODE
// export const store = new Vuex.Store({
//     state: {

//         users: [
//         {
//             name: 'Gonza',
//             age: '24',
//             active: true,
//         },
//         {
//             name: 'Sofia',
//             age: '25',
//             active: false,
//         },
//         {
//             name: 'Matias',
//             age: '23',
//             active: false,
//         },        
//         ]
//     },
//     getters:{
//         activeUsersCount: state => {
//             return state.users.filter(users => users.active).length
//         },
//         getUsers: state => {
//             return state.users
//         }
//     }
// })

export const store = new Vuex.Store({
    state:{
        users:null
    },
    mutations:{
        async reqUsers(state) {
            const r = await axios.get('https://jsonplaceholder.typicode.com/users')
            state.users = r.data
            console.log(state.users)        
        }
    },
    actions:{
        getUsers(context){
            context.commit('reqUsers')
        }
    },
})