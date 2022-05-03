<template>
  <h3>硬件列表</h3>
  <ul v-if="cpuList.value && cpuList.value.results != {}">
    <li v-for="(cpu, index) in cpuList.value.results" :key="index">
      {{ cpu.name }}
    </li>
  </ul>
	
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  name: "HardwareList",
  components: {},

  setup() {
    let cpuList = reactive({
      // id: 1,
      // name: "酷睿 i7-12700",
      // price: null,
      // manufacturer: "Intel",
      // series: null,
      // code_name: "Alder Lake(第12代)",
      // total_cores: null,
      // total_threads: null,
      // sockets_supported: "LGA 1700",
      // use_conditions: null,
      // architecture: null,
      // process_technology: "10,Intel 7nm",
      // base_frequency: "2.1-4.9GHz",
      // max_turbo_frequency: null,
      // cache: "25M",
      // compatible_mainboard: "Z690,H670,B660,H610",
      // launch_date: "2021-01-04",
      // is_64bit: null,
      // processor_graphics: "Intel UHD Graphics 770",
      // memory_channels: null,
      // memory_types: "DDR5 4800MHz,DDR4 3200MHz",
      // TDP: null,
    });
		async function getCPUList() {
        axios.get("api1/cpus/").then(
          (response) => {
            console.log("请求成功了", response.data);
            cpuList.value = response.data;
            console.log("cpuList", cpuList, cpuList.value.results);
            console.log("count", response.data.count);
          },
          (error) => {
            console.log("请求失败了", error.message);
          }
        );
      }

     onMounted(async() => {
      console.log("---onMounted---");
      
      await getCPUList();
    });

    return {
      cpuList,
    };
  },
};
</script>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

/* pagination */
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>