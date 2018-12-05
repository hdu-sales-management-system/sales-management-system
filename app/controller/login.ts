import { Controller } from 'egg'

export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this
    console.log(ctx.request.body)
    const isExist: boolean = await ctx.service.login.check(ctx.request.body)
    ctx.body = { state: isExist}
  }
}