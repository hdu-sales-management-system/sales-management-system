'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dealer_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.STRING
      },
      sum_momey: {
        type: Sequelize.DOUBLE
      },
      start_date: {
        type: Sequelize.DATE
      },
      received_date: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dealer_orders');
  }
};