// 2018-12-06 created by Dov Yih
import { Service } from 'egg'

interface Param {
  category: string,
  offset: string,
  count: string,
  order: string,
  type: string,
}

export default class Present extends Service {

  public async filter(params: Param): Promise<Array<object>> {
    const { app } = this
    const { model: { Present } } = app
    const { category, offset, count, order, type }  = params
    const whereCondition = category ? { categorystr: category } : {}
    const orderCondition: [string[]] = [
      [ type || 'composite', order || 'desc']
    ]
    return await Present.findAll({
      order: orderCondition,
      where: whereCondition,
      offset: offset ? parseInt(offset, 10) : 0,
      limit: count ? parseInt(count, 10) : 10,
      })
  }
  public async byId(id: string): Promise<object> {
    const { app } = this
    const { model: { Present } } = app
    const present = await Present.findOne({
      where: {id},
    })
    return present
  }

    public async recommend(): Promise<Array<object>> {
      const { app } = this
      const { model: { Present } } = app
      return await Present.findAll({
        order: [
          ['hot', 'desc'],
        ],
        limit: 10,
      })
    }
}
