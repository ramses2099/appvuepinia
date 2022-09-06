<template>
    <div>
        <h1></h1>
    </div>
</template>
<script setup>
import {useCountStore} from '@/stores/counter'

const store = useCountStore()

console.log(store);
</script>
