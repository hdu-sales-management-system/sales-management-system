import { Service } from 'egg'

/**
 * User login Service
 */
export default class Login extends Service {

  /**
   * check user in the users table
   * @param name - your name
   */
  public async check(user: {username:string,passwork:string}):Promise<boolean> {
    const {app} = this
    const {model: {User}} = app
    try{
      const res = await User.findOne({
        where: {
          ...user,
        },
      })
      return !!res
    }catch(e) {
      return false
    }
  }
}
