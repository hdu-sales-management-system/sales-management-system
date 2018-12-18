// 2018-12-17 created by Dov Yih
import { Controller } from 'egg'
// import { createWriteStream, readFile, writeFile} from 'fs'
import { join } from 'path'
// import { promisify } from 'util'

// const rF = promisify(readFile)
// const wF = promisify(writeFile)
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
}
