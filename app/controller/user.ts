// 2018-12-07 created by Dov Yih
import { Controller } from 'egg'

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this
    // const { service } = ctx

    ctx.body = {}
  }

    public async purchase() {
      const { ctx } = this
      const { service } = ctx
      await service.user.purchase(ctx.request.body)
      ctx.body = {}
    }

}
