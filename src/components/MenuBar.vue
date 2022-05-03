<template>
	<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		background-color="#409eff"
		text-color="#fff"
		active-text-color="#f8df72"
		id="menubar"
	>
		<el-menu-item index="1">
			<router-link name="diy" to="/diy">自助装机</router-link>
			<!-- 指定组件的呈现位置 -->
		</el-menu-item>
		<el-sub-menu index="2">
		<template #title></template>
		<el-menu-item index="2-1">item one</el-menu-item>
		<el-menu-item index="2-2">item two</el-menu-item>
		<el-menu-item index="2-3">item three</el-menu-item>
		<el-sub-menu index="2-4">
			<template #title>item four</template>
			<el-menu-item index="2-4-1">item one</el-menu-item>
			<el-menu-item index="2-4-2">item two</el-menu-item>
			<el-menu-item index="2-4-3">item three</el-menu-item>
		</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="3">Info</el-menu-item>
		<el-menu-item index="4">
			<router-link name="login" to="/login">登录/注册</router-link>
		</el-menu-item>
	</el-menu>
</template>

<script>

	import { ElMenu } from 'element-plus'
	import { ref } from 'vue'

	console.log('hello')
	export default {
		name: 'MenuBar',
		components: { ElMenu },
		setup(){
			const activeIndex2 = ref('1')
			return {
				activeIndex2,
			}
		}
	}
	console.log('hello')
</script>
<style scoped>


el-menu-item {
	text-decoration: none;
}
</style>