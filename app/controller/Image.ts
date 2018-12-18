// 2018-12-17 created by Dov Yih
import { Controller } from 'egg'
import { join } from 'path'

interface fileType {
  field: string,
  filename: string,
  encoding: string,
  mime: string,
  filepath: string,
}
export default class ImageController extends Controller {
  public async cover() {
    const { ctx } = this
    const { service } = ctx

    const file: fileType = ctx.request.files[0]
    const publicPath: string = join( this.config.baseDir, 'app/public/images' )
    const filepath: string = await service.fs.mv(file.filepath, publicPath)

    ctx.body = await service.image.create(filepath, 'cover')
  }

  public async show() {
    const { ctx } = this
    const { service } = ctx
    // present id
    const id = ctx.params.id
    const { type } = ctx.query
    console.log(type)
    const images = await service.image.byId(id, type)
    ctx.body = images
  }
}
