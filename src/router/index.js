import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Счет',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Вход',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Регистрация',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'Категории',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'Данные записи',
    meta: {layout: 'main'},
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'История',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Планирование',
    meta: {layout: 'main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Профиль',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Новая запись',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
