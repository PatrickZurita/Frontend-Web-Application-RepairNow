<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <h3>Edit Your Profile!</h3>
    </template>

    <div class="info">
      <span id="name">Name</span>
      <pv-input-text aria-labelledby="name" v-model="information.firstName"/>

      <span id="last name">Last Name</span>
      <pv-input-text aria-labelledby="last name" v-model="information.lastName"/>

      <span id="address">Address</span>
      <pv-input-text aria-labelledby="address" v-model="information.address"/>

      <span id="phone">Phone</span>
      <pv-input-mask aria-labelledby="phone" mask="999999999" v-model="information.phone"></pv-input-mask>

      <span id="password">Password</span>
      <pv-input-text aria-labelledby="password" v-model="information.password"></pv-input-text>
    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancelChanges"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="saveChanges" autofocus/>
    </template>

  </pv-dialog>

</template>

<script>
import {ModifiedUserServices} from '@/core/services/modified-user-services.js'

export default {
  props:{
    display:{
      type:Boolean,
      required:true
    },
    information:{
      firstName:{
        type:String,
        required:true
      },
      lastName:{
        type:String,
        required:true
      },
      address:{
        type:String,
        required:true
      },
      phone:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      }
    }
  },
  data(){
    return{

    }
  },
  methods:{
    changeData(){
      const { firstName,lastName,address,phone,email,password }=this.information
      const {id}=this.$route.params
      console.log(id)
      new ModifiedUserServices().modifyUser(id,firstName,lastName,address,phone,email,password)
      //new ModifiedServices().patchData(id,title,businessId,urlToImage,finaly_challengeType)
    },
    saveChanges(){
      this.changeData()
      this.$emit('closeDialogFormAlert',true)
    },
    cancelChanges(){
      this.$emit('closeDialogFormAlert',false)
    }
  }

}
</script>

<style scoped>
  .card{
    width: 50rem;
  }
  .info{
    display: flex;
    flex-direction: column;
  }

</style>