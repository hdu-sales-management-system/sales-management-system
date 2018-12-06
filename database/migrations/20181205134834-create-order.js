
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
    sum_momey: {
      type: Sequelize.DOUBLE,
    },
    feedback: {
      type: Sequelize.STRING,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    received_date: {
      type: Sequelize.DATE,
    },
    user_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('orders'),
}
