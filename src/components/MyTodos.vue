<template lang="">
    <div>
        <section class="vh-100" style="background-color: #e2d5de;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">

                    <div class="card" style="border-radius: 15px;">
                    <div class="card-body p-5">

                        <h6 class="mb-3">Awesome Todo List</h6>
                        <form @submit.prevent="addTodo" class="row g-3">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-10">
                                        <input type="text" id="txtName" class="form-control form-control-lg" v-model="input_content"/>
                                        <label class="form-label" for="txtName">What do you need to do today?</label>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary btn-lg ms-2">Add</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-1 form-check">
                                        <input class="form-check-input" type="radio" name="rdcategory" id="rdcategory"
                                        value="business" v-model="input_category">
                                        <label class="form-check-label" for="rdcategory">
                                            Business
                                        </label>
                                    </div>
                                    <div class="col-md-1 form-check">
                                        <input class="form-check-input" type="radio" name="rdcategory" id="rdcategory"
                                        value="personal" v-model="input_category">
                                        <label class="form-check-label" for="rdcategory">
                                            Personal
                                        </label>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    {{input_content}} - {{input_category}}
                                </div>  
                            </div>  
                        
                        
                        </form>

                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>    
    </div>   
</template>
<script>
import{ ref, onMounted} from 'vue'

export default {
    setup(){
        const todos = ref([])
        const input_content = ref('')
        const input_category = ref(null)

      
        //hook onMounted
        onMounted(()=>console.log('load component'))
       
        //function
        /*-
        const todos_asc = computed(()=> todos.value.sort((a,b)=>{
            return a.createAt - b.createAt
        }))
        -*/

        const addTodo = ()=>{
            console.log('test')
        }

        //function

        return{
            todos,           
            input_content,
            input_category,
            addTodo
        }
    }
    
}
</script>