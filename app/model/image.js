module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const image = app.model.define('image', {
    url: STRING,
    type: STRING, // carourse/detail/cover
  }, {
    underscored: true,
  })
  image.associate = function imageAssociate() {
    const { Image, Present } = app.model
    Image.belongsTo(Present)
  }
  return image
}
