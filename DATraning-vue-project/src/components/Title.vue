<template>
  <div class="header">
    <div class="h2">大数据行业平均薪资：<span>{{ avg_salary }}</span></div>
    <h1>大数据就业分析</h1>
    <div class="time">{{ currentTime }}</div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getAvgSalary } from '@/api/index';

const currentTime = ref('');

function updateTime() {
  const now = new Date();
  // 格式化为 "YYYY-MM-DD HH:mm:ss"
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  currentTime.value = now.toLocaleString('zh-CN', options).replace(/\//g, '-'); // 将日期格式转换为 YYYY-MM-DD
}
let avg_salary = 19334.3;
onMounted(() => {
  updateTime(); // 初始化时更新一次
  setInterval(updateTime, 1000); // 每秒更新一次
  getData();

});
function getData() {
  getAvgSalary().then((res) => {
    avg_salary = res.data;
  });
}
</script>


<style lang='scss' scoped>
.header {
  display: flex;
  margin: auto;
  font-size: 20px;

  .h2 {
    font-weight: 700;
    font-size: 26px;
    color: #fdce13;

    span {
      color: red;
      font-weight: 700;
      font-size: 22px;
    }
  }

  h1 {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
  }

  .time {
    position: absolute;
    top: 10px;
    right: 20px;
  }
}
</style>