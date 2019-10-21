<template>
	<div class="userList">
		用户列表
	</div>
</template>

<script>
	import {getuserList} from "../api/getData";
	export default {
		name: "userList",
		methods:{
			async elmget(){
				const res = await getuserList();
				console.log(res);
			}
		},
		mounted() {
			this.elmget();
		}
	}
</script>

<style scoped>

</style>
