import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import find from "@/components/pages/find";
import way from "@/components/pages/way";
import diary from "@/components/pages/diary";
import contact from "@/components/pages/contact";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      // component: resolve => require(["@/components/pages/index"], resolve)
      component:index
    },
    {
      path: "/find",
      name: "find",
      component: find
    },
    {
      path: "/way",
      name: "way",
      component: way
    },
    {
      path: "/diary",
      name: "diary",
      component: diary
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    }
  ]
});
