import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StreamComp from './components/Stream.vue'
import Admin from './views/Admin.vue'
import Servers from './components/Servers.vue'
import Social from './components/Social.vue'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import store from './store/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter(to, from, next){
        var user = store.getters.user     
        // to and from are "Route" objects. see for more info: https://router.vuejs.org/api/#the-route-object
        if (user != null && user.loggedIn) {
          next()
        }
        else {
          next(false) // back from whence you came!
        }
      }      
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
      component: Servers,
      beforeEnter(to, from, next){
        var user = store.getters.user     
        // to and from are "Route" objects. see for more info: https://router.vuejs.org/api/#the-route-object
        if (user != null && user.loggedIn) {
          next()
        }
        else {
          next(false) // back from whence you came!
        }
      }
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
