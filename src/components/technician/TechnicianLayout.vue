<template>
  <div class="main">
    <NavBar />
    <router-view></router-view>
  </div>

  
</template>

<script>
import NavBar from '@/components/technician/nav-bar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>