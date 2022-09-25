import {createRouter,createWebHistory} from "vue-router"
/*Componenets*/
import Home from '../components/Home.vue'
import NavigationBar from '../components/NavigationBar.vue'
import MyAppliance from '../components/Client/MyAppliance.vue'
import MyPlan from '../components/Client/MyPlan.vue'
import Notifications from '../components/Client/Notifications.vue'
import Profile from '../components/Client/Profile.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/MyAppliance', component: MyAppliance },
    { path: '/MyPlan', component: MyPlan },
    { path: '/Notifications', component: Notifications },
    { path: '/Profile', component: Profile },
]

const history=createWebHistory()

const router= createRouter({
    history,
    routes    
})

export default router