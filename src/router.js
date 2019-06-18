import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Menu from '@/views/Menu'
import OrderManager from '@/views/OrderManager'
import MenuManager from '@/views/MenuManager'
import Order from '@/views/Order'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register1',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register1.vue')
    },
    {
      path: '/register2',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register2.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/ordermanager',
      name: 'ordermanager',
      component: OrderManager
    },
    {
      path: '/menumanager',
      name: 'menumanager',
      component: MenuManager
    }
  ]
})
