import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    const present = await this.app.model.Present.findAll()
    ctx.body = present
  }
}
