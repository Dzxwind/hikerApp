import Vue from "vue";
import Router from "vue-router";
import index from "@/components/pages/index";
import find from "@/components/pages/find";
import way from "@/components/pages/way";
import diary from "@/components/pages/diary";
import contact from "@/components/pages/contact";
import finddetail from "@/components/pages/finddetail";
import waydetail from "@/components/pages/waydetail";
import diarydetail from "@/components/pages/diarydetail";

Vue.use(Router);

export default new Router({
  linkActiveClass: "routerActive",
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/find",
      name: "find",
      component: find,
      children: [
        {
          path: "finddetail/:userIndex",
          component: finddetail
        }
      ]
    },
    {
      path: "/way",
      name: "way",
      component: way,
      children: [{
        path:"waydetail/:wayIndex",
        component:waydetail
      }]
    },
    {
      path: "/diary",
      name: "diary",
      component: diary,
      children: [{
        path:"diarydetail/:diaryIndex",
        component:diarydetail
      }]
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    }
  ]
});
