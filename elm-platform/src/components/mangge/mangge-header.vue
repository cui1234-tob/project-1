<template>
	<div class="mangge-header">
		<div>
			<p>数据统计</p>
		</div>
		<div>
			<ul>
				<li>
					<p><span>当日数据:0</span></p>
					<p>新增用户<span>0</span></p>
					<p>新增订单<span>0</span></p>
					<p>新增管理员<span>0</span></p>
				</li>
				<li>
					<p><span>总数居:0</span></p>
					<p>注册用户<span>0</span></p>
					<p>订单<span>0</span></p>
					<p>管理员<span>0</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {apiCount,apiAllCount,apiAllRecord,userCount,orderCount,adminDayCount,adminList,adminCount} from "../../api/getData";
	export default {
		name: "mangge-header",
		data(){
			return{
				users:'',//新增用户
				orders:'',//新增订单
				admin:'',//新增管理员
				registered:'',//注册用户,
				indent:'',//订单
				Administrator:''//管理员
			}
		},
		methods:{
			async mangge(){
				let date = new Date();
				let month = date.getMonth() + 1;
				let strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				let currentDate = date.getFullYear()+'-'+month+'-'+strDate;

				//api请求量
				// const a = await apiCount(currentDate);
				// console.log(a)
				// this.$http.get("https://elm.cangdu.org/statis/api/" + currentDate + "/count").then(res=>{
				// 	console.log(res.data.status)
				// })

				//所有api请求量
				// const b = await apiAllCount();
				// console.log(b);

				//所有api请求信息
				// const c = await apiAllRecord();
				// console.log(c);
				// this.$http.get("https://elm.cangdu.org/statis/api/all").then(res=>{
				// 	console.log(res.data.status)
				// })

				//用户注册量
				// const d = await userCount(currentDate);
				// console.log(d);

				//某一天订单数量
				// const e = await orderCount(currentDate);
				// console.log(e.status)

				//某一天管理员注册量
				const f = await adminDayCount(currentDate);
				console.log(f);

				//管理员列表
				// const g = await adminList(currentDate);
				// console.log(g);
				// this.$http.get("https://elm.cangdu.org/statis/admin/all").then(res=>{
				// 	console.log(res)
				// })

				//管理员数量
				// const h = await adminCount();
				// console.log(h);

			},
		},
		mounted() {
			this. mangge();
		},
	}
</script>

<style scoped lang="scss">
.mangge-header{
	padding: 20px;
	margin-bottom: 40px;
	>div:nth-of-type(1){
		text-align: center;
		font-size: 30px;
		margin-bottom: 10px;
	}
	>div:nth-of-type(2){
		ul{
			li{
				display: flex;
				p{
					width: 16%;
					text-align: center;
					font-size: 14px;
					color: #666;
					border-radius: 6px;
					background: #e5e9f2;
					margin-left: 20px;
					span{
						color: #333;
						font-size: 26px;
					}
				}
			}
			li:nth-of-type(1){
				p:nth-of-type(1){
					background: #ff9800;
					margin-left: 0;
					span{
						border-radius: 6px;
						font-size: 22px;
						padding: 4px 0;
						color: #fff;
						display: inline-block;
					}
				}
			}
			li:nth-of-type(2){
				margin-top: 15px;
				p:nth-of-type(1){
					background: #20a0ff;
					margin-left: 0;
					span{
						border-radius: 6px;
						font-size: 22px;
						padding: 4px 0;
						color: #fff;
						display: inline-block;
					}
				}
			}
		}
	}
}
</style>
