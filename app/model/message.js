module.exports = (app) => {
  const {
    DATE,
    TEXT,
    STRING,
    BOOLEAN,
  } = app.Sequelize;
  const message = app.model.define('message', {
    type: STRING,
    title: STRING,
    content: TEXT,
    readed: BOOLEAN,
    send_time: DATE,
  }, {
    underscored: true,
  });
  message.associate = function (models) {
    // associations can be defined here
  };
  return message;
};
