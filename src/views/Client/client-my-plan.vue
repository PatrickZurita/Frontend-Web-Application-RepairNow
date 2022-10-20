<template>

  <div class="content">
    <h1>{{$t("More advantages with a better plan")}}</h1>

    <div class="cards-content">

      <pv-card class="card">
        <template #header>
          <h1>{{$t("Monthly")}}</h1>
        </template>
        <template #title>
          <img class="card-logo" src="@/assets/img/user-section-images/plan_basic.png" alt="logo_appliance_basic_plan">
          <h2>{{$t("GREAT CLIENT")}}</h2>
        </template>
        <template #content>
          <p>{{$t("This plan it's only for 1 month")}}</p>
        </template>

        <template #footer>
          <div v-if="this.typeOfPlan==='monthly'">
            <p class="selected-plan">{{$t("Plan Selected")}}</p>
          </div>
          <div v-else>
            <pv-button @click="changePlan('monthly')">{{$t("CHOOSE PLAN")}}</pv-button>
          </div>
        </template>


      </pv-card>


      <pv-card class="card">
        <template #header>
          <h1>{{$t("Quarterly")}}</h1>
        </template>
        <template #title>
          <img class="card-logo" src="@/assets/img/user-section-images/plan_premium.png" alt="logo_appliance_quarterly_plan">
          <h2>{{$t("MEGA CLIENT (3 Months)")}}</h2>
        </template>
        <template #content>
          <p>{{$t("This plan it's only for 3 month")}}</p>
        </template>

        <template #footer>
          <div v-if="this.typeOfPlan==='quarterly'">
            <p class="selected-plan">{{$t("Plan Selected")}}</p>
          </div>
          <div v-else>
            <pv-button @click="changePlan('quarterly')">{{$t("CHOOSE PLAN")}}</pv-button>
          </div>
        </template>

      </pv-card>


      <pv-card class="card">
        <template #header>
          <h1>{{$t("Yearly")}}</h1>
        </template>
        <template #title>
          <img class="card-logo" src="@/assets/img/user-section-images/plan_premium.png" alt="logo_appliance_quarterly_plan">
          <h2>{{$t("MEGA CLIENT (12 Months)")}}</h2>
        </template>
        <template #content>
          <p>{{$t("This plan it's only for 1 year")}}</p>
        </template>

        <template #footer>
          <div v-if="this.typeOfPlan==='yearly'">
            <p class="selected-plan">{{$t("Plan Selected")}}</p>
          </div>
          <div v-else>
            <pv-button @click="changePlan('yearly')">{{$t("CHOOSE PLAN")}}</pv-button>
          </div>
        </template>
      </pv-card>


    </div>

    </div>

</template>

<script>
import { usersServices } from '@/core/services/user-services.js'
import {clientServices} from "@/core/services/client-api-service.js";

export default {
  data(){
    return{
      typeOfPlan:null
    }
  },
  service:null,
  created() {
    this.service=new usersServices()
  },
  mounted() {
    this.getInformationPlan()
  },
  methods:{
    getInformationPlan(){
      this.service.getUserInformationById(this.$route.params.id).then(response=>{
        const {plan}=response.data
        this.typeOfPlan=plan
      })
    },
    changePlan(plan){
      new clientServices().patchPlan(this.$route.params.id,plan)
      this.getInformationPlan()
    }
  }

}
</script>

<style scoped>

.content{
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cards-content{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.card {
  text-align: center;
  width: 50%;
  height:100%;
}

.card-logo{
  width: 50%;
}
.card h2{
  font-size: 1.5rem;
}
.selected-plan{
  font-weight: bold;
  color: #4caf50;
}

@media(min-width: 600px){
  .content{
    width: 100%;
    height: 90vh;
  }
  .cards-content{
    flex-direction: row;
  }
  .card{
    width: 30%;
    padding: 1rem;
  }
}

@media(min-width: 1350px){
  .content{
    width: 100%;
  }
  .card{
    width: 25rem;
  }
}

</style>