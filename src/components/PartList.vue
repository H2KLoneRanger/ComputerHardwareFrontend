<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">CPU</el-menu-item>
    <el-menu-item index="2">主板</el-menu-item>
    <el-menu-item index="3">显卡</el-menu-item>
    <el-menu-item index="4">内存</el-menu-item>
    <el-menu-item index="5">固态硬盘</el-menu-item>
    <el-menu-item index="6">硬盘</el-menu-item>
    <el-menu-item index="7">电源</el-menu-item>
    <el-menu-item index="8">机箱</el-menu-item>
  </el-menu>
</template>

<script>
import { ElMenu } from "element-plus";
import { ref } from "vue";

export default {
  name: "PartList",
  components: { ElMenu },
  setup() {
    let activeIndex = ref("2");
    function handleSelect() {
      console.log("select");
    }

    return {
      activeIndex,
      handleSelect,
    };
  },
};
</script>

<style>
</style>