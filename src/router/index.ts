import { createMemoryHistory, createRouter, RouteRecordRaw, Router } from 'vue-router'
import useConfig from '../hooks/use-config'
import $ext from '@xizher/js-ext'

export default function () : Router {
  const [config] = useConfig()
  const routes : RouteRecordRaw[] = config.routerConfig.routes.map(
    item => ({
      name: item.name,
      path: item.path,
      component: () => import(`../views/V${$ext(item.name).trimAll()}.vue`)
    })
  )
  const router = createRouter({
    routes,
    history: createMemoryHistory()
  })
  return router
}
