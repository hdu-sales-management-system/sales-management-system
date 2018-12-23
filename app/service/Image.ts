// 2018-12-17 created by Dov Yih
import { Service } from 'egg'
import { Op } from 'sequelize'

interface FileType {
  field: string,
  filename: string,
  encoding: string,
  mime: string,
  filepath: string,
}
export default class Image extends Service {

  public async create(filepath, type = 'image'): Promise<any> {
    const { app } = this
    const { model: { Image } } = app
    return await Image.create({
      url: filepath,
      type,
    })
    // return true
  }

  public async save(files: FileType[], type): Promise<any[]> {
    const { ctx: { service } } = this
    const savedImgs: any[] = []
    for (const file of files) {
      const filepath: string = await service.fs.mv(file.filepath)
      const fileObj = await service.image.create(filepath, type)
      savedImgs.push(fileObj.get({ plain: true }))
    }
    return savedImgs
  }
  public async byId(id, type = 'all'): Promise<any> {
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

  /**
   * 
   * @param pId [number]
   * @param imgIds [Array<number>]
   */
  public async updateId(pId: number, imgIds: number[] ): Promise<boolean> {
    const { app } = this
    const { model: { Image } } = app
    Image.update({
      present_id: pId,
    }, {
      where: {
        id: {
          [Op.in]: imgIds,
        },
      },
    })
    return true
  }
}
