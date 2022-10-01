<template>

<body class="flex flex-row align-items-center">


    <div class="imgBx">

            <img class="w-full"
            src="https://www.adulteducationworks.com/wp-content/uploads/2018/01/Technician-Adult-Aducation-Works2-1080x675.jpeg">

    </div>

    <pv-card class="login-card w-11 m-auto text-center border-round-sm">

            <template #title>
                Repair  Now
            </template>


            <template #content>

                <div class="form-container flex flex-column gap-5 text-center" >

                    <div class="first-part flex flex-column justify-content-center w-9 m-auto gap-3 ">

                        <pv-input-text class="flex justify-content-center" type="text" v-model="value" placeholder="Email" />
                        <pv-input-text class="flex justify-content-center" type="password" v-model="value" placeholder="Password" toggleMask  />
                        <pv-button class="flex justify-content-center">GO!</pv-button>
                    </div>

                    <div class="second-part flex flex-column gap-4">
                        <p>Don't have an account? <span>Sign Up Now!</span></p>
                        <p><span>About</span>|<span>Contact</span></p>
                    </div>

                
                </div>
                
            </template>

    </pv-card>
    


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

.imgBx{
    display: none;
}

.login-card{
    box-shadow: 5px 10px 8px #888888;
}


/* section .imgBx:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg,#1e7de9,#03202e);
    z-index: 1;
    mix-blend-mode: screen;
} */


/* .responsive {
  width: 100%;
  height: auto;
}

@media(min-width:0px){

    .container-login{
    margin-top: 6rem;
    }
    .container-image{
        display: none;
    }

}

@media(min-width:500px){

    .container-login{
    margin-top: 14rem;
    }

}

@media(min-width:768px){

    .container-login{
    margin-top: 14rem;
    }
    .container-image{
        display: flex;
        width:60%
    }

} */


</style>