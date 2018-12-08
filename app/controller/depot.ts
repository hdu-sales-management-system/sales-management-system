// 2018-12-08 created by Dov Yih
import { Controller } from 'egg'

export default class DepotController extends Controller {
  public async index() {
    const { ctx } = this
    const { service, params } = ctx
    ctx.body = await service.depot.getAll(params)
  }
}
