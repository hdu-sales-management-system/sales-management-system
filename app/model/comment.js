module.exports = (app) => {
  const {
    INTEGER,
    TEXT,
    STRING,
  } = app.Sequelize
  const comment = app.model.define('comment', {
    content: TEXT,
    stars: INTEGER,
    avatar: STRING,
    username: STRING,
  }, {
    underscored: true,
  })
  comment.associate = function commentAssociate() {
    const { Comment, Present, User } = app.model
    Comment.belongsTo(Present)
    Comment.belongsTo(User)
  }
  return comment
}
