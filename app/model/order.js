module.exports = (app) => {
  const {
    DATE,
    DOUBLE,
    STRING,
  } = app.Sequelize;
  const Order = app.model.define('order', {
    status: STRING,
    sum_momey: DOUBLE,
    feedback: STRING,
    start_date: DATE,
    received_date: DATE,
  }, {
    underscored: true,
  });
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};
