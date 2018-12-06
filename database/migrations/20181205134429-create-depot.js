
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('depots', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    manage_phone: {
      type: Sequelize.STRING,
    },
    manager_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'emploees',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('depots'),
}
