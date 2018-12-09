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

  public async change(state: CartState): Promise<boolean> {
    const { app } = this
    const { model: { Cart } } = app
    // console.log(state)
    const {id, ...restState} = state
    return await Cart.update( restState, { where: {id} } )
  }
}
