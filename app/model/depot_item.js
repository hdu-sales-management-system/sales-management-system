module.exports = (app) => {
  const {
    STRING,
    INTEGER,
    DOUBLE,
  } = app.Sequelize
  const depotItem = app.model.define('depot_item', {
    name: STRING,
    count: INTEGER,
    location: STRING,
    purchase_price: DOUBLE,
    supplier: STRING,
    bar_code: STRING,
  }, {})
  depotItem.associate = function depotItemAssociate() {
    // associations can be defined here
    const {
      DepotItem,
      Depot,
    } = app.model
    DepotItem.belongsTo(Depot)
  }
  return depotItem
}
