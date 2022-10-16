<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <h3>Edit Your Report</h3>
    </template>

    <div class="info">
      <span id="observation">Observation</span>
      <pv-input-text aria-labelledby="observation" v-model="report.observation"/>

      <span id="diagnosis">Diagnosis</span>
      <pv-input-text aria-labelledby="diagnosis" v-model="report.diagnosis"/>

      <span id="repairDescription">Repair Description</span>
      <pv-input-text aria-labelledby="repairDescription" v-model="report.repairDescription"/>

      <span id="date">Date:</span>
      <pv-input-text aria-labelledby="date" v-model="report.date"></pv-input-text>
    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancelChanges"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="saveChanges"/>
    </template>

  </pv-dialog>

</template>

<script>
import {reportsServices} from '@/core/services/reports-api-service.js'

export default {
  props:{
    display:{
      type:Boolean,
      required:true
    },
    report:{
      id:{
        type:Number,
        required:true
      },
      observation:{
        type:String,
        required:true
      },
      diagnosis:{
        type:String,
        required:true
      },
      repairDescription:{
        type:String,
        required:true
      },
      date:{
        type:String,
        required:true
      }
    }
  },
  methods:{
    changeData(){
      const {id,observation,diagnosis,repairDescription,date}=this.report
      new reportsServices().modifyReport(id,observation,diagnosis,repairDescription,date)
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

.card{
  width: 50rem;
}
.info{
  display: flex;
  flex-direction: column;
}

</style>