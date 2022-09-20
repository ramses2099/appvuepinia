<template lang="">
  <div>
   <MyTodos />  
  </div>
</template>
<script>
import MyTodos from './components/MyTodos.vue'; 

export default {
  name:'app',
  components:{
    MyTodos,
  }  
}
</script>
