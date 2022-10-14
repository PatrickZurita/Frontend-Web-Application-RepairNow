
<template>
    <h1>PROFILE INFORMATION</h1>
    {{this.id}}
    {{this.name}}
    
    {{this.lastName}}
    
    {{this.address}}
    
    {{this.phone}}
    
    {{this.email}}

    
    {{this.password}}
    
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
    created(){
        new usersServices().getUserInformationById(this.id).then(response=>{
            console.log(response.data)
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

<style>

</style>