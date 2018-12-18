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

    public async byId(id, type = 'all'): Promise<object> {
      const { app } = this
      const { model: { Image } } = app
      const whereCondition = {
        present_id: parseInt(id, 10),
        type,
      }
      if (type === 'all' ) {
        delete whereCondition.type
      }
      const imgRes = await Image.findAll({
        where: whereCondition,
      })
      // flatten images Set
      const platImg = {}
      imgRes.forEach( (img) => {
        if (!platImg[img.type]) {
          platImg[img.type] = []
        }
        platImg[img.type].push(img.url)
      })
      return platImg
    }
}
