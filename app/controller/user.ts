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
      const sumMoney = await service.user.purchase(ctx.request.body)
      const user = await service.user.self()
      ctx.body = {method: '支付宝支付', sumMoney, user, discounts: 0}
    }

}
