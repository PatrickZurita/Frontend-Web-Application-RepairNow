<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <h3>Edit Your Appliance!</h3>
    </template>

    <div class="appliance">
      <span id="name">Name</span>
      <pv-input-text aria-labelledby="name" v-model="Appliance.name"/>

      <span id="brand">Brand</span>
      <pv-input-text aria-labelledby="brand" v-model="Appliance.brand"/>

      <span id="model">Model</span>
      <pv-input-text aria-labelledby="model" v-model="Appliance.model"/>

      <span id="description">Description</span>
      <pv-input-text aria-labelledby="description" v-model="Appliance.description"/>

      <span id="year">Year</span>
      <pv-input-mask aria-labelledby="year" mask="9999" v-model="Appliance.year"></pv-input-mask>

      <span id="urlImage">Url Image</span>
      <pv-input-text aria-labelledby="urlImage" v-model="Appliance.urlImage"/>

      <span id="insuranceDate">Insurance Date</span>
      <pv-input-text aria-labelledby="insuranceDate" v-model="Appliance.insuranceDate"/>


    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancelChanges"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="saveChanges" autofocus/>
    </template>

  </pv-dialog>
</template>

<script>
import { appliancesServices } from '@/core/services/apliances-services.js'
export default {
  name: "client-edit-appliance-dialog",
  props:{
    display:{
      required:true,
      type:Boolean
    },
    Appliance:{
      id:{
        required:true,
        type:Number
      },
      name:{
        required:true,
        type:String
      },
      brand:{
        required:true,
        type:String
      },
      description:{
        required:true,
        type:String
      },
      model:{
        required:true,
        type:String
      },
      year:{
        required:true,
        type:Number
      },
      urlImage:{
        required:true,
        type:String
      },
      insuranceDate:{
        required:true,
        type:String
      },
    }
  },
  methods:{
    changeData(){
      const {id,name,brand,description,model,year,urlImage,insuranceDate}=this.Appliance
      new appliancesServices().patchAppliance(id,name,description,brand,model,Number(year),urlImage,insuranceDate)

    },
    saveChanges(){
      this.changeData()
      this.$emit('close',true)
    },
    cancelChanges(){
      this.$emit('close',false)
    }

  }
};
</script>

<style scoped>
.appliance{
  display: flex;
  flex-direction: column;
}
</style>