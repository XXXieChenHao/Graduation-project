import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入全局样式
import '@/assets/globle.css'

Vue.use(VueRouter)

//  设计路由规则
//  /home    主页
//  /login   登录
//  /sigin   注册
//  /user    用户
//  /user/person   个人中心
//  /detail  商品详情
//  /design  设计师页面
//  /cars    购物车页面
//  /about    关于我们

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import('../views/Cars.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    component: () => import('../views/goodsDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
