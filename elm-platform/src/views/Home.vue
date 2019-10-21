<script src="../../../../pp5/项目/backstage/src/index.js"></script>
<script src="../../../../pp5/项目/backstage/src/component/login/Login.jsx"></script>
<template>
  <div class="home">
	  <div class="animated fadeInUp">
		<div class="home-top">
			<p>elm后台管理系统</p>
		</div>
	  <div class="home-content">
		  <div>
			  <el-input placeholder="用户名" v-model="username" @blur="usershow"></el-input>
			  <p v-text="user" :class="cla"></p>
			  <el-input type="password" placeholder="密码"  v-model="passwora" @blur="passshow"></el-input>
			  <p v-text="pass" :class="cla1"></p>
			  <el-button type="primary" class="submit_btn" @click="logins">登陆</el-button>
		  </div>
		  <div>
			  <p>温馨提示：</p>
			  <p>未登录过的新用户，自动注册</p>
			  <p>注册过的用户可凭账号密码登录</p>
		  </div>
	  </div>
	  </div>
  </div>
</template>

<script>
	import urlimg from "../assets/logo.png";
	import {login} from "../api/getData";
export default {
  name: "home",
	data(){
  	    return{
	        username:'',
	        passwora:'',
	        user:'',
	        pass:'',
	        cla:[],
	        cla1:[],
	        inp:'',
	        inp1:'',
	        login:[],
	        img_url:urlimg
        }
	},
	methods:{
  	    //异步操作登录按钮
		async logins(){
			//异步获取用户名和密码保存到登陆接口
			const res = await login({user_name:this.username,password:this.passwora});
			//接口status返回1是登陆成功
			if (res.status===1){
				//成功弹出登陆成功
				this.$message({
					type:'success',
					message:'登录成功'
				})
				//把接受的值变换为对象添加到数组
				let obj={user_name:this.username,password:this.passwora,img_url:this.img_url};
				this.login.push(obj);
				//把数组本地存储起来
				localStorage.setItem("login",JSON.stringify(this.login));
				//成功之后跳转
				this.$router.push("/manage");
			}else{
				//不等于1就是密码不对
				this.$message({
					type:'error',
					message:res.message
				})
			}
		},

		//用户名显示
		usershow(){
			if (this.username==''){
				this.user='请输入用户名';
				this.cla='p1 animated bounceInDown';
			}else if (this.username!=='') {
				this.user='';
				this.cla='p1';
			}
		},

		//密码显示
		passshow(){
			if (this.passwora==''){
				this.pass='请输入密码';
				this.cla1='p2 animated bounceInDown';
			}else if (this.passwora!=='') {
				this.pass='';
				this.cla1='p2';
			}
		},
	},
	//页面加载完毕看本地存储有没有对应的用户名有的话不用在登陆直接跳转首页
	beforeMount() {
		if(localStorage.getItem('login')){
			//拿到本地存储的用户名密码
			let arr = JSON.parse(localStorage.getItem('login'));
			//业务逻辑本地存储的用户名和密码有的话调用登陆接口直接登陆只要不退出直接显示首页
			arr.map(item=>{
				console.log(item);
				this.$http.post("https://elm.cangdu.org/admin/login",{
					user_name:item.user_name,
					password:item.password
				}).then(res=>{
					if (res.data.status===1){
						this.$message({
							type:'success',
							message:'检测到您之前登录过，将自动登录'
						})
						this.$router.push("/manage");
					}
				})
			})
		}
	},
};
</script>

<style lang="scss">
	.home{
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #324057;
		.home-top{
			width: 100%;
			margin-left: 630px;
			p{
				padding-top: 170px;
				font-size: 34px;
				color: #fff;
			}
		}
		.home-content{
			width: 320px;
			height: 230px;
			margin-top: 60px;
			margin-left: 585px;
			padding: 25px;
			border-radius: 5px;
			text-align: center;
			background-color: #fff;
			>div:nth-of-type(1){
				position: relative;
				.el-input__inner{
					margin-top: 20px;
				}
				.el-button--primary{
					margin-top: 20px;
					width: 100%;
					height: 100%;
				}
				.p1{
					position: absolute;
					top: 60px;
					left: 0px;
					color: #ff4949;
					font-size: 12px;
				}
				.p2{
					position: absolute;
					top: 120px;
					left: 0px;
					color: #ff4949;
					font-size: 12px;
				}
			}
			>div:nth-of-type(2){
				margin-top: 15px;
				p{
					font-size: 12px;
					color: red;
				}

			}
		}
		.el-alert--error.is-light {
			width: 350px;
			position: absolute;
			top: 50px;
			left: 38.5%;
		}
		.el-alert--success.is-light {
			width: 350px;
			position: absolute;
			top: 50px;
			left: 38.5%;
		}
	}
</style>
