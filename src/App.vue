<template lang="">
  <div>
    <counter/>
  </div>
</template>
<script>
import CounterVue from './components/Counter.vue';
export default {
  name:'app',
  components:{
    counter:CounterVue
  }
  
}
</script>
<style lang="">
  
</style>