<template lang="">
    <div>
     <div>
        <h1>{{msg}}</h1>
        <h1>Made By Getters</h1>
        <div v-for="gettersUser in getUser" :key="gettersUser.id">
            {{gettersUser.id}} {{gettersUser.name}} {{gettersUser.address}}        
        </div>
        <h1>Made By Actions</h1>
        <div v-for="user in users" :key="user.id">
            {{user.id}} {{user.name}} {{user.address}}
        </div>
     </div>
    </div>
</template>
<script>
import { useUserStore } from '@/stores/users'
import { computed, onMounted,ref } from 'vue';

export default {
    setup(){
        const store = useUserStore();

        const msg = ref('Welcome to my pinia')

        const getUser = computed(()=>{
            return store.getUsers
        })

        const users = computed(()=>{
            return store.users
        })

        //hooks
        onMounted(()=>{
            store.fetchUsers()
        })

        return{
            msg, getUser, users
        }

    }
    
}
</script>