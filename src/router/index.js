import Vue from 'vue'
import Router from 'vue-router'

//引入页脚所对应的页面
import Home from "@/components/pages/home"
import Manage from "@/components/pages/manage"
import Account from "@/components/pages/account"
import Find from "@/components/pages/find"

//发现
import Sport from '@/components/pages/sport'
import Delelope from '@/components/pages/delelope'

//首页
import Qiandao from '@/components/pages/qiandao'
import Guize from '@/components/pages/guize'
import Anquan from '@/components/pages/anquan'
import Yaoqing from '@/components/pages/yaoqing'
import Goods from '@/components/pages/goods'

Vue.use(Router)

const routes = [
	{ path: '/' , redirect : '/home' },
	{ path: '/home', component: Home },
	{ path: '/manage', component: Manage },
	{ path: '/account', component: Account },
	{ 	path: '/find', 
		component: Find,
		children:[
    		{path:"/",redirect:"/find/sport"},
    		{path:'/find/sport',component:Sport},
    		{path:'/find/delelope',component:Delelope}
    	]
	},
	{path:"/home/qiandao",component:Qiandao},
	{path:"/home/qiandao/guize",component:Guize},
	{path:"/home/anquan",component:Anquan},
	{path:"/home/yaoqing",component:Yaoqing},
	{path:"/home/anquan/goods/:id",component:Goods}
]

export default new Router({
  routes,
  linkActiveClass:"btn-active main_active"
})
