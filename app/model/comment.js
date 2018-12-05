module.exports = (app) => {
  const {
    INTEGER,
    TEXT,
  } = app.Sequelize
  const comment = app.model.define('comment', {
    content: TEXT,
    starts: INTEGER
  }, {
    underscored: true,
  });
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};