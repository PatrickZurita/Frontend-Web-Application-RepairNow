<script>
import {defineAsyncComponent} from 'vue'
// import NavigationBar from './modules/shared/components/NavigationBar.vue'
// import Home from '../src/components/Home.vue'
// import Login from './components/administrator/login.vue'
// import Dashboard from './components/client/dashboard.vue'

export default {
  

  //TODO:Version anterior
  components:{
    // Login,
    // Dashboard
    NavigationBar: defineAsyncComponent(()=>import(/*webpackChunkName:"NavBar"*/'./components/administrator/nav-bar.vue'))
  }
}

</script>

<template>

  <div class="main">
    <NavigationBar />
    <router-view></router-view>
  </div>



</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
