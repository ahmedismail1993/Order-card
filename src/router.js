import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "./views/Dshboard.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Projects.vue")
    },
    {
      path: "/order",
      name: "order",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Order.vue")
    },
    {
      path: "/teams",
      name: "teams",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Teams" */ "./views/Teams.vue")
    },
    {
      path: "/apple-app-site-association",
      name: "apple-app-site-association",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "Teams" */ "./static/apple-app-site-association.json")
        component: { template: '<div>foo</div>' }
      
    }
  ]
});
