// 2018-12-17 created by Dov Yih
import { Service } from 'egg'
import { createReadStream, createWriteStream, unlink } from 'fs'
import { createHash } from 'crypto'
import { join, extname } from 'path'

export default class Fs extends Service {

  public async mv(tempFullPath, newPath): Promise<string> {
    const newFilename: string = createHash('md5').update(tempFullPath).digest('hex') + extname(tempFullPath)
    const publicPath: string = 'http://localhost:7001/public/images/' +  newFilename
    return new Promise( function mvPromise(resolve, reject) {
      const readStream = createReadStream(tempFullPath)
      const writeStream = createWriteStream( join( newPath, newFilename) )

      readStream.on('error', reject)
      writeStream.on('error', reject)

      readStream.on('close', function close() {
        unlink(tempFullPath, async (err) => {
          if (err) {
            reject(err)
          }
          resolve(publicPath)
        })
      })
      readStream.pipe(writeStream)
    })
  }
}
