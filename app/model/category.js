
module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const category = app.model.define('category', {
    name: STRING,
    value: STRING,
  }, {})
  category.associate = function categoryAssociate() {
    // associations can be defined here
    const {
      Cateory,
      Present,
    } = app.model
    
    Cateory.hasMany(Present)
  }
  return category
}
