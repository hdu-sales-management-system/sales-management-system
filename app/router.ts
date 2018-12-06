import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const { login, present, carouse } = controller
  router.get('/', controller.home.index)
  router.post('/login', login.index)
  router.get('/sliders', carouse.index)
  router.resources('presents', '/present', present)
}
