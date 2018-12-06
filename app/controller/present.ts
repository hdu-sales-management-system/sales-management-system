// 2018-12-06 created by Dov Yih
import { Controller } from 'egg'

export default class PresentController extends Controller {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    const res = await service.present.filter(ctx.query)
    ctx.body = res
  }
}
