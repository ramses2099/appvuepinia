<template lang="">
  <div>
    <MyCounter/>
    <MyUsers/>
  </div>
</template>
<script>
import MyCounter from './components/MyCounter.vue';
import MyUsers from './components/MyUsers.vue';

export default {
  name:'app',
  components:{
     MyCounter,
     MyUsers
  }  
}
</script>
