<template>

    <div class="edit-profile">
        <router-link to="/Profile"> BACK</router-link>
        <form class="form1">
          <div class="field grid">
            <i class="pi pi-envelope " style="font-size: 2rem"></i>
            <div class="9"> <pv-input-text placeholder="Email" id="email" class="w-full" v-model="email" ></pv-input-text></div>
          </div>

          <div class="field grid">
            <i class="pi pi-user " style="font-size: 2rem"></i>
            <div class="9">
              <pv-input-text placeholder="Name" id="name" v-model="name"/>
              <pv-input-text placeholder="LastName" id="lastname " v-model="lastName"></pv-input-text>
            </div>
          </div>

          <div class="field grid">
              <i class="pi pi-map-marker" style="font-size: 2rem"></i>
              <div class="9"> <pv-input-text placeholder="Address" id="address" class="w-full" v-model="address"></pv-input-text></div>
          </div>

          <div class="field grid">
            <i class="pi pi-phone" style="font-size: 2rem"></i>
            <div class="9"> <pv-input-mask id="telephone" placeholder="Telephone number" v-model="value1" mask="999999999" ></pv-input-mask></div>
          </div>

          <div class="field grid">
            <i class="pi pi-lock " style="font-size: 2rem"></i>
            <div class="9"> <pv-password placeholder="Password" id="password" v-model="password" :feedback="false" ></pv-password></div>
          </div>

          <div class="field grid">
            <i class="pi pi-lock" style="font-size: 2rem"></i>
            <div class="9"> <pv-password placeholder="Repeat password" id="rpassword" v-model="rpassword" :feedback="false"></pv-password></div>
          </div>
        </form>

    </div>

</template>

<script>
export default {
  email:"",
  name:"",
  lastName:"",
  address:"",
  password:"",
  rpassword:""
}
</script>

<style scoped>
.form1{
  position: center;
}
</style>