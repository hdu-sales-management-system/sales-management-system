import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const {
    login, present, carouse, cart, user, hqpresent,
    depot, image, order, comment,
   } = controller
  router.get('/', controller.home.index)
  router.post('/login', login.index)
  router.post('/search', present.search)
  router.get('/sliders', carouse.index)
  router.get('/recommend', present.recommend)
  router.get('/recommend2', present.recommend2)
  router.post('/purchase', user.purchase)
  router.post('/upload/cover', image.cover)
  router.post('/upload/detail', image.detail)
  router.post('/upload/carouse', image.carouse)

  router.resources('cart', '/user/:user_id/cart', cart)
  router.resources('comment', '/comment', comment)
  router.resources('image', '/image', image)
  router.resources('presents', '/presents', present)
  router.resources('order', '/order', order)
  const hqCheck = app.middleware.permission()
  /**
   * @param hq headquarters
   */
  const hq = router.namespace('/hq', hqCheck)
  hq.resources('hq presents', '/presents', hqpresent)
  hq.resources('hq depot', '/depot', depot)
}
