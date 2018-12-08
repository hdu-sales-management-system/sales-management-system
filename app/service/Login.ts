import { Service } from 'egg'

/**
 * User login Service
 */
export default class Login extends Service {

  userId: string = ''

  /**
   * check user in the users table
   * @param user
   * @param user.username
   * @param user.password
   */
  public async check(user: {username: string, password: string}): Promise<boolean> {
    const {app} = this
    const {model: {User}} = app
    try {
      const res = await User.findOne({
        where: {
          ...user,
        },
      })
      this.userId = res.id || ''
      return !!res
    } catch (e) {
      return false
    }
  }

  /**
   * get current user id
   * @return id current user's id
   */
  public getId(): string {
    return this.userId || '0'
  }
}
