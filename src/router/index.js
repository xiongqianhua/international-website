/*
 * @Author: qianhua.xiong
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import home from '../view/home/index.vue';
import product from '../view/product/index.vue';
import about from '../view/product/index.vue';
import our from '../view/our/index.vue';

const routes = [
  {
      path: "/",
      redirect: "/home",
  },
  { path: "/home", component: home },
  { path: "/product", component: product },
  { path:"/about", component: about },
  { path:"/our", component: our }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router