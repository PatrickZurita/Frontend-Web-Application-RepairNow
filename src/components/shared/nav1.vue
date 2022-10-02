<template>

    <pv-TabMenu class="topnav" :model="items" />
    <!-- <button @click="$emit('change')">Cambia!</button> -->
    
</template>

<script>
export default {
    emits: ['change'],
    data() {
        return {
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'Reggister', icon: 'pi pi-fw pi-calendar', to: '/register'},
                {label: 'Loggin', icon: 'pi pi-fw pi-pencil',to: '/login'},
            ]
        }
    }
}
</script>

<style>

    .topnav {
        background-color: #333;
        overflow: hidden;
        align-content: right;
        align-items: right;
      }
      
      .topnav a {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
     
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      .topnav a.active {
        background-color: #04AA6D;
        color: white;
      }

      .topnav .icon {
        display: none;
      }

</style>