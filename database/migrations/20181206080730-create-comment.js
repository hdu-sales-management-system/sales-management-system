
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.TEXT,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    stars: {
      type: Sequelize.INTEGER,
    },
    present_id: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      references: {
        model: 'presents',
        key: 'id',
      },
      allowNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('comments'),
}
