module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const depot = app.model.define('depot', {
    name: STRING,
    address: STRING,
    manage_phone: STRING,
  }, {
    underscored: true,
  })
  depot.associate = function (models) {
    // associations can be defined here
  }
  return depot
}
