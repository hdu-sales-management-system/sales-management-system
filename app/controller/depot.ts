// 2018-12-08 created by Dov Yih
import { Controller } from 'egg'

export default class DepotController extends Controller {
  public async index() {
    const { ctx } = this
    const { service, request: {query} } = ctx
    console.log(ctx.request.query)
    return ctx.body = await service.depot.getAll(query)
  }
}
