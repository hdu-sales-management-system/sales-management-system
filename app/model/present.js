module.exports = (app) => {
  const {
    DOUBLE,
    INTEGER,
    TEXT,
    STRING,
    BOOLEAN,
  } = app.Sequelize
  const present = app.model.define('present', {
    name: STRING,
    title: STRING,
    status: STRING,
    off: BOOLEAN,
    offcost: DOUBLE,
    hot: INTEGER,
    count: INTEGER,
    decription: TEXT,
    starts: INTEGER,
    originl_price: DOUBLE,
    price: DOUBLE,
    cover: STRING,
    cateory: STRING,
  }, {
    underscored: true,
  })
  present.associate = function (models) {
    // associations can be defined here
  }
  return present
}
