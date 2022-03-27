<template>
    <div>

        <h1>Users</h1>
        <ul class="title">
            <li>First name</li>
            <li>Last name</li>
            <li>Email</li>
            </ul>
        <ul v-for="(user, index) in users" :key="index" class="user">
            <li>{{ user.first_name}}</li>
            <li>{{ user.last_name}}</li>
            <li>{{ user.email}}</li>
        </ul>

        <v-data-table 
            :headers="headers"
            :items="usersList"
        >
        </v-data-table>
    </div>
</template>
<script>
    import axios from 'axios';
    import { mapState } from 'vuex';
    export default {
        
        name: 'UsersList',
        data() {
            return {
                users: [],
                headers: [
                    {text: "First Name", value: "first_name"},
                    {text: "Last Name", value: "last_name"},
                    {text: "Email", value: "email"}
                ]
            }
        },
        mounted() {
            this.$store.dispatch('setUser')
            axios.get("https://reqres.in/api/users").then(resp => {
                this.users = resp.data.data
            })
        },
        computed: {
            ...mapState(['usersList'])
        }
    }
</script>
<style>
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr) ;
        gap: 10px;
        background: #fff;
        margin: 0;
    }
    ul.title {
        font-weight: 900;
    }
    .user {
        height: 50px;
        text-align: center;
    }
    ul:nth-child(2n+1) {
        background: #e7e7e7;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
</style>

HtM4G:y5\)/x63cr3u8&F