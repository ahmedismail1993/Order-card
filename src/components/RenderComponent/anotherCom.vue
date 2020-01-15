<template>
    <div>
        <h1>{{text}}</h1>
        <h1>{{som3aText}}</h1>
        <!-- <BaseComponent/> -->
        <button @click="handleClicked" class="info"> click me</button>
  
        
    </div>
</template>

<script>
import BaseComponent from './BaseButton'
    export default {
        name:"anotherComponent",
        components:{
            // BaseComponent
        },
        extends:BaseComponent,
        props:{
            text:{
                type:String

            },
          
        }
        
    }
</script>
