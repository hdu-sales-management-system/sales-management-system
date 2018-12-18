import 'egg';
import "egg-sequelize";
declare module 'egg' {
  interface fileType {
    field: string,
    filename: string,
    encoding: string,
    mime: string,
    filepath: string,
  }
  export interface Request {
    files: fileType[]
  }
}