// 2018-12-17 created by Dov Yih
import { Service } from 'egg'

export default class Image extends Service {

  public async create(filepath, type = 'image'): Promise<object> {
    const { app } = this
    const { model: { Image } } = app
    return await Image.create({
      url: filepath,
      type,
    })
    // return true
  }

}
