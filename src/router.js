import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mutation-signature',
      name: 'mutation-signature',
      component: () => import('./views/MutationSignature.vue')
    },
    {
      path: '/variant-grid-view',
      name: 'variant-grid-view',
      component: () => import('./views/VariantGridView.vue')
    },
    {
      path: '/genes',
      name: 'genes',
      component: () => import('./views/Genes.vue')
    },
    {
      path: '/samples',
      name: 'samples',
      component: () => import('./views/Samples.vue')
    }

  ]
})
