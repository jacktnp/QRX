import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import qrpage from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'QRCode',
      component: qrpage
    }
  ]
})
