// 2018-12-08 created by Dov Yih
import { Service } from 'egg'

export default class Depot extends Service {

  // public async index(){
  //   const { app } = this
  //   const { model: { Model } } = app
  // }
    public async getAll(params): Promise<[]> {
      const { app } = this
      const { model: { DepotItem } } = app
      console.log(params)
      return await DepotItem.findAll()
    }

}
