import Vue from 'vue'
import VueRouter from 'vue-router'

import day from '../views/day.vue'
import calendar from '../views/calendar.vue'
import about from '../views/about.vue'
import setting from '../views/setting.vue'
import intro from '../views/intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intro',
    component: intro
  },
  {
    path: '/day/:date',
    name: 'day',
    component: day
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/setting',
    name: 'setting',
    component: setting
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
