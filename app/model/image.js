module.exports = (app) => {
  const {
    STRING,
  } = app.Sequelize
  const image = app.model.define('image', {
    url: STRING,
  }, {
    underscored: true,
  })
  image.associate = function (models) {
    // associations can be defined here
  }
  return image
}
