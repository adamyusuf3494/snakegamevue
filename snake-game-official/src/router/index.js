import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import resume from '../views/resume.vue'
import projects from '../views/projects.vue'
import projectsLogin from '../views/projectsLogin.vue'
import projectsRegister from '../views/projectsRegister.vue'
import snakeGameBoard from '../views/snakeGameBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/projectsLogin',
    name: 'projectsLogin',
    component: projectsLogin
  },
  {
    path: '/projectsRegister',
    name: 'projectsRegister',
    component: projectsRegister
  },
  {
    path: '/snakeGameBoard',
    name: 'snakeGameBoard',
    component: snakeGameBoard
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
