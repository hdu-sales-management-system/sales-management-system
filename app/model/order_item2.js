module.exports = (app) => {
  const {
    DOUBLE,
    DATE,
    STRING,
  } = app.Sequelize
  const orderItem2 = app.model.define('orderItem2', {
    state: STRING,
    sum_money: DOUBLE,
    start_date: DATE,
    recived_date: DATE,
  }, {})
  orderItem2.associate = function orderItem2Associate() {
    const {
      DealerOrder,
      OrderItem2,
      Present,
    } = app.model
    OrderItem2.belongsTo(DealerOrder)
    OrderItem2.belongsTo(Present)
  }
  return orderItem2
}
