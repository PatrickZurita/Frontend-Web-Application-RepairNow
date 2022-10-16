import {createRouter,createWebHistory} from "vue-router"

import Login from '../views/shared/general-login.vue'
import Register from '../views/shared/general-register.vue'
import RegisterClient from '../components/client/General/client-register.vue'
import RegisterTechnician from '../components/technician/General/technician-register.vue'

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
                redirect:{name:'myappliance'}
                },
               {
                  path:'myappliance',
                  name:'myappliance',
                  component: ()=>import(/*webpackChunkName:"MyAppliance"*/'../views/Client/client-my-appliance.vue'),
               },
               {
                  path:'myplan',
                  name:'myplan',
                  component: ()=>import(/*webpackChunkName:"MyPlan"*/'../views/Client/client-my-plan.vue')
               },
               {
                  path:'appointment',
                  name:'client-appointment',
                  component: ()=>import(/*webpackChunkName:"Notifications"*/'../views/Client/client-appointments.vue')
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
         path: '/technician/:id',
         name:'technician',
         component: ()=>import(/*webpackChunkName:"ClientLayout"*/'../components/technician/Layout/TechnicianLayout.vue'),
            children:[
              {
                path:'',
                redirect:{name:'technician-profile'}
              },
               {
                 path:'profile',
                 name:'technician-profile',
                 component: ()=>import(/*webpackChunkName:"Profile"*/'../views/technician/technician-profile.vue'),
                 props:(route)=>{
                   const id=Number(route.params.id)
                   return isNaN(id) ? {id:1}:{id:id}
                 }
               },
               {
                  path:'myreports',
                  name:'myreports',
                  component: ()=>import(/*webpackChunkName:"MyReports"*/'../views/technician/technician-my-reports.vue')
               },
               {
                 path:'myroutes',
                 name:'myroutes',
                 component: ()=>import(/*webpackChunkName:"MyRoutes"*/'../views/technician/technician-my-routes.vue')
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