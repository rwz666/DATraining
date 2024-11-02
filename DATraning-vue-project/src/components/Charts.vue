<template>
  <div class="charts">
    <ul class="flex-list">
      <li ref="chart1" class="chart-item">Item 1</li>
      <li ref="chart2" class="chart-item">Item 2</li>
      <li ref="chart3" class="chart-item">Item 3</li>
      <li ref="chart4" class="chart-item">Item 4</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { drawColumnChart, drawLineChart, drawPieChart } from '../common/common';
import { getDfExperAve, getDfCityAve, getDfCityExperAve } from '@/api/index';
import { useStore } from 'vuex';
const store = useStore();

const chart1 = ref<HTMLLIElement | null>(null);
const chart2 = ref<HTMLLIElement | null>(null);
const chart3 = ref<HTMLLIElement | null>(null);
const chart4 = ref<HTMLLIElement | null>(null);


// let data1 = ref([
//   [23068.905, 7934.052632],
//   [10249.903226, 24839.214286, 26416.583333]
// ]); // 存放Y数据
let xData1 = ref([
  ['0-2', '0'],
  ['郑州', '北京', '上海']
]); // 存放X轴数据

let data1 = ref({
  '0-2': 23068.905,
  '0': 7934.052632
})

let data2 = ref({
  '郑州': 10249.903226,
  '北京': 24839.214286,
  '上海': 26416.583333
})

//第三个图标的数据

let data3 = ref([
  {
    name: '0-2',
    data: [120, 132, 101]
  },
  {
    name: '3-5',
    data: [220, 182, 191]
  },
  {
    name: '6-9',
    data: [150, 232, 201]
  }
])
//第三个图表的x轴数据
let xAxisData3 = ref(null)

let data4 = ref({
  '郑州': 31,
  '北京': 28,
  '上海': 18
})




let sharedName = null
async function getData() {
  //标题中的数据（大数据）
  sharedName = store.getters.getSharedName
  // // 获取数据

  //1.
  //xxx行业不同工作经验平均薪资
  let response = await getDfExperAve(sharedName); // 调用 API
  let res = await response.json(); // 解析 JSON 数据
  if (res.code == 0) {
    data1.value = res.data
  }

  //2.
  //xxx行业不同城市平均薪资
  response = await getDfCityAve(sharedName); // 调用 API
  res = await response.json(); // 解析 JSON 数据
  if (res.code == 0) {
    data2.value = res.data
  }

  //3.
  //xxx行业不同城市不同工作经验平均薪资
  response = await getDfCityExperAve(sharedName); // 调用 API
  res = await response.json(); // 解析 JSON 数据
  if (res.code == 0) {
    data3.value = res.data
    xAxisData3.value = res.data.xAxisData
  }

  //不同城市xxx行业公司数量
  response = await getDfCityExperAve(sharedName); // 调用 API
  res = await response.json(); // 解析 JSON 数据
  if (res.code == 0) {
    data4.value = res.data
  }
}


onMounted(() => {
  getData();
  if (chart1.value) {
    drawColumnChart(chart1.value, {
      title: sharedName + '行业不同工作经验平均薪资',
      data: Object.values(data1.value),
      xAxisData: Object.keys(data1.value),
    });
  }

  if (chart2.value) {
    drawColumnChart(chart2.value, {
      title: sharedName + '行业不同城市平均薪资',
      data: Object.values(data2.value),
      xAxisData: Object.keys(data2.value),
    });
  }

  if (chart3.value) {
    drawLineChart(chart3.value, {
      title: sharedName + '行业不同城市不同工作经验平均薪资',
      series: data3.value,
      xAxisData: xAxisData3
    });
  }

  if (chart4.value) {
    drawPieChart(chart4.value, {
      title: '不同城市' + sharedName + '行业公司数量',
      subtext: '示例数据', // 可以添加副标题
      data: Object.entries(data4.value).map(([name, value]) => ({
        name: name,
        value: value
      }))
    });
  }

});


</script>

<style lang="scss" scoped>
.charts {
  height: 100%;
  width: 100%;
  // background-color: pink;
}

.flex-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.flex-list li {
  margin: auto;
  position: relative;
  min-width: 34%;
  display: flex;
  justify-content: space-between;

  // height: 300px;
  /* 设置高度，以便显示图表 */
  box-sizing: border-box;
  padding: 10px;
}

.chart-item {
  /* 可选：增加样式，使图表更美观 */
}
</style>
