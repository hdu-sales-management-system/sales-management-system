
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('dealerorders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.STRING,
    },
    feedback: {
      type: Sequelize.STRING,
    },
    sum_momey: {
      type: Sequelize.DOUBLE,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    received_date: {
      type: Sequelize.DATE,
    },
    dealer_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'dealers',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('dealerorders'),
}
