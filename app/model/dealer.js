module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const dealer = app.model.define('dealer', {
    name: STRING,
    username: STRING,
    phone: STRING,
    order_address: STRING,
    password: STRING
  }, {
    underscored: true,
  });
  dealer.associate = function(models) {
    // associations can be defined here
  };
  return dealer;
};