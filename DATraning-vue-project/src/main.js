import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由
import store from './store'; // 引入 Vuex store

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
