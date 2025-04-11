import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/main-page/MainPage.vue'
import UserPage from '../components/user-page/UserPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/user', component: UserPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
