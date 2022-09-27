<template>
  <router-link to="/Profile"> BACK</router-link>
  <form class="form1">
    <div class="field grid">
      <i class="pi pi-envelope " style="font-size: 2rem"></i>
      <div class="9"> <InputText placeholder="Email" id="email" class="w-full" /></div>
    </div>

    <div class="field grid">
      <i class="pi pi-user " style="font-size: 2rem"></i>
      <div class="9">
        <InputText placeholder="Name" id="name" />
        <InputText placeholder="LastName" id="lastname"/>
      </div>
    </div>

    <div class="field grid">
        <i class="pi pi-map-marker" style="font-size: 2rem"></i>
        <div class="9"> <InputText placeholder="Address" id="address" class="w-full" /></div>
    </div>

    <div class="field grid">
      <i class="pi pi-phone" style="font-size: 2rem"></i>
      <div class="9"> <InputMask id="telephone" placeholder="Telephone number" v-model="value1" mask="999999999" /></div>
    </div>

    <div class="field grid">
      <i class="pi pi-lock " style="font-size: 2rem"></i>
      <div class="9"> <Password placeholder="Password" id="Password" v-model="value2" :feedback="false" /></div>
    </div>

    <div class="field grid">
      <i class="pi pi-lock" style="font-size: 2rem"></i>
      <div class="9"> <Password placeholder="Repeat password" id="rpassword" v-model="value3" :feedback="false" /></div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Edit-profile",
  value1:"",
  value2:"",
  value3:""
}
</script>

<style scoped>
.form1{
  position: center;
}
</style>