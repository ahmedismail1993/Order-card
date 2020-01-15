<template>
  <div class="dashboard">

    <v-layout row class="mb-3">
      <v-tooltip top>
        <v-btn flat small color="grey" @click="soryBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">by project name</span>
        </v-btn>
        <span>sory by project name</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn flat small color="grey" @click="soryBy('person')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">by person</span>
        </v-btn>
        <span>sort by person</span>
      </v-tooltip>
    </v-layout>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-card flat v-for="(project,index) in projects" :key="index">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Project title</div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Persons</div>
          <div>{{project.person}}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div class="caption grey--text">Due By</div>
          <div>{{project.due}}</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div class="right">
            <v-chip small :class="` ${project.status} white--text caption my-2`">{{project.status}}</v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
    <div class="toggle_wrapper" :class="{'toggle-span':toggleMenu}" @click="toggleMenu=!toggleMenu">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <section class="main">
    <div class="container-image">
      <section class="container-image__wrapping">
        <img src="https://otakufr.net/wp-content/uploads/2019/07/maxresdefault-5.jpg" alt="photo">
      </section>
    </div>
    </section>
    <div class="demo"> 
        <p class="text">this  is resize div</p>
        <resize-observer @notify="handleResize"/>
    </div>
  </div>
</template>
        
<script>
// import resize from 'vue-resize-directive'

export default {
  components: {},
//   directives:{
//       resize
//   },
  data() {
    return {
        toggleMenu:false,
      projects: [
        {
          title: "Design a snew webiste",
          person: "the New Ninja",
          due: "1s Jan 2019",
          status: "organize"
        },
        {
          title: "code up homepage",
          person: "chun li",
          due: "10s Jan 2017",
          status: "completed"
        },
        {
          title: "Design video thumpails",
          person: "Ryu",
          due: "15s Jan 2018",
          status: "completed"
        },
        {
          title: "create comutiy form",
          person: "ahmed ismail",
          due: "16s Jan 2016",
          status: "waiting"
        }
      ]
    };
  },
  methods: {
      handleResize(e){
          console.log(e)
      },
      onResize(value){
          // eslint-disable-next-line no-console
          console.log(value,'resize')
      },
    soryBy(props) {
      this.projects.sort((a, b) => (a[props] < b[props] ? -1 : 1));
    },
    getTHis(){
    console.log(this,'som3a this')
   return function(){
        console.log(this,'inner this')
    }
}
  },
  created(){
      this.$ajax('https://jsonplaceholder.typicode.com/todos/2').then(data=>console.log(data,'dashboard'))
      this.getTHis()()
      
  }
};

// class Engine{
    
// }

// class Car {
//     constructor(engine){
//         this.engine = engine
//     }
// }





// const bmw = new Car(new Engine())



// function getTHis(){
//     console.log(this,'som3a this')
// }
// getTHis()
































</script>

<style scoped lang="scss">
.project.organize {
  border-left: 4px solid #3cd1c2;
}
.project.completed {
  border-left: 4px solid orange;
}
.project.waiting {
  border-left: 4px solid rgb(223, 94, 94);
}
.v-chip.organize {
  background-color: #3cd1c2;
}
.v-chip.completed {
  background-color: orange;
}
.v-chip.waiting {
  background-color: rgb(223, 94, 94);
}
.toggle_wrapper{
    width: 40px; 
    margin: 50px 0;
    cursor: pointer;
    position: absolute;
    right:0;
}
.toggle_wrapper {
    transform-origin: center;  
    padding: 0;
     span{
         &:first-of-type{
            width: 20%
            


         }
          &:nth-of-type(2){
             width: 50%;
           
   
           
         &:last-of-type{
             width: 100%;
   
         }
        
         }
     }
     &:hover{
         span{
             width: 100%;
         }
     }
     
}
//    .toggle-span{
//      span{
//          &:first-of-type{
//              transform: rotate(235deg);
//               margin: 0px;
            


//          }
//          &:last-of-type{
//             transform: rotate(-235deg);
//     margin: -2px;
//          }
//          &:nth-of-type(2){
           
   
//              display: none
//          }
//      }
//     }
 .toggle_wrapper  span{
        display: block;
        width: 100%;
        height: 2px;
        background-color: red;
        margin-bottom: 8px;
        border-radius: 10px;
        transition: all .5s ease-in-out;
    }


    
/* ratio*/

    .main{
   width: 100%;
    }
  .container-image{
    position: relative;
    padding-top: 100%;
    &__wrapping{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
     max-width: 100%;
     max-height: 100%;
      img{
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .demo{
      width: 200px;
      height: 200px;
      background: red;
      text-align: center;
      color: #fff;
      margin: auto;
      position: relative;
  }
  .text{
      font-size: 2rem;
  }
</style>
