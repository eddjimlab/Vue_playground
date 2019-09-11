import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./routes";

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
