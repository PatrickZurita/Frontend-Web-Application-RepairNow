<template>

    <div class="nav-bar">
        <NavegationBar /> 
        <router-view></router-view>
    </div>

</template>

<script>

import {defineAsyncComponent} from 'vue'

export default {
    components:{
        NavegationBar: defineAsyncComponent(()=>import(/*webpackChunkName:"NavegationBar"*/'./nav-bar.vue'))
    },
    methods: {
         
    },

}

</script>

<style>

</style>