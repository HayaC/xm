import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Sorts from '../components/sorts'
import Car from '../components/car'
import Mine from '../components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sorts',
      name: 'Sorts',
      component: Sorts
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
