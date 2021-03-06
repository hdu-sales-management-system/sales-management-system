// 2018-12-06 created by Dov Yih
import { Controller } from 'egg'

export default class PresentController extends Controller {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    const res = await service.present.filter(ctx.query)
    ctx.body = res
  }

  public async show() {
    const { ctx } = this
    const { service } = ctx
    const {id} = ctx.params
    // await service.present.byId(id)
    ctx.body = await service.present.byId(id)
  }

  public async recommend() {
      const { ctx } = this
      const { service } = ctx
      ctx.body = await service.present.recommend()
    }

}
