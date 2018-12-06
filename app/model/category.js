
module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const category = app.model.define('category', {
    name: STRING,
    value: STRING,
  }, {
    underscored: true,
  })
  category.associate = function categoryAssociate() {
    // associations can be defined here
    const {
      Category,
      Present,
    } = app.model

    Category.hasMany(Present)
  }
  return category
}
