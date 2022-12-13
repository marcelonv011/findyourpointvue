import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'inicio',

    component: () => import('../views/inicio/Menu.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/login/Log.vue')
  },
  {
    path: '/register',
    name: 'register',

    component: () => import('../views/register/Registro.vue')
  }, 
  {
    path: '/favorite',
    name: 'favorite',

    component: () => import('../views/favorito/Favorito.vue')
  },
  {
    path: '/eventos',
    name: 'eventos',

    component: () => import('../views/eventos/Evento.vue')
  },
  {
    path: '/equipe',
    name: 'equipe',

    component: () => import('../views/equipe/Team.vue')
  },
  {
    path: '/descriptivo',
    name: 'descriptivo',

    component: () => import('../views/descriptivo/Descriptivo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
