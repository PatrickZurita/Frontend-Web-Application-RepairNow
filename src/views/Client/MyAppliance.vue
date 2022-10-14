<template>
    <div class="content flex flex-column align-items-center">
        <section class="title">
            <h1 class="title__text">My Appliances</h1>
        </section>

        <section class="add mb-4">
            <pv-button class="pi pi-plus">Add Appliance</pv-button>
        </section>


        <pv-data-view :value="appliances" layout="grid" :paginator="true" :rows="8">
            <template #grid="slotProps">
            	<div class="contain-panel col-12 md:col-3">
            		<pv-panel class="panel" :header="slotProps.data.name">

                        <img class="panel__image" :src="slotProps.data.urlImage" :alt="slotProps.data.brand+slotProps.data.name"/>
                        <div class="panel__text">{{slotProps.data.brand}} - {{slotProps.data.year}}</div>
            			<pv-button class="panel__button" icon="pi pi-eye" @click="redirectToUrlAppliance(slotProps.data.id)"></pv-button>
                        
            		</pv-panel>
            	</div>
            </template>
        </pv-data-view>

    </div>
</template>


<script>
import {appliancesServices} from '@/services/apliances-services.js'
export default {
    data(){
        return{
            appliances:null
        }
    },
    services:null,
    created() {
        this.services=new appliancesServices()
    },
    mounted(){
        this.services.getAppliancesInformation().then(response=>{
            this.appliances=response.data
        })
    },
    methods:{
        redirectToUrlAppliance(id){
            this.$router.push('/myappliance/'+id)
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
    padding: 1rem;
    background-image: url("@/assets/img/backgrounds/appliance_pattern.jpg");
    background-size: cover;
}
.panel{
    text-align: center;
    height: 100%;
}
.panel__image{
    width: 120px;
    height: 120px;
    vertical-align: middle;
}
.panel__text{
    color: rgb(55, 55, 65);
    font-weight: bold;
    padding: 1rem;
}
@media(min-width:768px){

}

</style>