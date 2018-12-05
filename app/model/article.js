module.exports = function (app) {
   const {
     STRING,
     DATE,
     TEXT,
   } = app.Sequelize
  const article = app.model.define('article', {
    title: STRING,
    author: STRING,
    state: STRING,
    content: TEXT,
    publish_date: DATE
  }, {
    underscored: true,
  });
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};