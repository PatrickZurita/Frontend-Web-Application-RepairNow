<template>

  <div class="content flex flex-column align-items-center">

    <section class="title">
      <h1 class="title__text">APPOINTMENT</h1>
    </section>

    <section class="add mb-4">
      <pv-button @click="openNewDialog" class="pi pi-plus">Add Appointment</pv-button>
    </section>


    <pv-data-view :value="appointmentsAndAppliances" layout="grid" :paginator="true" :rows="2">
      <template #grid="slotProps">
        <div class="contain-panel col-12 md:col-6">
          <pv-panel class="panel" :header="slotProps.data.name">

            <img class="panel__image" :src="slotProps.data.urlImage" :alt="slotProps.data.name"/>
            <div class="panel__text">
              <p>Model:<span>{{slotProps.data.model}}</span></p>
            </div>
            <div class="panel__text">
              <p>Date Reserve:<span>{{slotProps.data.dateReserve}}</span></p>
            </div>
            <div class="panel__text">
              <p>Date Attention:<span>{{slotProps.data.dateAttention}}</span></p>
            </div>
            <div class="panel__text">
              <p>Hour:<span>{{slotProps.data.hour}}</span></p>
            </div>
            <pv-button icon="pi pi-pencil" class="p-button-rounded p-button-secondary" @click="openDialogAndFillAppointment(slotProps.data.id)"></pv-button>
          </pv-panel>
        </div>
      </template>
    </pv-data-view>
  </div>

  <client-edit-appointment-dialog @close="closeEditDialogAppointment" :display="dialogEditAppointment" :appointments="appointmentIndividually" :closable="false"></client-edit-appointment-dialog>
  <client-new-appointment-dialog @close="closeNewDialogAppointment" :display="dialogNewAppointment" :closable="false"></client-new-appointment-dialog>
</template>

<script>
import { appointmentsServices } from "@/core/services/appointments-services.js";
import { appliancesServices } from "@/core/services/apliances-services.js";
import {getAppointmentsOfUserId} from "@/core/helpers/get-appointments-helpers.js";
import clientEditAppointmentDialog from "@/components/client/Dialogs/client-edit-appointment-dialog.vue";
import clientNewAppointmentDialog from "@/components/client/Dialogs/client-new-appointment-dialog.vue";

export default {
  components:{
    clientEditAppointmentDialog,
    clientNewAppointmentDialog
  },
  data(){
    return{
      appointmentsAndAppliances:null,
      appointmentIndividually:null,
      dialogEditAppointment:false,
      dialogNewAppointment:false,
    }
  },
  services:null,
  created() {
    this.services = new appointmentsServices()
  },
  mounted() {
  this.getInformationAppointmentsAndAppliances()
  },
  methods:{

    openEditDialog(){this.dialogEditAppointment=true},
    closeEditDialog(){this.dialogEditAppointment=false},
    openNewDialog(){this.dialogNewAppointment=true},
    closeNewDialog(){this.dialogNewAppointment=false},
    closeEditDialogAppointment(isChangeAnything){
      if(isChangeAnything)this.getInformationAppointmentsAndAppliances()
      this.closeEditDialog()
    },
    closeNewDialogAppointment(isChangeAnything){
      if(isChangeAnything)this.getInformationAppointmentsAndAppliances()
      this.closeNewDialog()
    },
    async openDialogAndFillAppointment(id){
      await this.getAppointmentIndividually(id);
      this.openEditDialog()
    },
    async getAppointmentIndividually(id){
      await new appointmentsServices().getAppointmentWithId(id).then(response=>{
        this.appointmentIndividually=response.data
      })
    },
    async getInformationAppointmentsAndAppliances(){

      let appointmentsData=[]

      await this.services.getAppointmentsInformation().then(response=>{
        appointmentsData=getAppointmentsOfUserId(this.$route.params.id,response.data)
      })

      let applianceData=[]

      for(const object of appointmentsData){
        const {applianceModelId}=object
        await new appliancesServices().getApplianceWithId(applianceModelId).then(response=>{
          applianceData.push(response.data)
        })
      }
      let newObjects=[]

      for(let i=0;i<appointmentsData.length;i++){
        const {id,dateReserve,dateAttention,hour}=appointmentsData[i]
        const {name,model,urlImage}=applianceData[i]
        const object={id,name,model,urlImage,dateReserve,dateAttention,hour}
        newObjects.push(object)
      }
      this.appointmentsAndAppliances=newObjects
    }

  }

}
</script>

<style scoped>

.content{
  margin: auto 0;
  height: 95vh;
}
.title{
  text-align: center;
  padding: 2rem;
}
.contain-panel{
  width:100%;
  padding: 1rem;
  background-image: url("@/assets/img/backgrounds/appliance_pattern.jpg");
  background-size: cover;
}
.panel{
  text-align: center;
  width:100%;
  height: 100%;
}
.panel__image{
  width:80px;
  height: 80px;
  vertical-align: middle;
}
.panel__text{
  color: rgb(55, 55, 65);
  font-weight: bold;
  padding: 0.2rem;
}
.panel__text span{
  font-weight: normal;
}
</style>