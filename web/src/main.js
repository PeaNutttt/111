import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
// import Hljs from 'highlight.js';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";

import hljs from 'highlight.js';
//代码高亮的主题
// import 'highlight.js/styles/monokai.css';
import 'highlight.js/styles/default.css';
// import 'highlight.js/scss/tomorrow-night-eighties.scss'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})


Vue.use(hljs.vuePlugin);

Vue.config.productionTip = false;

import http from "./http";
Vue.prototype.$http = http;

Vue.use(ElementUI);
Vue.use(hljs);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
