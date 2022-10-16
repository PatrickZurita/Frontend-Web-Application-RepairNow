<template>

  <div class="content">

    <h1 class="title">Routes</h1>
    <img class="image" src="@/assets/img/technician-section-images/route-logo.png" alt="route image reference">

    <div class="contain-cards">

      <pv-card class="card" v-for="item in data" >
        <template #title>
        </template>
        <template #content>
          <p class="card-text">Address:<span class="card-span">{{item.address}}</span></p>
          <p class="card-text">Date Reserve:<span class="card-span">{{item.dateReserve}}</span></p>
          <p class="card-text">Date Attention:<span class="card-span">{{item.dateAttention}}</span></p>
          <p class="card-text">Hour:<span class="card-span">{{item.hour}}</span></p>
        </template>
      </pv-card>

    </div>

  </div>




</template>

<script>
import { appointmentsServices } from "@/core/services/appointments-services.js";
import { usersServices } from "@/core/services/user-services";

export default {
  data(){
    return{
      appointments:null,
      data:null,
    }
  },
  created() {
    this.generateData()

  },
  mounted() {

  },
  methods:{
    generateData(){
      new appointmentsServices().getAppointmentsInformation().then(async(response)=>{
        this.appointments=response.data
        const listOfClientId=this.getClientId()
        const listOfAddress=await this.getListOfAddress(listOfClientId)
        this.data=this.fillData(listOfAddress)
      })
    },
    getClientId(){
      let listOfClientId=[]
      for(const object of this.appointments){
        const {clientId}=object
        listOfClientId.push(clientId)
      }
      return listOfClientId.filter((item, index) => {
        return listOfClientId.indexOf(item) === index;
       })
      },
    async getListOfAddress(listOfClientId){
      const listOfAddress=[]
      for(const object of listOfClientId){
        await new usersServices().getUserInformationById(object).then(response=>{
          const {id,address}=response.data
          listOfAddress.push({id,address})
        })
      }
      return listOfAddress
    },
    fillData(listAddress){
      let data_complete=[]
      for(let i=0;i<this.appointments.length;i++){
        for(let j=0;j<listAddress.length;j++){
          if(this.appointments[i].clientId===listAddress[j].id){
            const {id,address}=listAddress[j]
            const {dateReserve,dateAttention,hour}=this.appointments[i]
            const object_final={id,address,dateReserve,dateAttention,hour}
            data_complete.push(object_final)
          }
        }
      }
      return data_complete
    }
  }
}
</script>

<style scoped>

.content{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.contain-cards{
  display: flex;
  gap: 1rem;
  flex-direction:column;
  width:90%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card{
  width:20rem;
  margin-bottom: 2em;
}
.card-text{
  font-weight: bold;
}
.card-span{
  font-weight: normal;
}
.image{
  width: 10%;
}
@media(min-width: 768px){
  .contain-cards{
    flex-direction: row;
  }
}

</style>