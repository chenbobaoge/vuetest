import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home = r => require.ensure([], () => r(require('@/pages/Home')))
const Abort = r => require.ensure([], () => r(require('@/pages/Abort')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/abort',
          name: 'abort',
          component: Abort
        }
      ]
    }
  ]
})
