<template>
	<div class="adminSet">
		<div>
			<p>管理员信息</p>
		</div>
		<div>
			<ul>
				<li><span>姓名：</span><span></span> </li>
				<li><span>注册时间：</span><span></span></li>
				<li><span>管理员权限：</span><span></span></li>
				<li><span>管理员 ID：</span><span></span></li>
				<li>
					<span>更换头像：</span>
					<div>
						<div class="imgli">
							<img src="" alt="">
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "adminSet"
	}
</script>

<style scoped lang="scss">
.adminSet{
	>div:nth-of-type(1){
		text-align: center;
		p{
			margin-top: 20px;
			font-size: 24px;
			color: #666;
		}
	}
	>div:nth-of-type(2){
		width: 60%;
		background-color: #f9fafc;
		min-height: 400px;
		margin: 20px auto 0;
		border-radius: 10px;
		ul{
			li{
				padding: 20px;
				span:nth-of-type(1){
					color: #666;
				}
				.imgli{
					border: 1px dashed #d9d9d9;
					margin-top: 10px;
					border-radius: 6px;
					cursor: pointer;
					overflow: hidden;
					width: 120px;
					height: 120px;
					img{
						width: 120px;
						height: 120px;
						display: block;
					}
				}
			}
		}
	}
}
</style>
