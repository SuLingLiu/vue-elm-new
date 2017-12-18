import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
