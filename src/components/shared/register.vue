<template>

<div class="login">

    <h1>Choose Your Rol</h1>

    <div class="Two">

        <div class="cards">

            <pv-card>
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

            <pv-card>
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

</style>