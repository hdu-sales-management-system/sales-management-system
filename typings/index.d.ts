import 'egg';
import "egg-sequelize";
declare module 'egg' {
  export interface FileType {
    field: string,
    filename: string,
    encoding: string,
    mime: string,
    filepath: string,
  }
  export interface Request {
    files: FileType[]
  }
}