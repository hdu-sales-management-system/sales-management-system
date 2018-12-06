// 2018-12-06 created by Dov Yih
import { Controller } from 'egg'

export default class CarouseController extends Controller {
  public async index() {
    const { ctx, app } = this
    const { model: { Carouse } } = app
    ctx.body = await Carouse.findAll()
  }

}
