<template>
  <div class="main">
    <NavBar />
    <router-view></router-view>
  </div>

  
</template>

<script>
import NavBar from '@/components/client/nav-bar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>