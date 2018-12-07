// 2018-12-07 created by Dov Yih
import { Service } from 'egg'
import { Op } from 'sequelize'

// interface OrderItem {
//   id: string
// }
export default class User extends Service {

  public async purchase(order) {
    const { app } = this
    const { model: { Order, Present, OrderItem } } = app
    // const userId = this.ctx.session.userId
    const presentIds: [string] = order.map( (item) => item.id)
    // const orderWithId: [OrderItem] = order.map( (item) => ({[item.id]: item.count}))
    const presents = await Present.findAll({
      where: {
        id: {
          [Op.in]: presentIds,
        },
      },
    })

    const orderItems = presents.map( (present) => {
      const {id, price} = present.get({plain: true})
      const {count} = order.find( (item) => id == item.id)
      return {present_id: id, count, price, order_id: 0}
    })

    const sumMoney = orderItems.reduce((sum, orderItem) => sum += orderItem.price, 0)

    const orderInst = await Order.create({
      sum_money: sumMoney,
      user_id: 1,
    })

    const orderId = orderInst.id
    orderItems.forEach( (item) => {
      item.order_id = orderId
    })

    await OrderItem.bulkCreate(orderItems)

    await Order.findAll()
  }

}
