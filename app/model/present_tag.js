module.exports = (app) => {
  const {
    INTEGER,
    STRING,
  } = app.Sequelize
  const presentTag = app.model.define('present_tag', {
    hot: INTEGER,
  }, {})
  presentTag.associate = function presentTagAssociate(models) {
    // associations can be defined here
    const {
      Tag,
      Present,
      PresentTag,
    } = app.model
    PresentTag.hasMany(Present)
    PresentTag.hasMany(Tag)
  }
  return presentTag
}
