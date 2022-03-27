import axios from 'axios'
// import store from '@/store/store'

    const api = () => {
        return axios.create({
            baseURL: "https://reqres.in/api/",
            headers: {
                
            }
        })
    }

    const users = () => {
        return api().get('users')
    }

    export {
        users
    }