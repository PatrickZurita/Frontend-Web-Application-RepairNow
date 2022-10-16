<template>

  <div class="content flex flex-column align-items-center">

    <section class="title">
      <h1 class="title__text">Reports Technician</h1>
      <img class="image" src="@/assets/img/technician-section-images/report-logo.png" alt="any reports image">
    </section>

    <pv-data-view :value="reports" layout="grid" :paginator="true" :rows="2">
      <template #grid="slotProps">
        <div class="contain-panel col-12 md:col-6">
          <pv-panel class="panel" header="Report Data">

            <div class="panel__text">
              Observation:<span>{{slotProps.data.observation}}</span>
            </div>
            <div class="panel__text">
              Diagnosis:<span>{{slotProps.data.diagnosis}}</span>
            </div>
            <div class="panel__text">
              Repair Description:<span>{{slotProps.data.repairDescription}}</span>
            </div>
            <div class="panel__text">
              Date:<span>{{slotProps.data.date}}</span>
            </div>

            <pv-button icon="pi pi-pencil" class="p-button-rounded p-button-secondary" @click="FillReportAndOpenDialog(slotProps.data.id)"></pv-button>

          </pv-panel>
        </div>
      </template>
    </pv-data-view>

  </div>

  <technician-edit-reports-dialog @close="closeDialogEditReport" :display="dialogEditReport" :report="report" :closable="false"></technician-edit-reports-dialog>

</template>

<script>
import { reportsServices } from '@/core/services/reports-api-service.js'
import technicianEditReportsDialog from "@/components/technician/Dialogs/technician-edit-reports-dialog.vue";

export default {

  components:{
    technicianEditReportsDialog
  },
  data(){
    return{
      reports:null,
      dialogEditReport:false,
      report:null,
    }
  },
  created() {
    this.getData()
  },
  methods:{
    openDialog(){this.dialogEditReport=true},
    closeDialog(){this.dialogEditReport=false},
    closeDialogEditReport(isChangeAnything){
      if(isChangeAnything)this.getData()
      this.closeDialog()
    },
    async FillReportAndOpenDialog(id){
      await new reportsServices().getReportWithId(id).then(response=>{
        this.report=response.data
      })
      this.openDialog()
    },
    getData(){
      new reportsServices().getReportsInformation().then(async(response)=>{
        const allReports=response.data
        const reportsOfTechnician=[]
        for(const object of allReports){
          if(object.technicianId===Number(this.$route.params.id)){
            await reportsOfTechnician.push(object)
          }
        }
        this.reports=reportsOfTechnician
      })
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
.image{
  padding:1rem;
  width:50%;
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

.panel__text{
  color: rgb(55, 55, 65);
  font-weight: bold;
  padding: 1rem;
}
.panel__text span{
  font-weight: normal;
}

</style>