// 2018-12-07 created by Dov Yih
import { Controller } from 'egg'

export default class CartController extends Controller {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    console.log(ctx.params)
    const { user_id } = ctx.params
    ctx.body = await service.cart.index(user_id)
  }

  public async update() {
    const { ctx } = this
    const { service } = ctx
    const state = ctx.request.body
    console.log(state)
    const isSucc = await service.cart.change(state)
    ctx.body = { state: isSucc }
  }
  public async create() {
    // const { ctx } = this
    // const { service } = ctx
  }
}
