// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    sharedName: "大数据", // 共享变量
  },
  mutations: {
    setSharedName(state, value) {
      state.sharedName = value; // 设置共享变量
    },
  },
  getters: {
    getSharedName: (state) => state.sharedName, // 获取共享变量
  },
});

export default store;
