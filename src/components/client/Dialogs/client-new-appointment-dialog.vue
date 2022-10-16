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
      appliancesNotRegister:[

      ]

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

      //console.log(listApplianceModelId)

      let appliancesData=[]

      await this.servicesAppliance.getAppliancesInformation().then(response=>{
        appliancesData=getAppliancesOfUserId(this.$route.params.id,response.data)
      })

      //console.log(appliancesData)


      let appliancesWithinAppointment=[]

      for(const object of appliancesData){
        const {id}=object
        if(!listApplianceModelId.includes(id)){
          appliancesWithinAppointment.push(object)
        }
      }

      console.log(appliancesWithinAppointment)

      let option=[]
      for(const object of appliancesWithinAppointment){
        const {name,brand}=object
        option.push({name,brand})
      }

      console.log(option)

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