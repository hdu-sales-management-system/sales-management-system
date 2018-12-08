
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
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'draft',
    },
    off: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    offcost: {
      type: Sequelize.DOUBLE,
      defaultValue: 0.00,
    },
    hot: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    description: {
      type: Sequelize.TEXT,
    },
    starts: {
      type: Sequelize.INTEGER,
      defaultValue: 5,
    },
    commentCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    originl_price: {
      type: Sequelize.DOUBLE,
      defaultValue: 0.00,
    },
    price: {
      type: Sequelize.DOUBLE,
      defaultValue: 0.00,
      allowNull: false,
    },
    cover: {
      type: Sequelize.STRING,
      defaultValue: 'http://dummyimage.com/400x400',
    },
    categorystr: {
      type: Sequelize.STRING,
      defaultValue: 'digital',
    },
    composite: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    saleCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    category_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'categories',
        key: 'id',
      },
      allowNull: true,
    },
    depotitem_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'depotitems',
        key: 'id',
      },
      allowNull: true,
    },
    comment_id: {
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
