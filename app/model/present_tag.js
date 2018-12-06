module.exports = (app) => {
  const {
    INTEGER,
    STRING,
  } = app.Sequelize
  const presentTag = app.model.define('presentTag', {
    hot: INTEGER,
  }, {})
  presentTag.associate = function presentTagAssociate() {
    // associations can be defined here
    // PresentTag.hasMany(Present)
    // PresentTag.hasMany(Tag)
  }
  return presentTag
}
