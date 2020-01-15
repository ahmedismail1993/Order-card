<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>awsome ! you have add </span>
            <v-btn @click="snackbar = !snackbar" flat color="white">close</v-btn>
        </v-snackbar>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
           <v-toolbar-title class="text-uppercase grey--text">
               <span class="font-weight-light">Todo</span>
               <span>Ninja</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <!-- dropwonMenu -->
           <v-menu offset-y>
               <v-btn slot="activator" flat color="grey">
                   <v-icon left>expand_more</v-icon>
                   <span>Menue</span>
               </v-btn>
               <v-list>
                   <v-list-tile v-for="(link,index) in links" :key="index" route :to="link.route">
                       <v-list-tile-title >
                           {{link.text}}
                       </v-list-tile-title>
                   </v-list-tile>
               </v-list>
           </v-menu>
           <v-btn  flat color="grey">
               <span>Log Out</span>
               <v-icon right>exit_to_app</v-icon>
           </v-btn>
        </v-toolbar>
        <v-navigation-drawer  mandatory  v-model="drawer" app class="indigo" >
            <v-layout column align-center id="headerBar">
                <v-flex class="my-4">
                    <v-avatar size="100">
                        <img src="/1.png" alt="name">
                    </v-avatar>
                    <p class="white--text mt-2 subheading text-xs-center" >ahmed </p>
                </v-flex>
                <v-flex class="mb-3">
                    <app-pop-up></app-pop-up>
                </v-flex>
            </v-layout>
            <v-list>
                  <RoutList :routes="links"/>
              <!-- <v-list-tile router :to="link.route" v-for="(link, index) in links" :key="index"> -->
                  <!-- <v-list-tile-action>
                      <v-icon class="white--text">{{link.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title class="white--text">
                          {{link.text}}
                      </v-list-tile-title>
                  </v-list-tile-content> -->
              <!-- </v-list-tile> -->
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
(function (){
    const prevHight = window.pageYOffset
    const elme = document.getElementById('headerBar')


    window.onscroll= ()=>{

          const CurrentHight = window.pageYOffset
        if (CurrentHight> prevHight) {
            elme.classList.add('translate')
        }else{
            elme.classList.remove('translate')

        }
        // window.requestAnimationFrame(()=>{

        // },8)
  
   
    }
})()
import PoupUp from './PoupUp.vue'
export default {
    data(){
        return{
            drawer:false,
            links:[
                {icon:'dashboard',text:'Dashboard',route:'/'},
                {icon:'folder',text:'My Projects',route:'/projects'},
                {icon:'person',text:'Team',route:'/teams'},
                {icon:'person',text:'order',route:'/order'},
            ],
            snackbar:true
        }
    },
    components:{
        AppPopUp:PoupUp,
        RoutList:()=>import('./RoutList')
    },
    
    created(){
        const customObject ={}
        Object.defineProperty(customObject,'age',{
            value:25,
            writable:true
        })
        const newCustomObject ={}
        Object.defineProperties(newCustomObject,{
            hosam:{
                value:"hossam",
                writable:true
            },
            age:{
                value:24,
                writable:true
            }
        })
        
        // Object.defineProperty(customObject,'birthday',{
        //     value:'16/10/1993',
        //     writable:true
        // })
        
        customObject.name="new som3a"
        customObject.name="ahmed"
        customObject.age=26
        console.log(customObject)
        customObject.age=26

        console.log(newCustomObject)
    }
}
</script>

<style >
    .translate{
    transform: translateY(-50px) !important;
    transition: all .5s linear !important;
}
</style>