module.exports = (app) => {
  const {
    BOOLEAN,
    INTEGER,
  } = app.Sequelize
  const cart = app.model.define('cart', {
    count: INTEGER,
    selected: BOOLEAN,
  }, {
    underscored: true,
  })
  cart.associate = function cartAssociate() {
    const { User, Cart, Present } = app.model
    Cart.belongsTo(Present)
    Cart.belongsTo(User)
  }
  return cart
}
