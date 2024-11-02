import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // 假设这是你的主页组件
import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';

const routes = [
  { path: '/', redirect: '/page1' },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
