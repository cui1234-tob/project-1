<template>
	<div class="crumbs">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/manage/mangge' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item,index) in cruname" :key="index">
				{{item}}
			</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown>
            <span class="el-dropdown-link">
                <img :src="url_img" alt="">
            </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>首页</el-dropdown-item>
					<el-dropdown-item @click.native="delligin" split-button type="primary">退出</el-dropdown-item>
				</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		name: "crumbs",
		data(){
			return{
				url_img:''
			}
		},
		props:["cruname"],
		watch:{
		},
		watch:{
			'$route'(newVal,oldVal){
				if (newVal.path==='/manage/mangge'){
					this.cruname=null
				}
			}
		},
		methods:{
			axioskua(){
				this.$http.get("/api/list.json?cityName=北京&region=北京&isForeign=false&page=1&pageSize=10&keyword=").then(res=>{
				})
			},
			//点击退出登陆回到登陆页删除本地数据
			delligin(){
				localStorage.removeItem("login");
				this.$message({
					type:'success',
					message:'退出成功'
				})
				this.$router.push("/");
			}
		},
		mounted() {
			this.axioskua();
			//获取登陆携带的头像
			if (localStorage.getItem("login")) {
				let arr = JSON.parse(localStorage.getItem('login'));
				arr.map(item=>{
					this.url_img=item.img_url;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.crumbs{
	background-color: #eff2f7;
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.el-breadcrumb{
		padding-left: 20px;
	}
	.el-dropdown{
		.el-dropdown-link{
			img{
				width: 36px;
				height: 36px;
				border-radius: 50%;
				margin-right: 37px;
			}
		}
		.el-dropdown-menu{
		}
	}
}
</style>
