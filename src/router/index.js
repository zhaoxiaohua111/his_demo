import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
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
=======
import Login from '@/components/Login'
import First from '@/components/First'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path:'/first',
      name:'First',
>>>>>>> 5ed6a06bbb4c524993ec1554179faad63d5b663b
      component: First
    }
  ]
})
