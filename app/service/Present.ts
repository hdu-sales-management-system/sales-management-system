// 2018-12-06 created by Dov Yih
import { Service } from 'egg'

interface Param {
  category: string,
  offset: string,
  count: string,
}

export default class Present extends Service {

  public async filter(params: Param): Promise<Array<object>> {
    const { app } = this
    const { model: { Present } } = app
    const { category, offset, count }  = params
    return await Present.findAll({
        where: {
          categorystr: category || '',
        },
        offset: offset ? parseInt(offset, 10) : 0,
        limit: count ? parseInt(count, 10) : 10,
      })
  }

}
