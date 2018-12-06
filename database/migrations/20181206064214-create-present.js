
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('presents', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    off: {
      type: Sequelize.BOOLEAN,
    },
    offcost: {
      type: Sequelize.DOUBLE,
    },
    hot: {
      type: Sequelize.INTEGER,
    },
    count: {
      type: Sequelize.INTEGER,
    },
    decription: {
      type: Sequelize.TEXT,
    },
    starts: {
      type: Sequelize.INTEGER,
    },
    originl_price: {
      type: Sequelize.DOUBLE,
    },
    price: {
      type: Sequelize.DOUBLE,
    },
    cover: {
      type: Sequelize.STRING,
    },
    cateory: {
      type: Sequelize.STRING,
    },
    cateory_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'categories',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('presents'),
}