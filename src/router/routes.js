
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home/HomePage' 
import FormPage from '@/pages/Form/FormPage'

const routes = [
    {
        path:'/',
        component: HomePage
    },
    {
        path:'/form',
        component: FormPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;