<template>

<nav>
    <pv-toolbar class="bg-primary">
        
        <template #start>   
            <h1>Repair Now</h1>
        </template>

        <template #end>
            <div class="flex flex-wrap justify-content-center gap-3">
                <router-link to="/">Home</router-link>
                <router-link to="/MyAppliance">My Appliances</router-link>
                <router-link to="/MyPlan">My Plan</router-link>
                <router-link to="/Notifications">Notifications</router-link>
                <router-link to="/Profile">Profile</router-link>
            </div>
        </template>

    </pv-toolbar>

</nav>

<router-view></router-view>
  
</template>

<script>
export default {

}
</script>

<style scoped>

</style>