// module.exports = {
// 	baseUrl : "./",//配置打包时的相对路径
// 	//host: 'localhost',
// 	//host: "0.0.0.0",
// 	port:8080,//端口号
// 	// https:false, // https:{type:Boolean}
// 	// https:true, // https:{type:Boolean}
// 	//open: true, //配置自动启动浏览器 https://xxx.xxx.x.xx:8080/rest/xxx
// 	hotOnly:true,//热更新
// 	// proxy:"http://localhost:8080" //配置跨域处理。只有一个代理
// 	disableHostCheck:true,//有时我们需要进行配置反向代理，一定加上disableHostCheck
// 		proxy: {
// 		//配置自动启动浏览器
// 			'/api': {//代理api
// 				target: "http://touch.piao.qunar.com/touch",//服务器api地址
// 				changeOrigin: true,//是否跨域
// 				// ws: true, // websocket支持
// 				secure:false,
// 				pathRewrite: {//重写路径
// 					"^/api": ''//理解成用‘/api’代替targer里面的地址，后面组件中我们掉/api
// 				}
// 			}
// 		}
// }

module.exports = {
	baseUrl : "./",//配置打包时的相对路径
	devServer: {
		port: "8080",//代理端口
		open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
		proxy: {
			'/api': {//代理apic
				target: "http://touch.piao.qunar.com/touch",//服务器api地址
				changeOrigin: true,//是否跨域
				ws: true, // proxy websockets
				pathRewrite: {//重写路径
					"^/api": ''
				}
			}
		}
	}
}
