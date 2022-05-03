<template>
  <div class="demo-pagination-block">
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :small="small"
      background
      layout="prev, pager, next, jumper"
      :total="count"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MyPagination",
  setup() {
    let pageNo = ref(1);
    let currentPage = ref(1);
    let pageSize = ref(10);
    let small = ref(true);
    let count = ref(51);

    function handleSizeChange(val) {
      console.log(`${val} items per page`);
    }
    function handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }

    return {
      currentPage,
      pageSize,
      pageNo,
      small,
      count,

      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style>
</style>