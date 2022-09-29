<template>

    <div class="home">

        <pv-toolbar>
            <template #start>
                <h1>REPAIR NOW</h1>
            </template>

            <template #end>

                 <div class="flex flex-row flex-wrap">
                    <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                        <pv-button label="Primary" class="p-button-outlined" @click="redirectSignUp">SIGN UP NOW</pv-button>
                    </div>

                    <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                        <pv-button label="Primary" class="p-button-outlined" @click="redirectLogIn">LOG IN</pv-button>
                    </div>

                </div>
                

            </template>

        </pv-toolbar>

        <div class="page">

            <div class="flex flex-column">
                <div class="flex align-items-center justify-content-center border-round m-2">
                    <h1>Los mejores técnicos están aquí</h1>
                </div>
                <div class="flex align-items-center justify-content-center border-round m-2">
                    <img src="https://www.aunmasbarato.com/blog/wp-content/uploads/2019/06/horno-cocina-gama-blanca-1024x683.jpg">
                </div>
            </div>
            
            
        </div>
        
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        redirectSignUp(){
            this.$router.push("/register")
        },
        redirectLogIn(){
            this.$router.push("/login")
        }
    },
}
</script>

<style scoped>

</style>