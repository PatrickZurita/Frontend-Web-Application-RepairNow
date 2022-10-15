<template>

  <div class="content">

    <pv-button class="button-back" @click="goBack">GO BACK</pv-button>

    <div class="card">

      <pv-card class="card-container">
        <template #header>
          <div class="card-container__header">
            <h1>{{nameOfAppliance}}</h1>
          </div>

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
        })
    },
  computed:{
    nameOfAppliance(){
      return this.name+"-"+this.brand
    }
  },
  methods:{
    goBack(){
      this.$emit('returnBack')
    }
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
  gap: 2rem;
}
.information-appliance-header{
  font-weight: bold;
}
.card-container__header{
  display:flex;
  padding: 2rem;
  justify-content: center;
}
.button-back{
  margin-bottom: 2rem;
  width: 30%;
  display:flex;
  justify-content: center;
}
.card-appliance{
  flex-direction: column;
  gap: 1rem;
}
.card-appliance__image img{
  width: 100%;
  height:100%;
}
.card-appliance__text{
  width:100%;
}
@media(min-width: 360px){
  .card-appliance{
    display: flex;
    flex-direction:row;
    gap: 1rem;
  }
  .button-back{
    width: 40%;
  }
}

@media(min-width: 700px){
.card-container{
  width: 40em;
}
  .button-back{
    width: 8%;
  }
}

</style>