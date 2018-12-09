// 2018-12-08 created by Dov Yih
import { Service } from 'egg'

export default class Depot extends Service {

  public async getAll(query): Promise<[]> {
    const { app } = this
    const { model: { DepotItem } } = app
    console.log(query)
    return await DepotItem.findAll(
      {
        where: query,
      },
    )
  }

}
