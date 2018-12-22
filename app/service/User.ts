// 2018-12-07 created by Dov Yih
import { Service } from 'egg'
import { Op } from 'sequelize'

// interface UserIF {
//   id: number,
//   context: string,
//   avatar: string,
//   username: string,
//   stars: number,
//   user_id: number,
//   present_id: number,
// }
export default class User extends Service {

  public async purchase(order) {
    const { app } = this
    const { model: { Order, Present, OrderItem } } = app
    // const userId = this.ctx.session.userId
    const userId = 1
    const presentIds: [string] = order.map( (item) => item.id)
    // find all present exisit
    const presents = await Present.findAll({
      where: { id: { [Op.in]: presentIds } },
    })

    // make order items array for blukcreate
    const orderItems = presents.map( (present) => {
      const {id, price} = present.get({plain: true})
      const {count} = order.find( (item) => id == item.id)
      return {present_id: id, count, price, order_id: 0} // temp order id
    })

    const sumMoney = orderItems.reduce((sum, orderItem) => sum += orderItem.price, 0)

    const orderInst = await Order.create({
      sum_money: sumMoney,
      user_id: userId,
      status: 'payed',
    })

    // reset order id
    const orderId = orderInst.id
    orderItems.forEach( (item) => {
      item.order_id = orderId // the right order id
    })

    await OrderItem.bulkCreate(orderItems)

    // TODO cart remove present
    return sumMoney
  }

  public async self() {
    const { app } = this
    const { model: { User } } = app
    //  const userId = this.ctx.session.userId
    const userId = 1
    return await User.findOne({where: {
      id: userId,
    }})
  }
}
