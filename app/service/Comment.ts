// 2018-12-22 created by Dov Yih
import { Service } from 'egg'

export default class Comment extends Service {

  /**
   * create new comment
   * @param stars [number]
   * @param content [string]
   * @param pId [number] present id
   */
  public async create(stars, content, pId){
    const { app, ctx } = this
    const { service } = ctx

    const { model: { Comment } } = app

    const self = await service.user.self()
    const { id: uId, avatar, nickname: username } = self.get({ plain: true })

    await Comment.create({
      stars,
      content,
      present_id: pId,
      avatar,
      username,
      user_id: uId,
    })
  }
}
