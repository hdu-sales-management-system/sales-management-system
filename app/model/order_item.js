module.exports = (app) => {
  const {
    DOUBLE,
    INTEGER,
    STRING,
  } = app.Sequelize
  const orderItem = app.model.define('order_item', {
    type: STRING,
    count: INTEGER,
    price: DOUBLE,
  }, {
    underscored: true,
  })
  orderItem.associate = function orderItemAssociate() {
    const { 
      OrderItem, Order, Present,
    } = app.model
    OrderItem.belongsTo(Order)
    OrderItem.belongsTo(Present)
  }
  return orderItem
}
