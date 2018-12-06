module.exports = (app) => {
  const {
    BOOLEAN,
    INTEGER,
  } = app.Sequelize
  const cart = app.model.define('cart', {
    count: INTEGER,
    selected: BOOLEAN,
  }, {})
  cart.associate = function cartAssociate() {
    const { User, Cart, Present } = app.model
    Cart.hasMany(Present)
    Cart.hasMany(User)
  }
  return cart
}
