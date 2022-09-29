<template>

<div class="login">

    <div class="Two">

        <img src="https://images.samsung.com/is/image/samsung/p6pim/pe/wf21t6500gv-pe/gallery/pe-wf6000tk-wf22t6500gvzs-wf21t6500gv-pe-455673837?$650_519_PNG$" width="700" height="500">

        <div class="cards">

            <pv-card style="width: 25rem; margin-bottom: 2em">
                <template #title>
                    <h1>Login on Repair Now</h1>
                </template>
                <template #content>
                
                    <div class="flex flex-column">
                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-input-text type="text" v-model="email" placeholder="Email"></pv-input-text>
                        </div>
                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-password v-model="password" :feedback="false" placeholder="Password"></pv-password>
                        </div>
                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-button label="Log In" @click="login"></pv-button>
                        </div>

                    </div>
                </template>
            </pv-card>


            <pv-card style="width: 25rem; margin-bottom: 2em">
                <template #title>
                </template>
                <template #content>
                    Don't have an account? <span class="SignUp" style="color:blue" @click="redirect">Sign Up!</span>
                </template>
            </pv-card>

        </div>

    </div>

</div>

</template>

<script>
import { usersServices } from '@/services/user-services'

export default {

    data(){
        return{
            email:"",
            password:""
        }
    },
    methods: {            
        login(){
            new usersServices().login(this.email,this.password)
            .then(response=>{
                console.log("USER LOGIN CORRECTLY")
                this.$router.push('/dashboard');
                sessionStorage.setItem("jwt",response.data.accessToken)
            })
            .catch(response=>{
                alert("Unregistered or misspelled user")
            })
        },
        redirect(){
            this.$router.push("/register")
        }
    },

}
</script>

<style scoped>

.Two{
    display: flex;
}
.SignUp{
    cursor: pointer;
    size: bold;
}

</style>