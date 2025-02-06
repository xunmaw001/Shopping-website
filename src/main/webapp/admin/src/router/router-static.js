import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import jiaoliuhuifu from '@/views/modules/jiaoliuhuifu/list'
    import news from '@/views/modules/news/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import shangjia from '@/views/modules/shangjia/list'
    import discussnongyejiqiao from '@/views/modules/discussnongyejiqiao/list'
    import shangpingoumai from '@/views/modules/shangpingoumai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import messages from '@/views/modules/messages/list'
    import nongyejiqiao from '@/views/modules/nongyejiqiao/list'
    import nongyexingqing from '@/views/modules/nongyexingqing/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'
    import jiaoliuxinxi from '@/views/modules/jiaoliuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/jiaoliuhuifu',
        name: '交流回复',
        component: jiaoliuhuifu
      }
          ,{
	path: '/news',
        name: '商品资讯',
        component: news
      }
          ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
          ,{
	path: '/discussnongyejiqiao',
        name: '农业技巧评论',
        component: discussnongyejiqiao
      }
          ,{
	path: '/shangpingoumai',
        name: '商品购买',
        component: shangpingoumai
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
          ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
          ,{
	path: '/nongyejiqiao',
        name: '农业技巧',
        component: nongyejiqiao
      }
          ,{
	path: '/nongyexingqing',
        name: '农业行情',
        component: nongyexingqing
      }
          ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/jiaoliuxinxi',
        name: '交流信息',
        component: jiaoliuxinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
