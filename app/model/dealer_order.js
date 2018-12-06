module.exports = (app) => {
  const {
    DATE,
    DOUBLE,
    STRING,
  } = app.Sequelize
  const dealerOrder = app.model.define('dealer_order', {
    state: STRING,
    feedback: STRING,
    sum_momey: DOUBLE,
    start_date: DATE,
    received_date: DATE,
  }, {
    underscored: true,
  })
  dealerOrder.associate = function dealerOrderAssociate() {
    const {
      DealerOrder, OrderItem2,
    } = app.model
    DealerOrder.belongsTo(OrderItem2)
  }
  return dealerOrder
}
