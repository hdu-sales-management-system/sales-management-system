module.exports = (app) => {
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
    publish_date: DATE,
  }, {
    underscored: true,
  })
  article.associate = function articleAssociate() {
    const {
      Article, Emploee,
    } = app.model
    Article.belongsTo(Emploee, { as: 'Author' })
  }
  return article
}
