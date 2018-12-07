import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const { login, present, carouse, cart, user } = controller
  router.get('/', controller.home.index)
  router.post('/login', login.index)
  router.get('/sliders', carouse.index)
  router.get('/recommend', present.recommend)
  router.post('/purchase', user.purchase)
  router.resources('presents', '/presents', present)
  router.resources('cart', '/user/:user_id/cart', cart)
}
