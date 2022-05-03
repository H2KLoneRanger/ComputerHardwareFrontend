// 该文件专门用于创建整个应用的路由器

//引入VueRouter
import { createRouter, createWebHashHistory } from 'vue-router'


//引入组件
import LoginRegister from '../pages/LoginRegister'
import DIY from '../pages/DIY'


const routes = [
	{
		name: 'login',
		path: '/login',
		component: LoginRegister,
	},
	{
		name: 'diy',
		path: '/diy',
		component: DIY,
	},
]

//创建并暴露一个路由器
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
console.log(router)
export default router