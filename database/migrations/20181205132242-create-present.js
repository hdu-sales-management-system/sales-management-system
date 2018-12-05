'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('presents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      off: {
        type: Sequelize.BOOLEAN
      },
      offcost: {
        type: Sequelize.DOUBLE
      },
      hot: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },
      decription: {
        type: Sequelize.TEXT
      },
      starts: {
        type: Sequelize.INTEGER
      },
      originl_price: {
        type: Sequelize.DOUBLE
      },
      price: {
        type: Sequelize.DOUBLE
      },
      cover: {
        type: Sequelize.STRING
      },
      cateory: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('presents');
  }
};