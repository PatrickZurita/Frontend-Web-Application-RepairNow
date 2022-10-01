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
        component: ()=>import(/*webpackChunkName:"Home"*/'../components/shared/login.vue')
     },
     {
        path: '/register',
        component: ()=>import(/*webpackChunkName:"Register"*/'../components/shared/register.vue')
     },
     {
        path: '/registerClient',
        component: ()=>import(/*webpackChunkName:"RegisterClient"*/'../components/client/register.vue')
     },
     {
        path: '/registerTechnician',
        component: ()=>import(/*webpackChunkName:"RegisterTechnician"*/'../components/technician/register.vue')
     },
     {
        path: '/login',
        component: ()=>import(/*webpackChunkName:"Login"*/'../components/shared/login.vue')
     },
    //  {
    //     path: '/technician',
    //     component: ()=>import(/*webpackChunkName:"Technician"*/'../views/technician/technician.vue')
    //  },
     {
        path: '/technician/profile',
        component: ()=>import(/*webpackChunkName:"ProfileTechnician"*/'../components/technician/profile.vue')
     },
     {
        path: '/technician/profile/editProfile',
        component: ()=>import(/*webpackChunkName:"ProfileTechnician"*/'../components/technician/edit-profile.vue')
     },
     {
        path: '/technician/route',
        component: ()=>import(/*webpackChunkName:"RouteTechnician"*/'../components/technician/route.vue')
     },
     {
        path: '/technician/reports',
        component: ()=>import(/*webpackChunkName:"RouteTechnician"*/'../components/technician/reports.vue')
     },
     {
        path: '/dashboard',
        component: ()=>import(/*webpackChunkName:"DashBoard"*/'../components/client/dashboard.vue')
     },

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