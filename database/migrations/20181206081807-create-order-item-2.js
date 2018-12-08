

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orderitem2s', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.STRING,
    },
    sum_money: {
      type: Sequelize.DOUBLE,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    recived_date: {
      type: Sequelize.DATE,
    },
    dealer_order_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'dealerorders',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('orderitem2s'),
}
