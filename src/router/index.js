import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import login from '@/components/login'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Router)
Vue.use(VueAxios, axios)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/First',
      name: 'First',
      component: First
    }
  ]
})
