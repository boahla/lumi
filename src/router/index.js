import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Check from '../views/Check.vue'

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
    path: '/check',
    name: 'Check',
    components: {
      header: Header,
      footer: Footer,
      default: Check,
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
  routes
})

export default router
