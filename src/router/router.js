import {createRouter,createWebHistory} from "vue-router"
/*Componenets*/
// import Home from '../modules/shared/components/Home.vue'
// // import NavigationBar from '../modules/shared/components/NavigationBar.vue'
// import MyAppliance from '../modules/Client/components/MyAppliance.vue'
// import MyPlan from '../modules/Client/components/MyPlan.vue'
// import Notifications from '../modules/Client/components/Notifications.vue'
// import Profile from '../modules/Client/components/Profile.vue'

//TODO: Evitemos cargar todo de golpe cuando inicie la aplicación, puede causar demora
//En su lugar, utilizaremos  Lazy Load (Carga perezosa) para que la aplicación descargue 
// los componentes de acuerdo a lo que demande el cliente

const routes = [
    { 
        path: '/',
        component: ()=>import(/*webpackChunkName:"Home"*/'../components/administrator/home.vue')
     },
     {
        path: '/register',
        component: ()=>import(/*webpackChunkName:"Register"*/'../components/administrator/register.vue')
     },
     {
        path: '/login',
        component: ()=>import(/*webpackChunkName:"Login"*/'../components/administrator/login.vue')
     },
     {
        path: '/dashboard',
        component: ()=>import(/*webpackChunkName:"DashBoard"*/'../components/client/dashboard.vue')
     }
    // { 
    //     path: '/MyAppliance', 
    //     component: ()=>import(/*webpackChunkName:"MyApplianceCliente"*/'../modules/Client/components/MyAppliance.vue')
    // },
    // { 
    //     path: '/MyPlan',
    //     component: ()=>import(/*webpackChunkName:"M"yPlanClient"*/'../modules/Client/components/MyPlan.vue')
    //  },
    // { 
    //     path: '/Notifications',
    //      component: ()=>import(/*webpackChunkName:"NotificationsClient"*/'../modules/Client/components/Notifications.vue')
    // },
    // { 
    //     path: '/Profile',
    //     component: ()=>import(/*webpackChunkName:"ProfileClient"*/'../modules/Client/components/Profile.vue')
    // },
    // {
    //     path: '/:pathMatch(.*)*', //TODO: Dirección donde será enviado el usuario cuando coloque cualquier cosa que no sea uno definido
    //     component: ()=>import(/*webpackChunkName:"NotPageFound"*/'../modules/shared/pages/NoPageFound.vue')
    // },
]

const history=createWebHistory()

const router= createRouter({
    history,
    routes    
})

export default router