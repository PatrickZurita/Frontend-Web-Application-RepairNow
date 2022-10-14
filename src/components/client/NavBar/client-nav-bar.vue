<template>
	<div>
		<pv-menu-bar :model="items">
			<template #start>
				<img alt="logo repair now" src="@/assets/img/text-logos/logo_repair.png" height="20" class="mr-2">
			</template>
			<template #end>
                
			</template>
		</pv-menu-bar>
	</div>
</template>

<script>

export default {
    data() {
        return {
            items: [
                {
					label:'My Appliances',
					icon:'pi pi-home',
                    to: {name:'myappliance'}
                },
                {
					label:'My Plan',
					icon:'pi pi-book',
                    to: {name:'myplan'}
                },
                {
					label:'Notifications',
					icon:'pi pi-envelope',
                    to: {name:'client-notifications'}
                },
                {
					label:'Profile',
					icon:'pi pi-fw pi-user',
                    to: {name:'client-profile'}
                }
            ]
        }
    }
}

</script>

<style>

</style>