<template>

<div class="login">

    <div class="Two">

        <img src="https://images.samsung.com/is/image/samsung/p6pim/pe/wf21t6500gv-pe/gallery/pe-wf6000tk-wf22t6500gvzs-wf21t6500gv-pe-455673837?$650_519_PNG$" width="700" height="500">

        <div class="cards">

            <pv-card style="width: 25rem; margin-bottom: 2em">
                <template #title>
                    <h1>Register Client!</h1>
                </template>
                <template #content>
                
                    <div class="flex flex-column">
                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-input-text type="text" v-model="firstName" placeholder="FirstName"></pv-input-text>
                        </div>

                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-input-text type="text" v-model="lastName" placeholder="LastName"></pv-input-text>
                        </div>

                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-input-text type="text" v-model="email" placeholder="Put your email"></pv-input-text>
                        </div>
                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-input-text type="text" v-model="password" placeholder="Write your Password"></pv-input-text>
                            <!-- <pv-password v-model="password" :feedback="false" placeholder="Password"></pv-password> -->
                        </div>

                        <div class="flex align-items-center justify-content-center h-4rem border-round m-2">
                            <pv-button label="Register" @click="register"></pv-button>
                        </div>
                        
                    </div>
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
            firstName:"",
            lastName:"",
            password:""
        }
    },
    methods: {
        register(){
            new usersServices().register(this.email,this.password,this.firstName,this.lastName,"client").then(response=>console.log("USER CREATED"))
            this.$router.push("/")
        },
    }

}
</script>

<style scoped>

.Two{
    display: flex;
}

</style>