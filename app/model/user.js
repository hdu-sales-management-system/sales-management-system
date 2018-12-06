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
    phone: STRING,
  }, {
    underscored: true,
  })
  user.associate = function userAssociate() {
    // associations can be defined here
    const {
      User, Cart, Message, Order,
    } = app.model
    User.hasMany(Cart)
    User.hasMany(Message)
    User.hasMany(Order)
  }
  return user
}
