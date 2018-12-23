// 2018-12-17 created by Dov Yih
import { Controller } from 'egg'

interface FileType {
  field: string,
  filename: string,
  encoding: string,
  mime: string,
  filepath: string,
}
export default class ImageController extends Controller {

  public async cover() {
    await this.save('cover')
  }

  public async detail() {
    await this.save('detail')
  }

  public async carouse() {
    await this.save('carouse')
  }

  public async show() {
    const { ctx } = this
    const { service } = ctx
    // present id
    const id = ctx.params.id
    const { type } = ctx.query
    const images = await service.image.byId(id, type)
    ctx.body = images
  }

  private async save(type: string) {
    const { ctx } = this
    const { service } = ctx

    const file: FileType = ctx.request.files[0]
    const filepath: string = await service.fs.mv(file.filepath)

    ctx.body = await service.image.create(filepath, type)
  }
}
