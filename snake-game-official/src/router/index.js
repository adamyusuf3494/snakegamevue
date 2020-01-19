import Vue from 'vue'
import VueRouter from 'vue-router'
import projects from '../views/projects.vue'
import projectsLogin from '../views/projectsLogin.vue'
import projectsRegister from '../views/projectsRegister.vue'
import snakeGameBoard from '../views/snakeGameBoard.vue'
import resetPassword from '../views/resetPassword.vue'
import profileSettings from '../views/profileSettings.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
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
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPassword
  },
  {
    path: '/profileSettings',
    name: 'profileSettings',
    component: profileSettings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
