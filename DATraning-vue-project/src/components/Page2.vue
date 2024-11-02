<template>
  <div class="page2">
    <div class="top">
      <ul>
        <li ref="chart1" class="chart-item">Item 1</li>
        <li ref="chart2" class="chart-item">Item 2</li>
        <li ref="chart3" class="chart-item">Item 3</li>
      </ul>
    </div>
    <div class="bottom"></div>
    <button @click="() => router.push('/page1')">跳转页面</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { drawDatasetChart, drawLineChart, drawPieChart, drawSmoothedLineChart } from '../common/common'
import { useRouter } from 'vue-router'; // 导入 useRouter
const router = useRouter(); // 获取 router 实例
const chart1 = ref<HTMLLIElement | null>(null);
const chart2 = ref<HTMLLIElement | null>(null);
const chart3 = ref<HTMLLIElement | null>(null);


//第一个图表的数据
let data1 = ref([
  {
    name: '0-2',
    data: [7000, 13200, 10001, 4300, 13002, 5000]
  },
  {
    name: '0',
    data: [8000, 6480, 15060, 6300, 9500, 7800]
  }
])
//x轴数据
let xAxisData1 = ref([
  '大数据',
  'AI工程师',
  'Java开发工程师',
  '产品经理',
  '测试工程师',
  '其他'
])

function getData() {

}


onMounted(() => {
  if (chart1.value) {
    drawSmoothedLineChart(chart1.value, {
      title: '不同岗位不同工作经验平均薪资',
      series: data1.value,
      xAxisData: xAxisData1.value
    });
  }

  if (chart2.value) {
    drawDatasetChart(chart2.value, {
      title: '不同岗位不同城市平均薪资'
    });
  }

  if (chart3.value) {
    drawDatasetChart(chart3.value, {
      title: '不同岗位针对不同学位需求数量'
    });
  }
})



</script>

<style lang="scss" scoped>
.page2 {
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.top {
  height: 40%;
  min-height: 300px;
  padding: 20px;
  // background-color: skyblue;

  ul {
    display: flex;
    justify-content: space-around;

    li {}
  }
}

.bottom {
  height: 60%;
  // background-color: pink;
}
</style>
