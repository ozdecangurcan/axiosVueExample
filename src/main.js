import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import NavBar from "./components/navbar.vue";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

axiosInstance.interceptors.request.use(config => {
  config.headers["Authorization"] = "Bearer ey123";
  return config;
});

axiosInstance.interceptors.response.use(config => {
  if (config.status === 401) {
    alert("Oturum süreniz sona erdi");
  }
  return config;
});

Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false
Vue.component('my-app-navbar',NavBar)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
