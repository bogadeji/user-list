import Vue from 'vue'
import UsersList from '@/views/UsersList.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            pagth: '/',
            name: 'userslist',
            component: UsersList
        }
    ]
})