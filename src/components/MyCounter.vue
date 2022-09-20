<template>
    <div>
        <button class="btn btn-primary" @click="counter.increment"><i class="bi bi-arrow-clockwise"></i>Count is {{counter.count}}</button>        
    </div>
</template>
<script setup>
    //Composition API
    import { useCountStore } from '@/stores/counter';
    //import {ref, onMounted } from 'vue'
    //

    /*-
    const count = ref(0)

    function increment(){
        count.value++
    }
    onMounted(()=>{
        console.log(`The initial count is ${count.value}`);
    })
    -*/

    const counter = useCountStore();


</script>

