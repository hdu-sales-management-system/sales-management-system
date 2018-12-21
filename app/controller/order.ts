// 2018-12-19 created by Dov Yih
import { Controller } from 'egg'

export default class OrderController extends Controller {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    const res = await service.order.getAll()
    ctx.body = res
  }
}
