import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/main-page/MainPage.vue'
import AccountPage from '../components/account-page/login.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/account', component: AccountPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
