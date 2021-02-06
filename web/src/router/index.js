import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue"
import Details from "../views/Details.vue"
import Category from "../views/Category.vue"
import Tag from "../views/Tag.vue"
import Filing from "../views/Filing.vue"
import Message from "../views/Message.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/article',
    children: [
    //文章
      { path: "/article",name:"Article" ,component: Article},
      { path: "/article/details/:id",name:"Details" ,component: Details ,props: true},
      { path: "/category",name:"Category" ,component: Category},
      { path: "/tag",name:"Tag" ,component: Tag},
      { path: "/filing",name:"Filing" ,component: Filing},
      { path: "/message",name:"Message" ,component: Message},
      { path: "/about",name:"About" ,component: About}
    // { path: "/articles/edit/:id", component: ArticleEdit, props: true },
    // { path: "/articles/list", component: ArticleList },
    ]
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
