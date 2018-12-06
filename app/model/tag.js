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
  tag.associate = function tagAssociate() {
    const {
      Present,
      Tag,
      PresentTag,
    } = app.model
    Tag.belongsToMany(Present, {
      through: PresentTag,
      foreignKey: 'tag_id',
      as: 'Present',
    })
    // associations can be defined here
  }
  return tag
}
