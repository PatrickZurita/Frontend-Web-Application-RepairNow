<template>

<body class="flex flex-row align-items-center justify-content-center">

    <div class="container flex align-items-center">

        <div class="imgBx">

            <img class="w-full" src="@/assets/img/wallpaper_technician.png">

        </div>

        <pv-card class="login-card m-auto text-center border-round-sm flex align-items-center justify-content-center">

                <template #title>
                    <img class="imgLogo" src="@/assets/img/logo_repair.png" alt="logo_repair.png">
                </template>


                <template #content>

                    <div class="form-container flex flex-column gap-5 text-center" >

                        <div class="first-part flex flex-column justify-content-center w-9 m-auto gap-3 ">

                            <pv-input-text class="input-email flex justify-content-center" type="text" v-model="value" placeholder="Email" />
                            <pv-input-text class="input-password flex justify-content-center" type="password" v-model="value" placeholder="Password" toggleMask  />
                            <pv-button class="flex justify-content-center">LOG IN</pv-button>
                        </div>

                        <div class="second-part flex flex-column gap-4">
                            <p>Don't have an account? <span>Sign Up Now!</span></p>
                            <p><span>About</span>    |    <span>Contact</span></p>
                        </div>


                    </div>

                </template>

        </pv-card>


    </div>
    
    


</body>

</template>

<script>
import { usersServices } from '@/services/user-services'

export default {

    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods: {            
        login(){

            new usersServices().login(this.email,this.password)
            .then(response=>{
                console.log("USER LOGIN CORRECTLY")
                sessionStorage.setItem("jwt",response.data.accessToken)

                const typeUser=response.data.user.type

                console.log(typeUser)

                if(typeUser=="technician"){
                    this.$router.push('/technician');
                }else{
                    this.$router.push('/dashboard');
                }

            })
            .catch(response=>{
                alert("Unregistered or misspelled user")
            })

            // new usersServices().getUserInformation()
            // .then(response=>{
            //     console.log()
            // })


        },
        redirect(){
            this.$router.push("/register")
        }
    },

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

@media(min-width:580px){
    .login-card{width: 100%;}
}
@media(min-width: 968px){
    .imgBx{display: flex; width: 50%; height: 50%;}
    .login-card{width: 30%; height: 30rem;}
}


</style>