import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // 一進來就讀
    component: Home,
    meta: {
      title: '番茄鐘'
    }
  },
  {
    path: '/list',
    name: 'List',
    // 進到頁面，才去讀list這個檔案
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: '番茄鐘 | 待辦清單'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      title: '番茄鐘 | 設定'
    }
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '找不到頁面'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
