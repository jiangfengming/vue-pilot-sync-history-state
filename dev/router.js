import { PathRouter } from 'vue-pilot'
import Page from './Page'

const router = new PathRouter({
  routes: [
    {
      path: '*',
      component: Page
    }
  ]
})

router.start()
export default router
