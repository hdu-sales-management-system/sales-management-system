// 2018-12-06 created by Dov Yih
import { Service } from 'egg'

interface Param {
  category: string,
  offset: string,
  count: string,
  order: string,
  type: string,
}

export default class Present extends Service {

  public async filter(params: Param): Promise<Array<object>> {
    const { app } = this
    const { model: { Present } } = app
    const { category, offset, count, order, type } = params
    const whereCondition = category ? { categorystr: category } : {}
    const orderCondition: [string[]] = [
      [type || 'composite', order || 'desc']
    ]
    return await Present.findAll({
      order: orderCondition,
      where: whereCondition,
      offset: offset ? parseInt(offset, 10) : 0,
      limit: count ? parseInt(count, 10) : 10,
    })
    // .map( (present) => {
    //   const plainPresent = present.get({plain: true})
    //   plainPresent.off = plainPresent.off ? '已打折' : '未打折'
    //   return plainPresent
    // })
  }

  public async byId(id: string): Promise<object> {
    const { app } = this
    const { model: { Present, Image, Comment } } = app
    let present = await Present.findOne({
      where: { id },
      include: [
        { model: Image },
        { model: Comment },
      ],
    })
    const images = present.images.map(img => img.url)
    present = present.get({ plain: true })
    present.images = images
    return present
  }

  public async recommend(): Promise<Array<object>> {
    const { app } = this
    const { model: { Present } } = app
    return await Present.findAll({
      order: [
        ['hot', 'desc'],
      ],
      limit: 10,
    })
  }

  public async delete(id): Promise<boolean> {
    const { app } = this
    const { model: { Present } } = app
    await Present.destroy({
      where: { id },
    })
    return true
  }

  public async update(present): Promise<boolean> {
    const { app } = this
    const { model: { Present } } = app
    let { id, ...restPresnt} = present
    // console.log(id, restPresnt)
    id = parseInt(id, 10)
    await Present.update(restPresnt, {
      where: {
        id,
      },
    })
    return true
  }
  public async new(item): Promise<boolean> {
    const { app } = this
    const { model: { Present, DepotItem } } = app
    const { depot_item_id, ...restItem} = item
    await Present.create(restItem)
    await DepotItem.update(
      {state: 'onshelf'},
      { where: { id: depot_item_id }},
    )
    return true
  }
}
