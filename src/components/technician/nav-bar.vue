<template>
	<div>
		<pv-menu-bar :model="items">
			<template #start>
				<img alt="logo" src="@/assets/img/text-logos/logo_repair.png" height="20" class="mr-2">
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
					label:'Schedules',
					icon:'pi pi-home',
                    to: {name:'schedule'}
                },
                {
					label:'Reports',
					icon:'pi pi-book',
                    to: {name:'myreports'}
                },
                {
					label:'Notifications',
					icon:'pi pi-envelope',
                    to: {name:'technician-notifications'}
                },
                {
					label:'Profile',
					icon:'pi pi-fw pi-user',
                    to:{name:'technician-profile'}
                }
            ]
        }
    }
}

</script>

<style>

</style>