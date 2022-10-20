
<template>
    <div class="content">

        <pv-card class="card">
            <template #header>
                <img class="card-image" src="@/assets/img/user-section-images/user-photo.jpg">
            </template>
            <template #title>
                {{$t("Profile Information")}}
            </template>
            <template #subtitle>
                {{$t("User Profile")}}
            </template>
            <template #content>
                <div class="information-user">
                    <p class="information-user-header">{{$t("Name:")}}</p>
                    <p class="information-user-info"> {{this.name}}</p>
                    <p class="information-user-header">{{$t("LastName:")}}</p>
                    <p class="information-user-info"> {{this.lastName}}</p>
                    <p class="information-user-header">{{$t("Address:")}}</p>
                    <p class="information-user-info"> {{this.address}}</p>
                    <p class="information-user-header">{{$t("Phone:")}}</p>
                    <p class="information-user-info"> {{this.phone}}</p>
                    <p class="information-user-header">{{$t("Email:")}}</p>
                    <p class="information-user-info"> {{this.email}}</p>
                    <p class="information-user-header">{{$t("Password:")}}</p>
                    <p class="information-user-info">*********</p>
                </div>
            </template>
            <template #footer>
                <div class="foot">
                    <pv-button icon="pi pi-user-edit" class="p-button-rounded p-button-secondary" @click="editProfile"></pv-button>
                </div>
            </template>
        </pv-card>    

    </div>

    <DialogProfile @closeDialogFormAlert="closeDialogForm" :display="dialogEditDisplay" :information="informationProfile" :closable="false"></DialogProfile>


</template>

<script>
import { usersServices } from '@/core/services/user-services';
import DialogProfile from '@/components/client/Dialogs/client-edit-profile-dialog.vue'

export default {
    components:{
      DialogProfile
    },
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
            dialogEditDisplay:false,
            informationProfile:null
        }
    },
    services:null,
    methods:{
      openEditDialog(){this.dialogEditDisplay=true},
      closeEditDialog(){this.dialogEditDisplay=false},
      closeDialogForm(isChangeAnything){
        if(isChangeAnything)this.getData()
        this.closeEditDialog()
      },
      editProfile(){
        this.openEditDialog()
      },
      getData(){
        this.services.getUserInformationById(this.id.toString()).then(response=>{
          this.informationProfile=response.data
          this.name=this.informationProfile.firstName
          this.lastName=this.informationProfile.lastName
          this.address=this.informationProfile.address
          this.phone=this.informationProfile.phone
          this.email=this.informationProfile.email
          this.password=this.informationProfile.password
        })
      }
    },
    created(){
        this.services= new usersServices()
    },
    mounted() {
        this.getData();
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