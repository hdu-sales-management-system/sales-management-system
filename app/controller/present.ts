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

  public async recommend2() {
    const { ctx } = this
    const { service } = ctx
    const presents = await service.present.recommend()
    let res = presents.map((present) => {
      const plianP = present.get({ plain: true })
      if (Math.random() > 0.5) {
        return plianP
      }
      return undefined
    }).filter(value => !!value)
      .slice(0, 10)
    ctx.body = res
  }

  public async recommend() {
    const { ctx } = this
    const { service } = ctx
    const presents = await service.present.recommend()
    ctx.body = presents.slice(0, 10)
  }

  public async search() {
    const { ctx } = this
    const { service } = ctx
    ctx.body = await service.present.search(ctx.request.body.q)
  }
}
