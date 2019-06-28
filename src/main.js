import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import '@/filters';
import '@/vant';
import 'amfe-flexible';
import vconsole from "vconsole";

Vue.config.productionTip = false;
Vue.prototype.$devicePixelRatio = window.devicePixelRatio

if (process.env.NODE_ENV === 'development') {
  Vue.config.silent = false
  Vue.config.devtools = true
} else if (process.env.NODE_ENV === 'production') {
  Vue.config.silent = true
  Vue.config.devtools = false
}

if (process.env.VUE_APP_TOOL_VCONSOLE === 'true') new vconsole()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
