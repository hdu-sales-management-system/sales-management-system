// 2018-12-19 created by Dov Yih
import { Service } from 'egg'

export default class Order extends Service {

  public async getAll() {
    const { app } = this
    const { model: { Order, OrderItem, Present } } = app
    // const userId = this.ctx.session.userId
    const userId = 1
    const orderInst = await Order.findAll({
      include: [{ model: OrderItem, include: {
        model: Present,
      }}],
      order: [['created_at', 'DESC']],
      where: {user_id: userId},
    })

    // plain order instance
    const plainOrders = orderInst.map( order => {
      const { id, sum_money, created_at } = order
      const orderItems = order.orderItems.map( item => {
        const { id, count, price } = item
        const { description, cover, id: pId} = item.present
        return { id, count, description, price, cover, pId}
      })
      const count = orderItems.length
      return { id, sum_money, start_date: created_at, count, orderItems }
    })
    return plainOrders
  }

}
