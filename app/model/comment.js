module.exports = (app) => {
  const {
    INTEGER,
    TEXT,
  } = app.Sequelize
  const comment = app.model.define('comment', {
    content: TEXT,
    starts: INTEGER,
  }, {
    underscored: true,
  })
  comment.associate = function commentAssociate() {
    const { Comment, Present } = app.model
    Comment.hasMany(Present)
  }
  return comment
}
