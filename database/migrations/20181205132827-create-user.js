
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nickname: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    order_address: {
      type: Sequelize.STRING,
    },
    birthday: {
      type: Sequelize.DATE,
    },
    name: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.BOOLEAN,
    },
    phone: {
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
}
