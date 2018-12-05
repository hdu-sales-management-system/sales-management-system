'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emploees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      e_no: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      entry_year: {
        type: Sequelize.DATE
      },
      resignation: {
        type: Sequelize.BOOLEAN
      },
      salary: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('emploees');
  }
};