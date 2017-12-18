// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.example.com';

// axios拦截器，未授权时跳转到登录页面
axios.interceptors.response.use(
    response => {
        // 对响应数据做点什么
    	return response;
    },
    error => {
        
        return Promise.reject(error);
    });

//把axios定义到Vue实例上
// Object.defineProperty(Vue.prototype,'$axios',{value:axios});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // axios,
  template: '<App/>',
  components: { App }
})
