module.exports = (app) => {
  const {
    STRING,
    TEXT,
  } = app.Sequelize
  const log = app.model.define('log', {
    title: STRING,
    body: TEXT,
    level: STRING,
  }, {})
  log.associate = function logAsscoiate() {
    const { Log, Emploee } = app.model
    Log.belongsTo(Emploee)
  }
  return log
}
