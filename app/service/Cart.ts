// 2018-12-07 created by Dov Yih
import { Service } from 'egg'

interface CartState {
  id: string,
  selected: boolean,
  count: string,
}

export default class Cart extends Service {

  public async index(userId: string) {
    const { app } = this
    const { model: { Cart, Present } } = app
    // console.log(userId)
    const cart = await Cart.findAll({
      include: [
        { model: Present },
      ],
      where: {
        user_id: userId || 1,
      },
    })
    return cart.map( (cartItem) => {
      const item = cartItem.get({plain: true})
      delete item.present
      const present = cartItem.present.get({ plain: true })
      return { ...present, ...item}
    })
  }

  /**
   * 
   * @param state [object]
   * @param state.id [string]
   * @param state.selected [boolean]
   * @param state.count [string]
   *
   */
  public async change(state: CartState): Promise<boolean> {
    const { app } = this
    const { model: { Cart } } = app
    // console.log(state)
    const {id, ...restState} = state
    return await Cart.update( restState, { where: {id} } )
  }

  /**
   * 
   * @param userId [number]
   * @param presentId [number]
   * @param count [number] 假设为 1
   */
  public async add(userId, presentId, count): Promise<boolean> {
    const { app } = this
    const { model: { Cart } } = app
    if( !userId || !presentId || !count) {
      return false
    }
    const cartRes = await Cart.findOrCreate({
        where: {
        user_id: userId,
        present_id: presentId,
      },
    })
    await cartRes[0].update({selected: true})
    await cartRes[0].increment('count', {by: count})
    return true
  }
}
