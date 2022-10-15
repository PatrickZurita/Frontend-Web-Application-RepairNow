<template>

  <div class="content">

    <pv-button @click="goBack">GO BACK</pv-button>

    <div class="card">

      <pv-card style="width: 25em">
        <template #header>
          {{nameOfAppliance}}
        </template>

        <template #content>

          <div class="card-appliance">

            <div class="card-appliance__image">

              <img :src="this.url" :alt="this.name">
            </div>

            <div class="card-appliance__text">

              <p class="information-appliance-header">Name:</p>
              <p class="information-appliance-info"> {{this.name}}</p>
              <p class="information-appliance-header">Brand:</p>
              <p class="information-appliance-info"> {{this.brand}}</p>
              <p class="information-appliance-header">Model:</p>
              <p class="information-appliance-info"> {{this.model}}</p>
              <p class="information-appliance-header">Year:</p>
              <p class="information-appliance-info"> {{this.year}}</p>
              <p class="information-appliance-header">Description:</p>
              <p class="information-appliance-info"> {{this.description}}</p>
              <p class="information-appliance-header">Insurance Date:</p>
              <p class="information-appliance-info"> {{this.date}}</p>

            </div>


          </div>
        </template>

        <template #footer>

        </template>
      </pv-card>


    </div>

  </div>


  
</template>

<script>
import {appliancesServices} from '@/core/services/apliances-services.js'

export default {
  props:{
    id:{
      type:Number,
      required:true,
    }
  },
  data(){
        return{
            name:null,
            description:null,
            model:null,
            brand:null,
            year:null,
            url:null,
            date:null
        }
    },
    created(){
        new appliancesServices().getApplianceWithId(this.id).then(response=>{
            const {name,description,brand,model,year,urlImage,insuranceDate}=response.data
            this.name=name
            this.description=description
            this.brand=brand
            this.model=model
            this.year=year
            this.url=urlImage
            this.date=insuranceDate
            console.log(name,description,brand,model,year,urlImage,insuranceDate)
        })
    },
  computed:{
    nameOfAppliance(){
      return this.name+"-"+this.brand
    }
  },
  methods:{
    //goBack(){
    //  this.$emit('returnBack')
    //}
  }

}
</script>

<style scoped>

.content {
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.card-appliance{
  display: flex;
}
.card-appliance__image img{
  width: 100%;
  height:100%;
}
@media(min-width: 968px){

}

</style>