import {createRouter,createWebHistory} from "vue-router"

import Login from '../views/shared/general-login.vue'
import Register from '../views/shared/general-register.vue'
import RegisterClient from '../components/client/General/client-register.vue'
import RegisterTechnician from '../components/technician/register.vue'

//TODO:Solo cargaremos de primeras las vistas principales que se le muestren al principio al cliente (Login and Register), el resto será cargando mediante Lazy Load (carga perezosa) para que la aplicación descargue los componentes de acuerdo a lo que demande el cliente

const routes = [
    { 
        path: '/',
        component: Login
     },
     {
         path: '/login',
         name: 'login',
         component: Login
     },
     {
         path: '/register',
         name:'register',
         component: Register
     },
     {
         path: '/registerclient',
         name: 'register-client',
         component: RegisterClient
     },
     {
         path: '/registertechnician',
         name:'register-technician',
         component: RegisterTechnician
     },
     {
         path: '/client/:id',
         name:'client',
         component: ()=>import(/*webpackChunkName:"ClientLayout"*/'../components/client/Layout/ClientLayout.vue'),
            children:[
               {
                  path:'',
                  name:'myappliance',
                  component: ()=>import(/*webpackChunkName:"MyAppliance"*/'../views/Client/client-my-appliance.vue'),
               },
               {
                  path:'myplan',
                  name:'myplan',
                  component: ()=>import(/*webpackChunkName:"MyPlan"*/'../views/Client/client-my-plan.vue')
               },
               {
                  path:'notifications',
                  name:'client-notifications',
                  component: ()=>import(/*webpackChunkName:"Notifications"*/'../views/Client/client-notifications.vue')
               },
               {
                  path:'profile',
                  name:'client-profile',
                  component: ()=>import(/*webpackChunkName:"Profile"*/'../views/Client/client-profile.vue'),
                  props:(route)=>{
                     const id=Number(route.params.id)
                     return isNaN(id) ? {id:1}:{id:id}
                  }
               },
            ]
      },
      {
         path: '/technician',
         name:'technician',
         component: ()=>import(/*webpackChunkName:"ClientLayout"*/'../components/technician/TechnicianLayout.vue'),
            children:[
               {
                  path:'',
                  name:'schedule',
                  component: ()=>import(/*webpackChunkName:"MyAppliance"*/'../views/Technician/Schedule.vue')
               },
               {
                  path:'/myreports',
                  name:'myreports',
                  component: ()=>import(/*webpackChunkName:"MyPlan"*/'../views/Technician/Reports.vue')
               },
               {
                  path:'/notifications',
                  name:'technician-notifications',
                  component: ()=>import(/*webpackChunkName:"Notifications"*/'../views/Technician/Notifications.vue')
               },
               {
                  path:'/profile',
                  name:'technician-profile',
                  component: ()=>import(/*webpackChunkName:"Profile"*/'../views/Technician/Profile.vue')
               },
            ]
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