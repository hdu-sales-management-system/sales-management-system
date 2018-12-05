import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const {login} = controller
  router.get('/', controller.home.index)
  router.post('/login', login.index)
}
