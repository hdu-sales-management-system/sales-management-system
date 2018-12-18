import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const { login, present, carouse, cart, user, hqpresent, depot, image } = controller
  router.get('/', controller.home.index)
  router.post('/login', login.index)
  router.get('/sliders', carouse.index)
  router.get('/recommend', present.recommend)
  router.post('/purchase', user.purchase)

  router.post('/upload/cover', image.cover)
  router.resources('image', '/image', image)
  router.resources('presents', '/presents', present)
  router.resources('cart', '/user/:user_id/cart', cart)
  const hqCheck = app.middleware.permission()
  /**
   * @param hq headquarters
   */
  const hq = router.namespace('/hq', hqCheck)
  hq.resources('hq presents', '/presents', hqpresent)
  hq.resources('hq depot', '/depot', depot)
}
