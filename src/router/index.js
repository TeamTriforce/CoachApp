import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import SignIn from '@/views/SignIn.vue'
import LogIn from '@/views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: 'LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: 'SignIn',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  routes
})

export default router
