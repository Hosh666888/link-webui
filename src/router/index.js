import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:"/home",
    component: ()=>import("../views/home/Home")
  },
  {
    path:"/github/callback",
    component:()=>import("../views/login/CallBack")
  },
  {
    path:"/article/new",
    component:()=>import("../views/new/New")
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
