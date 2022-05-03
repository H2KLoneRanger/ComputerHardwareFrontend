<template>
  <div>
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >Check all</el-checkbox
    >
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
      v-for="attribute in attributes"
      :key="attribute"
      :label="attribute"
    >
      <el-checkbox v-for="city in cities" :key="city" :label="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { ref,reactive } from "vue";

export default {
  name: "HardwareFilter",

  setup() {
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    const checkedCities = ref(["Shanghai", "Beijing"]);
    const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
    const attributes = ["推荐品牌：", "价格区间：", "CPU系列:"];

    let part = reactive({
      name: ["CPU","主板","","","","","",],
    });

    function handleCheckAllChange(val) {
      checkedCities.value = val ? cities : [];
      isIndeterminate.value = false;
    }
    function handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
    }
    return {
      checkAll,
      isIndeterminate,
      checkedCities,
      cities,
      attributes,
      part,
      handleCheckAllChange,
      handleCheckedCitiesChange,
    };
  },
};
</script>

<style>
</style>