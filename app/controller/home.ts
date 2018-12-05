import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    // await this.app.model.Tag.create({
    //   name: '测试',
    //   value: 'test',
    //   hot: 1,
    // })

    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
