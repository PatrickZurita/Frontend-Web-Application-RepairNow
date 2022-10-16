<template>
  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <h3>Edit Your Appointment!</h3>
    </template>

    <div class="appointment">

      <span id="dateReserve">Date Reserve</span>
      <pv-input-text aria-labelledby="dateReserve" v-model="appointments.dateReserve"/>

      <span id="dateAttention">Date Attention</span>
      <pv-input-text aria-labelledby="dateAttention" v-model="appointments.dateAttention"/>

      <span id="hour">Hour</span>
      <pv-input-text aria-labelledby="hour" v-model="appointments.hour"/>


    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancelChanges"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="saveChanges"/>
    </template>

  </pv-dialog>
</template>

<script>
import {appointmentsServices} from '@/core/services/appointments-services.js'
export default {
  props:{
    display:{
      required:true,
      type:Boolean
    },
    appointments:{
      id:{
        required:true,
        type:Number
      },
      dateReserve:{
        required:true,
        type:String
      },
      dateAttention:{
        required:true,
        type:String
      },
      hour:{
        required:true,
        type:Number
      }
    }
  },
  methods:{
    changeData(){
      const {id,dateReserve,dateAttention,hour}=this.appointments
      new appointmentsServices().modifyAppointment(id,dateReserve,dateAttention,hour)
    },
    cancelChanges(){
      this.$emit('close',false)
    },
    saveChanges(){
      this.changeData()
      this.$emit('close',true)
    }
  }
}
</script>

<style scoped>
.appointment{
  display: flex;
  flex-direction: column;
}

</style>