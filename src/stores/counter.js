import {defineStore} from 'pinia'

export const useCountStore = defineStore('counter',{
    //state
    state:()=>{
        return { count: 0}
    },
    actions:{
        increment(){
            this.count++
        },
    },
})