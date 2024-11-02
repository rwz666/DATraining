<script setup>
import Title from './components/Title.vue'
import Charts from './components/Charts.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'; // 导入 useRouter

const router = useRouter(); // 获取 router 实例
const currentPage = ref('/');
function switchPage() {
  if (currentPage.value === '/') {
    currentPage.value = '/page2';
    router.push('/page2'); // 跳转到 page2
  } else {
    currentPage.value = '/';
    router.push('/'); // 返回到主页
  }
}
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

header {
  position: relative;
  top: 0;
  left: 0;
  height: 10%;
  width: 100%;
  padding: 20px;
}

main {
  margin: auto;
  position: relative;
  height: 90%;
  width: 90%;
  padding: 20px;
  /* background-color: skyblue; */
}

button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
  /* 悬停时变色 */
}
</style>
