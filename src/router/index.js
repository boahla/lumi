import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Video from '../components/Video.vue'
import Home from '../views/Home.vue'
import Check from '../views/Check.vue'
import VideoList from '../views/VideoList.vue'
import VideoResult from '../views/VideoResult.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: Header,
      footer: Footer,
      default: Home,
    },
  },
  {
    path: '/Signup',
    name: 'Signup',
    components: {
      header: Header,
      footer: Footer,
      default: Signup,
    },
  },
  {
    path: '/VideoList',
    name: 'VideoList',
    components: {
      header: Header,
      footer: Footer,
      default: VideoList,
    },
  },
  {
    path: '/check',
    name: 'Check',
    components: {
      header: Header,
      footer: Footer,
      default: Check,
    },
  },
  {
    path: '/video',
    name: 'Video',
    components: {
      header: Header,
      footer: Footer,
      default: Video,
    },
  },
  {
    path: '/videoResult',
    name: 'VideoResult',
    components: {
      header: Header,
      footer: Footer,
      default: VideoResult,
    },
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
