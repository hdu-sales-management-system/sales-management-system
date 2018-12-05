module.exports = (app) => {
  const {
    DATE,
    DOUBLE,
    STRING,
    BOOLEAN,
  } = app.Sequelize;
  const emploee = app.model.define('emploee', {
    name: STRING,
    position: STRING,
    department: STRING,
    password: STRING,
    e_no: STRING,
    phone: STRING,
    gender: BOOLEAN,
    entry_year: DATE,
    resignation: BOOLEAN,
    salary: DOUBLE,
  }, {
    underscored: true,
  });
  emploee.associate = function (models) {
    // associations can be defined here
  };
  return emploee;
};
