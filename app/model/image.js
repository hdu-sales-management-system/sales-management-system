module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const image = app.model.define('image', {
    url: STRING,
  }, {
    underscored: true,
  })
  image.associate = function imageAssociate(models) {
    // associations can be defined here
    const { Image, Present } = app.model
    Image.belongsTo(Present)
  }
  return image
}
