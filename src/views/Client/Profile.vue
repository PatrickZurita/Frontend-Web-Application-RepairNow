
<template>
    <div class="content">

        <pv-card class="card">
            <template #header>
                <img class="card-image" src="@/assets/img/user-section-images/user-photo.jpg">
            </template>
            <template #title>
                Profile Information
            </template>
            <template #subtitle>
                User Profile
            </template>
            <template #content>
                <div class="information-user">
                    <p class="information-user-header">Name:</p>
                    <p class="information-user-info"> {{this.name}}</p>
                    <p class="information-user-header">LastName:</p>
                    <p class="information-user-info"> {{this.lastName}}</p>
                    <p class="information-user-header">Address:</p>
                    <p class="information-user-info"> {{this.address}}</p>
                    <p class="information-user-header">Phone:</p>
                    <p class="information-user-info"> {{this.phone}}</p>
                    <p class="information-user-header">Email:</p>
                    <p class="information-user-info"> {{this.email}}</p>
                    <p class="information-user-header">Password:</p>
                    <p class="information-user-info">password</p>
                </div>
            </template>
            <template #footer>
                <div class="foot ">
                    <pv-button icon="pi pi-user-edit" class="p-button-rounded p-button-secondary"></pv-button>
                </div>
            </template>
        </pv-card>    

    </div>
    
    
</template>

<script>
import { usersServices } from '@/services/user-services';

export default {
    props:{
        id:{
            type:Number,
            required:true
        }
    },
    data() {
        return {
            name:null,
            lastName:null,
            address:null,
            phone:null,
            email:null,
            password:null,
        }
    },
    services:null,
    created(){
        this.services= new usersServices()
    },
    mounted() {
        this.services.getUserInformationById(this.id.toString()).then(response=>{
            const {firstName,lastName,address,phone,email,password}=response.data
            this.name=firstName
            this.lastName=lastName
            this.address=address
            this.phone=phone
            this.email=email
            this.password=password
        })
    }
}
</script>

<style scoped>

.content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
}

.information-user-header{
    font-weight: bold;
}
.card{
    width: 90%;
}
.foot{
    width: 100%; 
    display: flex;
    justify-content: end;   
}

@media(min-width:500px){
.card{
    width: 25em
    }


}



</style>