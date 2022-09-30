<template>
    <TabMenu class="topnav" :model="items" />


    <!-- <pv-toolbar>
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
    </pv-toolbar> -->
    
</template>

<script>
export default {
    data() {
        return {
            number:1,
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home'},
                {label: 'Sign Up Now', icon: 'pi pi-fw pi-calendar'},
                {label: 'Loggin', icon: 'pi pi-fw pi-pencil'},
            ]
        }
    },
    methods: {
        redirectSignUp(){
            this.$router.push("/register")
        },
        redirectLogIn(){
            this.$router.push("/login")
        },
        redirectHome(){
            this.$router.push("/")
        }
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