module.exports = (app) => {
  const {
    STRING,
    INTEGER,
    DOUBLE,
  } = app.Sequelize
  const depotItem = app.model.define('depotItem', {
    name: STRING,
    stockCount: INTEGER,
    saleCount: INTEGER,
    location: STRING,
    purchase_price: DOUBLE,
    supplier: STRING,
    bar_code: STRING,
    state: STRING, // onshelf/unshelf
  }, {})
  depotItem.associate = function depotItemAssociate() {
    // associations can be defined here
    const {
      DepotItem,
      Depot,
      Present,
    } = app.model
    DepotItem.belongsTo(Depot)
    DepotItem.hasOne(Present)
  }
  return depotItem
}
