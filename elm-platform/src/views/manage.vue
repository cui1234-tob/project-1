<template>
	<div class="manage">
			<el-col :span="12">
				<el-menu
						:default-active="this.$router.path"
						router
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						text-color="#bfcbd9"
						active-text-color="#20a0ff"
				>
					<el-menu-item :index="name">
						<i class="el-icon-setting"></i>
						<span>首页</span>
					</el-menu-item>
					<el-submenu v-for="(item,index) in navlist" :key="index" :index="String(index)">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.title}}</span>
						</template>
						<el-menu-item v-for="(val,ind) in item.children" :key="ind" :index="val.name" @click="crumbClick(item.title,val.nauitem)">{{val.nauitem}}</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
		<div class="manage-one">
			<crumbs :cruname="cruname"></crumbs>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "manage",
		data(){
			return{
				navlist:[
					{
						title:"数据管理",
						children:[
							{name:"/manage/userList",nauitem:"用户列表"},
							{name:"/manage/shopList",nauitem:"商家列表"},
							{name:"/manage/foodList",nauitem:"食品列表"},
							{name:"/manage/orderList",nauitem:"订单列表"},
							{name:"/manage/adminList",nauitem:"管理员列表"},
						]
					},
					{
						title:"添加数据",
						children:[
							{name:"/manage/addShop",nauitem:"添加商铺"},
							{name:"/manage/addGoods",nauitem:"添加商品"},
						]
					},
					{
						title:"图标",
						children:[
							{name:"/manage/visitor",nauitem:"用户分布"},
						]
					},
					{
						title:"编辑",
						children:[
							{name:"/manage/vueEdit",nauitem:"文本编辑"},
						]
					},
					{
						title:"设置",
						children:[
							{name:"/manage/adminSet",nauitem:"管理员设置"},
						]
					},
					{
						title:"说明",
						children:[
							{name:"/manage/explain",nauitem:"说明"},
						]
					},
				],
				name:"/manage/mangge",
				cruname:[]
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			crumbClick(name,usename){
				let obj = {name:name,usename:usename}
				this.cruname=obj;
			}
		},
		components:{
			crumbs:()=>import("../components/crumbs.vue")
		},
	}
</script>

<style scoped lang="scss">
	.manage{
		width: 100%;
		height: 100%;
		display: flex;
		.el-col-12 {
			width: 15%;
			height: 100%;
			background: rgb(50, 64, 87);
			.el-menu{
				background: rgb(50, 64, 87);
				.el-submenu{
					.el-menu-item{
						background: #1f2d3d;
					}
				}
			}
		}
		.manage-one{
			width: 85%;
		}
	}



</style>
