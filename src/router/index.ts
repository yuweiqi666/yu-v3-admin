import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = []

const aboutRoute = {
  name: 'about',
  path: '/about',
  component: () => import('../views/about/index.vue'),
  children: [],
  meta: {}
} as RouteRecordRaw

const modules: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })

Object.keys(modules).forEach((key) => {
  const module = modules[key].default
  routes.push(module)
})

routes.push(aboutRoute)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  console.log('to', to)
  console.log('from', from)
  next()
})

router.afterEach((to) => {
  console.log('to', to)
  NProgress.done()
})

export default router
