<template>

    <h1>hola</h1>
    <!-- 
    <pv-card style="width: 25em">
                <template #header>
                    <img :src="url" style="height: 15rem" />
                </template>
                <template #title>
                    {{name}}
                </template>
                <template #subtitle>
                    {{description}}
                </template>
                <template #content>
                   {{model}}
                </template>
                <template #footer>
                </template>
    </pv-card> -->
  
</template>

<script>
import {appliancesServices} from '@/services/apliances-services.js'

export default {

    data(){
        return{
            id:null,
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
        const {id}=this.$route.params
        this.id=id

        new appliancesServices().getApplianceWithId(id).then(response=>{
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
    }

}
</script>

<style>

</style>