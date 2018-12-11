

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('depotitems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    stockCount: {
      type: Sequelize.INTEGER,
    },
    saleCount: {
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING,
    },
    purchase_price: {
      type: Sequelize.DOUBLE,
    },
    supplier: {
      type: Sequelize.STRING,
    },
    bar_code: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
      defaultValue: 'unshelf',
    },
    depot_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'depots',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('depotitems'),
}
