<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <PartList />
      </el-header>
      <el-main>
        <el-row :gutter="30">
          <el-col :span="12">
            <Computer />
          </el-col>

          <el-col :span="12">
			<HardwareFilter />
            <HardwareList />
			<Pagination />
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script>
import PartList from "../components/PartList";
import HardwareList from "../components/HardwareList";
import Computer from "@/components/Computer";
import HardwareFilter from "../components/HardwareFilter"
import Pagination from "../components/Pagination"

export default {
  components: {
    PartList,
    HardwareList,
    Computer,
	HardwareFilter,
	Pagination,
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
