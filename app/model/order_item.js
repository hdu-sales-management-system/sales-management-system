module.exports = (app) => {
  const {
    DOUBLE,
    INTEGER,
    STRING,
  } = app.Sequelize
  const order_item = app.model.define('order_item', {
    type: STRING,
    count: INTEGER,
    price: DOUBLE,
  }, {
    underscored: true,
  });
  order_item.associate = function(models) {
    // associations can be defined here
  };
  return order_item;
};