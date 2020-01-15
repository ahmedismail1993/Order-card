import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from '@/components/fetchCom'
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate) 
Vue.use(VueResize)
Vue.component('resize-observer', VueResize.ResizeObserver)

Vue.config.productionTip = false
Vue.mixin( {
    beforeCreate() {
      const options = this.$options;
      if ( options.ajax )
        this.$ajax = options.ajax;
      else if ( options.parent && options.parent.$ajax )
        this.$ajax = options.parent.$ajax;
    }
  } );

new Vue({
  router,
  store,
  ajax,
  render: h => h(App)
}).$mount('#app')
