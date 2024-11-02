<script setup>
import Title from './Title.vue'
import Charts from './Charts.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'; // 导入 useRouter

const router = useRouter(); // 获取 router 实例
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <header>
      <Title></Title>
    </header>

    <main>
      <Charts></Charts>
    </main>
    <button @click="() => router.push('/page2')">跳转页面</button>
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
</style>
