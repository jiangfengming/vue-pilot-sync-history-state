import { PathRouter } from 'vue-pilot'
import sync from '../src'

const router = new PathRouter({
  routes: [
    {
      path: '*',
      component: () => import('./Page')
    }
  ]
})

router.start()
const syncHistoryState = sync(router)
export default router
export { router, syncHistoryState }
