// 2018-12-08 created by Dov Yih
import { Controller } from 'egg'

export default class HqpresentController extends Controller {
  // public async index() {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    ctx.body = await service.present.filter(ctx.query)
  }

  public async destroy() {
    const { ctx } = this
    const { service } = ctx
    await service.present.delete(ctx.params.id)
    ctx.body = {}
  }

  public async create() {
    const { ctx } = this
    const { service } = ctx

    ctx.body = service.present.new(ctx.request.body)
  }

  public async update() {
      const { ctx } = this
      const { service } = ctx
      await service.present.update(ctx.request.body)
      ctx.body = {}
    }

}
