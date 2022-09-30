<template>

<div class="login">

    <h1>Choose Your Rol</h1>

    <div class="Two">

        <div class="cards">
            <div class="column">
                <pv-card class="card">
                    <template #title>
                        Client!
                    </template>
                    <template #content>
                        You are a client
                    </template>
                    <template #footer>
                        <img src="@/assets/img/user.png" width="100">
                        <pv-button label="Register" @click="redirectRegisterClient"></pv-button>
                    </template>
                </pv-card>
            </div>

            <div class="column">
            <pv-card class="card">
                <template #title>
                   Technician!
                </template>
                <template #content>
                    You are a Technician
                </template>
                <template #footer>
                    <img src="@/assets/img/technician.png" width="100">
                    <pv-button label="Register" @click="redirectRegisterTechnician"></pv-button>
                </template>
            </pv-card>
            </div>



        </div>



    </div>

</div>

</template>

<script>

export default {

    data(){
        return{
        }
    },
    methods: {
        redirectRegisterClient(){
            this.$router.push("/registerClient")
        },
        redirectRegisterTechnician(){
            this.$router.push("/registerTechnician")
        },
    }

}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.cards {margin: 0 -5px;}

.cards::after{
    content: "";
    display: table;
    clear: both;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;

  }
  .column {
    float: left;
    width: 25%;
    padding: 0 10px;
  }
</style>