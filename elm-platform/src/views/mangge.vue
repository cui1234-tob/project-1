<template>
	<div class="mangge">
		<manggeHeader></manggeHeader>
		<manggeContent></manggeContent>
	</div>
</template>

<script>
	export default {
		name: "mangge",
		data(){
			return{
			}
		},
		components:{
			manggeHeader:()=>import("../components/mangge/mangge-header.vue"),
			manggeContent:()=>import("../components/mangge/mangge-content.vue"),
		}
	}
</script>

<style scoped>

</style>
