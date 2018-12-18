// 2018-12-08 created by Dov Yih
import { Service } from 'egg'
import { Op }from 'sequelize'

export default class Depot extends Service {

  public async getAll(query): Promise<[]> {
    const { app } = this
    const { model: { DepotItem } } = app
    const {q, ...restQuery} = query
    if (q) {
      restQuery.name = {
        [Op.like]: '%' + q + '%',
      }
    }
    return await DepotItem.findAll(
      {
        where: restQuery,
      },
    )
  }

}
