<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <h3>New Appliance!</h3>
    </template>

    <div class="form">
      <span id="name">Name</span>
      <pv-input-text aria-labelledby="name" v-model="this.name"/>

      <span id="brand">Brand:</span>
      <pv-input-text aria-labelledby="brand" v-model="this.brand"/>

      <span id="model">Model:</span>
      <pv-input-text aria-labelledby="model" v-model="this.model"/>

      <span id="description">Description:</span>
      <pv-input-text aria-labelledby="description" v-model="this.description"/>

      <span id="year">Year:</span>
      <pv-input-text aria-labelledby="year" v-model="this.year"/>

      <span id="urlImage">Year:</span>
      <pv-input-text aria-labelledby="urlImage" v-model="this.urlImage"/>

      <span id="insuranceDate">Insurance Date::</span>
      <pv-input-text aria-labelledby="insuranceDate" v-model="this.insuranceDate"/>

    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click=""/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="" autofocus/>
    </template>

  </pv-dialog>

</template>

<script>
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
  }
};
</script>

<style scoped>

</style>