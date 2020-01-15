<template>
    <div>
        this is base
     <div><button class="primary">click me</button></div>
     <RenderPropsComp/>
  
    </div>
</template>

<script>
    export default {
        name:"baseButton",
        components:{
            RenderPropsComp:()=>import('./RenderPropsComp'),
           
        },
        data() {
            return {
                som3aText:'this is som3a text from Base Button',
                
            }
        },
        methods:{
            handleClicked(){
                // eslint-disable-next-line no-console
                console.log('clicked me by another comp')
            },

        
        }
    }
</script>

