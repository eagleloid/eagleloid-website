import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StreamComp from './components/Stream.vue'
import Admin from './views/Admin.vue'
import Servers from './components/Servers.vue'
import Social from './components/Social.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/live',
      name: 'stream',
      component: StreamComp
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/servers',
      name: 'servers',
      component: Servers
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
