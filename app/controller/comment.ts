// 2018-12-22 created by Dov Yih
import { Controller } from 'egg'

export default class CommentController extends Controller {
  public async create() {
    const { ctx } = this
    const { service } = ctx
    const {star, content, pId} = ctx.request.body
    await service.comment.create(star, content, pId)
    ctx.body = {}
  }
}
