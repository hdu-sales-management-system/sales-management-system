module.exports = (app) => {
  const {
    STRING,
    DATE,
    INTEGER,
  } = app.Sequelize;
  const carouse = app.model.define('carouse', {
    name: STRING,
    url: STRING,
    start_day: DATE,
    end_day: DATE,
    priority: INTEGER,
  }, {
    underscored: true,
  });
  carouse.associate = function (models) {
    // associations can be defined here
  };
  return carouse;
};
