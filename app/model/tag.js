module.exports = (app) => {
  const {
    INTEGER,
    STRING,
  } = app.Sequelize;
  const tag = app.model.define('tag', {
    name: STRING,
    value: STRING,
    hot: INTEGER,
  }, {
    underscored: true,
  });
  tag.associate = function (models) {
    // associations can be defined here
  };
  return tag;
};
