<template>
  
        <v-dialog max-width="600px">
            <v-btn slot="activator" flat class="success">Add new poject</v-btn>
            <v-card>
                <v-card-title>
                    <h3>Add new project</h3>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form" >
                        <v-text-field v-model="form.title" label="title" prepend-icon="folder" :rules="inputRuls"></v-text-field>
                        
                        <v-textarea v-model="form.info" label="information" prepend-icon="edit" :rules="inputRuls"></v-textarea>
                        <v-menu>
                            <v-text-field :value="dataFormate" label="due by" prepend-icon="date_range" slot="activator"></v-text-field>
                            <v-date-picker v-model="form.due"></v-date-picker>
                        </v-menu>

                        <v-btn @click="handleSubmit"  class="success mx-0 mt-3 " block>Add new Project</v-btn>
                        <!-- <v-btn @click="handleLoading" :loading="loading"  class="success mx-0 mt-3 " block>Add new Project</v-btn> -->
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
        
    
</template>

<script>
import format from 'date-fns/format';

export default {
    data(){
        return{
            form:{
                title:'',
                info:'',
                due:null
            },
            inputRuls:[
                v=>v.length>=3 || 'minimum length is 3 charachters'
               
            ],
            loading:true
        }
    },
    methods:{
        handleSubmit(){
            if (this.$refs.form.validate()) {
                //  cheack if the form is valide
                console.log(this.form)
            }
        }
    },
    computed:{
        dataFormate(){
            return this.form.due? format(this.form.due, 'Do MMM YYYY'):''
        }
    }
}
</script>

