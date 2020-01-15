

<script>
    export default {
        name:"renderCompoent",
        components:{
            anotherCom:()=>import('./anotherCom'),
            funcCompo:()=>import('./FunctionalCom'),
        },
        data() {
            return {
               isHere:true,
               text:"this is from Another component ",
               name:"som3a"
            }
        },
        render() {
            if (this.isHere) {
                
                return(
                    <div>
                        <anotherCom text={this.text}/>
                       <slot name="header"> default text</slot>
                       <funcCompo name={this.name}/>
                     
                        
                    </div>
                )
            }else{
                return <h1>any thing</h1>
            }
            }
    }
</script>

