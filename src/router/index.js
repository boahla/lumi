import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Check from '../views/Check.vue'
import Video from '../views/Video.vue'
import SubtitleList from '../views/SubtitleList.vue'
import VideoList from '../views/VideoList.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

// const router = new router({
//   routes: []
// });
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
    path: '/SubtitleList',
    name: 'SubtitleList',
    components: {
      header: Header,
      footer: Footer,
      default: SubtitleList,
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
    path: '/video/:title',
    name: 'Video',
    components: {
      header: Header,
      footer: Footer,
      default: Video,
    },
  },
  {
    path: '/about',
    name: 'About',
    components: {
      header: Header,
      footer: Footer,
      default: About,
    },
    children: [
      {
        path: 'class',
        name: 'Class',
        components: {
          header: Header,
          footer: Footer,
          default: require('@/views/Class').default,
        },
      },
      {
        path: 'introduce',
        name: 'Introduce',
        components: {
          header: Header,
          footer: Footer,
          default: require('@/views/Introduce').default,
        },
      },
    ],
  }
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
