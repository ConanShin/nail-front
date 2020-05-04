import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (sessionStorage.getItem('userId')) next('/main')
            else next()
        }
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        beforeEnter: (to, from, next) => {
            if (sessionStorage.getItem('userId')) next()
            else next('/')
        }
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes
})

export default router
