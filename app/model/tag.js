module.exports = (app) => {
  const {
    INTEGER,
    STRING,
  } = app.Sequelize
  const tag = app.model.define('tag', {
    name: STRING,
    value: STRING,
    hot: INTEGER,
  }, {
    underscored: true,
  })
  tag.associate = function tagAssociate(models) {
    const {
      Present,
      Tag,
    } = app.model
    Tag.belongsToMany(Present, {
      throngh: 'present_tag',
      as: 'present',
    })
    // associations can be defined here
  }
  return tag
}
