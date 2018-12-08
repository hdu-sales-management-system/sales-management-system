import { Controller } from 'egg'

export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this
    const isExist: boolean = await ctx.service.login.check(ctx.request.body)
    const id: string = ctx.service.login.getId()
    ctx.body = { state: isExist, user_id: id }
  }

}
