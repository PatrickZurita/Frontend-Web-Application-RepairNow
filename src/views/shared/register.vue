<template>
<body>

    <div class="container flex flex-column justify-content-center align-items-center m-auto w-10">

        <div class="principal-container flex flex-column justify-content-center align-items-center m-auto w-full ">

            <h1 class="mb-5">You are...</h1>

            <div class="cards-container flex justify-content-center align-items-center gap-4 text-center">

                <pv-card class="card w-full">
                    <template #header>
                        <img class="w-full" src="@/assets/img/client_watching.webp"/>
                    </template>
                    <template #title>
                        Client
                    </template>
                    <template #content>
                        <p>Busca a nuestros técnicos calificados que solucionen tus problemas</p>
                    </template>
                    <template #footer>
                        <pv-button class="button-register" label="Register" @click="redirectRegisterClient"></pv-button>
                    </template>
                </pv-card>

                <pv-card class="card w-full">
                    <template #header>
                        <img class="w-full" src="@/assets/img/technician_reapairing.jpg"/>
                    </template>
                    <template #title>
                        Technician
                    </template>
                    <template #content>
                        <p>Soluciona problemas y encuentra nuevos clientes</p>
                    </template>
                    <template #footer>
                        <pv-button class="button-register" label="Register" @click="redirectRegisterTechnician"></pv-button>
                    </template>
                </pv-card>

            </div>

    </div>

    </div>

</body>

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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background:#F0F2F5;
    display: flex;
    min-height: 100vh;
}

.cards-container{
    flex-direction: column;
}

.button-register{
    padding: 1rem 4rem;
}

.button-register{transition: all 0.5s;cursor: pointer;}
.button-register{cursor: pointer;transition: 0.5s;}
.button-register:after {content: '✓';position: absolute;opacity: 0;  top: 14px;right: -40px;transition: 0.5s;}
.button-register:hover{padding-right: 50px;padding-left:30px;}
.button-register:hover:after {opacity: 1;right: 25px;}

@media(min-width: 768px){
    .cards-container{
        flex-direction: row;
    }
}

</style>