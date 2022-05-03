const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
	transpileDependencies: true,
  	// lintOnSave:false, //关闭语法检查
	configureWebpack: {
		plugins: [
			AutoImport({
			  resolvers: [ElementPlusResolver()],
			}),
			Components({
			  resolvers: [ElementPlusResolver()],
			}),
		],
	},
	devServer: {
		proxy: {
			"/api1": {// 匹配所有以 '/api1'开头的请求路径
				// target: 'http://192.168.31.129:8000',// 代理目标的基础路径
				target: 'http://175.178.131.162:38080',// 代理目标的基础路径
				changeOrigin: true, // 用于控制请求头中的host值
				pathRewrite: {'^/api1': ''} // 去掉前缀/api1
			},
			'/api2': {// 匹配所有以 '/api2'开头的请求路径
				target: 'http://localhost:5001',// 代理目标的基础路径
				changeOrigin: true,
				pathRewrite: {'^/api2': ''} // 去掉前缀/api2
			}
		}
	}	
}