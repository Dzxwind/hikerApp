import Vue from "vue";
import Router from "vue-router";
import index from "@/components/pages/index";
import find from "@/components/pages/find";
import way from "@/components/pages/way";
import article from "@/components/pages/article";
import contact from "@/components/pages/contact";
import finddetail from "@/components/pages/finddetail";
import waydetail from "@/components/pages/waydetail";
import articledetail from "@/components/pages/articledetail";

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
      component: way
    },
    {
      path: "/waydetail/:wayIndex",
      name: "waydetaiil",
      component: waydetail,
      alias: "/way/waydetail/:wayIndex"
    },
    {
      path: "/articledetail/:articleIndex",
      name: "articledetaiil",
      component: articledetail,
      alias: "/article/articledetail/:articleIndex"
    },
    {
      path: "/article",
      name: "article",
      component: article,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    }
  ]
});
