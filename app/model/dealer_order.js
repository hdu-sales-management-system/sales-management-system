module.exports = (app) => {
  const {
    DATE,
    DOUBLE,
    INTEGER,
    TEXT,
    STRING,
  } = app.Sequelize;
  const dealer_order = app.model.define('dealer_order', {
    state: STRING,
    feedback: STRING,
    sum_momey: DOUBLE,
    start_date: DATE,
    received_date: DATE,
  }, {
    underscored: true,
  });
  dealer_order.associate = function (models) {
    // associations can be defined here
  };
  return dealer_order;
};
