<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <div class="card-title">
        <h1>New Appliance!</h1>
      </div>
    </template>

    <div class="form">
      <span id="name">Name</span>
      <pv-input-text aria-labelledby="name" v-model="this.name" />

      <span id="brand">Brand:</span>
      <pv-input-text aria-labelledby="brand" v-model="this.brand"/>

      <span id="model">Model:</span>
      <pv-input-text aria-labelledby="model" v-model="this.model"/>

      <span id="description">Description:</span>
      <pv-input-text aria-labelledby="description" v-model="this.description"/>

      <span id="year">Year:</span>
      <pv-input-mask aria-labelledby="year" mask="9999" v-model="this.year"></pv-input-mask>

      <span id="urlImage">Url Image:</span>
      <pv-input-text aria-labelledby="urlImage" v-model="this.urlImage"/>

      <span id="insuranceDate">Insurance Date::</span>
      <pv-input-text aria-labelledby="insuranceDate" v-model="this.insuranceDate" placeholder="Example:24/08/20"/>

    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancel"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="save" autofocus/>
    </template>

  </pv-dialog>

</template>

<script>
import { appliancesServices } from  '@/core/services/apliances-services.js'
export default {
  name: "cliente-new-appliance-dialog",
  props:{
    display:{
      required:true,
      type:Boolean
    },
    clientId:{
      required:true,
      type:Number,
    }
  },
  data(){
    return{
      "name":null,
      "description":null,
      "brand":null,
      "model":null,
      "year":null,
      "urlImage":null,
      "insuranceDate":null,
    }
  },
  methods:{
    newData(){
      new appliancesServices().postNewAppliance(this.name,this.description,this.brand,this.model,this.year,this.urlImage,this.insuranceDate,this.clientId)
    },
    cancel(){
      this.$emit('close',false)
    },
    save(){
      this.newData()
      this.$emit('close',true)
    }
  }
};
</script>

<style scoped>
.card-title{
  display:flex;
  justify-content: center;
  text-align: center;
}
.form{
  display: flex;
  flex-direction: column;
}

</style>