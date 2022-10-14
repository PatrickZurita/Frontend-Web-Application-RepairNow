<template>
  <pv-dialog header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'} ">

    <template #header>
      <h3>Edit this file</h3>
    </template>

    <span id="name">Name</span>
    <pv-input-text aria-labelledby="name" v-model="information.firstName"/>

    <span id="last name">Last Name</span>
    <pv-input-text aria-labelledby="last name" v-model="information.lastName"/>

    <span id="address">Address</span>
    <pv-input-text aria-labelledby="address" v-model="information.address"/>

    <span id="phone">Phone</span>
    <pv-input-mask aria-labelledby="phone" mask="999999999" v-model="information.phone"></pv-input-mask>

    <span id="password">Password</span>
    <pv-input-mask aria-labelledby="password" mask="999999999" v-model="information.password"></pv-input-mask>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text" @click="cancelChanges"/>
      <pv-button label="Save" icon="pi pi-check"  @click="saveChanges" autofocus/>
    </template>

  </pv-dialog>

</template>

<script>

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
    changeDataChallenge(){
      const { firstName,lastName,address,phone,password }=this.information
      console.log(firstName,lastName,address,phone,password)
      //new ModifiedServices().patchData(id,title,businessId,urlToImage,finaly_challengeType)
    },
    saveChanges(){
      this.changeDataChallenge()
      this.$emit('closeDialogFormAlert',true)
    },
    cancelChanges(){
      this.$emit('closeDialogFormAlert',false)
    }
  }

}
</script>

<style scoped>
  .p-dialog-content{
    display: flex;
    flex-direction: column;
  }
</style>