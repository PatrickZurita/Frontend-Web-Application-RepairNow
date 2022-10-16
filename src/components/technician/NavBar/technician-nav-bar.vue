<template>
	<div>
		<pv-menu-bar :model="items">
			<template #start>
				<img alt="logo Repair Now" src="@/assets/img/text-logos/logo_repair.png" height="20" class="mr-2">
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
                label:'Profile',
                icon:'pi pi-fw pi-user',
                to:{name:'technician-profile'}
              },
              {
					      label:'Routes',
					      icon:'pi pi-home',
                to: {name:'myroutes'}
              },
              {
					      label:'Reports',
                icon:'pi pi-book',
                to: {name:'myreports'}
              },
              {
                label:'LogOut',
                icon:'pi pi-sign-out',
                to: '/'
              }
            ]
        }
    }
}

</script>

<style>

</style>