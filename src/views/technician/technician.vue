<template>

    <div class="main">
        <NavigationBarTechnician />
        <router-view></router-view>
    </div>

</template>

<script>

import {defineAsyncComponent} from 'vue'

export default {
  

  //TODO:Version anterior
  components:{
    // Login,
    // Dashboard
    NavigationBarTechnician: defineAsyncComponent(()=>import(/*webpackChunkName:"NavBarTechnician"*/'../technician/nav-bar-technician.vue'))
  }
}
</script>

<style>

</style>