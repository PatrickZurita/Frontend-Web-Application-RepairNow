import {createRouter,createWebHistory} from "vue-router"
/*Componenets*/
import Home from '../components/Home.vue'
import NavigationBar from '../components/NavigationBar.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/NavigationBar', component: NavigationBar }
]

const history=createWebHistory()

const router= createRouter({
    history,
    routes    
})

export default router