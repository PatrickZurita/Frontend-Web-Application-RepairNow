<template>

<nav>
    <pv-toolbar class="bg-primary-reverse">
        
        <template #start>
            <h1>Repair Now</h1>
        </template>

        <template #end>
            <div class="flex flex-wrap justify-content-center gap-3">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
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