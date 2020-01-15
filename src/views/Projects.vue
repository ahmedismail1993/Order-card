<template>
  <div class="projects">
   <v-expansion-panel>
    <v-expansion-panel-content
    v-for="(project,index) in myProjects"
    :key="index"
    >
      <div slot="header">{{project.title}}</div>
      <v-card>
        <v-card-text class="px-4 grey--text"> 
          <div class="font-wight-bold">due by {{project.due}}</div>
          <div>{{project.content}}</div>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data(){
    return{
         projects:[
          {title:'Design a snew webiste',person:'the New Ninja',due:'1s Jan 2019', content:'this is some for testing and i hope you can do nice thing in near future '},
          {title:'code up homepage',person:'chun li',due:'10s Jan 2017', content:'this is some for testing and i hope you can do nice thing in near future '},
          {title:'Design video thumpails',person:'Ryu',due:'15s Jan 2018', content:'this is some for testing and i hope you can do nice thing in near future '},
          {title:'create comutiy form',person:'ahmed ismail',due:'16s Jan 2016', content:'this is some for testing and i hope you can do nice thing in near future '},
        ]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project=>{
       return project.person === 'ahmed ismail'
      })
    }
  }
}
</script>
