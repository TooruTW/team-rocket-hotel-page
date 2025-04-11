import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/main-page/MainPage.vue'
import UserPage from '../components/user-page/UserPage.vue'

const routes = [
    { path: '/',
    name:' MainPage', 
    component: MainPage 
    },
    { path: '/user', 
    name:'UserPage',
    component: UserPage,
    // children: [
    //     {path: 'login', component: LoginForm},
    //     {path: 'register', component: RegisterForm},
    // ]
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
