import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import contact from '@/views/contact/contact'
import goodsDetail from '@/views/goodsDetail/goodsDetail'
import pdf from '@/views/goodsDetail/pdf'

Vue.use(Router)

export default new Router({
  base: '/h5/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/goodsDetail/:id/pdf',
      name: 'pdf',
      component: pdf
    },
  ]
})
