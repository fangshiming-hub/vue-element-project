import Vue from 'vue'
import VueRouter from 'vue-router'
import app from "../views/layout/default.vue"
import cssAnimal from '../views/cssAnimal/cssAnimal'
// import videoTv from '../components/videoTv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'app',
    component: app,
    children: [
      {
        path: 'cssAnimal',
        name: 'cssAnimal',
        component: cssAnimal
      },
      {
        path: 'videoTv',
        name: 'videoTv',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "videoTv" */ '../components/videoTv.vue')
      },
      {
        path: 'canvas',
        name: 'canvas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'import',
        name: 'import',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "ImportTest" */ '../components/ImportTest/ImportTest.vue')
      },
      {
        path: 'password',
        name: 'password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "password" */ '../components/password/password.vue')
      },
      {
        path: 'tabtest',
        name: 'tabtest',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "tabtest" */ '../components/TabTest.vue')
      },
      {
        path: 'map',
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "map" */ '../views/map/map.vue')
      },
      {
        path: '',
        redirect: 'cssAnimal'
      },
    ]
  },
  
  {
    path: '',
    redirect: 'app'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
