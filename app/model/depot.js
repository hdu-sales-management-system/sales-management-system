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
  depot.associate = function depotAssociate() {
    const {
      DepotItem,
      Depot,
      Emploee,
    } = app.model
    Depot.hasMany(DepotItem)
    Depot.hasMany(Emploee, { as: 'Manager' })
  }
  return depot
}
