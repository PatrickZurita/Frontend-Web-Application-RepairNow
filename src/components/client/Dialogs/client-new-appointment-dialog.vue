<template>

  <pv-dialog class="card" header="Header" v-model:visible="display" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}">

    <template #header>
      <div class="card-title">
        <h1>New Appointment!</h1>
      </div>
    </template>

    <div class="form">
      <span id="dateReserve">Date Reserve:</span>
      <pv-input-text aria-labelledby="dateReserve" v-model="this.dateReserve" />

      <span id="dateAttention">Date Attention:</span>
      <pv-input-text aria-labelledby="dateAttention" v-model="this.dateAttention"/>

      <span id="hour">Hour:</span>
      <pv-input-text aria-labelledby="hour" v-model="this.hour"/>

      <span id="applianceForSelection">Appliance:</span>
      <pv-dropdown aria-labelledby="applianceForSelection" v-model="selectedAppliance" :options="appliancesNotRegister" optionLabel="computedName" placeholder="Select a Appliance" />

    </div>

    <template #footer>
      <pv-button label="Cancel" icon="pi pi-times" class="p-button-text p-button-danger" @click="cancel"/>
      <pv-button label="Save" icon="pi pi-check"  class="p-button-success" @click="save"/>
    </template>

  </pv-dialog>

</template>

<script>
import { getAppointmentsOfUserId } from "@/core/helpers/get-appointments-helpers.js";
import {getAppliancesOfUserId} from "@/core/helpers/get-appliances-helpers.js";
import { appliancesServices } from "@/core/services/apliances-services.js";
import { appointmentsServices } from "@/core/services/appointments-services.js";

export default {
  name: "client-new-appointment-dialog",
  props:{
    display:{
      required:true,
      type:Boolean
    }
  },
  data(){
    return{
      dateReserve:null,
      dateAttention:null,
      hour:null,
      selectedAppliance:null,
      appliancesNotRegister:null

    }
  },
  servicesAppointment:null,
  servicesAppliance:null,
  created() {
    this.servicesAppointment = new appointmentsServices()
    this.servicesAppliance=new appliancesServices()
  },
  mounted() {
    this.getAppointmentsOfClient()
  },
  methods:{
    async getAppointmentsOfClient(){

      let appointmentsData=[]

      await this.servicesAppointment.getAppointmentsInformation().then(response=>{
        appointmentsData=getAppointmentsOfUserId(this.$route.params.id,response.data)
      })

      let listApplianceModelId=[]

      for(const object of appointmentsData){
        const {applianceModelId}=object
        listApplianceModelId.push(applianceModelId)
      }

      let appliancesData=[]

      await this.servicesAppliance.getAppliancesInformation().then(response=>{
        appliancesData=getAppliancesOfUserId(this.$route.params.id,response.data)
      })

      let appliancesWithinAppointment=[]

      for(const object of appliancesData){
        const {id}=object
        if(!listApplianceModelId.includes(id)){
          appliancesWithinAppointment.push(object)
        }
      }

      let option=[]
      for(const object of appliancesWithinAppointment){
        const {id,name,brand}=object
        const computedName=name+" "+brand
        option.push({id,computedName})
      }

      this.appliancesNotRegister=option

    },
    cancel(){
      this.$emit('close',false)
    },
    async save(){
      const {id}=this.selectedAppliance
      await new appointmentsServices().postNewAppointment(this.dateReserve,this.dateAttention,this.hour,Number(this.$route.params.id),id)
      await this.getAppointmentsOfClient()
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