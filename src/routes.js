import VueRouter from "vue-router";
import Home from "./pages/home";
import Cars from "./pages/cars";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/cars",
      component: Cars
    }
  ],
  mode: "history"
});
