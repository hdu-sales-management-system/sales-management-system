module.exports = (app) => {
  const {
    DATE,
    STRING,
    BOOLEAN,
  } = app.Sequelize
  const user = app.model.define('user', {
    nickname: STRING,
    password: STRING,
    order_address: STRING,
    birthday: DATE,
    name: STRING,
    gender: BOOLEAN,
    phone: STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};