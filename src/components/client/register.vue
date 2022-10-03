<template>

<body>

        <div class="flex flex-row align-items-center justify-content-center w-full">

        <div class="container flex align-items-center">

            <div class="imgBx">
                <img class="w-full" src="@/assets/img/register_user.png">
            </div>

            <pv-card class="login-card m-auto text-center border-round-sm flex align-items-center justify-content-center">

                    <template #title>
                        <img class="imgLogo" src="@/assets/img/logo_repair.png" alt="logo_repair.png">
                    </template>

                    <template #subtitle>
                        <p>Register now to be able to search for technicians who solve your appliances</p>
                    </template>

                    <template #content>
                        <div class="form-container flex flex-column gap-5 text-center" >
                            <div class="first-part flex flex-column justify-content-center w-9 m-auto gap-3 ">
                                <pv-input-text type="text" v-model="firstName" placeholder="FirstName"></pv-input-text>
                                <pv-input-text type="text" v-model="lastName" placeholder="LastName"></pv-input-text>
                                <pv-input-text type="text" v-model="email" placeholder="Put your email"></pv-input-text>
                                <pv-input-text type="text" v-model="password" placeholder="Write your Password"></pv-input-text>
                                <pv-button class="register-button flex justify-content-center" @click="register">Register Now!</pv-button>
                            </div>
                            <div class="second-part flex flex-column gap-4">
                                <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                            </div>
                        </div>
                    </template>
            </pv-card>

        </div>

    </div>

</body>


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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background:#F0F2F5;
    display: flex;
    min-height: 100vh;
}

.imgBx{display: none;}
.imgLogo{width: 40%;}
.login-card{box-shadow: 5px 10px 8px #888888;width: 80%;}
.input-email,.input-password{background: #FAFAFA;}
.register-button{transition: all 0.5s;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);}
.register-button{cursor: pointer;transition: 0.5s;}
.register-button:after {content: '»';position: absolute;opacity: 0;  top: 14px;right: -20px;transition: 0.5s;}
.register-button:hover{padding-right: 24px;padding-left:8px;}
.register-button:hover:after {opacity: 1;right: 10px;}
.sign-up:hover{
    cursor: pointer;
    font-weight: bold;
    transition: 0.1s;
}

@media(min-width:580px){
    .login-card{width: 100%;}
}
@media(min-width: 968px){
    .imgBx{display: flex; width: 50%; height: 50%;}
    .login-card{width: 30%; height: 30rem;}
}


</style>