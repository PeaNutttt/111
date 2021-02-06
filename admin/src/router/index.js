import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

//文章
import ArticleEdit from "../views/ArticleEdit.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticleComment from "../views/ArticleComment.vue";

//分类
import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";

//标签
import TagEdit from "../views/TagEdit.vue";
import TagList from "../views/TagList.vue";

//友情链接
import FriendEdit from "../views/FriendEdit.vue";
import FriendList from "../views/FriendList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      //文章
      { path: "/articles/create", component: ArticleEdit },
      { path: "/articles/edit/:id", component: ArticleEdit, props: true },
      { path: "/articles/list", component: ArticleList },
      { path: "/articles/comment", component: ArticleComment },
      // 分类
      { path: "/categories/create", component: CategoryEdit },
      { path: "/categories/edit/:id", component: CategoryEdit, props: true },
      { path: "/categories/list", component: CategoryList },
      // 标签
      { path: "/tags/create", component: TagEdit },
      { path: "/tags/edit/:id", component: TagEdit, props: true },
      { path: "/tags/list", component: TagList },
      // 友情链接
      { path: "/friends/create", component: FriendEdit},
      { path: "/friends/edit/:id", component: FriendEdit, props: true },
      { path: "/friends/list", component: FriendList },

      // { path:'/admin_users/create', component:AdminUserEdit },
      // { path:'/admin_users/edit/:id', component:AdminUserEdit, props:true},
      // { path:'/admin_users/list', component:AdminUserList }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
