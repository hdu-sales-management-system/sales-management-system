// 2018-12-07 created by Dov Yih
import { Controller } from 'egg'

export default class CartController extends Controller {
  public async index() {
    const { ctx } = this
    const { service } = ctx
    const { user_id } = ctx.params
    ctx.body = await service.cart.index(user_id)
  }

  public async update() {
    const { ctx } = this
    const { service } = ctx
    const state = ctx.request.body
    const isSucc = await service.cart.change(state)
    ctx.body = { state: isSucc }
  }
  public async create() {
    const { ctx } = this
    const { service } = ctx
    const present = ctx.request.body
    const userId = ctx.params.user_id
    const {id: presentId, count} = present
    const isSucc = await service.cart.add(userId, presentId, count)
    ctx.body = {isSucc}
  }
}
