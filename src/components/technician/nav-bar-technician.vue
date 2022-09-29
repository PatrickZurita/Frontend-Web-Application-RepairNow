<template>

    <pv-toolbar>
        <template #start>
            <h1>REPAIR NOW</h1>
        </template>
        <template #end>
             <div class="flex flex-row flex-wrap">

                <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                    <pv-button label="Primary" class="p-button-outlined" @click="redirectHome">Profile</pv-button>
                </div>

                <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                    <pv-button label="Primary" class="p-button-outlined" @click="redirectSignUp">Route</pv-button>
                </div>
                <div class="flex align-items-center justify-content-center w-10rem h-4rem border-round m-1">
                    <pv-button label="Primary" class="p-button-outlined" @click="redirectLogIn">Reports</pv-button>
                </div>
            </div>
            
        </template>
    </pv-toolbar>
    
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
        },
        redirectHome(){
            this.$router.push("/")
        }
    },
}
</script>

<style>

</style>