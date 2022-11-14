import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '../views/LayOut/LayOut'
import store from '../store/index.js'

const routes = [
  //登陆页面
  {
    path:'/login',
    name:'login',
    component:() => import('../views/pages/login.vue')
  },
  {
    path:'/',//页面路径
    name:'layout',//页面name
    component:LayOut,//当前路由对应的组件
    // redirect:'/index',
    // 子路由
    childern:[
      {
        path:'/roles',
        name:'roles',
        component:()=> import('../views/pages/rolesList.vue')
      },
      {
        path:'/users',
        name:'users',
        component:()=> import('../views/pages/usersList.vue')
      }
    ]
  }

]
//生成hash路由对象
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
router.beforeResolve((to, from, next)=>{
  // from：从哪个页面
  // to：到哪个页面
  // next：只有执行next页面才会进行跳转
  //判断用户是否登录
  console.log("store", store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.userName){
    //未登录,跳转到login页面
    if(to.path === '/login'){
      next()
      return
    }
    next("/login")
  }else{

  }
  next()
})
//暴露路由对象
export default router
