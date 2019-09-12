import VueRouter from "vue-router";
import Home from "./pages/Home";

const Cars = () =>
  import(/* webpackChunkName: "group-car" */ "./pages/Cars.vue");
const Car = () => import(/* webpackChunkName: "group-car" */ "./pages/Car.vue");
const CarFull = () =>
  import(/* webpackChunkName: "group-car" */ "./pages/CarFull.vue");
const ErrorComp = () => import("./pages/Error.vue");

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/cars",
      component: Cars,
      name: "cars"
    },
    {
      path: "/car/:id",
      component: Car,
      children: [
        {
          path: "full",
          component: CarFull,
          name: "carFull"
        }
      ]
    },
    {
      path: "/none",
      redirect: {
        name: "cars"
      }
    },
    {
      path: "*",
      component: ErrorComp
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {
      x: 0,
      y: 0
    };
  }
});
