<template>

    <div class="container">

        <!-- <div class="regular-bar" v-if="number==1">
            <Nav1 @change="number += 1"/>
        </div> -->
        <template v-if="isLogin">
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <!-- <li style="margin-top: 0.5em;"><router-link to="/Dashboard" class="nav-link px-2">Hello, {{user.data.displayName}}</router-link></li>
                <li><a href="#" class="nav-link px-2" @click.prevent="signOut"><button type="button" class="btn poke-secondary me-2">Sign out</button></a></li> -->
                <p>Hello User</p>
                <button>Logout</button>
              </ul>
        </template>
        <template v-else>
              <div class="col-md-3 text-end px-2">
                <router-link to="/login"><button type="button" class="btn poke-secondary me-2">Login</button></router-link>
                <router-link to="/signup"><button type="button" class="btn poke-secondary">Sign Up</button></router-link>
              </div>
        </template>        

    </div>
    

</template>

<script>
import Nav1 from './nav1.vue'


export default {
  components: { Nav1 },

    data() {
        return {
            isLogin:false
            // isLogin:false,
            // number:1,
            // items: [
            //     {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
            //     {label: 'Sign Up Now', icon: 'pi pi-fw pi-calendar', to: '/register'},
            //     {label: 'Loggin', icon: 'pi pi-fw pi-pencil',to: '/login'},
            // ]
        }
    },
    methods: {

        // redirectSignUp(){
        //     this.$router.push("/register")
        // },
        // redirectLogIn(){
        //     this.$router.push("/login")
        // },
        // redirectHome(){
        //     this.$router.push("/")
        // }
    },
}


</script>

<style>

    .topnav {
        background-color: #333;
        overflow: hidden;
        align-content: right;
        align-items: right;
      }
      
      .topnav a {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
     
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      .topnav a.active {
        background-color: #04AA6D;
        color: white;
      }

      .topnav .icon {
        display: none;
      }

</style>



        <!-- <pv-TabMenu class="topnav" :model="items" /> -->

        <!-- <div class="notLogin" v-if="isLogin">

                <pv-toolbar>
            <template #start>
                <h1>REPAIR NOW</h1>
            </template>
            <template #end>
                <div class="flex flex-row flex-wrap" v-if="number==1">


                        <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                        <pv-button label="Primary" class="p-button-outlined" @click="redirectHome">HOME</pv-button>
                    </div>

                    <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                        <pv-button label="Primary" class="p-button-outlined" @click="redirectSignUp">SIGN UP NOW</pv-button>
                    </div>
                    <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                        <pv-button label="Primary" class="p-button-outlined" @click="redirectLogIn">LOG IN</pv-button>
                    </div>

            </div>

            <div class="flex flex-row flex-wrap" v-if="number==2">
            
                    <div class="flex flex-row flex-wrap">

                        <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                            <pv-button label="Primary" class="p-button-outlined" @click="redirectHome">Profile</pv-button>
                        </div>

                        <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                            <pv-button label="Primary" class="p-button-outlined" @click="redirectSignUp">Route</pv-button>
                        </div>
                        <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                            <pv-button label="Primary" class="p-button-outlined" @click="redirectLogIn">Reports</pv-button>
                        </div>

                    </div>
            </div>
            
                </template>
            </pv-toolbar>

        </div> -->
